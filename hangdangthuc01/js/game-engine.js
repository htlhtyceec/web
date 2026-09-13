/**
 * GAME ENGINE - QUẢN LÝ TRẠNG THÁI & LOGIC TRÒ CHƠI
 * CHINH PHỤC 7 HẰNG ĐẲNG THỨC - LỚP TOÁN EEC (0829120482)
 */

class GameEngine {
  constructor() {
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.hearts = 5;
    this.maxHearts = 5;
    this.currentMode = "campaign"; // campaign, remedial, bug_hunter, speed60, match_pairs, review_mistakes
    this.currentStage = 1;
    this.currentQuestionIndex = 0;
    this.questionList = [];
    this.currentQuestion = null;
    this.mistakeHistory = []; // Lưu lại câu sai trong phiên để ôn lại
    this.spacedRepetitionQueue = []; // Hàng đợi câu ôn ngắt quãng

    // Thống kê phiên chơi
    this.stats = {
      totalAnswered: 0,
      totalCorrect: 0,
      totalWrong: 0,
      startTime: null,
      endTime: null,
      mistakeIdentityIds: new Set()
    };

    // Quản lý chế độ 60 giây
    this.speedTimer = null;
    this.speedTimeLeft = 60;

    // Quản lý chế độ Cứu Mất Gốc (5 Bước)
    this.remedialState = {
      currentIdentityId: 1,
      currentStep: 1, // 1: xem công thức, 2: mẹo nhớ, 3: 3 câu dễ, 4: 3 câu nhận biết, 5: 2 câu vận dụng
      subStepIndex: 0,
      correctCount: 0,
      totalCount: 0
    };

    // Trạng thái khôi phục tim khi hết tim
    this.isRecoveringHearts = false;
    this.recoveryCount = 0;

    // Tải dữ liệu tiến trình từ localStorage
    this.loadProgress();
  }

  // Tải tiến trình đã lưu
  loadProgress() {
    try {
      const saved = localStorage.getItem("eec_math_progress");
      if (saved) {
        this.progress = JSON.parse(saved);
      } else {
        this.progress = {
          unlockedStage: 1,
          highScore: 0,
          bestBadge: null,
          totalGamesPlayed: 0,
          clearedStages: []
        };
      }
    } catch (e) {
      this.progress = {
        unlockedStage: 1,
        highScore: 0,
        bestBadge: null,
        totalGamesPlayed: 0,
        clearedStages: []
      };
    }
  }

  // Lưu tiến trình vào localStorage
  saveProgress() {
    try {
      localStorage.setItem("eec_math_progress", JSON.stringify(this.progress));
    } catch (e) {}
  }

  // Bắt đầu một chế độ chơi mới
  startMode(mode, options = {}) {
    this.currentMode = mode;
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.hearts = this.maxHearts;
    this.currentQuestionIndex = 0;
    this.isRecoveringHearts = false;
    this.recoveryCount = 0;

    this.stats = {
      totalAnswered: 0,
      totalCorrect: 0,
      totalWrong: 0,
      startTime: Date.now(),
      endTime: null,
      mistakeIdentityIds: new Set()
    };

    if (mode === "campaign") {
      this.currentStage = options.stage || 1;
      this.prepareStageQuestions(this.currentStage);
    } else if (mode === "remedial") {
      this.remedialState.currentIdentityId = options.identityId || 1;
      this.remedialState.currentStep = 1;
      this.remedialState.correctCount = 0;
      this.remedialState.totalCount = 0;
      this.prepareRemedialQuestions(this.remedialState.currentIdentityId);
    } else if (mode === "bug_hunter") {
      this.prepareBugHunterQuestions();
    } else if (mode === "speed60") {
      this.prepareSpeedQuestions();
      this.startSpeedTimer();
    } else if (mode === "review_mistakes") {
      this.prepareReviewMistakesQuestions();
    }

    this.nextQuestion();
  }

  // Chuẩn bị câu hỏi cho Chặng Hành Trình
  prepareStageQuestions(stageNumber) {
    let rawQuestions = [];
    if (stageNumber === 8) {
      // Chặng Boss - Trộn các câu khó từ tất cả các HĐT
      rawQuestions = MATH_DATA.questions.filter(q => q.stage === 8 || (q.level === 3 && q.stage <= 7));
      rawQuestions = this.shuffleArray(rawQuestions).slice(0, 10);
    } else {
      // Chặng 1 đến 7
      rawQuestions = MATH_DATA.questions.filter(q => q.stage === stageNumber);
      // Sắp xếp tăng dần theo level (Level 1 trước -> Level 2 -> Level 3)
      rawQuestions.sort((a, b) => a.level - b.level);
    }

    this.questionList = rawQuestions.map(q => this.cloneAndShuffleOptions(q));
  }

