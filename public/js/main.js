/**
 * QuiznGroww Homepage Script (main.js)
 * Manages featured topics spotlight, modals (difficulty, leaderboard, performance),
 * and quick-start actions.
 */
window.initHomePage = function initHomePage() {
  const featuredGrid = document.getElementById('featured-topics-grid');
  if (!featuredGrid) return; // Not on home page

  const difficultyModal = document.getElementById('difficulty-modal');
  const difficultyCloseBtn = document.getElementById('difficulty-close-btn');
  const modalTopicTitle = document.getElementById('modal-topic-title');
  const quickChallengeBtn = document.getElementById('quick-challenge-btn');

  const leaderboardModal = document.getElementById('leaderboard-modal');
  const leaderboardCloseBtn = document.getElementById('leaderboard-close-btn');
  const leaderboardContent = document.getElementById('leaderboard-content');
  const navLeaderboardBtn = document.getElementById('nav-leaderboard-btn');
  const footerLeaderboardLink = document.getElementById('footer-leaderboard-link');

  const performanceModal = document.getElementById('performance-modal');
  const performanceCloseBtn = document.getElementById('performance-close-btn');
  const performanceList = document.getElementById('performance-history-list');

  let selectedTopic = null;

  // Topic emblems, custom symbols, and colors dictionary
  const topicEmblems = {
    'Computer Science': {
      symbol: '💻',
      img: '/images/Technology.png',
      color: '#06b6d4',
      bg: 'rgba(6, 182, 212, 0.12)',
      glow: 'rgba(6, 182, 212, 0.35)',
      categoryTag: 'Coding',
    },
    'Technology': {
      symbol: '⚡',
      img: '/images/Technology.png',
      color: '#3b82f6',
      bg: 'rgba(59, 130, 246, 0.12)',
      glow: 'rgba(59, 130, 246, 0.35)',
      categoryTag: 'Tech',
    },
    'Science': {
      symbol: '🔬',
      img: '/images/Science.png',
      color: '#10b981',
      bg: 'rgba(16, 185, 129, 0.12)',
      glow: 'rgba(16, 185, 129, 0.35)',
      categoryTag: 'STEM',
    },
    'Reasoning': {
      symbol: '🧩',
      img: '/images/Reasoning.png',
      color: '#f59e0b',
      bg: 'rgba(245, 158, 11, 0.12)',
      glow: 'rgba(245, 158, 11, 0.35)',
      categoryTag: 'Logic',
    },
    'Culture': {
      symbol: '🏛️',
      img: '/images/Culture.png',
      color: '#d97706',
      bg: 'rgba(217, 119, 6, 0.12)',
      glow: 'rgba(217, 119, 6, 0.35)',
      categoryTag: 'Heritage',
    },
    'Sports': {
      symbol: '⚽',
      img: '/images/Sports.png',
      color: '#f97316',
      bg: 'rgba(249, 115, 22, 0.12)',
      glow: 'rgba(249, 115, 22, 0.35)',
      categoryTag: 'Sports',
    },
    'Space & Astronomy': {
      symbol: '🚀',
      color: '#8b5cf6',
      bg: 'rgba(139, 92, 246, 0.12)',
      glow: 'rgba(139, 92, 246, 0.35)',
      categoryTag: 'Cosmos',
    },
    'Mathematics': {
      symbol: '📐',
      color: '#6366f1',
      bg: 'rgba(99, 102, 241, 0.12)',
      glow: 'rgba(99, 102, 241, 0.35)',
      categoryTag: 'Math',
    },
    'Finance & Economy': {
      symbol: '📈',
      color: '#059669',
      bg: 'rgba(5, 150, 105, 0.12)',
      glow: 'rgba(5, 150, 105, 0.35)',
      categoryTag: 'Finance',
    },
    'Environment': {
      symbol: '🌿',
      color: '#16a34a',
      bg: 'rgba(22, 163, 74, 0.12)',
      glow: 'rgba(22, 163, 74, 0.35)',
      categoryTag: 'Ecology',
    },
    'Gaming & Esports': {
      symbol: '🎮',
      color: '#ec4899',
      bg: 'rgba(236, 72, 153, 0.12)',
      glow: 'rgba(236, 72, 153, 0.35)',
      categoryTag: 'Gaming',
    },
    'World Affairs': {
      symbol: '🌐',
      color: '#0284c7',
      bg: 'rgba(2, 132, 199, 0.12)',
      glow: 'rgba(2, 132, 199, 0.35)',
      categoryTag: 'Global',
    },
    'History': {
      symbol: '📜',
      color: '#b45309',
      bg: 'rgba(180, 83, 9, 0.12)',
      glow: 'rgba(180, 83, 9, 0.35)',
      categoryTag: 'History',
    },
    'Geography': {
      symbol: '🗺️',
      color: '#0ea5e9',
      bg: 'rgba(14, 165, 233, 0.12)',
      glow: 'rgba(14, 165, 233, 0.35)',
      categoryTag: 'Atlas',
    },
    'Literature': {
      symbol: '📚',
      color: '#e11d48',
      bg: 'rgba(225, 29, 72, 0.12)',
      glow: 'rgba(225, 29, 72, 0.35)',
      categoryTag: 'Books',
    },
    'Art': {
      symbol: '🎨',
      color: '#a855f7',
      bg: 'rgba(168, 85, 247, 0.12)',
      glow: 'rgba(168, 85, 247, 0.35)',
      categoryTag: 'Arts',
    },
    'Mythology': {
      symbol: '⚡',
      color: '#eab308',
      bg: 'rgba(234, 179, 8, 0.12)',
      glow: 'rgba(234, 179, 8, 0.35)',
      categoryTag: 'Myth',
    },
    'Movies': {
      symbol: '🎬',
      color: '#ef4444',
      bg: 'rgba(239, 68, 68, 0.12)',
      glow: 'rgba(239, 68, 68, 0.35)',
      categoryTag: 'Cinema',
    },
  };

  // --- Modal Helpers ---
  let diffHelpBlinkTimer = null;

  const openDifficultyModal = (topicName) => {
    if (window.QuiznGrowwAuth && window.QuiznGrowwAuth.hasReachedDemoLimit()) {
      window.QuiznGrowwAuth.showModal('demo_limit');
      return;
    }
    selectedTopic = topicName;
    if (modalTopicTitle) {
      modalTopicTitle.textContent = topicName === 'random' ? 'Random Challenge' : topicName;
    }

    // Always reset to selector view
    const selectorView = document.getElementById('diff-selector-view');
    const infoView = document.getElementById('diff-info-view');
    if (selectorView) selectorView.classList.remove('hidden');
    if (infoView) infoView.classList.add('hidden');
    if (difficultyCloseBtn) difficultyCloseBtn.style.display = '';

    // 5-10 second blinking beacon effect on the question mark button
    const helpBtn = document.getElementById('diff-info-trigger-btn');
    if (helpBtn) {
      helpBtn.classList.add('blinking');
      if (diffHelpBlinkTimer) clearTimeout(diffHelpBlinkTimer);
      diffHelpBlinkTimer = setTimeout(() => {
        helpBtn.classList.remove('blinking');
      }, 8000);
    }

    if (difficultyModal) {
      difficultyModal.classList.remove('hidden');
      difficultyModal.classList.add('active');
    }
  };

  const closeDifficultyModal = () => {
    if (diffHelpBlinkTimer) {
      clearTimeout(diffHelpBlinkTimer);
      diffHelpBlinkTimer = null;
    }
    const helpBtn = document.getElementById('diff-info-trigger-btn');
    if (helpBtn) helpBtn.classList.remove('blinking');
    if (difficultyCloseBtn) difficultyCloseBtn.style.display = '';

    if (difficultyModal) {
      difficultyModal.classList.remove('active');
      difficultyModal.classList.add('hidden');
    }
  };

  let modalTimeframe = 'all';
  let modalTopic = 'Random Challenge';
  let modalDiff = 'all';

  const fetchModalLeaderboard = async () => {
    if (!leaderboardContent) return;
    leaderboardContent.innerHTML = '<p style="text-align:center; padding:20px; color:var(--text-muted);">Fetching rankings...</p>';
    try {
      const query = new URLSearchParams({
        timeframe: modalTimeframe,
        topic: modalTopic,
        difficulty: modalDiff,
        limit: '15',
      });
      const res = await fetch(`/api/performance/leaderboard?${query.toString()}`);
      const data = await res.json();
      if (!data || data.length === 0) {
        leaderboardContent.innerHTML = '<p style="text-align:center; padding:20px; color:var(--text-muted);">No quiz records logged for this filter yet. Be the first!</p>';
        return;
      }

      const rows = data.map((item, idx) => {
        let medal = `#${idx + 1}`;
        if (idx === 0) medal = '🥇';
        if (idx === 1) medal = '🥈';
        if (idx === 2) medal = '🥉';

        let diffBadge = '⚡ Med';
        if (item.difficulty === 'Easy' || item.difficulty === 'Normal') diffBadge = '🌱 Norm';
        else if (item.difficulty === 'Hard' || item.difficulty === 'Difficult') diffBadge = '🔥 Hard';

        return `
          <tr>
            <td class="rank-badge">${medal}</td>
            <td>
              <div style="display:flex; align-items:center; gap:8px;">
                <img src="${item.avatar || 'https://api.dicebear.com/7.x/bottts/svg?seed=quizzer'}" style="width:24px; height:24px; border-radius:50%; background:var(--bg-elevated);" onerror="this.src='https://api.dicebear.com/7.x/bottts/svg?seed=user'" />
                <strong>${item.userName || 'Quizzer'}</strong>
              </div>
            </td>
            <td><span class="stat-badge" style="font-size:0.72rem;">${diffBadge}</span></td>
            <td style="color:var(--accent); font-weight:700;">${item.totalScore} XP</td>
            <td><span style="color:var(--success); font-weight:700;">${item.accuracy}%</span></td>
          </tr>
        `;
      }).join('');

      leaderboardContent.innerHTML = `
        <table class="leaderboard-table">
          <thead>
            <tr>
              <th style="width:50px;">Rank</th>
              <th>Player</th>
              <th>Stakes</th>
              <th>Score</th>
              <th>Accuracy</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      `;
    } catch (e) {
      leaderboardContent.innerHTML = '<p style="text-align:center; color:var(--danger); padding:20px;">Failed to load leaderboard data.</p>';
    }
  };

  const openLeaderboardModal = async () => {
    if (leaderboardModal) {
      leaderboardModal.classList.remove('hidden');
      leaderboardModal.classList.add('active');
    }

    const timeBtns = document.querySelectorAll('.modal-time-btn');
    timeBtns.forEach((btn) => {
      btn.onclick = () => {
        timeBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        modalTimeframe = btn.dataset.time;
        if (window.QuiznGrowwSound) window.QuiznGrowwSound.click();
        fetchModalLeaderboard();
      };
    });

    const topicSel = document.getElementById('modal-lb-topic');
    if (topicSel) {
      topicSel.value = modalTopic;
      topicSel.onchange = () => {
        modalTopic = topicSel.value;
        if (window.QuiznGrowwSound) window.QuiznGrowwSound.click();
        fetchModalLeaderboard();
      };
    }

    const diffSel = document.getElementById('modal-lb-diff');
    if (diffSel) {
      diffSel.value = modalDiff;
      diffSel.onchange = () => {
        modalDiff = diffSel.value;
        if (window.QuiznGrowwSound) window.QuiznGrowwSound.click();
        fetchModalLeaderboard();
      };
    }

    fetchModalLeaderboard();
  };

  const closeLeaderboardModal = () => {
    if (leaderboardModal) {
      leaderboardModal.classList.remove('active');
      leaderboardModal.classList.add('hidden');
    }
  };

  const openPerformanceModal = async () => {
    if (performanceModal) {
      performanceModal.classList.remove('hidden');
      performanceModal.classList.add('active');
    }
    if (performanceList) {
      const token = window.QuiznGrowwAuth ? window.QuiznGrowwAuth.getToken() : null;
      if (!token) {
        performanceList.innerHTML = `
          <div style="text-align:center; padding:30px;">
            <p style="margin-bottom:16px;">Please sign in with Google to view your past performance records.</p>
            <button class="btn btn-primary" onclick="window.QuiznGrowwAuth.showModal('features_locked')">Sign In with Google</button>
          </div>
        `;
        return;
      }

      performanceList.innerHTML = '<p style="text-align:center; padding:20px; color:var(--text-muted);">Fetching your history...</p>';
      try {
        const res = await fetch('/api/performance', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const history = await res.json();

        if (!history || history.length === 0) {
          performanceList.innerHTML = '<p style="text-align:center; padding:30px; color:var(--text-muted);">No quizzes taken yet. Start a quiz today!</p>';
          return;
        }

        const itemsHTML = history.map((item) => `
          <div class="review-item is-correct" style="margin-bottom:12px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <span style="font-weight:700; font-size:1.1rem; color:var(--text-primary);">${item.topic}</span>
              <span class="stat-badge">${item.difficulty}</span>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:0.85rem; color:var(--text-secondary);">
              <span>Score: <strong style="color:var(--accent);">${item.score} / ${item.totalQuestions}</strong> (${item.percentage}%)</span>
              <span>${new Date(item.date).toLocaleDateString()}</span>
            </div>
          </div>
        `).join('');

        performanceList.innerHTML = itemsHTML;
      } catch (err) {
        performanceList.innerHTML = '<p style="text-align:center; color:var(--danger); padding:20px;">Could not load history.</p>';
      }
    }
  };

  const closePerformanceModal = () => {
    if (performanceModal) {
      performanceModal.classList.remove('active');
      performanceModal.classList.add('hidden');
    }
  };

  // Expose helpers globally
  window.QuiznGrowwApp = {
    showLeaderboardModal: openLeaderboardModal,
    showPerformanceModal: openPerformanceModal,
  };

  // Wire up event listeners
  if (difficultyCloseBtn) difficultyCloseBtn.onclick = closeDifficultyModal;

  // Difficulty info & scoring guide drawer wiring
  const diffInfoTriggerBtn = document.getElementById('diff-info-trigger-btn');
  const diffInfoCloseBtn = document.getElementById('diff-info-close-btn');
  const diffInfoReturnBtn = document.getElementById('diff-info-return-btn');
  const diffSelectorView = document.getElementById('diff-selector-view');
  const diffInfoView = document.getElementById('diff-info-view');

  const showDifficultyInfo = () => {
    if (window.QuiznGrowwSound) window.QuiznGrowwSound.click();
    if (diffHelpBlinkTimer) {
      clearTimeout(diffHelpBlinkTimer);
      diffHelpBlinkTimer = null;
    }
    const helpBtn = document.getElementById('diff-info-trigger-btn');
    if (helpBtn) helpBtn.classList.remove('blinking');
    if (difficultyCloseBtn) difficultyCloseBtn.style.display = 'none';
    if (diffSelectorView) diffSelectorView.classList.add('hidden');
    if (diffInfoView) {
      diffInfoView.classList.remove('hidden');
      const scrollBody = diffInfoView.querySelector('.diff-info-scroll-body');
      if (scrollBody) scrollBody.scrollTop = 0;
    }
  };

  const hideDifficultyInfo = () => {
    if (window.QuiznGrowwSound) window.QuiznGrowwSound.click();
    if (difficultyCloseBtn) difficultyCloseBtn.style.display = '';
    if (diffInfoView) diffInfoView.classList.add('hidden');
    if (diffSelectorView) diffSelectorView.classList.remove('hidden');
  };

  if (diffInfoTriggerBtn) diffInfoTriggerBtn.onclick = showDifficultyInfo;
  if (diffInfoCloseBtn) diffInfoCloseBtn.onclick = hideDifficultyInfo;
  if (diffInfoReturnBtn) diffInfoReturnBtn.onclick = hideDifficultyInfo;

  if (difficultyModal) {
    difficultyModal.addEventListener('click', (e) => {
      if (e.target === difficultyModal) closeDifficultyModal();
    });
  }

  if (leaderboardCloseBtn) leaderboardCloseBtn.onclick = closeLeaderboardModal;
  if (performanceCloseBtn) performanceCloseBtn.onclick = closePerformanceModal;

  if (navLeaderboardBtn) navLeaderboardBtn.onclick = (e) => { e.preventDefault(); openLeaderboardModal(); };
  if (footerLeaderboardLink) footerLeaderboardLink.onclick = (e) => { e.preventDefault(); openLeaderboardModal(); };

  if (new URLSearchParams(window.location.search).get('leaderboard') === 'true') {
    setTimeout(openLeaderboardModal, 250);
  }

  if (quickChallengeBtn) {
    quickChallengeBtn.onclick = () => {
      if (window.QuiznGrowwSound) window.QuiznGrowwSound.click();
      openDifficultyModal('random');
    };
  }

  // AI Quiz Generator Modal Wiring
  const aiQuizModal = document.getElementById('ai-quiz-modal');
  const aiQuizOpenBtn = document.getElementById('ai-quiz-open-btn');
  const aiQuizCloseBtn = document.getElementById('ai-quiz-close-btn');
  const aiQuizForm = document.getElementById('ai-quiz-form');
  const aiTopicInput = document.getElementById('ai-topic-input');
  const aiStatusMsg = document.getElementById('ai-quiz-status-msg');
  const aiSubmitBtn = document.getElementById('ai-generate-submit-btn');

  if (aiQuizOpenBtn && aiQuizModal) {
    aiQuizOpenBtn.onclick = () => {
      if (window.QuiznGrowwSound) window.QuiznGrowwSound.click();
      aiQuizModal.classList.remove('hidden');
      if (aiTopicInput) aiTopicInput.focus();
    };

    if (aiQuizCloseBtn) {
      aiQuizCloseBtn.onclick = () => {
        aiQuizModal.classList.add('hidden');
      };
    }

    aiQuizModal.onclick = (e) => {
      if (e.target === aiQuizModal) aiQuizModal.classList.add('hidden');
    };

    // Quick suggestion chips
    document.querySelectorAll('.ai-chip').forEach((chip) => {
      chip.onclick = () => {
        if (aiTopicInput) {
          aiTopicInput.value = chip.dataset.topic;
          if (window.QuiznGrowwSound) window.QuiznGrowwSound.click();
        }
      };
    });

    if (aiQuizForm) {
      aiQuizForm.onsubmit = async (e) => {
        e.preventDefault();
        const topic = aiTopicInput?.value?.trim();
        if (!topic) return;

        const diffEl = document.querySelector('input[name="ai-difficulty"]:checked');
        const difficulty = diffEl ? diffEl.value : 'medium';

        if (aiSubmitBtn) {
          aiSubmitBtn.disabled = true;
          aiSubmitBtn.innerHTML = '<span>⏳ Synthesizing with Gemini AI...</span>';
        }
        if (aiStatusMsg) {
          aiStatusMsg.style.display = 'block';
          aiStatusMsg.textContent = '✨ Crafting questions, plausible distractors, and explanations...';
        }

        try {
          const res = await fetch('/api/questions/ai/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ topic, difficulty, count: 5 }),
          });

          const data = await res.json();
          if (!res.ok || !data.success) {
            throw new Error(data.message || 'Failed to generate quiz');
          }

          if (data.questions && data.questions.length > 0) {
            sessionStorage.setItem('ai_quiz_questions', JSON.stringify(data.questions));
            sessionStorage.setItem('ai_quiz_topic', data.topic);
          }

          if (window.QuiznGrowwSound) window.QuiznGrowwSound.fanfare();
          window.location.href = `/quiz?topic=${encodeURIComponent(data.topic)}&difficulty=${encodeURIComponent(data.difficulty)}&ai=true`;
        } catch (err) {
          console.error('AI Quiz Generation failed:', err);
          if (aiStatusMsg) {
            aiStatusMsg.style.display = 'block';
            aiStatusMsg.style.color = '#ef4444';
            aiStatusMsg.textContent = `❌ ${err.message || 'Generation error. Please try another topic.'}`;
          }
          if (aiSubmitBtn) {
            aiSubmitBtn.disabled = false;
            aiSubmitBtn.innerHTML = '<span>🚀 Generate & Launch Quiz</span>';
          }
        }
      };
    }
  }

  // Handle difficulty selection click
  document.querySelectorAll('.difficulty-select-card').forEach((card) => {
    card.onclick = () => {
      if (window.QuiznGrowwAuth && window.QuiznGrowwAuth.hasReachedDemoLimit()) {
        closeDifficultyModal();
        window.QuiznGrowwAuth.showModal('demo_limit');
        return;
      }
      const diff = card.dataset.difficulty;
      if (window.QuiznGrowwSound) window.QuiznGrowwSound.click();
      window.location.href = `/quiz?topic=${encodeURIComponent(selectedTopic || 'random')}&difficulty=${encodeURIComponent(diff)}`;
    };
  });

  // Fetch and render featured topics
  const loadFeaturedTopics = async () => {
    if (!featuredGrid) return;
    try {
      const res = await fetch('/api/questions/topics');
      const allTopics = await res.json();

      // Curated Top 8 highest-engagement, globally relatable topics
      const topRelatableTopics = [
        'Computer Science',
        'Science',
        'Movies',
        'Sports',
        'Reasoning',
        'Space & Astronomy',
        'Gaming & Esports',
        'History',
      ];

      // Match topics by curated priority order
      const featured = [];
      topRelatableTopics.forEach((name) => {
        const found = allTopics.find((t) => t.name === name);
        if (found) featured.push(found);
      });

      // Fallback: fill to 8 if needed
      if (featured.length < 8) {
        allTopics.forEach((t) => {
          if (featured.length < 8 && !featured.some((f) => f.name === t.name)) {
            featured.push(t);
          }
        });
      }

      featuredGrid.innerHTML = featured.map((t) => {
        const emblem = topicEmblems[t.name] || {
          symbol: '🧠',
          color: '#6366f1',
          bg: 'rgba(99, 102, 241, 0.12)',
          glow: 'rgba(99, 102, 241, 0.35)',
          categoryTag: 'General',
        };

        const iconMarkup = emblem.img
          ? `<img src="${emblem.img}" alt="${t.name}" class="topic-img-icon" onerror="this.outerHTML='<span style=\\'font-size:1.6rem\\'>${emblem.symbol}</span>'">`
          : `<span style="font-size: 1.6rem;">${emblem.symbol}</span>`;

        return `
          <div class="topic-card" data-topic="${t.name}" style="--topic-border: ${emblem.color}; --topic-bg: ${emblem.bg}; --topic-glow: ${emblem.glow};">
            <div class="topic-card-header">
              <div class="topic-icon-frame" style="border-color: ${emblem.color}40; background: ${emblem.bg};">
                ${iconMarkup}
              </div>
              <div style="display: flex; gap: 6px; align-items: center;">
                <span class="stat-badge" style="background: ${emblem.bg}; color: ${emblem.color}; border: 1px solid ${emblem.color}40; font-size: 0.72rem; padding: 2px 8px; border-radius: 999px; font-weight: 700;">
                  ${emblem.categoryTag}
                </span>
                <span class="stat-badge">${t.count} Qs</span>
              </div>
            </div>
            <div>
              <div class="topic-card-title">${t.name}</div>
              <p style="font-size:0.88rem; line-height:1.5; color: var(--text-secondary); font-weight: 450;">Master ${t.name} with timed challenges, lifelines, and instant explanations.</p>
            </div>
            <div class="topic-card-btn" style="color: ${emblem.color};">
              <span>Start Challenge</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
          </div>
        `;
      }).join('');

      // Wire up clicks on topic cards
      featuredGrid.querySelectorAll('.topic-card').forEach((card) => {
        card.onclick = () => {
          if (window.QuiznGrowwSound) window.QuiznGrowwSound.click();
          openDifficultyModal(card.dataset.topic);
        };
      });
    } catch (e) {
      console.error('Error loading featured topics:', e);
    }
  };

  // Duolingo & Brilliant Inspired Daily Brain Quest
  const initDailyQuest = () => {
    const banner = document.getElementById('daily-quest-banner');
    if (!banner) return;

    const dayLabel = document.getElementById('daily-quest-day-label');
    const desc = document.getElementById('daily-quest-description');
    const startBtn = document.getElementById('daily-quest-start-btn');
    const emblem = document.getElementById('daily-quest-emblem');

    const days = [
      { name: 'Sunday', topic: 'Computer Science', symbol: '💻', desc: 'Code algorithms & tech fundamentals' },
      { name: 'Monday', topic: 'Mathematics', symbol: '📐', desc: 'Quantitative puzzles, algebra & geometry' },
      { name: 'Tuesday', topic: 'Science', symbol: '🧪', desc: 'Physics, chemistry & biology discoveries' },
      { name: 'Wednesday', topic: 'Technology', symbol: '🤖', desc: 'Hardware, software & emerging AI systems' },
      { name: 'Thursday', topic: 'Space & Astronomy', symbol: '🛰️', desc: 'Cosmology, planets & astrophysics' },
      { name: 'Friday', topic: 'Finance & Economy', symbol: '📈', desc: 'Markets, macroeconomics & financial literacy' },
      { name: 'Saturday', topic: 'Culture', symbol: '🏺', desc: 'World heritage, history & civilization' }
    ];

    const todayIndex = new Date().getDay();
    const todayQuest = days[todayIndex];
    const todayDateKey = new Date().toDateString();
    const completedDate = localStorage.getItem('quizngroww_daily_quest_completed');
    const isCompletedToday = completedDate === todayDateKey;

    if (dayLabel) {
      dayLabel.textContent = `${todayQuest.name}'s Brain Workout`;
    }

    if (emblem) {
      emblem.textContent = isCompletedToday ? '✅' : todayQuest.symbol;
    }

    if (desc) {
      if (isCompletedToday) {
        desc.innerHTML = `<strong>Quest Complete! 🔥</strong> You mastered today's <strong>${todayQuest.topic}</strong> challenge. Your daily streak is preserved!`;
      } else {
        desc.innerHTML = `Today's Focus: <strong>${todayQuest.topic}</strong> (${todayQuest.desc}). Complete a 5-question blitz to keep your daily streak alive!`;
      }
    }

    if (startBtn) {
      if (isCompletedToday) {
        startBtn.innerHTML = `<span>✓ Completed (Play Again)</span>`;
        startBtn.className = 'btn btn-secondary';
        startBtn.href = `/quiz?topic=${encodeURIComponent(todayQuest.topic)}&difficulty=Medium&mode=blitz&daily=true`;
      } else {
        startBtn.innerHTML = `<span>🚩 Start Today's Quest (5Q)</span>`;
        startBtn.className = 'btn btn-primary';
        startBtn.href = `/quiz?topic=${encodeURIComponent(todayQuest.topic)}&difficulty=Medium&mode=blitz&daily=true`;
      }
    }
  };

  loadFeaturedTopics();
  initDailyQuest();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.initHomePage);
} else {
  window.initHomePage();
}