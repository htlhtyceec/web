/**
 * HỆ THỐNG ÂM THANH WEB AUDIO API CHUYÊN BIỆT CHO DI ĐỘNG & DESKTOP
 * Tối ưu hóa 100% cho iPhone (iOS Safari) & Android (Chrome, Samsung Internet)
 * CHINH PHỤC 7 HẰNG ĐẲNG THỨC - LỚP TOÁN EEC (0829120482)
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.bgmPlaying = false;
    this.bgmTimer = null;
    this.isUnlocked = false;

    // Đọc trạng thái mute từ localStorage
    try {
      const savedMute = localStorage.getItem("eec_math_sound_muted");
      if (savedMute !== null) {
        this.isMuted = JSON.parse(savedMute);
      }
    } catch (e) {
      console.warn("Could not read sound preference", e);
    }

    // Tự động mở khóa âm thanh trên iOS / Android ngay khi có tương tác đầu tiên
    this.setupMobileUnlocker();
  }

  // Khởi tạo và resume AudioContext
  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
  }

  // Mở khóa AudioContext cho iOS Safari & Android
  setupMobileUnlocker() {
    const unlockEvents = ["touchstart", "touchend", "pointerdown", "mousedown", "keydown"];
    const unlock = () => {
      this.initContext();
      if (this.ctx) {
        // Phát một buffer rỗng để kích hoạt phần cứng âm thanh của iOS
        try {
          const buffer = this.ctx.createBuffer(1, 1, 22050);
          const source = this.ctx.createBufferSource();
          source.buffer = buffer;
          source.connect(this.ctx.destination);
          source.start(0);
        } catch (e) {}

        if (this.ctx.state === "running") {
          this.isUnlocked = true;
          unlockEvents.forEach(evt => document.removeEventListener(evt, unlock));
        }
      }
    };

    unlockEvents.forEach(evt => {
      document.addEventListener(evt, unlock, { once: false, passive: true });
    });
  }

  toggleSound() {
    this.isMuted = !this.isMuted;
    try {
      localStorage.setItem("eec_math_sound_muted", JSON.stringify(this.isMuted));
    } catch (e) {}

    if (this.isMuted) {
      this.stopBGM();
    }
    return !this.isMuted;
  }

  // Rung phản hồi nhẹ cho Android (Haptic Feedback)
  vibrate(pattern = 15) {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      try {
        navigator.vibrate(pattern);
      } catch (e) {}
    }
  }

  // Âm thanh khi bấm nút click
  playClick() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(520, t);
      osc.frequency.exponentialRampToValueAtTime(880, t + 0.04);

      gain.gain.setValueAtTime(0.08, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.04);
    } catch (e) {}
  }

  // Âm thanh "Ting" khi trả lời ĐÚNG (trong trẻo, tươi sáng)
  playCorrect() {
    this.vibrate(20);
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const notes = [
        { freq: 1046.5, start: 0, dur: 0.12 }, // C6
        { freq: 1318.5, start: 0.08, dur: 0.35 } // E6
      ];

      notes.forEach(n => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(n.freq, t + n.start);

        gain.gain.setValueAtTime(0.2, t + n.start);
        gain.gain.exponentialRampToValueAtTime(0.001, t + n.start + n.dur);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t + n.start);
        osc.stop(t + n.start + n.dur);
      });
    } catch (e) {}
  }

  // Âm thanh khi trả lời SAI (ấm nhẹ, êm tai, không gây chói)
  playWrong() {
    this.vibrate([30, 40, 30]);
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(260, t);
      osc.frequency.exponentialRampToValueAtTime(180, t + 0.25);

      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.25);
    } catch (e) {}
  }

  // Âm thanh COMBO LEVEL UP
  playCombo(level = 2) {
    this.vibrate([15, 30, 15, 30, 20]);
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const baseFreq = 523.25; // C5
      const steps = [0, 4, 7, 12]; // Major arpeggio C - E - G - C6

      steps.forEach((semi, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const freq = baseFreq * Math.pow(2, semi / 12);

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, t + i * 0.06);

        gain.gain.setValueAtTime(0.18, t + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.06 + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t + i * 0.06);
        osc.stop(t + i * 0.06 + 0.25);
      });
    } catch (e) {}
  }

  // Âm thanh HỒI TIM
  playHeartRecover() {
    this.vibrate([20, 50, 20]);
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const freqs = [659.25, 880, 1046.5]; // E5, A5, C6
      freqs.forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(f, t + idx * 0.1);
        gain.gain.setValueAtTime(0.2, t + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.1 + 0.3);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t + idx * 0.1);
        osc.stop(t + idx * 0.1 + 0.3);
      });
    } catch (e) {}
  }

  // Âm thanh hoàn thành 1 CHẶNG
  playStageClear() {
    this.vibrate([40, 60, 40, 60, 80]);
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const notes = [392, 523.25, 659.25, 783.99]; // G4 -> C5 -> E5 -> G5
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = idx === notes.length - 1 ? "triangle" : "sine";
        osc.frequency.setValueAtTime(freq, t + idx * 0.12);

        gain.gain.setValueAtTime(0.22, t + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.12 + (idx === notes.length - 1 ? 0.6 : 0.2));

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t + idx * 0.12);
        osc.stop(t + idx * 0.12 + (idx === notes.length - 1 ? 0.6 : 0.2));
      });
    } catch (e) {}
  }

  // Âm thanh HOÀN THÀNH GAME / ĐẠT HUY HIỆU BẬC THẦY (Fanfare)
  playVictoryFanfare() {
    this.vibrate([50, 50, 50, 50, 100, 50, 200]);
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const fanfare = [
        { f: 523.25, time: 0.0, dur: 0.15 },
        { f: 523.25, time: 0.15, dur: 0.15 },
        { f: 523.25, time: 0.30, dur: 0.15 },
        { f: 659.25, time: 0.45, dur: 0.40 },
        { f: 587.33, time: 0.85, dur: 0.20 },
        { f: 783.99, time: 1.05, dur: 0.80 }
      ];

      fanfare.forEach(item => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(item.f, t + item.time);

        gain.gain.setValueAtTime(0.25, t + item.time);
        gain.gain.exponentialRampToValueAtTime(0.001, t + item.time + item.dur);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t + item.time);
        osc.stop(t + item.time + item.dur);
      });
    } catch (e) {}
  }

  // Nhạc nền nhẹ nhàng, êm dịu
  startBGM() {
    if (this.isMuted || this.bgmPlaying) return;
    this.initContext();
    if (!this.ctx) return;

    this.bgmPlaying = true;
    const chords = [
      [261.63, 329.63, 392.00],
      [220.00, 261.63, 329.63],
      [174.61, 220.00, 261.63],
      [196.00, 246.94, 293.66]
    ];

    let chordIdx = 0;
    const playNextChord = () => {
      if (!this.bgmPlaying || this.isMuted || !this.ctx) return;
      try {
        const t = this.ctx.currentTime;
        const curChord = chords[chordIdx];
        curChord.forEach(f => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(f * 2, t);

          gain.gain.setValueAtTime(0.015, t);
          gain.gain.exponentialRampToValueAtTime(0.0001, t + 2.2);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(t);
          osc.stop(t + 2.2);
        });

        chordIdx = (chordIdx + 1) % chords.length;
        this.bgmTimer = setTimeout(playNextChord, 2200);
      } catch (e) {}
    };

    playNextChord();
  }

  stopBGM() {
    this.bgmPlaying = false;
    if (this.bgmTimer) {
      clearTimeout(this.bgmTimer);
      this.bgmTimer = null;
    }
  }

  toggleBGM() {
    if (this.bgmPlaying) {
      this.stopBGM();
      return false;
    } else {
      this.startBGM();
      return true;
    }
  }
}

// Khởi tạo đối tượng toàn cục
window.soundEngine = new SoundEngine();
