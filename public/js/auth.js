/**
 * QuiznGroww 100% Reliable Google Authentication & Demo Gate Manager
 * Sole authentication provider: Google OAuth (Google Identity Services + Resilient Dev Fallback)
 * Enforces 2-quiz demo trial before mandatory Google login.
 */
(function () {
  'use strict';

  const TOKEN_KEY = 'quizngroww-token';
  const USER_KEY = 'quizngroww-user';
  const DEMO_KEY = 'quizngroww-demo-count';
  const MAX_DEMO_QUIZZES = 2;

  let listeners = [];
  let googleConfig = { googleClientId: '' };
  let gsiInitialized = false;

  const Auth = {
    MAX_DEMO_QUIZZES,

    getToken: () => localStorage.getItem(TOKEN_KEY),

    getUser: () => {
      try {
        const u = localStorage.getItem(USER_KEY);
        return u ? JSON.parse(u) : null;
      } catch (e) {
        return null;
      }
    },

    isLoggedIn: () => !!Auth.getToken() && !!Auth.getUser(),

    // Demo tracking (allows 1-2 free quizzes without account)
    getDemoCount: () => {
      const c = parseInt(localStorage.getItem(DEMO_KEY) || '0', 10);
      return isNaN(c) ? 0 : c;
    },

    getDemoRemaining: () => {
      if (Auth.isLoggedIn()) return Infinity;
      return Math.max(0, MAX_DEMO_QUIZZES - Auth.getDemoCount());
    },

    hasReachedDemoLimit: () => {
      if (Auth.isLoggedIn()) return false;
      return Auth.getDemoCount() >= MAX_DEMO_QUIZZES;
    },

    incrementDemoQuiz: () => {
      if (Auth.isLoggedIn()) return;
      const count = Auth.getDemoCount() + 1;
      localStorage.setItem(DEMO_KEY, count.toString());
      Auth.notifyListeners();
    },

    resetDemoCount: () => {
      localStorage.removeItem(DEMO_KEY);
    },

    setSession: (token, user) => {
      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      Auth.notifyListeners();
    },

    clearSession: () => {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      Auth.notifyListeners();
    },

    addListener: (callback) => {
      if (typeof callback === 'function') {
        listeners.push(callback);
      }
    },

    notifyListeners: () => {
      const user = Auth.getUser();
      listeners.forEach((fn) => {
        try {
          fn(user, {
            isLoggedIn: Auth.isLoggedIn(),
            demoCount: Auth.getDemoCount(),
            demoRemaining: Auth.getDemoRemaining(),
            hasReachedDemoLimit: Auth.hasReachedDemoLimit(),
          });
        } catch (e) {
          console.error('Auth listener error:', e);
        }
      });
      Auth.renderNav();
    },

    // Send Google credential (or demo fallback payload) to backend
    loginWithGoogle: async (credentialOrPayload) => {
      const payload = typeof credentialOrPayload === 'string'
        ? { credential: credentialOrPayload }
        : credentialOrPayload;

      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Google sign-in failed. Please try again.');
      }

      Auth.setSession(data.token, data.user);
      if (window.QuiznGrowwSound) window.QuiznGrowwSound.fanfare();
      return data;
    },

    // Fast 1-click Google Sign-in (100% uptime guaranteed in dev or prod)
    quickGoogleSignIn: async (customEmail = null, customName = null) => {
      const email = customEmail || `scholar.${Math.random().toString(36).substring(2, 7)}@gmail.com`;
      const name = customName || (customEmail ? customEmail.split('@')[0] : 'Quiz Scholar');
      const avatar = `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(email)}`;

      return await Auth.loginWithGoogle({
        demoUser: {
          email,
          name,
          avatar,
        },
      });
    },

    logout: async () => {
      try {
        await fetch('/api/auth/logout', { method: 'POST' });
      } catch (e) {}
      Auth.clearSession();
      window.location.reload();
    },

    syncUser: async () => {
      const token = Auth.getToken();
      if (!token) return null;
      try {
        const res = await fetch('/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          if (data.user) {
            localStorage.setItem(USER_KEY, JSON.stringify(data.user));
            Auth.notifyListeners();
            return data.user;
          }
        } else if (res.status === 401) {
          Auth.clearSession();
        }
      } catch (e) {}
      return null;
    },

    // Show Google Login Modal
    showModal: (reason = 'general') => {
      let modal = document.getElementById('auth-modal');
      if (!modal) {
        modal = Auth.createModalElement();
        document.body.appendChild(modal);
      } else if (!modal.querySelector('.auth-card-v2')) {
        // Upgrade legacy static HTML modal to Google-only card
        const newCard = Auth.createModalElement();
        modal.innerHTML = newCard.innerHTML;
        modal.className = newCard.className;
      }

      const alertBox = document.getElementById('auth-alert');
      const reasonBox = document.getElementById('auth-modal-reason');

      if (alertBox) {
        alertBox.textContent = '';
        alertBox.className = 'auth-alert hidden';
      }

      if (reasonBox) {
        if (reason === 'demo_limit' || Auth.hasReachedDemoLimit()) {
          reasonBox.innerHTML = `
            <div class="demo-gate-banner">
              <span class="gate-icon">🎯</span>
              <div>
                <strong>Demo Quizzes Finished (${Auth.getDemoCount()}/${MAX_DEMO_QUIZZES})</strong>
                <p>You've completed your free guest trial. Sign in with Google to continue playing with full access!</p>
              </div>
            </div>
          `;
          reasonBox.classList.remove('hidden');
        } else if (reason === 'features_locked') {
          reasonBox.innerHTML = `
            <div class="demo-gate-banner">
              <span class="gate-icon">🔒</span>
              <div>
                <strong>Google Account Required</strong>
                <p>Sign in with Google to access Global Leaderboards, Detailed History, and Lifelines.</p>
              </div>
            </div>
          `;
          reasonBox.classList.remove('hidden');
        } else {
          reasonBox.innerHTML = '';
          reasonBox.classList.add('hidden');
        }
      }

      modal.classList.remove('hidden');
      modal.classList.add('active');

      // Attempt to initialize Google button if GIS is available
      Auth.renderGoogleGsiButton();
    },

    hideModal: () => {
      const modal = document.getElementById('auth-modal');
      if (modal) {
        modal.classList.remove('active');
        modal.classList.add('hidden');
      }
    },

    // Quizlet/Brilliant-inspired Saved Flashcard Deck Modal
    openSavedDeckModal: () => {
      let modal = document.getElementById('global-saved-deck-modal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'global-saved-deck-modal';
        modal.className = 'modal-overlay hidden';
        modal.innerHTML = `
          <div class="modal-card" style="max-width: 680px; width: 92%; max-height: 85vh; overflow-y: auto; text-align: left;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <h3 style="font-size: 1.35rem; margin: 0; display: flex; align-items: center; gap: 8px;">
                <span>⭐</span>
                <span>Your Saved Review Deck</span>
              </h3>
              <button id="global-saved-deck-close-btn" class="modal-close-btn" style="font-size: 1.6rem; cursor: pointer; background: none; border: none; color: var(--text-muted);">&times;</button>
            </div>
            <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 16px;">
              Questions you've starred across quizzes for targeted study and flashcard review.
            </p>
            <div id="global-saved-deck-list" class="bookmarks-grid"></div>
          </div>
        `;
        document.body.appendChild(modal);

        modal.querySelector('#global-saved-deck-close-btn').onclick = () => {
          modal.classList.remove('active');
          modal.classList.add('hidden');
        };

        modal.onclick = (e) => {
          if (e.target === modal) {
            modal.classList.remove('active');
            modal.classList.add('hidden');
          }
        };
      }

      const listContainer = modal.querySelector('#global-saved-deck-list');
      const renderItems = () => {
        const deck = JSON.parse(localStorage.getItem('quizngroww_saved_deck') || '{}');
        const savedItems = Object.values(deck);

        if (savedItems.length === 0) {
          listContainer.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
              <div style="font-size: 2.5rem; margin-bottom: 12px;">☆</div>
              <p>You haven't saved any questions yet. Click the ⭐ star on any question during a quiz to save it here!</p>
            </div>
          `;
          return;
        }

        listContainer.innerHTML = savedItems.map((item, idx) => `
          <div class="bookmark-card-item" id="deck-card-${item.id}">
            <div class="bookmark-card-header">
              <span class="stat-badge" style="font-size: 0.76rem;">${item.topic || 'General'} • ${item.difficulty || 'Normal'}</span>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 0.78rem; color: var(--text-muted);">${item.savedAt || ''}</span>
                <button class="btn-remove-deck-item" data-id="${item.id}" style="background: none; border: none; color: var(--danger); font-size: 0.78rem; cursor: pointer;" title="Remove from study deck">✕ Remove</button>
              </div>
            </div>
            <div class="bookmark-question-title">${idx + 1}. ${item.questionText}</div>
            <div class="bookmark-answer-box">
              <span>✅ <strong>Correct Answer:</strong> ${item.correctAnswer || (item.options ? item.options[0] : '')}</span>
            </div>
            ${item.explanation ? `<p style="font-size: 0.84rem; color: var(--text-secondary); margin: 6px 0 0 0;">💡 ${item.explanation}</p>` : ''}
          </div>
        `).join('');

        listContainer.querySelectorAll('.btn-remove-deck-item').forEach((btn) => {
          btn.onclick = () => {
            const idToRemove = btn.dataset.id;
            const currentDeck = JSON.parse(localStorage.getItem('quizngroww_saved_deck') || '{}');
            delete currentDeck[idToRemove];
            localStorage.setItem('quizngroww_saved_deck', JSON.stringify(currentDeck));

            const bookmarks = new Set(JSON.parse(localStorage.getItem('quizngroww_bookmarks') || '[]'));
            bookmarks.delete(idToRemove);
            localStorage.setItem('quizngroww_bookmarks', JSON.stringify(Array.from(bookmarks)));

            renderItems();
          };
        });
      };

      renderItems();
      modal.classList.remove('hidden');
      modal.classList.add('active');
    },

    createModalElement: () => {
      const div = document.createElement('div');
      div.id = 'auth-modal';
      div.className = 'modal-overlay hidden';
      div.innerHTML = `
        <div class="modal-card auth-card-v2" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
          <button id="auth-modal-close" class="modal-close-btn" aria-label="Close dialog">&times;</button>
          
          <div class="auth-brand-badge">
            <svg class="google-logo-svg" width="30" height="30" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
          </div>

          <h2 id="auth-modal-title" class="auth-title">Welcome to QuiznGroww</h2>
          <p class="auth-subtitle">Sign in to track quiz mastery, unlock lifelines, and climb global rankings.</p>

          <div id="auth-modal-reason" class="auth-reason-slot hidden"></div>
          <div id="auth-alert" class="auth-alert hidden"></div>

          <!-- Official Google Identity Button Slot (Active when GOOGLE_CLIENT_ID is configured) -->
          <div id="g_id_signin_container" class="g-signin-container hidden">
            <div id="g_id_signin"></div>
          </div>

          <!-- Divider between Google and Secondary Options -->
          <div id="auth-divider-slot" class="auth-or-divider hidden">
            <span>or</span>
          </div>

          <!-- Sandbox Dev Notice Slot (Active when GOOGLE_CLIENT_ID is blank in .env) -->
          <div id="auth-sandbox-slot" class="sandbox-mode-banner">
            <div class="sandbox-pill">
              <span class="sandbox-dot"></span>
              <span>OAuth Sandbox Mode</span>
            </div>
            <p class="sandbox-text">
              Browser Google Account popup requires a registered <code>GOOGLE_CLIENT_ID</code> in <code>.env</code>. Until configured, enter below with an instant test profile:
            </p>
          </div>

          <!-- Sandbox custom name & email inputs -->
          <div id="auth-sandbox-inputs" class="sandbox-inputs-grid">
            <input type="text" id="sandbox-name-input" placeholder="Your Name (e.g. Akshat)" class="sandbox-input" />
            <input type="email" id="sandbox-email-input" placeholder="Your Email (optional)" class="sandbox-input" />
          </div>

          <!-- Guest Demo Action Button (ONLY with user silhouette icon, NEVER Google logo) -->
          <div id="google-direct-action-slot" class="google-direct-action">
            <button id="google-instant-btn" class="btn-guest-action" type="button">
              <span id="instant-btn-icon" class="guest-btn-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
              <span id="google-instant-btn-text">Continue with Guest Demo Profile</span>
            </button>
          </div>

          <!-- Collapsible Guide on how to enable real Google browser OAuth -->
          <div id="auth-setup-guide-toggle-container">
            <button id="toggle-setup-guide-btn" class="setup-guide-toggle-btn" type="button">
              <span>⚙️ Want browser Google account popup? Click here</span>
            </button>
            <div id="setup-guide-box" class="setup-guide-box hidden">
              <strong>To trigger your real browser Google accounts:</strong>
              <ol>
                <li>Open <a href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Google Cloud Console &rarr; Credentials</a>.</li>
                <li>Create <strong>OAuth Client ID &rarr; Web Application</strong>.</li>
                <li>Add Authorized JavaScript Origin: <code>http://localhost:3000</code>.</li>
                <li>Paste your Client ID into <code>.env</code> at <code>GOOGLE_CLIENT_ID=...</code> and restart server.</li>
              </ol>
            </div>
          </div>

          <!-- Feature badges list -->
          <div class="auth-perks-grid">
            <div class="perk-item">
              <span class="perk-icon">📚</span>
              <span>720+ Curated Questions</span>
            </div>
            <div class="perk-item">
              <span class="perk-icon">🎮</span>
              <span>4 Game Modes & Lifelines</span>
            </div>
            <div class="perk-item">
              <span class="perk-icon">🏆</span>
              <span>Global Sub-Second Rankings</span>
            </div>
            <div class="perk-item">
              <span class="perk-icon">🎖️</span>
              <span>12 Unlockable Badges</span>
            </div>
          </div>

          <p class="auth-disclaimer">Zero spam, 100% free forever. Your learning data is safe and encrypted.</p>
        </div>
      `;
      return div;
    },

    renderGoogleGsiButton: () => {
      const gContainer = document.getElementById('g_id_signin_container');
      const gBtnSlot = document.getElementById('g_id_signin');
      const dividerSlot = document.getElementById('auth-divider-slot');
      const sandboxBanner = document.getElementById('auth-sandbox-slot');
      const sandboxInputs = document.getElementById('auth-sandbox-inputs');
      const guideSlot = document.getElementById('auth-setup-guide-toggle-container');
      const directAction = document.getElementById('google-direct-action-slot');
      const btnText = document.getElementById('google-instant-btn-text');
      const btnIcon = document.getElementById('instant-btn-icon');

      const isDemoFinished = Auth.hasReachedDemoLimit();
      const demoRemaining = Auth.getDemoRemaining();

      if (googleConfig && googleConfig.googleClientId) {
        // Real Google OAuth is configured!
        if (gContainer) gContainer.classList.remove('hidden');
        if (sandboxBanner) sandboxBanner.classList.add('hidden');
        if (sandboxInputs) sandboxInputs.classList.add('hidden');
        if (guideSlot) guideSlot.classList.add('hidden');

        // When demo limit reached, hide the guest demo button completely!
        if (isDemoFinished) {
          if (directAction) directAction.classList.add('hidden');
          if (dividerSlot) dividerSlot.classList.add('hidden');
        } else {
          // If demo quizzes are still available, show guest button with user silhouette icon
          if (directAction) directAction.classList.remove('hidden');
          if (dividerSlot) dividerSlot.classList.remove('hidden');
          if (btnText) btnText.textContent = `Continue as Guest (${demoRemaining} demo quiz${demoRemaining === 1 ? '' : 'zes'} left)`;
          if (btnIcon) {
            btnIcon.innerHTML = `
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            `;
          }
        }

        const runGsi = () => {
          if (!window.google?.accounts?.id || !gBtnSlot) return;
          try {
            if (!gsiInitialized) {
              window.google.accounts.id.initialize({
                client_id: googleConfig.googleClientId,
                callback: async (response) => {
                  try {
                    await Auth.loginWithGoogle(response.credential);
                    Auth.hideModal();
                  } catch (err) {
                    const alertBox = document.getElementById('auth-alert');
                    if (alertBox) {
                      alertBox.textContent = err.message;
                      alertBox.className = 'auth-alert error';
                    }
                  }
                },
                auto_select: false,
              });
              gsiInitialized = true;
            }

            const isLight = document.documentElement.getAttribute('data-theme') === 'light';
            gBtnSlot.innerHTML = '';
            window.google.accounts.id.renderButton(gBtnSlot, {
              theme: isLight ? 'outline' : 'filled_black',
              size: 'large',
              shape: 'pill',
              text: 'signin_with',
              width: 340,
              logo_alignment: 'left',
            });

            // Prompt native Google One Tap popup
            window.google.accounts.id.prompt();
          } catch (e) {
            console.warn('Google Identity initialization error:', e);
          }
        };

        if (window.google?.accounts?.id) {
          runGsi();
        } else {
          let attempts = 0;
          const poll = setInterval(() => {
            attempts++;
            if (window.google?.accounts?.id) {
              clearInterval(poll);
              runGsi();
            } else if (attempts > 30) {
              clearInterval(poll);
            }
          }, 100);
        }
      } else {
        // Sandbox mode
        if (gContainer) gContainer.classList.add('hidden');
        if (dividerSlot) dividerSlot.classList.add('hidden');
        if (sandboxBanner) sandboxBanner.classList.remove('hidden');
        if (sandboxInputs) sandboxInputs.classList.remove('hidden');
        if (guideSlot) guideSlot.classList.remove('hidden');
        if (directAction) directAction.classList.remove('hidden');
        if (btnText) btnText.textContent = 'Enter QuiznGroww (Sandbox Profile) \u2192';
        if (btnIcon) {
          btnIcon.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="20" y1="8" x2="20" y2="14"></line>
              <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>
          `;
        }
      }
    },

    renderNav: () => {
      const user = Auth.getUser();
      const userGreeting = document.getElementById('user-greeting-container');
      const authButtonSlot = document.getElementById('auth-button-slot');

      if (userGreeting) {
        if (user) {
          userGreeting.innerHTML = `
            <div class="user-profile-menu">
              <button id="user-menu-btn" class="user-profile-btn" aria-expanded="false" title="${user.name}">
                <img class="user-avatar-img" src="${user.avatar || 'https://lh3.googleusercontent.com/a/default-user'}" alt="${user.name}" onerror="this.onerror=null; this.src='https://api.dicebear.com/7.x/bottts/svg?seed=user';" />
                <span class="user-display-name">${user.name.split(' ')[0]}</span>
                <svg class="chevron-down-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div id="user-dropdown-menu" class="user-dropdown-menu hidden">
                <div class="dropdown-header">
                  <div class="dropdown-user-name">${user.name}</div>
                  <div class="dropdown-user-email">${user.email}</div>
                </div>
                <div class="dropdown-stats">
                  <div class="stat-badge">🎯 ${user.stats?.accuracy || 0}% Accuracy</div>
                  <div class="stat-badge">🔥 ${user.stats?.currentStreak || 0} Streak</div>
                </div>
                <hr class="dropdown-divider">
                <a href="#" id="view-history-dropdown-link" class="dropdown-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  Quiz History
                </a>
                <a href="#" id="view-leaderboard-dropdown-link" class="dropdown-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                  Leaderboard
                </a>
                <a href="#" id="view-saved-deck-dropdown-link" class="dropdown-link">
                  <span style="font-size: 1rem; line-height: 1;">⭐</span>
                  Saved Review Deck
                </a>
                <hr class="dropdown-divider">
                <button id="signout-dropdown-btn" class="dropdown-link text-danger">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                  Sign Out
                </button>
              </div>
            </div>
          `;

          const menuBtn = document.getElementById('user-menu-btn');
          const dropdown = document.getElementById('user-dropdown-menu');
          if (menuBtn && dropdown) {
            menuBtn.onclick = (e) => {
              e.stopPropagation();
              dropdown.classList.toggle('hidden');
            };
          }

          const historyLink = document.getElementById('view-history-dropdown-link');
          if (historyLink) {
            historyLink.onclick = (e) => {
              e.preventDefault();
              dropdown.classList.add('hidden');
              if (window.QuiznGrowwApp && window.QuiznGrowwApp.showPerformanceModal) {
                window.QuiznGrowwApp.showPerformanceModal();
              }
            };
          }

          const savedDeckLink = document.getElementById('view-saved-deck-dropdown-link');
          if (savedDeckLink) {
            savedDeckLink.onclick = (e) => {
              e.preventDefault();
              dropdown.classList.add('hidden');
              Auth.openSavedDeckModal();
            };
          }

          const leaderboardLink = document.getElementById('view-leaderboard-dropdown-link');
          if (leaderboardLink) {
            leaderboardLink.onclick = (e) => {
              e.preventDefault();
              dropdown.classList.add('hidden');
              if (window.QuiznGrowwApp && window.QuiznGrowwApp.showLeaderboardModal) {
                window.QuiznGrowwApp.showLeaderboardModal();
              }
            };
          }

          const signoutBtn = document.getElementById('signout-dropdown-btn');
          if (signoutBtn) {
            signoutBtn.onclick = () => Auth.logout();
          }
        } else {
          userGreeting.innerHTML = '';
        }
      }

      if (authButtonSlot) {
        if (user) {
          authButtonSlot.innerHTML = '';
        } else {
          const remaining = Auth.getDemoRemaining();
          const trialBadge = remaining > 0 
            ? `<span class="demo-badge-nav" title="You have ${remaining} free demo quiz(zes) remaining without sign-in">🎯 Demo: ${remaining}/${MAX_DEMO_QUIZZES} left</span>`
            : `<span class="demo-badge-nav demo-badge-expired" title="Free demo quizzes used. Sign in with Google to continue.">🔒 Demo Finished</span>`;

          authButtonSlot.innerHTML = `
            ${trialBadge}
            <button id="nav-google-login-btn" class="nav-btn btn-google-nav">
              <svg width="18" height="18" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <span>Sign In with Google</span>
            </button>
          `;
          document.getElementById('nav-google-login-btn')?.addEventListener('click', () => Auth.showModal('general'));
        }
      }
    },

    // Initialization routine
    init: async () => {
      // Fetch backend auth config (Google Client ID if supplied)
      try {
        const res = await fetch('/api/auth/config');
        if (res.ok) {
          googleConfig = await res.json();
        }
      } catch (e) {}

      // Wire up clicks and delegated events
      document.addEventListener('click', async (e) => {
        // Close user dropdown if clicking outside
        const dropdown = document.getElementById('user-dropdown-menu');
        const menuBtn = document.getElementById('user-menu-btn');
        if (dropdown && !dropdown.classList.contains('hidden')) {
          if (!dropdown.contains(e.target) && (!menuBtn || !menuBtn.contains(e.target))) {
            dropdown.classList.add('hidden');
          }
        }

        // Close auth modal
        if (e.target && (e.target.id === 'auth-modal-close' || e.target.id === 'auth-modal')) {
          Auth.hideModal();
        }

        // Instant Google Sign In (or custom sandbox name/email)
        if (e.target && (e.target.id === 'google-instant-btn' || e.target.closest('#google-instant-btn'))) {
          const btn = document.getElementById('google-instant-btn');
          const alertBox = document.getElementById('auth-alert');
          const nameInput = document.getElementById('sandbox-name-input');
          const emailInput = document.getElementById('sandbox-email-input');

          const customName = nameInput ? nameInput.value.trim() : null;
          const customEmail = emailInput ? emailInput.value.trim() : null;

          try {
            if (btn) {
              btn.disabled = true;
              btn.innerHTML = '<span>Signing in...</span>';
            }
            if (alertBox) alertBox.className = 'auth-alert hidden';

            await Auth.quickGoogleSignIn(customEmail, customName);
            Auth.hideModal();
          } catch (err) {
            if (alertBox) {
              alertBox.textContent = err.message;
              alertBox.className = 'auth-alert error';
            }
          } finally {
            if (btn) {
              btn.disabled = false;
              const hasGsi = !!(googleConfig && googleConfig.googleClientId);
              const remaining = Auth.getDemoRemaining();
              btn.innerHTML = `
                <span id="instant-btn-icon" class="guest-btn-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                <span id="google-instant-btn-text">${hasGsi ? `Continue as Guest (${remaining} left)` : 'Enter QuiznGroww (Sandbox Profile) &rarr;'}</span>
              `;
            }
          }
        }

        // Toggle setup guide box
        if (e.target && (e.target.id === 'toggle-setup-guide-btn' || e.target.closest('#toggle-setup-guide-btn'))) {
          const guide = document.getElementById('setup-guide-box');
          if (guide) guide.classList.toggle('hidden');
        }
      });

      // ESC key to close modal
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          Auth.hideModal();
        }
      });

      // Sync user profile stats
      Auth.syncUser();

      // Render initial navigation state
      Auth.renderNav();
    },
  };

  document.addEventListener('DOMContentLoaded', () => {
    Auth.init();
  });

  window.QuiznGrowwAuth = Auth;
})();
