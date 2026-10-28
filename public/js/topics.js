/**
 * QuiznGroww Topics Page Controller (topics.js)
 * Loads all 18 subjects, handles instant search filtering, category pill filtering,
 * and difficulty modal selection.
 */
window.initTopicsPage = function initTopicsPage() {
  const topicsGrid = document.getElementById('topics-main-grid');
  if (!topicsGrid) return; // Not on topics page

  const searchInput = document.getElementById('topic-search-input');
  const categoryBtns = document.querySelectorAll('.category-tag-btn');
  const difficultyModal = document.getElementById('difficulty-modal');
  const difficultyCloseBtn = document.getElementById('difficulty-close-btn');
  const modalTopicTitle = document.getElementById('modal-topic-title');

  let allTopics = [];
  let selectedTopic = null;
  let activeCategory = 'all';

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

  const categories = {
    stem: ['Computer Science', 'Technology', 'Science', 'Mathematics', 'Space & Astronomy', 'Reasoning'],
    society: ['World Affairs', 'Finance & Economy', 'Environment', 'Geography', 'History'],
    arts: ['Culture', 'Literature', 'Art', 'Mythology'],
    pop: ['Gaming & Esports', 'Movies', 'Sports'],
  };

  let diffHelpBlinkTimer = null;

  const openDifficultyModal = (topicName) => {
    if (window.QuiznGrowwAuth && window.QuiznGrowwAuth.hasReachedDemoLimit()) {
      window.QuiznGrowwAuth.showModal('demo_limit');
      return;
    }
    selectedTopic = topicName;
    if (modalTopicTitle) modalTopicTitle.textContent = topicName;

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

  document.querySelectorAll('.difficulty-select-card').forEach((card) => {
    card.onclick = () => {
      if (window.QuiznGrowwAuth && window.QuiznGrowwAuth.hasReachedDemoLimit()) {
        closeDifficultyModal();
        window.QuiznGrowwAuth.showModal('demo_limit');
        return;
      }
      const diff = card.dataset.difficulty;
      if (window.QuiznGrowwSound) window.QuiznGrowwSound.click();
      window.location.href = `/quiz?topic=${encodeURIComponent(selectedTopic)}&difficulty=${encodeURIComponent(diff)}`;
    };
  });

  const renderTopics = () => {
    const query = (searchInput?.value || '').trim().toLowerCase();

    let filtered = allTopics.filter((t) => {
      const matchesSearch = t.name.toLowerCase().includes(query);
      if (!matchesSearch) return false;

      if (activeCategory === 'all') return true;
      const list = categories[activeCategory] || [];
      return list.includes(t.name);
    });

    if (filtered.length === 0) {
      topicsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px;">
          <p style="font-size: 1.2rem; color: var(--text-muted); margin-bottom: 12px;">No topics matching "${query}" found.</p>
          <button class="btn btn-secondary" onclick="document.getElementById('topic-search-input').value=''; document.querySelectorAll('.category-tag-btn')[0].click();">
            Reset Filters
          </button>
        </div>
      `;
      return;
    }

    topicsGrid.innerHTML = filtered.map((t) => {
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

    topicsGrid.querySelectorAll('.topic-card').forEach((card) => {
      card.onclick = () => {
        if (window.QuiznGrowwSound) window.QuiznGrowwSound.click();
        openDifficultyModal(card.dataset.topic);
      };
    });
  };

  // Wire search input
  if (searchInput) {
    searchInput.addEventListener('input', renderTopics);
  }

  // Wire category filter buttons
  categoryBtns.forEach((btn) => {
    btn.onclick = () => {
      categoryBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category;
      if (window.QuiznGrowwSound) window.QuiznGrowwSound.click();
      renderTopics();
    };
  });

  // Fetch topics from API
  const fetchTopics = async () => {
    try {
      const res = await fetch('/api/questions/topics');
      allTopics = await res.json();
      renderTopics();
    } catch (err) {
      topicsGrid.innerHTML = '<p style="text-align:center; color:var(--danger); grid-column:1/-1;">Failed to load topics.</p>';
    }
  };

  fetchTopics();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.initTopicsPage);
} else {
  window.initTopicsPage();
}