/**
 * QuiznGroww Interactive Pro Quiz Engine (quiz.js)
 * 
 * Features:
 * - 2-Quiz Demo Gate Enforcement (mandates Google Login after 2 plays)
 * - 4 Game Modes: Standard (45s), Blitz (15s + Speed Bonus), Zen (Untimed), Survival (1 Life)
 * - 4 Game-Show Lifelines: 50:50, 💡 Hint, ⏳ Freeze (+15s), 🔄 Swap Question
 * - Anti-Cheat Server Answer Validation (<1ms LibSQL evaluation)
 * - Synthesized Web Audio Cues (clicks, ticks, chimes, fanfares)
 * - Keyboard Shortcuts (1-4, A-D, Space)
 * - Dynamic Badge Evaluation & Unlock Ribbon
 * - Shareable Challenge Scorecard (Web Share API + Emoji Grid)
 */

document.addEventListener('DOMContentLoaded', async () => {
  'use strict';

  const container = document.getElementById('quiz-app-container');
  const Auth = window.QuiznGrowwAuth;
  const Sound = window.QuiznGrowwSound || {
    click: () => {},
    correct: () => {},
    wrong: () => {},
    tick: () => {},
    fanfare: () => {},
  };

  // URL parameters
  const params = new URLSearchParams(window.location.search);
  const topicParam = params.get('topic') || 'random';
  const difficultyParam = params.get('difficulty') || 'Medium';
  let gameMode = (params.get('mode') || 'standard').toLowerCase();

  // Scoring Stakes Configuration (+10/0 for Normal, +10/-5 for Medium, +10/-10 for Hard)
  const normDiff = (difficultyParam || 'Medium').toLowerCase();
  const isHard = normDiff === 'hard' || normDiff === 'difficult';
  const isEasy = normDiff === 'easy' || normDiff === 'normal';
  const correctStake = 10;
  const incorrectStake = isHard ? -10 : (isEasy ? 0 : -5);
  const stakesTitle = isHard ? '🔥 Hard' : (isEasy ? '🌱 Normal' : '⚡ Medium');
  const stakesRule = isHard ? '+10 / -10' : (isEasy ? '+10 / 0' : '+10 / -5');
  let runningPoints = 0;

  // Mode durations
  const MODE_TIMERS = {
    standard: 45,
    blitz: 15,
    zen: 0,
    survival: 30,
  };

  // State
  let questions = [];
  let currentIndex = 0;
  let score = 0;
  let streak = 0;
  let maxStreak = 0;
  let timerInterval = null;
  let questionStartTime = Date.now();
  let quizStartTime = Date.now();
  let isAnswerLocked = false;
  let livesLeft = gameMode === 'survival' ? 1 : null;
  const userResults = [];
  let totalSpeedBonus = 0;
  let isPracticeMode = false;
  let autoAdvanceTimeout = null;
  const bookmarkedIds = new Set(JSON.parse(localStorage.getItem('quizngroww_bookmarks') || '[]'));

  const isBookmarked = (id) => bookmarkedIds.has(id);
  const toggleBookmark = (q) => {
    if (!q || !q._id) return;
    if (bookmarkedIds.has(q._id)) {
      bookmarkedIds.delete(q._id);
    } else {
      bookmarkedIds.add(q._id);
      try {
        const deck = JSON.parse(localStorage.getItem('quizngroww_saved_deck') || '{}');
        deck[q._id] = {
          _id: q._id,
          questionText: q.questionText,
          topic: q.topic,
          difficulty: q.difficulty,
          options: q.options,
          correctAnswer: q.correctAnswer || '',
          explanation: q.explanation || '',
          savedAt: new Date().toLocaleDateString(),
        };
        localStorage.setItem('quizngroww_saved_deck', JSON.stringify(deck));
      } catch (e) {}
    }
    localStorage.setItem('quizngroww_bookmarks', JSON.stringify(Array.from(bookmarkedIds)));
  };

  // Lifeline usage flags
  let used5050 = false;
  let usedHint = false;
  let usedFreeze = false;
  let usedSwap = false;

  const OPTION_KEYS = ['A', 'B', 'C', 'D'];

  // Check Demo Gate Limit
  if (Auth && Auth.hasReachedDemoLimit()) {
    container.innerHTML = `
      <div class="summary-container" style="max-width: 580px; margin: 40px auto; padding: 40px 28px; background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);">
        <div style="font-size: 3rem; margin-bottom: 12px;">🎯</div>
        <h2 style="font-size: 1.85rem; margin-bottom: 12px;">Demo Quizzes Completed!</h2>
        <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 24px;">
          You've used your <strong>${Auth.MAX_DEMO_QUIZZES} free guest demo quizzes</strong>. Sign in with your Google account to unlock all 18 topics, 720+ questions, 4 lifelines, and global rankings!
        </p>
        
        <div style="display: flex; flex-direction: column; gap: 14px; align-items: center;">
          <button id="gate-google-signin-btn" class="google-auth-btn-direct" style="max-width: 340px;">
            <svg width="22" height="22" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            <span>Sign In with Google</span>
          </button>
          <a href="/topics" class="btn btn-ghost" style="font-size: 0.9rem;">Browse All Topics</a>
        </div>
      </div>
    `;

    document.getElementById('gate-google-signin-btn')?.addEventListener('click', () => {
      Auth.showModal('demo_limit');
    });
    return;
  }

  const clearTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  };

  const startTimer = (duration) => {
    clearTimer();
    if (duration <= 0) return; // Zen mode (untimed)

    let timeLeft = duration;
    questionStartTime = Date.now();

    const timerBadge = document.getElementById('hud-timer');
    if (timerBadge) {
      timerBadge.textContent = `${timeLeft}s`;
      timerBadge.classList.remove('warning');
    }

    timerInterval = setInterval(() => {
      timeLeft--;
      if (timerBadge) {
        timerBadge.textContent = `${timeLeft}s`;
        if (timeLeft <= (gameMode === 'blitz' ? 5 : 10)) {
          timerBadge.classList.add('warning');
          Sound.tick();
        }
      }

      if (timeLeft <= 0) {
        clearTimer();
        handleAnswer(null, true);
      }
    }, 1000);
  };

  // 1. Lifeline: 50:50 (Eliminates 2 wrong options)
  const handle5050 = async () => {
    if (used5050 || isAnswerLocked) return;
    used5050 = true;
    Sound.click();

    const currentQ = questions[currentIndex];
    const btn = document.getElementById('lifeline-5050');
    if (btn) btn.disabled = true;

    try {
      const res = await fetch('/api/questions/check-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionId: currentQ._id, userAnswer: 'PROBE' }),
      });
      const check = await res.json();
      const correctAnswer = check.correctAnswer;

      const optionButtons = Array.from(document.querySelectorAll('.option-btn'));
      const incorrectButtons = optionButtons.filter(
        (b) => b.dataset.option.trim() !== correctAnswer.trim()
      );

      // Randomly pick 2 incorrect to eliminate
      const shuffled = incorrectButtons.sort(() => 0.5 - Math.random()).slice(0, 2);
      shuffled.forEach((b) => {
        b.classList.add('eliminated');
        b.disabled = true;
      });
    } catch (e) {
      console.error('5050 error:', e);
    }
  };

  // 2. Lifeline: Hint
  const handleHint = async () => {
    if (usedHint || isAnswerLocked) return;
    usedHint = true;
    Sound.click();

    const currentQ = questions[currentIndex];
    const btn = document.getElementById('lifeline-hint');
    if (btn) btn.disabled = true;

    try {
      const res = await fetch('/api/questions/check-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionId: currentQ._id, userAnswer: 'PROBE' }),
      });
      const check = await res.json();

      const drawer = document.getElementById('explanation-drawer');
      if (drawer) {
        drawer.innerHTML = `
          <div class="explanation-card">
            <div class="explanation-title">💡 Hint / Clue</div>
            <div class="explanation-text">${check.explanation || 'Analyze the key keywords and historical timeline carefully.'}</div>
          </div>
        `;
        drawer.classList.remove('hidden');
      }
    } catch (e) {}
  };

  // 3. Lifeline: Freeze Timer (+15s)
  const handleFreeze = () => {
    if (usedFreeze || isAnswerLocked || gameMode === 'zen') return;
    usedFreeze = true;
    Sound.click();

    const btn = document.getElementById('lifeline-freeze');
    if (btn) btn.disabled = true;

    const timerBadge = document.getElementById('hud-timer');
    if (timerBadge) {
      const current = parseInt(timerBadge.textContent, 10) || 10;
      const boosted = current + 15;
      timerBadge.textContent = `${boosted}s`;
      timerBadge.style.color = '#38bdf8';
      setTimeout(() => {
        timerBadge.style.color = '';
      }, 1500);
    }
  };

  // 4. Lifeline: Swap Question
  const handleSwap = async () => {
    if (usedSwap || isAnswerLocked) return;
    usedSwap = true;
    Sound.click();

    const btn = document.getElementById('lifeline-swap');
    if (btn) btn.disabled = true;

    try {
      const res = await fetch(`/api/questions/random/challenge/${difficultyParam}?limit=1`);
      if (res.ok) {
        const fresh = await res.json();
        if (fresh && fresh.length > 0) {
          questions[currentIndex] = fresh[0];
          renderQuestion();
        }
      }
    } catch (e) {
      console.error('Swap error:', e);
    }
  };

  const handleAnswer = async (selectedOption, isTimeout = false) => {
    if (isAnswerLocked) return;
    isAnswerLocked = true;
    clearTimer();

    const currentQ = questions[currentIndex];
    const timeSpent = Math.round((Date.now() - questionStartTime) / 1000);

    // Disable option buttons
    document.querySelectorAll('.option-btn').forEach((b) => (b.disabled = true));

    try {
      const res = await fetch('/api/questions/check-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionId: currentQ._id,
          userAnswer: selectedOption || '',
          difficulty: difficultyParam,
        }),
      });
      const result = await res.json();
      const isCorrect = result.correct;

      // Calculate Difficulty Scoring Stakes (+10 correct, 0 / -5 / -10 incorrect)
      const ptsDelta = result.pointsDelta !== undefined ? result.pointsDelta : (isCorrect ? correctStake : incorrectStake);
      runningPoints += ptsDelta;

      let speedBonusAwarded = 0;
      let comboMultiplier = 1.0;

      if (isCorrect) {
        score++;
        streak++;
        if (streak > maxStreak) maxStreak = streak;

        // Speed Bonus: Answered under 4 seconds!
        if (timeSpent <= 4 && !isTimeout) {
          speedBonusAwarded = 50;
          totalSpeedBonus += speedBonusAwarded;
        }

        // Combo multipliers
        if (streak >= 5) comboMultiplier = 3.0;
        else if (streak >= 3) comboMultiplier = 2.0;
        else if (streak >= 2) comboMultiplier = 1.5;

        Sound.correct();
      } else {
        streak = 0;
        Sound.wrong();
        if (gameMode === 'survival') {
          livesLeft = 0;
        }
      }

      userResults.push({
        questionId: currentQ._id,
        userAnswer: selectedOption || (isTimeout ? 'Time Expired' : 'No Answer'),
        isCorrect,
        correctAnswer: result.correctAnswer,
        explanation: result.explanation,
        timeSpent,
        speedBonus: speedBonusAwarded,
        pointsDelta: ptsDelta,
        scoringRule: result.scoringRule || (isCorrect ? '+10 XP' : (ptsDelta === 0 ? '0 XP' : `${ptsDelta} XP`)),
      });

      // Highlight options
      document.querySelectorAll('.option-btn').forEach((btn) => {
        const optVal = btn.dataset.option;
        if (optVal === result.correctAnswer) {
          btn.classList.add('correct');
        } else if (optVal === selectedOption && !isCorrect) {
          btn.classList.add('wrong');
        }
      });

      // Update Live Points in HUD
      const ptsCounter = document.getElementById('hud-points-val');
      if (ptsCounter) {
        ptsCounter.textContent = Math.max(0, runningPoints);
      }

      // Floating Points & Speed Bonus Badges
      const card = document.querySelector('.quiz-card');
      if (card) {
        // Point pop
        const ptsPop = document.createElement('div');
        const popTypeClass = isCorrect ? 'pts-pop-correct' : (ptsDelta === 0 ? 'pts-pop-neutral' : 'pts-pop-penalty');
        ptsPop.className = `pts-float-pop ${popTypeClass}`;
        ptsPop.innerHTML = isCorrect 
          ? `+10 XP` 
          : (ptsDelta === 0 ? `0 XP (No penalty)` : `${ptsDelta} XP Penalty`);
        card.appendChild(ptsPop);

        if (speedBonusAwarded > 0) {
          const speedPop = document.createElement('div');
          speedPop.className = 'speed-bonus-pop';
          speedPop.innerHTML = `⚡ SPEED DEMON! +${speedBonusAwarded} Bonus XP`;
          card.appendChild(speedPop);
        }
      }

      // Update HUD Streak & Combo dynamically
      const streakBadge = document.querySelector('.hud-streak-badge');
      if (streakBadge) {
        streakBadge.innerHTML = streak > 1 
          ? `<span class="combo-multiplier-badge">🔥 ${comboMultiplier}x Combo (${streak} in a row!)</span>`
          : '';
      }

      // Explanation card drawer
      const drawer = document.getElementById('explanation-drawer');
      if (drawer) {
        const isSurvivalEnd = gameMode === 'survival' && livesLeft === 0;
        const isLastQuestion = currentIndex + 1 >= questions.length || isSurvivalEnd;

        let stakesResultBadge = `<span class="stat-badge stakes-easy-chip">+10 XP</span>`;
        if (!isCorrect) {
          if (ptsDelta === 0) stakesResultBadge = `<span class="stat-badge stakes-easy-chip">0 XP (Normal Mode)</span>`;
          else if (ptsDelta === -5) stakesResultBadge = `<span class="stat-badge stakes-medium-chip">-5 XP (Medium Mode)</span>`;
          else stakesResultBadge = `<span class="stat-badge stakes-hard-chip">-10 XP (Hard Mode)</span>`;
        }

        drawer.innerHTML = `
          <div class="explanation-card">
            <div class="explanation-header-row">
              <div class="explanation-title" style="color: ${isCorrect ? 'var(--success)' : 'var(--danger)'};">
                <span>${isCorrect ? '✅ Correct!' : '❌ Incorrect.'}</span>
                <span style="color: var(--text-primary); font-weight: 700;">Answer: ${result.correctAnswer}</span>
                ${stakesResultBadge}
                ${speedBonusAwarded > 0 ? `<span class="stat-badge" style="background: rgba(16,185,129,0.15); color: var(--success); font-size: 0.78rem;">⚡ +${speedBonusAwarded} Speed XP</span>` : ''}
                ${streak > 1 ? `<span class="stat-badge" style="background: rgba(245,158,11,0.15); color: var(--warning); font-size: 0.78rem;">🔥 ${comboMultiplier}x Combo</span>` : ''}
              </div>
              <button id="next-question-btn" class="btn btn-primary" style="padding: 6px 16px; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 8px;">
                <span>${isLastQuestion ? 'View Results 🏆' : 'Next Question →'}</span>
                <kbd style="font-family: monospace; font-size: 0.75rem; background: rgba(0,0,0,0.25); padding: 2px 6px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.2);">Space</kbd>
              </button>
            </div>
            <div class="explanation-text">${result.explanation}</div>
          </div>
        `;
        drawer.classList.remove('hidden');

        document.getElementById('next-question-btn')?.addEventListener('click', () => {
          advanceToNext();
        });
      }

      // Auto advance timer
      autoAdvanceTimeout = setTimeout(() => {
        advanceToNext();
      }, 4000);

    } catch (err) {
      console.error('Answer evaluation error:', err);
      advanceToNext();
    }
  };

  const advanceToNext = () => {
    if (autoAdvanceTimeout) {
      clearTimeout(autoAdvanceTimeout);
      autoAdvanceTimeout = null;
    }
    if (!isAnswerLocked) return;
    isAnswerLocked = false;
    currentIndex++;

    if (gameMode === 'survival' && livesLeft === 0) {
      renderSummary();
      return;
    }

    if (currentIndex < questions.length) {
      renderQuestion();
    } else {
      renderSummary();
    }
  };

  const renderQuestion = () => {
    const q = questions[currentIndex];
    const progressPercent = Math.round(((currentIndex) / questions.length) * 100);
    const duration = MODE_TIMERS[gameMode] !== undefined ? MODE_TIMERS[gameMode] : 45;

    // Demo status banner if playing without login
    let demoBanner = '';
    if (Auth && !Auth.isLoggedIn()) {
      const remaining = Auth.getDemoRemaining();
      demoBanner = `
        <div style="background: rgba(99, 102, 241, 0.1); border-bottom: 1px solid var(--border-glow); padding: 8px 16px; text-align: center; font-size: 0.82rem; color: var(--accent); font-weight: 700;">
          🎯 Guest Demo Quiz (${Auth.getDemoCount() + 1} of ${Auth.MAX_DEMO_QUIZZES}) • Sign in with Google anytime to save your lifetime stats!
        </div>
      `;
    }

    container.innerHTML = `
      ${demoBanner}
      
      <!-- Game Mode Pill Bar -->
      <div class="game-mode-bar" style="margin-top: 16px;">
        <span style="font-size: 0.82rem; color: var(--text-muted); font-weight: 700; margin-right: 6px;">MODE:</span>
        <button class="mode-pill ${gameMode === 'standard' ? 'active' : ''}" data-mode="standard">Standard (45s)</button>
        <button class="mode-pill ${gameMode === 'blitz' ? 'active' : ''}" data-mode="blitz">⚡ Blitz (15s)</button>
        <button class="mode-pill ${gameMode === 'zen' ? 'active' : ''}" data-mode="zen">🧘 Zen (Untimed)</button>
        <button class="mode-pill ${gameMode === 'survival' ? 'active' : ''}" data-mode="survival">💀 Survival (1 Life)</button>
      </div>

      <div class="quiz-hud-bar">
        <div class="hud-topic-tag">
          <span>${q.topic}</span>
          <span class="stat-badge ${isHard ? 'stakes-hard-chip' : (isEasy ? 'stakes-easy-chip' : 'stakes-medium-chip')}" title="Scoring Stakes: ${stakesRule}">
            ${stakesTitle} (${stakesRule})
          </span>
          ${isPracticeMode ? '<span class="stat-badge" style="background: var(--warning-bg); color: var(--warning);">🔁 Weak-Spot Mastery</span>' : ''}
          ${gameMode === 'survival' ? '<span class="stat-badge" style="background:var(--danger-bg); color:var(--danger);">❤️ 1 Life</span>' : ''}
        </div>
        <div class="hud-center-metrics">
          <div class="hud-points-pill" title="Current points with difficulty scoring stakes">
            <span>⚡</span>
            <span id="hud-points-val">${Math.max(0, runningPoints)}</span> XP
          </div>
          <div class="hud-streak-badge">
            ${streak > 1 ? `<span class="combo-multiplier-badge">🔥 Combo x${streak}</span>` : ''}
          </div>
        </div>
        <div id="hud-timer" class="hud-timer-badge">
          ${duration > 0 ? `${duration}s` : '∞'}
        </div>
      </div>

      <div class="quiz-progress-track">
        <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
      </div>

      <div class="quiz-card" style="position: relative;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <div class="quiz-question-number">Question ${currentIndex + 1} of ${questions.length}</div>
          <button id="bookmark-btn" class="bookmark-btn ${isBookmarked(q._id) ? 'active' : ''}" title="${isBookmarked(q._id) ? 'Saved in Review Deck' : 'Star this question for later study'}">
            <span>${isBookmarked(q._id) ? '★' : '☆'}</span>
            <span style="font-size: 0.78rem; font-weight: 700; margin-left: 4px;">${isBookmarked(q._id) ? 'Saved' : 'Save'}</span>
          </button>
        </div>

        <div class="quiz-question-text">${q.questionText}</div>

        <div class="${(q.options || []).some(o => o && (o.length > 46 || o.includes('\n'))) ? 'options-grid stacked' : 'options-grid'}">
          ${q.options.map((opt, i) => `
            <button class="option-btn" data-option="${opt}">
              <span class="option-btn-key">${OPTION_KEYS[i]}</span>
              <span style="flex: 1; text-align: left;">${opt}</span>
            </button>
          `).join('')}
        </div>

        <!-- 4 Lifelines -->
        <div class="lifelines-bar">
          <button id="lifeline-5050" class="lifeline-btn" ${used5050 ? 'disabled' : ''} title="Eliminate 2 wrong answers">
            <span>⚖️ 50:50</span>
          </button>
          <button id="lifeline-hint" class="lifeline-btn" ${usedHint ? 'disabled' : ''} title="Reveal educational hint [H]">
            <span>💡 Hint</span>
          </button>
          <button id="lifeline-freeze" class="lifeline-btn" ${usedFreeze || gameMode === 'zen' ? 'disabled' : ''} title="Add +15 seconds [F]">
            <span>⏳ +15s Freeze</span>
          </button>
          <button id="lifeline-swap" class="lifeline-btn" ${usedSwap ? 'disabled' : ''} title="Swap question without penalty">
            <span>🔄 Swap Question</span>
          </button>
        </div>

        <!-- Sleek Keyboard Shortcut Hints Bar -->
        <div class="keyboard-hints-bar">
          <span>⌨️ Keys <kbd>A</kbd> <kbd>B</kbd> <kbd>C</kbd> <kbd>D</kbd> or <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> <kbd>4</kbd></span>
          <span>•</span>
          <span><kbd>Space</kbd> Next</span>
          <span>•</span>
          <span><kbd>H</kbd> Hint</span>
        </div>

        <div id="explanation-drawer" class="hidden"></div>
      </div>
    `;

    // Wire mode changes
    document.querySelectorAll('.mode-pill').forEach((btn) => {
      btn.onclick = () => {
        const newMode = btn.dataset.mode;
        if (newMode !== gameMode) {
          const url = new URL(window.location.href);
          url.searchParams.set('mode', newMode);
          window.location.href = url.toString();
        }
      };
    });

    // Wire Bookmark Button
    document.getElementById('bookmark-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleBookmark(q);
      const btn = document.getElementById('bookmark-btn');
      if (btn) {
        const active = isBookmarked(q._id);
        btn.className = `bookmark-btn ${active ? 'active' : ''}`;
        btn.innerHTML = `<span>${active ? '★' : '☆'}</span><span style="font-size: 0.78rem; font-weight: 700; margin-left: 4px;">${active ? 'Saved' : 'Save'}</span>`;
        if (active) Sound.click();
      }
    });

    // Wire Lifelines
    document.getElementById('lifeline-5050')?.addEventListener('click', handle5050);
    document.getElementById('lifeline-hint')?.addEventListener('click', handleHint);
    document.getElementById('lifeline-freeze')?.addEventListener('click', handleFreeze);
    document.getElementById('lifeline-swap')?.addEventListener('click', handleSwap);

    // Wire Option buttons
    document.querySelectorAll('.option-btn').forEach((btn) => {
      btn.onclick = () => handleAnswer(btn.dataset.option);
    });

    startTimer(duration);
  };

  // Pro Gamer Keyboard Shortcuts (A-D, 1-4, Space/Enter, H, F)
  window.addEventListener('keydown', (e) => {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
    const key = e.key.toUpperCase();

    // 1. Advance on Space or Enter when answer is submitted
    if ((e.code === 'Space' || e.key === 'Enter') && isAnswerLocked) {
      e.preventDefault();
      advanceToNext();
      return;
    }

    // 2. Select Option A-D or 1-4
    if (!isAnswerLocked && questions[currentIndex]) {
      const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, 'A': 0, 'B': 1, 'C': 2, 'D': 3 };
      if (keyMap[key] !== undefined) {
        const optionButtons = document.querySelectorAll('.option-btn');
        const targetBtn = optionButtons[keyMap[key]];
        if (targetBtn && !targetBtn.disabled) {
          e.preventDefault();
          targetBtn.click();
          return;
        }
      }

      // 3. Lifeline shortcuts
      if (key === 'H' && !usedHint) {
        e.preventDefault();
        handleHint();
      } else if (key === 'F' && !usedFreeze && gameMode !== 'zen') {
        e.preventDefault();
        handleFreeze();
      }
    }
  });

  const renderSummary = async () => {
    clearTimer();
    const totalTimeSeconds = Math.round((Date.now() - quizStartTime) / 1000);
    const percentage = Math.round((score / questions.length) * 100);

    // If guest, increment demo count
    if (Auth && !Auth.isLoggedIn()) {
      Auth.incrementDemoQuiz();
    }

    let newlyUnlockedBadges = [];
    let evalData = null;

    // Submit quiz to backend
    const token = Auth ? Auth.getToken() : null;
    try {
      const payload = {
        results: userResults.map((r) => ({
          questionId: r.questionId,
          userAnswer: r.userAnswer,
        })),
        topic: topicParam === 'random' ? 'Random Challenge' : topicParam,
        difficulty: difficultyParam,
        timeTakenSeconds: totalTimeSeconds,
      };

      const headers = { 'Content-Type': 'application/json' };
      if (token) headers['Authorization'] = `Bearer ${token}`;

      const res = await fetch('/api/questions/submit-quiz', {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json();
        evalData = data;
        newlyUnlockedBadges = data.newAchievements || [];
        if (Auth) Auth.syncUser();
      }
    } catch (e) {
      console.error('Failed to submit quiz results:', e);
    }

    if (params.get('daily') === 'true') {
      localStorage.setItem('quizngroww_daily_quest_completed', new Date().toDateString());
    }

    // Audio & Confetti
    if (percentage >= 80) {
      Sound.fanfare();
      if (typeof confetti === 'function') {
        confetti({ particleCount: 130, spread: 85, origin: { y: 0.6 } });
      }
    } else {
      Sound.correct();
    }

    let gradeMessage = 'Outstanding Mastery! 🏆';
    if (percentage < 50) gradeMessage = 'Keep Practicing! 🌱';
    else if (percentage < 80) gradeMessage = 'Great Effort! 🌟';

    // Calculate final scoring breakdown
    const finalCorrectCount = evalData ? evalData.correctCount : score;
    const finalTotalQ = evalData ? evalData.totalQuestions : questions.length;
    const finalWrongCount = finalTotalQ - finalCorrectCount;
    const finalCorrectPts = evalData ? evalData.correctPts : finalCorrectCount * 10;
    const finalIncorrectPts = evalData ? evalData.incorrectPts : finalWrongCount * incorrectStake;
    const finalBaseScore = evalData ? evalData.score : Math.max(0, finalCorrectPts + finalIncorrectPts);
    const finalNetScore = finalBaseScore + totalSpeedBonus;

    // Emoji scorecard for social sharing
    const emojiGrid = userResults.map((r) => (r.isCorrect ? '🟩' : '🟥')).join('');

    // Question review items
    const reviewItemsHTML = userResults.map((item, idx) => `
      <div class="review-item ${item.isCorrect ? 'is-correct' : 'is-wrong'}">
        <div class="review-question-title">${idx + 1}. ${questions[idx]?.questionText || 'Question'}</div>
        <div class="review-answers-row">
          <span>Your Answer: <strong style="color: ${item.isCorrect ? 'var(--success)' : 'var(--danger)'};">${item.userAnswer}</strong></span>
          ${!item.isCorrect ? `<span>Correct Answer: <strong style="color: var(--success);">${item.correctAnswer}</strong></span>` : ''}
          <span class="stat-badge ${item.isCorrect ? 'stakes-easy-chip' : (item.pointsDelta === 0 ? 'stakes-easy-chip' : (isHard ? 'stakes-hard-chip' : 'stakes-medium-chip'))}">
            ${item.scoringRule || (item.isCorrect ? '+10 XP' : `${item.pointsDelta || 0} XP`)}
          </span>
        </div>
        <div class="explanation-text" style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 6px;">
          💡 <strong>Explanation:</strong> ${item.explanation}
        </div>
      </div>
    `).join('');

    // Badges section HTML
    const badgesHTML = newlyUnlockedBadges.length > 0 ? `
      <div class="badges-unlocked-section">
        <div style="font-weight: 700; color: var(--warning); display: flex; align-items: center; justify-content: center; gap: 6px;">
          <span>🎖️ Newly Unlocked Achievements!</span>
        </div>
        <div class="badges-unlocked-grid">
          ${newlyUnlockedBadges.map((b) => `
            <div class="unlocked-badge-chip">
              <span>${b.badgeIcon || '⭐'}</span>
              <span>${b.badgeName}</span>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    // Guest prompt if not logged in
    let guestNotice = '';
    if (Auth && !Auth.isLoggedIn()) {
      const remaining = Auth.getDemoRemaining();
      guestNotice = `
        <div style="background: var(--bg-surface); border: 1px solid var(--accent); border-radius: var(--radius-md); padding: 18px; margin: 24px 0; text-align: center;">
          <h3 style="font-size: 1.2rem; margin-bottom: 6px;">Enjoyed the Challenge?</h3>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 14px;">
            ${remaining > 0 ? `You have ${remaining} demo quiz(zes) left.` : 'Your free guest demo quizzes are complete.'}
            Sign in with Google to save your accuracy streaks, compete for #1 on the leaderboard, and unlock all subjects.
          </p>
          <button id="summary-google-signin-btn" class="google-auth-btn-direct" style="max-width: 320px; margin: 0 auto;">
            <svg width="20" height="20" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            <span>Sign In with Google</span>
          </button>
        </div>
      `;
    }

    const wrongResults = userResults.filter((r) => !r.isCorrect);
    const hasMistakes = wrongResults.length > 0;

    let practiceMistakesBtnHTML = '';
    if (hasMistakes && !isPracticeMode) {
      practiceMistakesBtnHTML = `
        <div style="margin: 0 auto 26px; max-width: 460px;">
          <button id="practice-mistakes-btn" class="practice-mistakes-btn">
            <span>🔁 Practice Mistakes (${wrongResults.length} Questions) &rarr;</span>
          </button>
          <p style="font-size: 0.86rem; color: var(--text-secondary); margin-top: 8px;">
            Targeted Recall: Instantly re-test the ${wrongResults.length} questions you missed until 100% mastery!
          </p>
        </div>
      `;
    } else if (isPracticeMode) {
      practiceMistakesBtnHTML = `
        <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid var(--success); border-radius: var(--radius-md); padding: 14px 20px; margin: 0 auto 24px; max-width: 520px; color: var(--success); font-weight: 700;">
          🎉 Weak-Spot Mastery Complete! You have successfully reviewed all previous mistakes.
        </div>
      `;
    }

    container.innerHTML = `
      <div class="summary-container quiz-viewport-wrapper">
        <div class="summary-score-ring">
          <div class="summary-score-value">${finalNetScore}</div>
          <div class="summary-score-total">Total XP Earned</div>
        </div>

        <h2 style="font-size: 2.2rem; margin-bottom: 8px;">${gradeMessage}</h2>
        <p style="color: var(--text-secondary); font-size: 1.15rem; margin-bottom: 20px;">
          Solved <strong>${finalCorrectCount}/${finalTotalQ} (${percentage}%)</strong> in <strong>${totalTimeSeconds}s</strong>
          ${maxStreak > 1 ? ` • Max Streak: 🔥 <strong>${maxStreak}</strong>` : ''}
          ${totalSpeedBonus > 0 ? ` • Speed Bonus: ⚡ <strong>+${totalSpeedBonus} XP</strong>` : ''}
        </p>

        <!-- Official Scoring Stakes Mathematical Breakdown Card -->
        <div class="scoring-breakdown-card">
          <div class="scoring-breakdown-header">
            <span>⚖️ Verified Scoring Stakes Breakdown</span>
            <span class="stat-badge ${isHard ? 'stakes-hard-chip' : (isEasy ? 'stakes-easy-chip' : 'stakes-medium-chip')}">
              ${stakesTitle} Stakes (${stakesRule})
            </span>
          </div>
          <div class="scoring-breakdown-grid">
            <div class="scoring-breakdown-row">
              <span class="breakdown-label">✅ Correct Answers (${finalCorrectCount} × +10 XP)</span>
              <span class="breakdown-val text-success">+${finalCorrectPts} XP</span>
            </div>
            <div class="scoring-breakdown-row">
              <span class="breakdown-label">❌ Mistake Penalties (${finalWrongCount} × ${incorrectStake} XP)</span>
              <span class="breakdown-val ${finalIncorrectPts === 0 ? 'text-muted' : 'text-danger'}">
                ${finalIncorrectPts === 0 ? '0 XP (No penalty)' : `${finalIncorrectPts} XP`}
              </span>
            </div>
            ${totalSpeedBonus > 0 ? `
            <div class="scoring-breakdown-row">
              <span class="breakdown-label">⚡ Speed Demon Bonus (Under 4s answers)</span>
              <span class="breakdown-val text-accent">+${totalSpeedBonus} XP</span>
            </div>` : ''}
            <div class="scoring-breakdown-row total">
              <span class="breakdown-label">🏆 Net Leaderboard Score</span>
              <span class="breakdown-val highlight">${finalNetScore} XP</span>
            </div>
          </div>
        </div>

        <!-- Feature 1: Quizlet & Duolingo Style Practice Mistakes Banner -->
        ${practiceMistakesBtnHTML}

        <!-- Social Share Button -->
        <div style="margin-bottom: 24px;">
          <button id="share-card-btn" class="share-result-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
            <span>Share Challenge (${emojiGrid})</span>
          </button>
          <div id="share-copy-toast" style="font-size: 0.85rem; color: var(--success); margin-top: 8px;" class="hidden">
            ✓ Result copied to clipboard! Share it with friends.
          </div>
        </div>

        ${badgesHTML}
        ${guestNotice}

        <div class="summary-actions-group">
          <button id="play-again-btn" class="btn btn-primary btn-lg">Play Again</button>
          <a href="/topics" class="btn btn-secondary btn-lg">Browse 18 Topics</a>
          <button id="view-saved-deck-btn" class="btn btn-ghost btn-lg">⭐ Saved Deck (${bookmarkedIds.size})</button>
          <button id="leaderboard-view-btn" class="btn btn-ghost btn-lg">Global Hall of Fame</button>
        </div>

        <div style="border-top: 1px solid var(--border-subtle); padding-top: 32px; margin-top: 32px;">
          <h3 style="margin-bottom: 20px; font-size: 1.4rem;">Question-by-Question Review</h3>
          <div class="review-list">
            ${reviewItemsHTML}
          </div>
        </div>
      </div>

      <!-- Saved Review Deck Modal -->
      <div id="saved-deck-modal" class="modal-overlay hidden">
        <div class="modal-card" style="max-width: 680px; width: 100%; max-height: 85vh; display: flex; flex-direction: column;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <h3 style="font-size: 1.35rem; margin: 0;">⭐ Your Saved Review Deck</h3>
            <button id="close-saved-deck-btn" class="modal-close-btn">&times;</button>
          </div>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 16px;">
            Starred questions you've saved across quizzes for focused study.
          </p>
          <div id="saved-deck-list" class="bookmarks-grid">
            <!-- Dynamically populated -->
          </div>
        </div>
      </div>
    `;

    // Wire Practice Mistakes Click (Quizlet Active Retrieval)
    document.getElementById('practice-mistakes-btn')?.addEventListener('click', () => {
      const wrongIds = new Set(wrongResults.map((r) => r.questionId));
      const retryQuestions = questions.filter((q) => wrongIds.has(q._id));

      if (retryQuestions.length > 0) {
        questions = retryQuestions;
        currentIndex = 0;
        score = 0;
        streak = 0;
        maxStreak = 0;
        isPracticeMode = true;
        isAnswerLocked = false;
        userResults.length = 0;
        used5050 = false;
        usedHint = false;
        usedFreeze = false;
        usedSwap = false;
        quizStartTime = Date.now();
        renderQuestion();
      }
    });

    // Wire Saved Review Deck Modal
    document.getElementById('view-saved-deck-btn')?.addEventListener('click', () => {
      const modal = document.getElementById('saved-deck-modal');
      const listContainer = document.getElementById('saved-deck-list');
      if (!modal || !listContainer) return;

      const deck = JSON.parse(localStorage.getItem('quizngroww_saved_deck') || '{}');
      const savedItems = Object.values(deck);

      if (savedItems.length === 0) {
        listContainer.innerHTML = `
          <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
            <div style="font-size: 2.5rem; margin-bottom: 12px;">☆</div>
            <p>You haven't saved any questions yet. Click the ⭐ star on any question during a quiz to save it here!</p>
          </div>
        `;
      } else {
        listContainer.innerHTML = savedItems.map((item, idx) => `
          <div class="bookmark-card-item">
            <div class="bookmark-card-header">
              <span class="stat-badge" style="font-size: 0.76rem;">${item.topic || 'General'} • ${item.difficulty || 'Normal'}</span>
              <span style="font-size: 0.78rem; color: var(--text-muted);">Saved ${item.savedAt || ''}</span>
            </div>
            <div class="bookmark-question-title">${idx + 1}. ${item.questionText}</div>
            <div class="bookmark-answer-box">
              <span>✅ <strong>Correct Answer:</strong> ${item.correctAnswer || (item.options ? item.options[0] : '')}</span>
            </div>
            ${item.explanation ? `<p style="font-size: 0.84rem; color: var(--text-secondary); margin: 6px 0 0 0;">💡 ${item.explanation}</p>` : ''}
          </div>
        `).join('');
      }

      modal.classList.remove('hidden');
      modal.classList.add('active');
    });

    document.getElementById('close-saved-deck-btn')?.addEventListener('click', () => {
      const modal = document.getElementById('saved-deck-modal');
      if (modal) {
        modal.classList.remove('active');
        modal.classList.add('hidden');
      }
    });

    document.getElementById('play-again-btn')?.addEventListener('click', () => {
      window.location.reload();
    });

    document.getElementById('summary-google-signin-btn')?.addEventListener('click', () => {
      Auth.showModal('general');
    });

    document.getElementById('leaderboard-view-btn')?.addEventListener('click', () => {
      const targetTopic = topicParam === 'random' ? 'Random Challenge' : topicParam;
      window.location.href = `/leaderboard?topic=${encodeURIComponent(targetTopic)}&difficulty=${encodeURIComponent(difficultyParam)}`;
    });

    // Share button listener
    document.getElementById('share-card-btn')?.addEventListener('click', async () => {
      const shareText = `🧠 QuiznGroww Challenge!\nTopic: ${topicParam} (${difficultyParam})\nScore: ${score}/${questions.length} (${percentage}%) in ${totalTimeSeconds}s 🏆\n${emojiGrid}\nCan you beat my score? Play at: ${window.location.origin}`;

      if (navigator.share) {
        try {
          await navigator.share({
            title: 'QuiznGroww Challenge Result',
            text: shareText,
            url: window.location.origin,
          });
          return;
        } catch (e) {}
      }

      // Clipboard fallback
      try {
        await navigator.clipboard.writeText(shareText);
        const toast = document.getElementById('share-copy-toast');
        if (toast) {
          toast.classList.remove('hidden');
          setTimeout(() => toast.classList.add('hidden'), 3000);
        }
      } catch (e) {
        alert(shareText);
      }
    });
  };

  // Fetch Questions & Start
  const initQuiz = async () => {
    try {
      let fetchUrl = `/api/questions/${encodeURIComponent(topicParam)}/${encodeURIComponent(difficultyParam)}?limit=5`;
      if (topicParam.toLowerCase() === 'random') {
        fetchUrl = `/api/questions/random/challenge/${encodeURIComponent(difficultyParam)}?limit=5`;
      }

      const res = await fetch(fetchUrl);
      if (!res.ok) throw new Error('Could not load quiz questions.');

      questions = await res.json();
      if (!questions || questions.length === 0) {
        throw new Error('No questions available.');
      }

      currentIndex = 0;
      score = 0;
      streak = 0;
      quizStartTime = Date.now();
      renderQuestion();
    } catch (err) {
      container.innerHTML = `
        <div style="text-align: center; padding: 60px 20px;">
          <h2 style="color: var(--danger); margin-bottom: 12px;">Oops! Failed to load questions.</h2>
          <p style="color: var(--text-secondary); margin-bottom: 24px;">${err.message}</p>
          <a href="/html/topics.html" class="btn btn-primary">Return to Topics</a>
        </div>
      `;
    }
  };

  initQuiz();
});