  // Chuẩn bị câu hỏi cho Cứu Mất Gốc
  prepareRemedialQuestions(identityId) {
    const idQuestions = MATH_DATA.questions.filter(q => q.identityId === identityId && q.stage !== "hunter" && q.stage !== "speed");
    const l1 = this.shuffleArray(idQuestions.filter(q => q.level === 1)).slice(0, 3);
    const l2 = this.shuffleArray(idQuestions.filter(q => q.level === 2)).slice(0, 3);
    const l3 = this.shuffleArray(idQuestions.filter(q => q.level === 3)).slice(0, 2);

    const questions = [...l1, ...l2, ...l3];
    this.questionList = questions.map(q => this.cloneAndShuffleOptions(q));
  }

  // Chuẩn bị câu hỏi cho Thợ Săn Lỗi Sai
  prepareBugHunterQuestions() {
    const hunterQuestions = MATH_DATA.questions.filter(q => q.stage === "hunter" || q.type === "find_error" || q.type === "bug_hunt");
    const shuffled = this.shuffleArray(hunterQuestions);
    this.questionList = shuffled.slice(0, 10).map(q => this.cloneAndShuffleOptions(q));
  }

  // Chuẩn bị câu hỏi cho Đấu 60 Giây
  prepareSpeedQuestions() {
    const speedPool = MATH_DATA.questions.filter(q => q.stage === "speed" || q.type === "fast_reflex" || q.level === 1);
    this.questionList = this.shuffleArray(speedPool).map(q => this.cloneAndShuffleOptions(q));
  }

  // Chuẩn bị câu hỏi Ôn Tập Câu Sai
  prepareReviewMistakesQuestions() {
    if (this.mistakeHistory.length === 0) {
      // Nếu chưa có câu sai, lấy ngẫu nhiên 5 câu bẫy dấu hay sai nhất
      const trapPool = MATH_DATA.questions.filter(q => q.type === "sign_trap" || q.type === "find_error");
      this.questionList = this.shuffleArray(trapPool).slice(0, 6).map(q => this.cloneAndShuffleOptions(q));
    } else {
      this.questionList = this.mistakeHistory.map(q => this.cloneAndShuffleOptions(q));
    }
  }

  // Bắt đầu đếm ngược 60s
  startSpeedTimer() {
    this.speedTimeLeft = 60;
    if (this.speedTimer) clearInterval(this.speedTimer);

    this.speedTimer = setInterval(() => {
      this.speedTimeLeft--;
      if (typeof this.onTimerTick === "function") {
        this.onTimerTick(this.speedTimeLeft);
      }
      if (this.speedTimeLeft <= 0) {
        clearInterval(this.speedTimer);
        this.speedTimer = null;
        if (typeof this.onTimeUp === "function") {
          this.onTimeUp();
        }
      }
    }, 1000);
  }

  stopSpeedTimer() {
    if (this.speedTimer) {
      clearInterval(this.speedTimer);
      this.speedTimer = null;
    }
  }

  // Sao chép và xáo trộn các lựa chọn đáp án, giữ nguyên vị trí đúng chuẩn
  cloneAndShuffleOptions(q) {
    const cloned = { ...q };
    const originalOptions = [...q.options];
    const correctOptionText = originalOptions[q.correctIndex];

    // Tạo danh sách chỉ số và xáo trộn
    const indices = originalOptions.map((_, i) => i);
    const shuffledIndices = this.shuffleArray(indices);

    cloned.options = shuffledIndices.map(i => originalOptions[i]);
    cloned.correctIndex = cloned.options.indexOf(correctOptionText);
    return cloned;
  }

