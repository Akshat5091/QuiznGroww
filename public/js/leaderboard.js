/**
 * QuiznGroww Global Leaderboard Engine (leaderboard.js)
 * 
 * Manages multi-dimensional filtering across:
 * - Sub-categories: Today's Highest Scorers vs All-Time Legends
 * - Category-wise High Scores: Dropdown with 'Random Challenge' featured on top
 * - Difficulty Stakes: Normal (+10/0), Medium (+10/-5), Hard (+10/-10)
 */

window.initLeaderboardPage = function initLeaderboardPage() {
  'use strict';

  const boardContent = document.getElementById('lb-board-content');
  if (!boardContent) return; // Not on leaderboard page

  const boardLoading = document.getElementById('lb-board-loading');
  const timeBtns = document.querySelectorAll('.lb-time-btn');
  const topicSelect = document.getElementById('lb-topic-select');
  const diffPills = document.querySelectorAll('.lb-diff-pill');
  const summaryLabel = document.getElementById('lb-summary-label');

  // Check URL params for pre-selected filters (e.g. from quiz or topics)
  const urlParams = new URLSearchParams(window.location.search);
  let activeTimeframe = urlParams.get('timeframe') || 'all';
  let activeTopic = urlParams.get('topic') || 'Random Challenge';
  let activeDiff = urlParams.get('difficulty') || 'all';

  // Sync initial UI controls with active state
  if (topicSelect) {
    topicSelect.value = activeTopic;
  }

  timeBtns.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.timeframe === activeTimeframe);
    btn.onclick = () => {
      timeBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeTimeframe = btn.dataset.timeframe;
      if (window.QuiznGrowwSound) window.QuiznGrowwSound.click();
      fetchAndRenderLeaderboard();
    };
  });

  diffPills.forEach((pill) => {
    pill.classList.toggle('active', pill.dataset.diff === activeDiff);
    pill.onclick = () => {
      diffPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      activeDiff = pill.dataset.diff;
      if (window.QuiznGrowwSound) window.QuiznGrowwSound.click();
      fetchAndRenderLeaderboard();
    };
  });

  if (topicSelect) {
    topicSelect.onchange = () => {
      activeTopic = topicSelect.value;
      if (window.QuiznGrowwSound) window.QuiznGrowwSound.click();
      fetchAndRenderLeaderboard();
    };
  }

  const updateSummaryLabel = () => {
    if (!summaryLabel) return;
    const timeText = activeTimeframe === 'today' ? "Today's Scorers" : 'All-Time Legends';
    const topicText = activeTopic === 'all' ? 'All Topics' : activeTopic;
    let diffText = 'All Difficulties';
    if (activeDiff === 'Easy') diffText = '🌱 Normal Stakes (+10/0)';
    else if (activeDiff === 'Medium') diffText = '⚡ Medium Stakes (+10/-5)';
    else if (activeDiff === 'Hard') diffText = '🔥 Hard Stakes (+10/-10)';

    summaryLabel.textContent = `${timeText} • ${topicText} • ${diffText}`;
  };

  const fetchAndRenderLeaderboard = async () => {
    updateSummaryLabel();
    if (boardLoading) boardLoading.classList.remove('hidden');
    if (boardContent) boardContent.style.opacity = '0.5';

    try {
      const query = new URLSearchParams({
        timeframe: activeTimeframe,
        topic: activeTopic,
        difficulty: activeDiff,
        limit: '25',
      });

      const res = await fetch(`/api/performance/leaderboard?${query.toString()}`);
      const data = await res.json();

      if (boardLoading) boardLoading.classList.add('hidden');
      if (boardContent) boardContent.style.opacity = '1';

      if (!data || data.length === 0) {
        boardContent.innerHTML = `
          <div class="lb-empty-card">
            <div style="font-size: 2.5rem; margin-bottom: 12px;">🎯</div>
            <h3>No High Scores Logged Yet</h3>
            <p style="color: var(--text-secondary); margin-bottom: 20px;">
              Be the first player to conquer the <strong>${activeTopic}</strong> (${activeDiff} level) today!
            </p>
            <a href="/quiz?topic=${encodeURIComponent(activeTopic === 'all' ? 'random' : activeTopic)}&difficulty=${encodeURIComponent(activeDiff === 'all' ? 'Medium' : activeDiff)}" class="btn btn-primary">
              Launch Challenge & Claim #1 Rank &rarr;
            </a>
          </div>
        `;
        return;
      }

      const rows = data.map((player) => {
        let rankEmblem = `#${player.rank}`;
        let rankClass = 'rank-regular';
        if (player.rank === 1) {
          rankEmblem = '🥇';
          rankClass = 'rank-gold';
        } else if (player.rank === 2) {
          rankEmblem = '🥈';
          rankClass = 'rank-silver';
        } else if (player.rank === 3) {
          rankEmblem = '🥉';
          rankClass = 'rank-bronze';
        }

        const avatarSrc = player.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${player.userId || 'player'}`;

        let stakesBadge = '<span class="stat-badge stakes-medium-chip">⚡ Medium</span>';
        if (player.difficulty === 'Easy' || player.difficulty === 'Normal') {
          stakesBadge = '<span class="stat-badge stakes-easy-chip">🌱 Normal</span>';
        } else if (player.difficulty === 'Hard' || player.difficulty === 'Difficult') {
          stakesBadge = '<span class="stat-badge stakes-hard-chip">🔥 Hard</span>';
        }

        return `
          <tr class="lb-row ${rankClass}">
            <td class="lb-rank-col">
              <span class="lb-rank-badge ${rankClass}">${rankEmblem}</span>
            </td>
            <td class="lb-player-col">
              <div class="lb-player-info">
                <img src="${avatarSrc}" alt="${player.userName}" class="lb-player-avatar" onerror="this.src='https://api.dicebear.com/7.x/bottts/svg?seed=user'" />
                <div>
                  <div class="lb-player-name">${player.userName}</div>
                  <div class="lb-player-meta">${player.topic || activeTopic}</div>
                </div>
              </div>
            </td>
            <td class="lb-stakes-col">
              ${stakesBadge}
            </td>
            <td class="lb-score-col">
              <span class="lb-score-value">${player.totalScore}</span>
              <span class="lb-score-unit">XP</span>
            </td>
            <td class="lb-accuracy-col">
              <span class="lb-accuracy-pill" style="color: var(--success);">${player.accuracy}%</span>
            </td>
            <td class="lb-quizzes-col">
              ${player.quizzesTaken}
            </td>
            <td class="lb-time-col">
              ${player.bestTime > 0 ? `${player.bestTime}s` : '—'}
            </td>
          </tr>
        `;
      }).join('');

      boardContent.innerHTML = `
        <div class="table-responsive">
          <table class="lb-table">
            <thead>
              <tr>
                <th style="width: 70px;">Rank</th>
                <th>Player</th>
                <th>Stakes Level</th>
                <th>Score</th>
                <th>Accuracy</th>
                <th>Quizzes</th>
                <th>Speed</th>
              </tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>
        </div>
      `;
    } catch (e) {
      console.error('Failed to load leaderboard:', e);
      if (boardLoading) boardLoading.classList.add('hidden');
      if (boardContent) {
        boardContent.style.opacity = '1';
        boardContent.innerHTML = `
          <div style="text-align: center; padding: 40px 20px; color: var(--danger);">
            <p>Could not load leaderboard data. Please check connection and refresh.</p>
          </div>
        `;
      }
    }
  };

  // Initial load
  fetchAndRenderLeaderboard();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.initLeaderboardPage);
} else {
  window.initLeaderboardPage();
}

