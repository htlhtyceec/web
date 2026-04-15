// Audio Context Logic (Bypasses need for external mp3 files and bypasses mobile limitations)
let audioCtx;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

function playSound(type) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now); // A4
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.1); // Up to A5
        gain.gain.setValueAtTime(0.5, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    } else if (type === 'incorrect') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(100, now + 0.2); // Pitch down
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    } else if (type === 'finish') {
        // Victory fanfare
        osc.type = 'square';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.setValueAtTime(400, now + 0.1);
        osc.frequency.setValueAtTime(500, now + 0.2);
        osc.frequency.setValueAtTime(600, now + 0.3);
        osc.frequency.setValueAtTime(800, now + 0.4);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
        osc.start(now);
        osc.stop(now + 0.6);
    }
}

// Background star generation
function createStars() {
    // Basic CSS star generation for stars without SCSS
    const makeStars = (count, size, layerId) => {
        let shadows = [];
        for (let i = 0; i < count; i++) {
            shadows.push(`${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #fff`);
        }
        const layer = document.getElementById(layerId);
        if (layer) {
            layer.classList.add('star-layer');
            layer.style.width = size + 'px';
            layer.style.height = size + 'px';
            layer.style.boxShadow = shadows.join(',');
        }
    }

    makeStars(700, 1, 'stars');
    makeStars(200, 2, 'stars2');
    makeStars(100, 3, 'stars3');
}

// Global state
let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const questionText = document.getElementById('question-text');
const optionsGrid = document.getElementById('options-grid');
const questionCounter = document.getElementById('question-counter');
const scoreCounter = document.getElementById('score-counter');
const progressFill = document.getElementById('progress-fill');

const finalScore = document.getElementById('final-score');
const feedbackMsg = document.getElementById('feedback-msg');

// Event Listeners
startBtn.addEventListener('click', () => {
    initAudio(); // Initialize audio context on first user interaction as required by mobile browsers
    startScreen.classList.remove('active');
    questionScreen.classList.add('active');
    loadQuestion();
});

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    startScreen.classList.add('active');
    resultScreen.classList.remove('active');
});

// App Logic
function loadQuestion() {
    hasAnswered = false;
    nextBtn.classList.add('hidden');

    const currentQ = questions[currentQuestionIndex];
    questionText.textContent = currentQ.question;
    questionCounter.textContent = `Câu ${currentQuestionIndex + 1}/${questions.length}`;
    scoreCounter.textContent = `🌟 Điểm: ${score}`;

    // Update progress bar
    const progressPerc = ((currentQuestionIndex) / questions.length) * 100;
    progressFill.style.width = `${progressPerc}%`;
    progressFill.style.boxShadow = `0 0 10px rgba(0, 242, 254, 0.8)`;

    optionsGrid.innerHTML = '';

    currentQ.options.forEach((optionData, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = optionData;

        btn.addEventListener('click', () => handleOptionClick(btn, index));
        optionsGrid.appendChild(btn);
    });
}

function handleOptionClick(clickedBtn, selectedIndex) {
    if (hasAnswered) return;
    hasAnswered = true;

    const currentQ = questions[currentQuestionIndex];
    const optionBtns = optionsGrid.querySelectorAll('.option-btn');

    // Disable all
    optionBtns.forEach(btn => btn.disabled = true);

    if (selectedIndex === currentQ.answer) {
        clickedBtn.classList.add('correct');
        score++;
        scoreCounter.textContent = `🌟 Điểm: ${score}`;
        playSound('correct');
    } else {
        clickedBtn.classList.add('wrong');
        optionBtns[currentQ.answer].classList.add('correct');
        playSound('incorrect');
    }

    nextBtn.classList.remove('hidden');
}

function showResults() {
    questionScreen.classList.remove('active');
    resultScreen.classList.add('active');
    playSound('finish');

    finalScore.textContent = `${score} / ${questions.length}`;

    if (score === questions.length) {
        feedbackMsg.textContent = "Tuyệt vời vĩ đại! Bạn là một Nhà Du Hành siêu phàm!";
        feedbackMsg.style.color = "#00f2fe";
    } else if (score >= questions.length * 0.7) {
        feedbackMsg.textContent = "Làm tốt lắm vũ trụ trân trọng bạn!";
        feedbackMsg.style.color = "#2ecc71";
    } else if (score >= questions.length * 0.5) {
        feedbackMsg.textContent = "Khá lắm, hãy nâng cấp tàu vũ trụ và thử lại nhé!";
        feedbackMsg.style.color = "#f39c12";
    } else {
        feedbackMsg.textContent = "Đừng từ bỏ! Hãy nạp nhiên liệu và quay lại nhé!";
        feedbackMsg.style.color = "#e74c3c";
    }
}

// Init visual effects
createStars();