  shuffleArray(arr) {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Chuyển sang câu hỏi tiếp theo
  nextQuestion() {
    // Nếu đang trong hàng đợi Spaced Repetition, lấy câu ôn lại trước
    if (this.spacedRepetitionQueue.length > 0 && Math.random() < 0.35 && !this.isRecoveringHearts) {
      this.currentQuestion = this.spacedRepetitionQueue.shift();
      return this.currentQuestion;
    }

    if (this.currentQuestionIndex < this.questionList.length) {
      this.currentQuestion = this.questionList[this.currentQuestionIndex];
      this.currentQuestionIndex++;
      return this.currentQuestion;
    } else {
      // Hết danh sách câu hỏi trong chặng/chế độ
      this.currentQuestion = null;
      return null;
    }
  }

  // Xử lý khi người dùng chọn một đáp án
  submitAnswer(selectedIndex) {
    if (!this.currentQuestion) return null;

    const isCorrect = selectedIndex === this.currentQuestion.correctIndex;
    this.stats.totalAnswered++;

    if (isCorrect) {
      this.stats.totalCorrect++;
      this.streak++;
      if (this.streak > this.maxStreak) {
        this.maxStreak = this.streak;
      }

      // Tính điểm với hệ số Combo
      let basePoints = 10;
      let comboMultiplier = 1;
      if (this.streak >= 10) comboMultiplier = 3;
      else if (this.streak >= 5) comboMultiplier = 2.5;
      else if (this.streak >= 3) comboMultiplier = 2;

      const gainedScore = Math.round(basePoints * comboMultiplier);
      this.score += gainedScore;

      // Xử lý chế độ Hồi Tim (khi làm mini 3 câu để hồi tim)
      if (this.isRecoveringHearts) {
        this.recoveryCount++;
        if (this.recoveryCount >= 3) {
          this.hearts = Math.min(this.maxHearts, this.hearts + 2);
          this.isRecoveringHearts = false;
          this.recoveryCount = 0;
        }
      }

      // Xử lý chế độ Cứu Mất Gốc
      if (this.currentMode === "remedial") {
        this.remedialState.correctCount++;
      }

      return {
        isCorrect: true,
        gainedScore,
        currentScore: this.score,
        streak: this.streak,
        explanation: this.currentQuestion.explanation,
        correctIndex: this.currentQuestion.correctIndex,
        isRecoveredHearts: !this.isRecoveringHearts && this.recoveryCount === 0 && this.hearts > 0
      };
    } else {
      // Trả lời SAI
      this.stats.totalWrong++;
      this.streak = 0;

      // Giảm 1 tim (nếu không phải đang trong chế độ luyện hồi tim)
      if (!this.isRecoveringHearts && this.currentMode !== "speed60") {
        this.hearts = Math.max(0, this.hearts - 1);
      }

      // Lưu lại câu hỏi sai vào lịch sử phiên
      this.mistakeHistory.push(this.currentQuestion);
      if (this.currentQuestion.identityId) {
        this.stats.mistakeIdentityIds.add(this.currentQuestion.identityId);
      }

      // Thêm câu tương tự vào hàng đợi Spaced Repetition (sau 2-4 câu nữa xuất hiện lại)
      const similarQ = this.findSimilarQuestion(this.currentQuestion);
      if (similarQ) {
        this.spacedRepetitionQueue.push(this.cloneAndShuffleOptions(similarQ));
      }

      return {
        isCorrect: false,
        gainedScore: 0,
        currentScore: this.score,
        streak: 0,
        heartsLeft: this.hearts,
        isOutOfHearts: this.hearts <= 0,
        explanation: this.currentQuestion.explanation,
        correctIndex: this.currentQuestion.correctIndex
      };
    }
  }

  // Tìm một câu tương tự về cùng hằng đẳng thức để ôn lại ngắt quãng
  findSimilarQuestion(question) {
    const candidates = MATH_DATA.questions.filter(
      q => q.identityId === question.identityId && q.id !== question.id
    );
    if (candidates.length > 0) {
      return candidates[Math.floor(Math.random() * candidates.length)];
    }
    return null;
  }

  // Khởi động chế độ Hồi Sinh / Hồi Tim khi học sinh hết tim
  startHeartRecovery() {
    this.isRecoveringHearts = true;
    this.recoveryCount = 0;
    // Lấy 3 câu hỏi mức 1 cực dễ
    const easyPool = MATH_DATA.questions.filter(q => q.level === 1 && q.type === "formula");
    this.questionList = this.shuffleArray(easyPool).slice(0, 3).map(q => this.cloneAndShuffleOptions(q));
    this.currentQuestionIndex = 0;
    return this.nextQuestion();
  }

  // Tính toán kết quả tổng kết & xếp hạng huy hiệu
  calculateSummary() {
    this.stats.endTime = Date.now();
    const durationSeconds = Math.round(((this.stats.endTime - this.stats.startTime) || 1000) / 1000);
    const accuracy = this.stats.totalAnswered > 0
      ? Math.round((this.stats.totalCorrect / this.stats.totalAnswered) * 100)
      : 0;

    // Tìm huy hiệu tương ứng
    let awardedBadge = MATH_DATA.badges[MATH_DATA.badges.length - 1];
    for (let badge of MATH_DATA.badges) {
      if (accuracy >= badge.minPercent) {
        awardedBadge = badge;
        break;
      }
    }

    // Danh sách tên các công thức học sinh còn sai cần ôn
    const mistakeNames = [];
    this.stats.mistakeIdentityIds.forEach(id => {
      const ident = MATH_DATA.identities.find(i => i.id === id);
      if (ident) mistakeNames.push(ident.name);
    });

    // Cập nhật kỷ lục cá nhân
    if (this.score > this.progress.highScore) {
      this.progress.highScore = this.score;
    }
    this.progress.bestBadge = awardedBadge.name;
    this.progress.totalGamesPlayed++;

    if (this.currentMode === "campaign" && accuracy >= 60) {
      if (!this.progress.clearedStages.includes(this.currentStage)) {
        this.progress.clearedStages.push(this.currentStage);
      }
      if (this.currentStage >= this.progress.unlockedStage && this.progress.unlockedStage < 8) {
        this.progress.unlockedStage = this.currentStage + 1;
      }
    }

    this.saveProgress();

    return {
      score: this.score,
      totalCorrect: this.stats.totalCorrect,
      totalWrong: this.stats.totalWrong,
      totalAnswered: this.stats.totalAnswered,
      accuracy,
      maxStreak: this.maxStreak,
      durationSeconds,
      badge: awardedBadge,
      mistakeNames,
      unlockedStage: this.progress.unlockedStage
    };
  }
}

// Gán vào window
window.gameEngine = new GameEngine();
