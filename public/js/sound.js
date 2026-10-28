/**
 * QuiznGroww Web Audio Synthesizer
 * Generates instant, high-fidelity sound effects without external audio files.
 */
(function () {
  let audioCtx = null;
  const STORAGE_KEY = 'quizngroww-sound-muted';
  let isMuted = localStorage.getItem(STORAGE_KEY) === 'true';

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  const Sound = {
    isMuted: () => isMuted,

    toggleMute: () => {
      isMuted = !isMuted;
      localStorage.setItem(STORAGE_KEY, String(isMuted));
      Sound.updateMuteButtons();
      return isMuted;
    },

    updateMuteButtons: () => {
      document.querySelectorAll('.sound-toggle-btn').forEach((btn) => {
        btn.setAttribute('aria-label', isMuted ? 'Unmute Sound' : 'Mute Sound');
        const onIcon = btn.querySelector('.sound-icon-on');
        const offIcon = btn.querySelector('.sound-icon-off');
        if (onIcon && offIcon) {
          onIcon.style.display = isMuted ? 'none' : 'block';
          offIcon.style.display = isMuted ? 'block' : 'none';
        }
      });
    },

    click: () => {
      if (isMuted) return;
      const ctx = getAudioContext();
      if (!ctx) return;
      try {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      } catch (e) {}
    },

    correct: () => {
      if (isMuted) return;
      const ctx = getAudioContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime;
        // Two-tone rising major third chord
        [523.25, 659.25, 783.99].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          gain.gain.setValueAtTime(0.2, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.3);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.3);
        });
      } catch (e) {}
    },

    wrong: () => {
      if (isMuted) return;
      const ctx = getAudioContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime;
        // Low discordant buzz
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(110, now + 0.25);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      } catch (e) {}
    },

    tick: () => {
      if (isMuted) return;
      const ctx = getAudioContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(950, now);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.03);
      } catch (e) {}
    },

    fanfare: () => {
      if (isMuted) return;
      const ctx = getAudioContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime;
        const notes = [392, 523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          const start = now + idx * 0.1;
          const dur = idx === notes.length - 1 ? 0.6 : 0.18;
          osc.frequency.setValueAtTime(freq, start);
          gain.gain.setValueAtTime(0.25, start);
          gain.gain.exponentialRampToValueAtTime(0.001, start + dur);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(start);
          osc.stop(start + dur);
        });
      } catch (e) {}
    },

    init: () => {
      Sound.updateMuteButtons();
      document.querySelectorAll('.sound-toggle-btn').forEach((btn) => {
        btn.onclick = () => Sound.toggleMute();
      });
    },
  };

  window.QuiznGrowwSound = Sound;

  document.addEventListener('DOMContentLoaded', () => {
    Sound.init();
  });
})();
