// State
let quizQuestions = [];
let userAnswers = {};
let currentIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let wrongQuestions = [];
let isAnswered = false;
let autoTimer = null;
let soundEnabled = localStorage.getItem('blp_sound') !== 'false';
let autoAdvance = localStorage.getItem('blp_auto') !== 'false';
let deferredPrompt = null;

// DOM Elements
const quizCard = document.getElementById('quizCard');
const resultsScreen = document.getElementById('resultsScreen');
const questionCategory = document.getElementById('questionCategory');
const questionNumberBadge = document.getElementById('questionNumberBadge');
const questionText = document.getElementById('questionText');
const optionsList = document.getElementById('optionsList');
const questionCounter = document.getElementById('questionCounter');
const correctCountEl = document.getElementById('correctCount');
const wrongCountEl = document.getElementById('wrongCount');
const progressBar = document.getElementById('progressBar');
const feedbackLine = document.getElementById('feedbackLine');
const explanationBox = document.getElementById('explanationBox');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const autoAdvanceToggle = document.getElementById('autoAdvanceToggle');
const soundToggleBtn = document.getElementById('soundToggleBtn');
const soundIconOn = document.getElementById('soundIconOn');
const soundIconOff = document.getElementById('soundIconOff');
const restartBtn = document.getElementById('restartBtn');
const topicSelect = document.getElementById('topicSelect');
const quickWrongBtn = document.getElementById('quickWrongBtn');
const quickWrongCount = document.getElementById('quickWrongCount');
const examFocusBtn = document.getElementById('examFocusBtn');
const examFocusLabel = document.getElementById('examFocusLabel');
const examFocusBadge = document.getElementById('examFocusBadge');
const hardModeBtn = document.getElementById('hardModeBtn');
const hardCountBadge = document.getElementById('hardCountBadge');
const starredModeBtn = document.getElementById('starredModeBtn');
const starredCountBadge = document.getElementById('starredCountBadge');
const cheatSheetBtn = document.getElementById('cheatSheetBtn');
const cheatSheetPanel = document.getElementById('cheatSheetPanel');
const closeCheatSheetBtn = document.getElementById('closeCheatSheetBtn');
const starQuestionBtn = document.getElementById('starQuestionBtn');
const starIcon = document.getElementById('starIcon');
const starText = document.getElementById('starText');

let isExamFocusMode = false;
let isHardMode = false;
let isStarredMode = false;
let starredKeys = JSON.parse(localStorage.getItem('bgt103_starred') || '[]');

function getQuestionUniqueKey(q) {
  return `${q.id}::${q.question.slice(0, 40)}`;
}

function getAllAvailableQuestions() {
  const list = [...(typeof QUESTIONS !== 'undefined' ? QUESTIONS : [])];
  if (typeof EXAM_FOCUS_QUESTIONS !== 'undefined') list.push(...EXAM_FOCUS_QUESTIONS);
  if (typeof HARD_QUESTIONS !== 'undefined') list.push(...HARD_QUESTIONS);
  return list;
}

function getStarredQuestionObjects() {
  const all = getAllAvailableQuestions();
  return all.filter(q => starredKeys.includes(getQuestionUniqueKey(q)));
}

// Results Elements
const resultsSub = document.getElementById('resultsSub');
const resCorrect = document.getElementById('resCorrect');
const resWrong = document.getElementById('resWrong');
const resPercent = document.getElementById('resPercent');
const retryWrongBtn = document.getElementById('retryWrongBtn');
const wrongCountLabel = document.getElementById('wrongCountLabel');
const restartAllBtn = document.getElementById('restartAllBtn');

// PWA Elements
const pwaBanner = document.getElementById('pwaBanner');
const pwaInstallBtn = document.getElementById('pwaInstallBtn');

// Subtle Tactile Sound (Haptic-like audio feedback)
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playCorrect() {
    if (!soundEnabled) return;
    try {
      this.ensureContext();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, t); // D5
      osc.frequency.exponentialRampToValueAtTime(880, t + 0.1); // A5

      gain.gain.setValueAtTime(0.08, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.18);
    } catch (e) { }
  }

  playWrong() {
    if (!soundEnabled) return;
    try {
      this.ensureContext();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, t); // A3
      osc.frequency.setValueAtTime(170, t + 0.08);

      gain.gain.setValueAtTime(0.07, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.18);
    } catch (e) { }
  }
}

const sfx = new SoundFX();

