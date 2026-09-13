/**
 * APP CONTROLLER & GIAO DIỆN TƯƠNG TÁC
 * CHINH PHỤC 7 HẰNG ĐẲNG THỨC - LỚP TOÁN EEC (0829120482)
 */

document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const screens = {
    home: document.getElementById("screen-home"),
    stages: document.getElementById("screen-stages"),
    arena: document.getElementById("screen-arena"),
    remedialGuide: document.getElementById("screen-remedial-guide"),
    matchPair: document.getElementById("screen-match-pair"),
    summary: document.getElementById("screen-summary")
  };

  // Modals
  const modals = {
    tips: document.getElementById("modal-tips"),
    powers: document.getElementById("modal-powers"),
    rescue: document.getElementById("modal-rescue"),
    classInfo: document.getElementById("modal-class-info")
  };

  // Stats elements
  const elScore = document.getElementById("stat-score");
  const elStreak = document.getElementById("stat-streak");
  const elHearts = document.getElementById("stat-hearts");
  const elStageTag = document.getElementById("arena-stage-tag");
  const elProgressBar = document.getElementById("arena-progress-fill");

  // Speed timer elements
  const elSpeedWrap = document.getElementById("speed-timer-container");
  const elSpeedFill = document.getElementById("speed-timer-fill");
  const elSpeedText = document.getElementById("speed-timer-text");

  // Question Elements
  const elQuestionType = document.getElementById("q-type-badge");
  const elAuthorNote = document.getElementById("q-author-note");
  const elQuestionPrompt = document.getElementById("q-prompt");
  const elOptionsContainer = document.getElementById("q-options-container");
  const elFeedbackBox = document.getElementById("q-feedback-box");
  const elFeedbackTitle = document.getElementById("feedback-title");
  const elFeedbackText = document.getElementById("feedback-explanation");
  const elBtnNext = document.getElementById("btn-next-question");
  const elBtnRetry = document.getElementById("btn-retry-question");

  // Confetti Canvas
  const confettiCanvas = document.getElementById("confetti-canvas");
  const confettiCtx = confettiCanvas ? confettiCanvas.getContext("2d") : null;

  let isAnsweringBlocked = false;

  // =========================================================================
  // HÀM HELPER RENDER TOÁN HỌC BẰNG KATEX HOẶC REGEX ĐẸP MẮT
  // =========================================================================
  function formatMath(text) {
    if (!text) return "";
    // Thay thế các công thức đặt trong dấu $...$
    return text.replace(/\$([^\$]+)\$/g, (match, formula) => {
      if (window.katex) {
        try {
          return window.katex.renderToString(formula, { throwOnError: false, displayMode: false });
        } catch (e) {
          return `<span class="math-tex">${formatTextMathFallback(formula)}</span>`;
        }
      }
      return `<span class="math-tex">${formatTextMathFallback(formula)}</span>`;
    });
  }

  function formatTextMathFallback(str) {
    return str
      .replace(/\^2/g, "²")
      .replace(/\^3/g, "³")
      .replace(/\\cdot/g, "·")
      .replace(/\\times/g, "×")
      .replace(/\\pm/g, "±")
      .replace(/\\underline\{\\quad\\quad\}/g, "______")
      .replace(/\\underline\{\\quad\}/g, "___")
      .replace(/\\frac\{1\}\{2\}/g, "½")
      .replace(/\\frac\{1\}\{4\}/g, "¼");
  }

  function updateMathInContainer(container) {
    if (!container) return;
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(container, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
          ],
          throwOnError: false
        });
      } catch (e) {}
    }
  }

  // =========================================================================
  // ĐIỀU HƯỚNG MÀN HÌNH
  // =========================================================================
  function showScreen(screenKey) {
    Object.values(screens).forEach(s => {
      if (s) s.classList.remove("active");
    });
    if (screens[screenKey]) {
      screens[screenKey].classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function openModal(modalKey) {
    if (modals[modalKey]) {
      modals[modalKey].classList.add("active");
      window.soundEngine.playClick();
      updateMathInContainer(modals[modalKey]);
    }
  }

  function closeModal(modalKey) {
    if (modals[modalKey]) {
      modals[modalKey].classList.remove("active");
    }
  }

  // Gắn sự kiện đóng modal cho tất cả nút close
  document.querySelectorAll(".modal-close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      Object.keys(modals).forEach(k => closeModal(k));
    });
  });

  // Đóng modal khi bấm ra ngoài backdrop
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove("active");
      }
    });
  });

  // =========================================================================
  // CẬP NHẬT THANH TRẠNG THÁI (STATS BAR)
  // =========================================================================
  function updateStatsDisplay() {
    if (elScore) elScore.textContent = `${window.gameEngine.score}đ`;

    // Cập nhật số tim
    if (elHearts) {
      let heartsHtml = "";
      for (let i = 1; i <= window.gameEngine.maxHearts; i++) {
        if (i <= window.gameEngine.hearts) {
          heartsHtml += '<span class="heart-icon">❤️</span>';
        } else {
          heartsHtml += '<span class="heart-icon heart-lost">🤍</span>';
        }
      }
      elHearts.innerHTML = heartsHtml;
    }

    // Cập nhật combo streak
    if (elStreak) {
      if (window.gameEngine.streak >= 2) {
        elStreak.style.display = "inline-flex";
        let streakText = `Combo x${window.gameEngine.streak} 🔥`;
        if (window.gameEngine.streak >= 5) streakText = `Đang vào guồng! 🔥🔥 (${window.gameEngine.streak})`;
        if (window.gameEngine.streak >= 10) streakText = `Siêu phản xạ! ⚡⚡ (${window.gameEngine.streak})`;
        elStreak.textContent = streakText;
      } else {
        elStreak.style.display = "none";
      }
    }
  }

  // =========================================================================
  // VẼ DANH SÁCH CÁC CHẶNG (ROADMAP)
  // =========================================================================
  function renderStagesRoadmap() {
    const container = document.getElementById("stages-roadmap-container");
    if (!container) return;

    let html = "";
    const unlocked = window.gameEngine.progress.unlockedStage || 1;

    MATH_DATA.identities.forEach(ident => {
      const isLocked = ident.id > unlocked;
      const isCleared = window.gameEngine.progress.clearedStages.includes(ident.id);

      html += `
        <div class="stage-item ${isLocked ? 'locked' : ''}" data-stage="${ident.id}">
          <div class="stage-info">
            <span class="stage-badge-label">CHẶNG ${ident.id} ${isCleared ? '⭐ ĐÃ HOÀN THÀNH' : ''}</span>
            <span class="stage-title">${ident.name}</span>
            <span class="stage-formula-preview">${formatMath('$' + ident.formulaLatex + '$')}</span>
          </div>
          <div class="stage-action-icon">
            ${isLocked ? '🔒' : (isCleared ? '✅' : '▶️')}
          </div>
        </div>
      `;
    });

    // Chặng Boss số 8
    const isBossLocked = unlocked < 8;
    const isBossCleared = window.gameEngine.progress.clearedStages.includes(8);
    html += `
      <div class="stage-item boss ${isBossLocked ? 'locked' : ''}" data-stage="8">
        <div class="stage-info">
          <span class="stage-badge-label" style="color: #b45309;">CHẶNG 8 - THỬ THÁCH EEC 👑</span>
          <span class="stage-title">BẬC THẦY HẰNG ĐẲNG THỨC</span>
          <span class="stage-formula-preview">Tổng hợp bẫy khó & phản xạ cao cấp</span>
        </div>
        <div class="stage-action-icon">
          ${isBossLocked ? '🔒' : (isBossCleared ? '👑 ĐÃ VƯỢT QUA' : '🔥')}
        </div>
      </div>
    `;

    container.innerHTML = html;
    updateMathInContainer(container);

    // Gắn sự kiện click cho các chặng
    container.querySelectorAll(".stage-item").forEach(item => {
      item.addEventListener("click", () => {
        const stageId = parseInt(item.getAttribute("data-stage"), 10);
        if (stageId <= unlocked) {
          window.soundEngine.playClick();
          window.gameEngine.startMode("campaign", { stage: stageId });
          showArenaForCurrentQuestion();
        } else {
          window.soundEngine.playWrong();
          alert("Hãy hoàn thành các chặng trước để mở khóa chặng này nhé!");
        }
      });
    });
  }

  // =========================================================================
  // HIỂN THỊ CÂU HỎI TRÊN ARENA
  // =========================================================================
  function showArenaForCurrentQuestion() {
    showScreen("arena");
    const q = window.gameEngine.currentQuestion;

    if (!q) {
      // Kết thúc chặng / chế độ -> Hiện màn hình tổng kết
      showSummaryScreen();
      return;
    }

    isAnsweringBlocked = false;
    updateStatsDisplay();

    // Ẩn feedback box cũ
    if (elFeedbackBox) {
      elFeedbackBox.classList.remove("active", "correct", "wrong");
    }

    // Tiêu đề & thanh tiến trình
    if (elStageTag) {
      if (window.gameEngine.currentMode === "campaign") {
        elStageTag.textContent = window.gameEngine.currentStage === 8 ? "CHẶNG 8: BẬC THẦY EEC 👑" : `CHẶNG ${window.gameEngine.currentStage}`;
      } else if (window.gameEngine.currentMode === "remedial") {
        elStageTag.textContent = `CỨU MẤT GỐC: HĐT ${window.gameEngine.remedialState.currentIdentityId}`;
      } else if (window.gameEngine.currentMode === "bug_hunter") {
        elStageTag.textContent = "THỢ SĂN LỖI SAI 🔍";
      } else if (window.gameEngine.currentMode === "speed60") {
        elStageTag.textContent = "ĐẤU 60 GIÂY ⚡";
      } else if (window.gameEngine.currentMode === "review_mistakes") {
        elStageTag.textContent = "HÒM ÔN CÂU SAI 🔄";
      }
    }

    // Cập nhật progress bar
    if (elProgressBar) {
      const totalQ = window.gameEngine.questionList.length || 1;
      const curIdx = window.gameEngine.currentQuestionIndex;
      const pct = Math.min(100, Math.round((curIdx / totalQ) * 100));
      elProgressBar.style.width = `${pct}%`;
    }

    // Quản lý hiển thị thanh thời gian 60s
    if (elSpeedWrap) {
      if (window.gameEngine.currentMode === "speed60") {
        elSpeedWrap.style.display = "block";
      } else {
        elSpeedWrap.style.display = "none";
      }
    }

    // Loại câu hỏi
    if (elQuestionType) {
      let typeLabel = "TRẮC NGHIỆM";
      if (q.type === "formula") typeLabel = "CHỌN CÔNG THỨC";
      else if (q.type === "fill_blank") typeLabel = "ĐIỀN VÀO CHỖ TRỐNG";
      else if (q.type === "true_false") typeLabel = "ĐÚNG HAY SAI";
      else if (q.type === "sign_trap") typeLabel = "BẪY DẤU QUAN TRỌNG";
      else if (q.type === "find_error" || q.type === "bug_hunt") typeLabel = "BẮT LỖI SAI";
      else if (q.type === "expand" || q.type === "expand_advanced") typeLabel = "KHAI TRIỂN";
      else if (q.type === "factor" || q.type === "factor_advanced") typeLabel = "VIẾT NGƯỢC (PHÂN TÍCH)";
      else if (q.type === "fast_reflex") typeLabel = "PHẢN XẠ NHANH";
      elQuestionType.textContent = typeLabel;
    }

    // Thông tin nhân vật nếu là Thợ Săn Lỗi Sai
    if (elAuthorNote) {
      if (q.author && q.written) {
        elAuthorNote.style.display = "block";
        elAuthorNote.innerHTML = `<strong>${q.author} viết:</strong> <div class="math-written-block">${formatMath(q.written)}</div>`;
      } else {
        elAuthorNote.style.display = "none";
      }
    }

    // Nội dung câu hỏi
    if (elQuestionPrompt) {
      elQuestionPrompt.innerHTML = formatMath(q.prompt);
    }

    // Hiển thị các đáp án
    if (elOptionsContainer) {
      const letters = ["A", "B", "C", "D"];
      let optionsHtml = "";

      q.options.forEach((opt, idx) => {
        optionsHtml += `
          <button class="option-btn" data-index="${idx}">
            <div class="option-letter">${letters[idx] || (idx + 1)}</div>
            <div class="option-text">${formatMath(opt)}</div>
          </button>
        `;
      });

      elOptionsContainer.innerHTML = optionsHtml;
      updateMathInContainer(elOptionsContainer);

      // Gắn sự kiện bấm vào từng lựa chọn
      elOptionsContainer.querySelectorAll(".option-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          if (isAnsweringBlocked) return;
          const chosenIdx = parseInt(btn.getAttribute("data-index"), 10);
          handleAnswerSelection(chosenIdx, btn);
        });
      });
    }
  }

  // =========================================================================
  // XỬ LÝ KHI NGƯỜI DÙNG CHỌN ĐÁP ÁN
  // =========================================================================
  function handleAnswerSelection(selectedIndex, clickedBtn) {
    isAnsweringBlocked = true;
    const result = window.gameEngine.submitAnswer(selectedIndex);

    if (!result) return;

    // Tô màu đáp án đúng & sai
    const allBtns = elOptionsContainer.querySelectorAll(".option-btn");
    allBtns.forEach((btn, idx) => {
      if (idx === result.correctIndex) {
        btn.classList.add("correct");
      }
      if (!result.isCorrect && idx === selectedIndex) {
        btn.classList.add("wrong");
      }
    });

    updateStatsDisplay();

    if (result.isCorrect) {
      window.soundEngine.playCorrect();
      if (result.streak >= 3) {
        window.soundEngine.playCombo(result.streak);
        triggerConfettiBurst(50);
      }

      // Hiển thị feedback tích cực
      if (elFeedbackBox && elFeedbackTitle && elFeedbackText) {
        elFeedbackBox.classList.remove("wrong");
        elFeedbackBox.classList.add("active", "correct");
        elFeedbackTitle.innerHTML = `<span>🎉 Chính xác! +${result.gainedScore} điểm</span>`;
        elFeedbackText.innerHTML = formatMath(result.explanation);
        if (elBtnRetry) elBtnRetry.style.display = "none";
        updateMathInContainer(elFeedbackBox);
      }

      // Tự động chuyển câu sau 1.8s nếu là chế độ Đấu 60s
      if (window.gameEngine.currentMode === "speed60") {
        setTimeout(() => {
          window.gameEngine.nextQuestion();
          showArenaForCurrentQuestion();
        }, 600);
      }
    } else {
      // Trả lời SAI
      window.soundEngine.playWrong();

      if (elFeedbackBox && elFeedbackTitle && elFeedbackText) {
        elFeedbackBox.classList.remove("correct");
        elFeedbackBox.classList.add("active", "wrong");
        elFeedbackTitle.innerHTML = `<span>⚠️ Chưa chính xác!</span>`;
        elFeedbackText.innerHTML = formatMath(result.explanation);
        if (elBtnRetry) elBtnRetry.style.display = "inline-block";
        updateMathInContainer(elFeedbackBox);
      }

      // Kiểm tra nếu hết tim
      if (result.isOutOfHearts) {
        setTimeout(() => {
          openModal("rescue");
        }, 1200);
      }
    }
  }

  // Nút TIẾP TỤC ở hộp feedback
  if (elBtnNext) {
    elBtnNext.addEventListener("click", () => {
      window.soundEngine.playClick();
      window.gameEngine.nextQuestion();
      showArenaForCurrentQuestion();
    });
  }

  // Nút THỬ LẠI câu này
  if (elBtnRetry) {
    elBtnRetry.addEventListener("click", () => {
      window.soundEngine.playClick();
      isAnsweringBlocked = false;
      if (elFeedbackBox) elFeedbackBox.classList.remove("active");
      const allBtns = elOptionsContainer.querySelectorAll(".option-btn");
      allBtns.forEach(b => b.classList.remove("correct", "wrong"));
    });
  }

  // =========================================================================
  // XỬ LÝ ĐẾM NGƯỢC 60 GIÂY
  // =========================================================================
  window.gameEngine.onTimerTick = (timeLeft) => {
    if (elSpeedText) elSpeedText.textContent = `⏱️ Còn lại: ${timeLeft}s`;
    if (elSpeedFill) {
      const pct = Math.max(0, (timeLeft / 60) * 100);
      elSpeedFill.style.width = `${pct}%`;
    }
  };

  window.gameEngine.onTimeUp = () => {
    window.soundEngine.playStageClear();
    showSummaryScreen();
  };

  // =========================================================================
  // MÀN HÌNH TỔNG KẾT & TRAO HUY HIỆU
  // =========================================================================
  function showSummaryScreen() {
    window.gameEngine.stopSpeedTimer();
    const summary = window.gameEngine.calculateSummary();
    showScreen("summary");

    // Âm thanh chúc mừng
    if (summary.accuracy >= 76) {
      window.soundEngine.playVictoryFanfare();
      triggerConfettiBurst(120);
    } else {
      window.soundEngine.playStageClear();
    }

    const elBadgeIcon = document.getElementById("summary-badge-icon");
    const elBadgeName = document.getElementById("summary-badge-name");
    const elBadgeDesc = document.getElementById("summary-badge-desc");

    if (elBadgeIcon) elBadgeIcon.textContent = summary.badge.icon;
    if (elBadgeName) elBadgeName.textContent = summary.badge.name;
    if (elBadgeDesc) elBadgeDesc.textContent = summary.badge.desc;

    const elSumScore = document.getElementById("sum-stat-score");
    const elSumCorrect = document.getElementById("sum-stat-correct");
    const elSumAccuracy = document.getElementById("sum-stat-accuracy");
    const elSumStreak = document.getElementById("sum-stat-streak");

    if (elSumScore) elSumScore.textContent = `${summary.score}đ`;
    if (elSumCorrect) elSumCorrect.textContent = `${summary.totalCorrect}/${summary.totalAnswered}`;
    if (elSumAccuracy) elSumAccuracy.textContent = `${summary.accuracy}%`;
    if (elSumStreak) elSumStreak.textContent = `${summary.maxStreak}`;

    // Khu vực công thức cần ôn lại
    const elMistakesCard = document.getElementById("summary-mistakes-box");
    const elMistakesList = document.getElementById("summary-mistakes-list");
    if (elMistakesCard && elMistakesList) {
      if (summary.mistakeNames.length > 0) {
        elMistakesCard.style.display = "block";
        elMistakesList.innerHTML = summary.mistakeNames.map(name => `<li>${name}</li>`).join("");
      } else {
        elMistakesCard.style.display = "none";
      }
    }
  }

  // =========================================================================
  // CHẾ ĐỘ CỨU MẤT GỐC - MÀN HÌNH HƯỚNG DẪN 5 BƯỚC
  // =========================================================================
  function startRemedialGuideFlow(identityId) {
    const ident = MATH_DATA.identities.find(i => i.id === identityId) || MATH_DATA.identities[0];
    showScreen("remedialGuide");

    const elTitle = document.getElementById("rg-formula-title");
    const elFormula = document.getElementById("rg-formula-display");
    const elRhythm = document.getElementById("rg-formula-rhythm");
    const elTip = document.getElementById("rg-formula-tip");
    const elTrap = document.getElementById("rg-formula-trap");

    if (elTitle) elTitle.textContent = ident.name;
    if (elFormula) elFormula.innerHTML = formatMath('$' + ident.formulaLatex + '$');
    if (elRhythm) elRhythm.textContent = `🎵 Nhẩm theo điệu: "${ident.rhythm}"`;
    if (elTip) elTip.textContent = ident.tip;
    if (elTrap) elTrap.textContent = ident.trapNote;

    updateMathInContainer(document.getElementById("screen-remedial-guide"));

    const btnStartPractice = document.getElementById("btn-rg-start-practice");
    if (btnStartPractice) {
      btnStartPractice.onclick = () => {
        window.soundEngine.playClick();
        window.gameEngine.startMode("remedial", { identityId: ident.id });
        showArenaForCurrentQuestion();
      };
    }
  }

  // =========================================================================
  // MINI-GAME GHÉP CẶP (MATCH PAIRS)
  // =========================================================================
  function initMatchPairsGame() {
    showScreen("matchPair");
    const container = document.getElementById("match-pairs-board");
    if (!container) return;

    const pairs = MATH_DATA.matchPairs;
    const leftItems = pairs.map((p, idx) => ({ text: p.left, pairId: idx, side: "left" }));
    const rightItems = pairs.map((p, idx) => ({ text: p.right, pairId: idx, side: "right" }));

    // Xáo trộn ngẫu nhiên cột trái và phải
    const shuffledLeft = window.gameEngine.shuffleArray(leftItems);
    const shuffledRight = window.gameEngine.shuffleArray(rightItems);

    let htmlLeft = `<div class="match-col">`;
    shuffledLeft.forEach(item => {
      htmlLeft += `<div class="match-card" data-pair-id="${item.pairId}" data-side="left">${formatMath(item.text)}</div>`;
    });
    htmlLeft += `</div>`;

    let htmlRight = `<div class="match-col">`;
    shuffledRight.forEach(item => {
      htmlRight += `<div class="match-card" data-pair-id="${item.pairId}" data-side="right">${formatMath(item.text)}</div>`;
    });
    htmlRight += `</div>`;

    container.innerHTML = `<div class="match-game-grid">${htmlLeft}${htmlRight}</div>`;
    updateMathInContainer(container);

    let selectedLeft = null;
    let selectedRight = null;
    let matchCount = 0;

    container.querySelectorAll(".match-card").forEach(card => {
      card.addEventListener("click", () => {
        window.soundEngine.playClick();
        const side = card.getAttribute("data-side");
        const pairId = card.getAttribute("data-pair-id");

        if (side === "left") {
          container.querySelectorAll('.match-card[data-side="left"]').forEach(c => c.classList.remove("selected"));
          card.classList.add("selected");
          selectedLeft = { el: card, pairId };
        } else {
          container.querySelectorAll('.match-card[data-side="right"]').forEach(c => c.classList.remove("selected"));
          card.classList.add("selected");
          selectedRight = { el: card, pairId };
        }

        // Nếu đã chọn 1 bên trái và 1 bên phải -> Kiểm tra cặp
        if (selectedLeft && selectedRight) {
          if (selectedLeft.pairId === selectedRight.pairId) {
            // Ghép đúng
            window.soundEngine.playCorrect();
            selectedLeft.el.classList.remove("selected");
            selectedRight.el.classList.remove("selected");
            selectedLeft.el.classList.add("matched");
            selectedRight.el.classList.add("matched");
            selectedLeft = null;
            selectedRight = null;
            matchCount++;

            if (matchCount === pairs.length) {
              window.soundEngine.playVictoryFanfare();
              triggerConfettiBurst(100);
              setTimeout(() => {
                alert("🎉 Tuyệt vời! Bạn đã ghép chính xác toàn bộ 7 hằng đẳng thức!");
                showScreen("home");
              }, 600);
            }
          } else {
            // Ghép sai
            window.soundEngine.playWrong();
            selectedLeft.el.classList.add("wrong");
            selectedRight.el.classList.add("wrong");
            setTimeout(() => {
              if (selectedLeft && selectedLeft.el) selectedLeft.el.classList.remove("selected", "wrong");
              if (selectedRight && selectedRight.el) selectedRight.el.classList.remove("selected", "wrong");
              selectedLeft = null;
              selectedRight = null;
            }, 600);
          }
        }
      });
    });
  }

  // =========================================================================
  // HIỆU ỨNG PHÁO HOA CONFETTI CANVAS
  // =========================================================================
  let confettiParticles = [];
  function triggerConfettiBurst(count = 70) {
    if (!confettiCanvas || !confettiCtx) return;
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    const colors = ["#2563eb", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];
    for (let i = 0; i < count; i++) {
      confettiParticles.push({
        x: confettiCanvas.width / 2,
        y: confettiCanvas.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.7) * 16,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 10,
        alpha: 1
      });
    }

    if (confettiParticles.length === count) {
      requestAnimationFrame(renderConfetti);
    }
  }

  function renderConfetti() {
    if (!confettiCtx || confettiParticles.length === 0) return;
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    for (let i = confettiParticles.length - 1; i >= 0; i--) {
      const p = confettiParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // trọng lực
      p.rotation += p.vr;
      p.alpha -= 0.012;

      if (p.alpha <= 0 || p.y > confettiCanvas.height) {
        confettiParticles.splice(i, 1);
        continue;
      }

      confettiCtx.save();
      confettiCtx.globalAlpha = p.alpha;
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate((p.rotation * Math.PI) / 180);
      confettiCtx.fillStyle = p.color;
      confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      confettiCtx.restore();
    }

    if (confettiParticles.length > 0) {
      requestAnimationFrame(renderConfetti);
    } else {
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }

  // =========================================================================
  // GẮN CÁC SỰ KIỆN NÚT BẤM TOÀN TRANG
  // =========================================================================

  // Nút Bật/Tắt Âm Thanh
  const btnToggleSound = document.getElementById("btn-toggle-sound");
  if (btnToggleSound) {
    btnToggleSound.addEventListener("click", () => {
      const isUnmuted = window.soundEngine.toggleSound();
      btnToggleSound.textContent = isUnmuted ? "🔊" : "🔇";
      btnToggleSound.classList.toggle("active", isUnmuted);
      if (isUnmuted) window.soundEngine.playClick();
    });
  }

  // Nút Mẹo Nhớ 30s & Sổ Tay Flashcard
  document.querySelectorAll(".btn-open-tips").forEach(btn => {
    btn.addEventListener("click", () => openModal("tips"));
  });

  // Nút Bảng Số Mũ & Bình Phương
  document.querySelectorAll(".btn-open-powers").forEach(btn => {
    btn.addEventListener("click", () => openModal("powers"));
  });

  // Nút Thông Tin Lớp Học EEC
  document.querySelectorAll(".btn-open-class-info").forEach(btn => {
    btn.addEventListener("click", () => openModal("classInfo"));
  });

  // Nút Bắt Đầu Hành Trình (Vào trang chọn Chặng)
  const btnStartCampaign = document.getElementById("btn-start-campaign");
  if (btnStartCampaign) {
    btnStartCampaign.addEventListener("click", () => {
      window.soundEngine.playClick();
      renderStagesRoadmap();
      showScreen("stages");
    });
  }

  // Nút CỨU MẤT GỐC (Trang chủ)
  const btnStartRemedial = document.getElementById("btn-start-remedial");
  if (btnStartRemedial) {
    btnStartRemedial.addEventListener("click", () => {
      window.soundEngine.playClick();
      startRemedialGuideFlow(1);
    });
  }

  // Nút THỢ SĂN LỖI SAI (Trang chủ)
  const btnStartHunter = document.getElementById("btn-start-hunter");
  if (btnStartHunter) {
    btnStartHunter.addEventListener("click", () => {
      window.soundEngine.playClick();
      window.gameEngine.startMode("bug_hunter");
      showArenaForCurrentQuestion();
    });
  }

  // Nút ĐẤU 60 GIÂY (Trang chủ & Màn hình tổng kết)
  document.querySelectorAll(".btn-start-speed60").forEach(btn => {
    btn.addEventListener("click", () => {
      window.soundEngine.playClick();
      window.gameEngine.startMode("speed60");
      showArenaForCurrentQuestion();
    });
  });

  // Nút MINI-GAME GHÉP CẶP
  const btnStartMatchPair = document.getElementById("btn-start-match-pair");
  if (btnStartMatchPair) {
    btnStartMatchPair.addEventListener("click", () => {
      window.soundEngine.playClick();
      initMatchPairsGame();
    });
  }

  // Nút ÔN CÂU SAI (Từ màn hình tổng kết)
  const btnReviewMistakes = document.getElementById("btn-review-mistakes");
  if (btnReviewMistakes) {
    btnReviewMistakes.addEventListener("click", () => {
      window.soundEngine.playClick();
      window.gameEngine.startMode("review_mistakes");
      showArenaForCurrentQuestion();
    });
  }

  // Nút CHƠI LẠI (Từ màn hình tổng kết)
  const btnPlayAgain = document.getElementById("btn-play-again");
  if (btnPlayAgain) {
    btnPlayAgain.addEventListener("click", () => {
      window.soundEngine.playClick();
      showScreen("home");
    });
  }

  // Nút QUAY LẠI TRANG CHỦ
  document.querySelectorAll(".btn-go-home").forEach(btn => {
    btn.addEventListener("click", () => {
      window.soundEngine.playClick();
      window.gameEngine.stopSpeedTimer();
      showScreen("home");
    });
  });

  // Nút Phao Cứu Sinh (Hồi Tim)
  const btnStartHeartRecovery = document.getElementById("btn-start-heart-recovery");
  if (btnStartHeartRecovery) {
    btnStartHeartRecovery.addEventListener("click", () => {
      closeModal("rescue");
      window.soundEngine.playClick();
      window.gameEngine.startHeartRecovery();
      showArenaForCurrentQuestion();
    });
  }

  // Đổ dữ liệu vào Modal Mẹo Nhớ Flashcard
  const tipsContainer = document.getElementById("modal-tips-content");
  if (tipsContainer) {
    let tipsHtml = "";
    MATH_DATA.memoryTips.forEach(tip => {
      tipsHtml += `
        <div class="flashcard-item">
          <div class="flashcard-title">${tip.title}</div>
          <div class="flashcard-rhythm" style="white-space: pre-line;">${tip.content}</div>
        </div>
      `;
    });

    tipsHtml += `<h4 style="margin: 16px 0 8px 0; font-weight:800;">7 Hằng Đẳng Thức Chi Tiết:</h4>`;
    MATH_DATA.identities.forEach(ident => {
      tipsHtml += `
        <div class="flashcard-item">
          <div class="flashcard-title">${ident.shortName}: ${ident.name}</div>
          <div class="flashcard-formula">${formatMath('$' + ident.formulaLatex + '$')}</div>
          <div class="flashcard-rhythm">🎵 ${ident.rhythm}</div>
          <div class="flashcard-trap">⚠️ ${ident.trapNote}</div>
        </div>
      `;
    });

    tipsContainer.innerHTML = tipsHtml;
  }

  // Đổ dữ liệu vào Modal Bảng Số Mũ
  const powersContainer = document.getElementById("modal-powers-content");
  if (powersContainer) {
    let powerHtml = `
      <table class="power-table">
        <thead>
          <tr>
            <th>Số cơ bản</th>
            <th>Bình phương ($x^2$)</th>
            <th>Lập phương ($x^3$)</th>
          </tr>
        </thead>
        <tbody>
    `;
    MATH_DATA.powerTable.forEach(row => {
      powerHtml += `
        <tr>
          <td><strong>${row.base}</strong></td>
          <td>${row.base}² = <strong>${row.sq}</strong></td>
          <td>${row.cb ? `${row.base}³ = <strong>${row.cb}</strong>` : '-'}</td>
        </tr>
      `;
    });
    powerHtml += `</tbody></table>`;
    powersContainer.innerHTML = powerHtml;
  }

  // Khởi động màn hình chính
  showScreen("home");
  updateMathInContainer(document.body);
});