// Fisher-Yates Shuffle
function shuffle(arr) {
  const list = [...arr];
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

// Shuffle options of a question so the correct letter (A-E) is randomized
function randomizeQuestionOptions(q) {
  const keys = ['a', 'b', 'c', 'd', 'e'].filter(k => q.options && q.options[k]);
  const originalCorrectKey = q.answer.toLowerCase();
  const entries = keys.map(k => ({
    text: q.options[k],
    isCorrect: k === originalCorrectKey
  }));
  const shuffledEntries = shuffle(entries);
  const newOptions = {};
  let newAnswer = 'a';

  keys.forEach((key, idx) => {
    newOptions[key] = shuffledEntries[idx].text;
    if (shuffledEntries[idx].isCorrect) {
      newAnswer = key;
    }
  });

  return {
    ...q,
    options: newOptions,
    answer: newAnswer
  };
}

// Populate Topic Dropdown
function populateTopics() {
  if (!topicSelect || typeof QUESTIONS === 'undefined') return;
  const counts = {};
  const order = [];
  QUESTIONS.forEach(q => {
    const w = q.week || 'Genel';
    if (!counts[w]) {
      counts[w] = 0;
      order.push(w);
    }
    counts[w]++;
  });

  const examCount = (typeof EXAM_FOCUS_QUESTIONS !== 'undefined' && Array.isArray(EXAM_FOCUS_QUESTIONS))
    ? EXAM_FOCUS_QUESTIONS.length
    : 0;
  const hardCount = (typeof HARD_QUESTIONS !== 'undefined' && Array.isArray(HARD_QUESTIONS))
    ? HARD_QUESTIONS.length
    : 0;

  topicSelect.innerHTML = `<option value="all">Tüm Konular · 5 PDF Karışık (${QUESTIONS.length} Soru)</option>`;
  if (examCount > 0) {
    const examOpt = document.createElement('option');
    examOpt.value = 'exam_focus';
    examOpt.textContent = `🎯 Sınavda En Çok Çıkma İhtimali Olanlar (${examCount} Soru)`;
    topicSelect.appendChild(examOpt);
  }
  if (hardCount > 0) {
    const hardOpt = document.createElement('option');
    hardOpt.value = 'hard_mode';
    hardOpt.textContent = `🔥 Zor & Tuzaklı Sorular (${hardCount} Soru)`;
    topicSelect.appendChild(hardOpt);
  }
  order.forEach(w => {
    const opt = document.createElement('option');
    opt.value = w;
    opt.textContent = `${w} (${counts[w]} Soru)`;
    topicSelect.appendChild(opt);
  });

  syncExamFocusUI();
}

function syncExamFocusUI() {
  const examCount = (typeof EXAM_FOCUS_QUESTIONS !== 'undefined' && Array.isArray(EXAM_FOCUS_QUESTIONS))
    ? EXAM_FOCUS_QUESTIONS.length
    : 0;
  const hardCount = (typeof HARD_QUESTIONS !== 'undefined' && Array.isArray(HARD_QUESTIONS))
    ? HARD_QUESTIONS.length
    : 0;

  if (hardCountBadge) hardCountBadge.textContent = hardCount;
  if (starredCountBadge) starredCountBadge.textContent = starredKeys.length;
  if (hardModeBtn) hardModeBtn.classList.toggle('active', isHardMode);
  if (starredModeBtn) starredModeBtn.classList.toggle('active', isStarredMode);

  if (!examFocusBtn) return;

  if (isExamFocusMode) {
    examFocusBtn.classList.add('active');
    if (examFocusLabel) examFocusLabel.textContent = 'Sınavda En Çok Çıkma İhtimali Olanlar (Aktif)';
    if (examFocusBadge) examFocusBadge.textContent = `Tümüne Dön · ${examCount} Soru`;
  } else {
    examFocusBtn.classList.remove('active');
    if (examFocusLabel) examFocusLabel.textContent = 'Sınavda En Çok Çıkma İhtimali Olanlar';
    if (examFocusBadge) examFocusBadge.textContent = `${examCount} Soru`;
  }
}

// Get questions filtered by current topic selection
function getFilteredQuestions() {
  if (isStarredMode) {
    const starred = getStarredQuestionObjects();
    return starred.length > 0 ? starred : QUESTIONS;
  }
  if (isHardMode && typeof HARD_QUESTIONS !== 'undefined') {
    return HARD_QUESTIONS;
  }
  if (isExamFocusMode && typeof EXAM_FOCUS_QUESTIONS !== 'undefined') {
    return EXAM_FOCUS_QUESTIONS;
  }
  if (!topicSelect || topicSelect.value === 'all') {
    return QUESTIONS;
  }
  if (topicSelect.value === 'exam_focus' && typeof EXAM_FOCUS_QUESTIONS !== 'undefined') {
    return EXAM_FOCUS_QUESTIONS;
  }
  if (topicSelect.value === 'hard_mode' && typeof HARD_QUESTIONS !== 'undefined') {
    return HARD_QUESTIONS;
  }
  return QUESTIONS.filter(q => q.week === topicSelect.value);
}

// Start / Reset
function initQuiz(items) {
  if (autoTimer) clearTimeout(autoTimer);
  quizQuestions = shuffle(items).map(randomizeQuestionOptions);
  userAnswers = {};
  currentIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  wrongQuestions = [];
  isAnswered = false;

  quizCard.style.display = 'flex';
  resultsScreen.classList.remove('show');

  updateStatus();
  showQuestion();
}

// Update status header
function updateStatus() {
  const total = quizQuestions.length;
  const current = currentIndex + 1;
  const answeredCount = Object.keys(userAnswers).length;
  const pct = total > 0 ? (answeredCount / total) * 100 : 0;

  questionCounter.textContent = `Soru ${Math.min(current, total)} / ${total}`;
  correctCountEl.textContent = correctCount;
  wrongCountEl.textContent = wrongCount;
  progressBar.style.width = `${pct}%`;

  if (quickWrongBtn && quickWrongCount) {
    if (wrongQuestions.length > 0 && quizQuestions.length > wrongQuestions.length) {
      quickWrongBtn.style.display = 'block';
      quickWrongCount.textContent = wrongQuestions.length;
    } else {
      quickWrongBtn.style.display = 'none';
    }
  }
}

// Show current question
function showQuestion() {
  if (currentIndex >= quizQuestions.length) {
    finishQuiz();
    return;
  }

  const q = quizQuestions[currentIndex];
  const savedAnswer = userAnswers[currentIndex];
  isAnswered = Boolean(savedAnswer);

  if (prevBtn) {
    prevBtn.disabled = currentIndex === 0;
  }
  nextBtn.disabled = !isAnswered;

  feedbackLine.className = 'feedback-line';
  feedbackLine.style.display = 'none';
  if (explanationBox) {
    explanationBox.className = 'explanation-box';
    explanationBox.style.display = 'none';
  }

  questionCategory.textContent = q.week || 'Genel';
  if (questionNumberBadge) {
    questionNumberBadge.textContent = q.id ? `#${q.id}` : `#${currentIndex + 1}`;
  }
  if (starQuestionBtn) {
    const uKey = getQuestionUniqueKey(q);
    const isStar = starredKeys.includes(uKey);
    starQuestionBtn.classList.toggle('starred', isStar);
    if (starIcon) starIcon.textContent = isStar ? '★' : '☆';
    if (starText) starText.textContent = isStar ? 'İşaretli' : 'İşaretle';
  }
  questionText.textContent = q.question;

  optionsList.innerHTML = '';
  const optionKeys = ['a', 'b', 'c', 'd', 'e'].filter(k => q.options && q.options[k]);

  optionKeys.forEach((key) => {
    const btn = document.createElement('button');
    btn.className = 'option-item';
    btn.dataset.key = key;

    const tag = document.createElement('span');
    tag.className = 'option-tag';
    tag.textContent = key.toUpperCase();

    const content = document.createElement('span');
    content.className = 'option-content';
    content.textContent = q.options[key];

    const icon = document.createElement('span');
    icon.className = 'option-status-icon';
    icon.innerHTML = `<svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>`;

    btn.appendChild(tag);
    btn.appendChild(content);
    btn.appendChild(icon);

    btn.addEventListener('click', () => chooseOption(key, btn));
    optionsList.appendChild(btn);
  });

  if (savedAnswer) {
    renderAnsweredState(q, savedAnswer);
  }

  updateStatus();
}

// Render visual state for an already-answered question
function renderAnsweredState(q, selectedKey) {
  const correctKey = q.answer.toLowerCase();
  const isMatch = (selectedKey.toLowerCase() === correctKey);
  const allButtons = optionsList.querySelectorAll('.option-item');
  const targetBtn = optionsList.querySelector(`[data-key="${selectedKey}"]`);

  allButtons.forEach(b => {
    b.disabled = true;
    if (b !== targetBtn) b.classList.add('dimmed');
  });

  if (isMatch && targetBtn) {
    targetBtn.classList.remove('dimmed');
    targetBtn.classList.add('state-correct');
    feedbackLine.textContent = 'Doğru!';
    feedbackLine.className = 'feedback-line show correct';
    feedbackLine.style.display = 'block';
  } else if (targetBtn) {
    targetBtn.classList.remove('dimmed');
    targetBtn.classList.add('state-wrong');
    targetBtn.querySelector('.option-status-icon').innerHTML = `<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

    const correctBtn = optionsList.querySelector(`[data-key="${correctKey}"]`);
    if (correctBtn) {
      correctBtn.classList.remove('dimmed');
      correctBtn.classList.add('state-reveal');
    }

    const correctText = q.options[correctKey] || '';
    feedbackLine.textContent = `Yanlış · Doğru cevap: ${correctKey.toUpperCase()}) ${correctText}`;
    feedbackLine.className = 'feedback-line show wrong';
    feedbackLine.style.display = 'block';
  }

  if (explanationBox && q.explanation) {
    explanationBox.textContent = `💡 Not: ${q.explanation}`;
    explanationBox.className = 'explanation-box show';
    explanationBox.style.display = 'block';
  }
}

// Handle option selection
function chooseOption(selectedKey, targetBtn) {
  if (isAnswered) return;
  isAnswered = true;
  userAnswers[currentIndex] = selectedKey;

  sfx.ensureContext();
  const q = quizQuestions[currentIndex];
  const correctKey = q.answer.toLowerCase();
  const isMatch = (selectedKey.toLowerCase() === correctKey);

  if (isMatch) {
    correctCount++;
    if (navigator.vibrate) navigator.vibrate(30);
    sfx.playCorrect();
  } else {
    wrongCount++;
    if (!wrongQuestions.some(wq => wq.id === q.id && wq.question === q.question)) {
      wrongQuestions.push(q);
    }
    if (navigator.vibrate) navigator.vibrate([40, 30, 40]);
    sfx.playWrong();
  }

  renderAnsweredState(q, selectedKey);
  nextBtn.disabled = false;
  updateStatus();

  if (autoAdvance) {
    autoTimer = setTimeout(goToNext, isMatch ? 1100 : 2400);
  }
}

// Next question
function goToNext() {
  if (autoTimer) {
    clearTimeout(autoTimer);
    autoTimer = null;
  }
  currentIndex++;
  showQuestion();
}

// Previous question
function goToPrev() {
  if (autoTimer) {
    clearTimeout(autoTimer);
    autoTimer = null;
  }
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion();
  }
}

// Finish Screen
function finishQuiz() {
  quizCard.style.display = 'none';
  resultsScreen.classList.add('show');

  const total = quizQuestions.length;
  const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  resCorrect.textContent = correctCount;
  resWrong.textContent = wrongCount;
  resPercent.textContent = `%${pct}`;
  resultsSub.textContent = `${total} sorudan ${correctCount} tanesini doğru yanıtladın.`;

  if (wrongQuestions.length > 0) {
    retryWrongBtn.style.display = 'block';
    wrongCountLabel.textContent = wrongQuestions.length;
  } else {
    retryWrongBtn.style.display = 'none';
  }

  progressBar.style.width = '100%';
  questionCounter.textContent = `Tamamlandı (${total}/${total})`;
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (quizCard.style.display === 'none') return;
  const key = e.key.toLowerCase();
  const numToChar = { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e' };
  const target = numToChar[key] || (['a', 'b', 'c', 'd', 'e'].includes(key) ? key : null);

  if (target && !isAnswered) {
    const btn = optionsList.querySelector(`[data-key="${target}"]`);
    if (btn) btn.click();
    return;
  }

  if ((e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') && isAnswered) {
    e.preventDefault();
    goToNext();
  } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
    e.preventDefault();
    goToPrev();
  }
});

// Event Handlers
nextBtn.addEventListener('click', () => {
  if (isAnswered) goToNext();
});

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    goToPrev();
  });
}

if (topicSelect) {
  topicSelect.addEventListener('change', () => {
    isExamFocusMode = (topicSelect.value === 'exam_focus');
    isHardMode = (topicSelect.value === 'hard_mode');
    isStarredMode = false;
    syncExamFocusUI();
    initQuiz(getFilteredQuestions());
  });
}

if (examFocusBtn) {
  examFocusBtn.addEventListener('click', () => {
    isExamFocusMode = !isExamFocusMode;
    isHardMode = false;
    isStarredMode = false;
    if (topicSelect) {
      topicSelect.value = isExamFocusMode ? 'exam_focus' : 'all';
    }
    syncExamFocusUI();
    initQuiz(getFilteredQuestions());
  });
}

if (hardModeBtn) {
  hardModeBtn.addEventListener('click', () => {
    isHardMode = !isHardMode;
    isExamFocusMode = false;
    isStarredMode = false;
    if (topicSelect) {
      topicSelect.value = isHardMode ? 'hard_mode' : 'all';
    }
    syncExamFocusUI();
    initQuiz(getFilteredQuestions());
  });
}

if (starredModeBtn) {
  starredModeBtn.addEventListener('click', () => {
    const starred = getStarredQuestionObjects();
    if (!isStarredMode && starred.length === 0) {
      alert('Henüz yıldızlayarak işaretlediğin bir soru yok. Soruların sağ üstündeki "☆ İşaretle" butonuna basarak zorlandığın soruları buraya ekleyebilirsin!');
      return;
    }
    isStarredMode = !isStarredMode;
    isExamFocusMode = false;
    isHardMode = false;
    if (topicSelect && !isStarredMode) {
      topicSelect.value = 'all';
    }
    syncExamFocusUI();
    initQuiz(getFilteredQuestions());
  });
}

if (starQuestionBtn) {
  starQuestionBtn.addEventListener('click', () => {
    const q = quizQuestions[currentIndex];
    if (!q) return;
    const uKey = getQuestionUniqueKey(q);
    const idx = starredKeys.indexOf(uKey);
    if (idx === -1) {
      starredKeys.push(uKey);
    } else {
      starredKeys.splice(idx, 1);
    }
    localStorage.setItem('bgt103_starred', JSON.stringify(starredKeys));
    const isStar = starredKeys.includes(uKey);
    starQuestionBtn.classList.toggle('starred', isStar);
    if (starIcon) starIcon.textContent = isStar ? '★' : '☆';
    if (starText) starText.textContent = isStar ? 'İşaretli' : 'İşaretle';
    syncExamFocusUI();
  });
}

if (cheatSheetBtn && cheatSheetPanel) {
  cheatSheetBtn.addEventListener('click', () => {
    const isHidden = cheatSheetPanel.style.display === 'none';
    cheatSheetPanel.style.display = isHidden ? 'flex' : 'none';
    cheatSheetBtn.classList.toggle('active', isHidden);
  });
}

if (closeCheatSheetBtn && cheatSheetPanel) {
  closeCheatSheetBtn.addEventListener('click', () => {
    cheatSheetPanel.style.display = 'none';
    if (cheatSheetBtn) cheatSheetBtn.classList.remove('active');
  });
}

if (quickWrongBtn) {
  quickWrongBtn.addEventListener('click', () => {
    if (wrongQuestions.length > 0) {
      initQuiz(wrongQuestions);
    }
  });
}

restartBtn.addEventListener('click', () => {
  if (confirm('Soruları sıfırlayıp baştan karıştırmak istiyor musun?')) {
    initQuiz(getFilteredQuestions());
  }
});

restartAllBtn.addEventListener('click', () => {
  initQuiz(getFilteredQuestions());
});

retryWrongBtn.addEventListener('click', () => {
  if (wrongQuestions.length > 0) {
    initQuiz(wrongQuestions);
  }
});

// Sound Toggle
function syncSoundUI() {
  soundIconOn.style.display = soundEnabled ? 'block' : 'none';
  soundIconOff.style.display = soundEnabled ? 'none' : 'block';
}

soundToggleBtn.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  localStorage.setItem('blp_sound', soundEnabled);
  syncSoundUI();
  if (soundEnabled) sfx.playCorrect();
});

// Auto-advance toggle
autoAdvanceToggle.checked = autoAdvance;
autoAdvanceToggle.addEventListener('change', (e) => {
  autoAdvance = e.target.checked;
  localStorage.setItem('blp_auto', autoAdvance);
  if (!autoAdvance && autoTimer) {
    clearTimeout(autoTimer);
    autoTimer = null;
  }
});

// PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => { });
  });
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  pwaBanner.classList.add('show');
});

pwaInstallBtn.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const res = await deferredPrompt.userChoice;
    if (res.outcome === 'accepted') {
      pwaBanner.classList.remove('show');
    }
    deferredPrompt = null;
  }
});

// Init
syncSoundUI();
if (typeof QUESTIONS !== 'undefined' && Array.isArray(QUESTIONS) && QUESTIONS.length > 0) {
  populateTopics();
  initQuiz(getFilteredQuestions());
} else {
  questionText.textContent = 'Sorular yüklenemedi.';
}
