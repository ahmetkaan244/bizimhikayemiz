// Main app script
function startJournalApp() {
  const data = window.JOURNAL_DATA;
  if (!data) return;

  initCoupleDetails(data);
  initRelationshipCounters(data.dates, data.polaroids.length, data.specialMemories.length);
  initQuoteRotator(data.quotes);
  renderTimeline(data.timeline);
  renderEditorialSpreads(data.editorialSpreads);
  renderPolaroidAlbum(data.polaroids);
  renderSpecialMemories(data.specialMemories);
  renderLetters(data.letters);
  initVintageMusicPlayer(data.music);
  initAmbientParticles();
  initScrollReveal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startJournalApp);
} else {
  startJournalApp();
}

// BFCache fix for mobile Safari
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    window.location.reload();
  }
});

// Couple details & header
function initCoupleDetails(data) {
  const p1 = data.couple.person1;
  const p2 = data.couple.person2;
  const sym = data.couple.symbol || '♥';
  const coupleNameStr = `${p1} ${sym} ${p2}`;

  document.title = `${coupleNameStr} — ${data.couple.subtitle}`;

  const navNames = document.getElementById('navCoupleNames');
  if (navNames) navNames.textContent = coupleNameStr;

  const initial1 = document.getElementById('heroInitial1');
  const initial2 = document.getElementById('heroInitial2');
  if (initial1) initial1.textContent = p1.charAt(0).toUpperCase();
  if (initial2) initial2.textContent = p2.charAt(0).toUpperCase();

  const heroCoupleNames = document.getElementById('heroCoupleNames');
  if (heroCoupleNames) {
    heroCoupleNames.innerHTML = `
      <span class="name-person1">${p1}</span>
      <span class="name-heart">${sym}</span>
      <span class="name-person2">${p2}</span>
    `;
  }

  const heroSubtitle = document.getElementById('heroSubtitle');
  if (heroSubtitle) heroSubtitle.textContent = `“${data.couple.subtitle}”`;

  const heroTagline = document.getElementById('heroTagline');
  if (heroTagline) heroTagline.textContent = `“${data.couple.heroTagline}”`;

  const outroHeading = document.getElementById('outroHeading');
  if (outroHeading) outroHeading.textContent = data.couple.outroHeading;

  const outroSubheading = document.getElementById('outroSubheading');
  if (outroSubheading) outroSubheading.textContent = data.couple.outroSubheading;

  const outroFooterNote = document.getElementById('outroFooterNote');
  if (outroFooterNote) outroFooterNote.textContent = `“${data.couple.footerNote}”`;
}

// Counters
function initRelationshipCounters(dates, polaroidsCount, memoriesCount) {
  const talkDate = new Date(dates.firstTalkDate);
  const loveDate = new Date(dates.relationshipDate);

  const talkDaysElem = document.getElementById('talkDaysCount');
  const talkLiveElem = document.getElementById('talkLiveTime');

  const loveDaysElem = document.getElementById('loveDaysCount');
  const loveLiveElem = document.getElementById('loveLiveTime');

  const memoriesTotalElem = document.getElementById('memoriesTotalCount');
  const specialDaysElem = document.getElementById('specialDaysCount');

  const totalMemories = (polaroidsCount || 0) + (memoriesCount || 0);
  const totalSpecialDays = 10;

  animateCounter(memoriesTotalElem, totalMemories, 1500);
  animateCounter(specialDaysElem, totalSpecialDays, 1500);

  let initialAnimated = false;

  function updateLiveCounters() {
    const now = new Date();

    const diffTalkMs = Math.max(0, now - talkDate);
    const talkDays = Math.floor(diffTalkMs / (1000 * 60 * 60 * 24));
    const talkHours = Math.floor((diffTalkMs / (1000 * 60 * 60)) % 24);
    const talkMins = Math.floor((diffTalkMs / (1000 * 60)) % 60);
    const talkSecs = Math.floor((diffTalkMs / 1000) % 60);

    const diffLoveMs = Math.max(0, now - loveDate);
    const loveDays = Math.floor(diffLoveMs / (1000 * 60 * 60 * 24));
    const loveHours = Math.floor((diffLoveMs / (1000 * 60 * 60)) % 24);
    const loveMins = Math.floor((diffLoveMs / (1000 * 60)) % 60);
    const loveSecs = Math.floor((diffLoveMs / 1000) % 60);

    if (!initialAnimated) {
      animateCounter(talkDaysElem, talkDays, 1800);
      animateCounter(loveDaysElem, loveDays, 1800);
      initialAnimated = true;
    } else {
      if (talkDaysElem) talkDaysElem.textContent = talkDays.toLocaleString('tr-TR');
      if (loveDaysElem) loveDaysElem.textContent = loveDays.toLocaleString('tr-TR');
    }

    if (talkLiveElem) {
      talkLiveElem.textContent = `${padZero(talkHours)} saat : ${padZero(talkMins)} dk : ${padZero(talkSecs)} sn`;
    }
    if (loveLiveElem) {
      loveLiveElem.textContent = `${padZero(loveHours)} saat : ${padZero(loveMins)} dk : ${padZero(loveSecs)} sn`;
    }
  }

  updateLiveCounters();
  setInterval(updateLiveCounters, 1000);
}

function padZero(num) {
  return num < 10 ? `0${num}` : num;
}

function animateCounter(element, target, duration = 1500) {
  if (!element) return;
  const start = 0;
  const startTime = performance.now();

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 4);
    const currentVal = Math.floor(start + (target - start) * easeOut);

    element.textContent = currentVal.toLocaleString('tr-TR');

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.textContent = target.toLocaleString('tr-TR');
    }
  }
  requestAnimationFrame(step);
}

// Quote rotator
function initQuoteRotator(quotes) {
  if (!quotes || quotes.length === 0) return;

  const quoteText = document.getElementById('quoteText');
  const quoteAuthor = document.getElementById('quoteAuthor');
  const quoteDots = document.getElementById('quoteDots');
  if (!quoteText || !quoteAuthor) return;

  let currentIndex = 0;
  let timer = null;

  if (quoteDots) {
    quoteDots.innerHTML = '';
    quotes.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = `quote-dot ${idx === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => {
        showQuote(idx);
        resetTimer();
      });
      quoteDots.appendChild(dot);
    });
  }

  function showQuote(index) {
    currentIndex = index;

    quoteText.style.opacity = '0';
    quoteText.style.transform = 'translateY(8px)';
    quoteAuthor.style.opacity = '0';

    setTimeout(() => {
      const q = quotes[currentIndex];
      quoteText.textContent = q.text;
      quoteAuthor.textContent = `— ${q.author}`;

      quoteText.style.opacity = '1';
      quoteText.style.transform = 'translateY(0)';
      quoteAuthor.style.opacity = '1';

      if (quoteDots) {
        const dots = quoteDots.querySelectorAll('.quote-dot');
        dots.forEach((d, i) => {
          d.classList.toggle('active', i === currentIndex);
        });
      }
    }, 400);
  }

  function nextQuote() {
    const nextIdx = (currentIndex + 1) % quotes.length;
    showQuote(nextIdx);
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextQuote, 6500);
  }

  resetTimer();
}

// Timeline
function renderTimeline(timelineItems) {
  const container = document.getElementById('timelineContainer');
  if (!container || !timelineItems) return;

  container.innerHTML = '';

  timelineItems.forEach((item) => {
    const entry = document.createElement('div');
    entry.className = 'timeline-entry reveal-on-scroll';

    const tapeColorClass = item.tapeColor || 'kraft';

    entry.innerHTML = `
      <div class="timeline-center-badge">${escapeHtml(item.year)}</div>

      <div class="timeline-card">
        <div class="washi-tape timeline-card-tape ${tapeColorClass}"></div>

        <div class="timeline-meta-row">
          <span class="timeline-tag-text">${escapeHtml(item.tag)}</span>
          <span class="timeline-date-text">${escapeHtml(item.dateBadge)}</span>
        </div>

        <h3 class="timeline-title">${escapeHtml(item.title)}</h3>
        <p class="timeline-desc">${escapeHtml(item.description)}</p>

        ${item.quote ? `
          <div class="timeline-quote-box">
            ${escapeHtml(item.quote)}
          </div>
        ` : ''}

        ${item.photo ? `
          <div class="timeline-photo-wrap">
            <img src="${escapeHtml(item.photo)}" alt="${escapeHtml(item.title)}" class="timeline-img" loading="lazy">
            ${item.photoCaption ? `
              <div class="timeline-photo-caption">${escapeHtml(item.photoCaption)}</div>
            ` : ''}
          </div>
        ` : ''}
      </div>
    `;

    container.appendChild(entry);
  });
}

// Editorial cards
function renderEditorialSpreads(spreads) {
  if (!spreads || spreads.length < 2) return;

  const card1 = document.getElementById('editorialCard1');
  const card2 = document.getElementById('editorialCard2');

  if (card1 && spreads[0]) {
    card1.innerHTML = `
      <div class="editorial-photo-col">
        <div class="editorial-photo-wrap">
          <img src="${escapeHtml(spreads[0].image)}" alt="Özel Anı" class="editorial-img" loading="lazy">
        </div>
      </div>
      <div class="editorial-text-col">
        <span class="editorial-date-badge">— ${escapeHtml(spreads[0].date)}</span>
        <blockquote class="editorial-quote-text">“${escapeHtml(spreads[0].quote)}”</blockquote>
        <p class="editorial-subtext">${escapeHtml(spreads[0].subtext)}</p>
      </div>
    `;
  }

  if (card2 && spreads[1]) {
    card2.innerHTML = `
      <div class="editorial-photo-col">
        <div class="editorial-photo-wrap">
          <img src="${escapeHtml(spreads[1].image)}" alt="Özel Anı" class="editorial-img" loading="lazy">
        </div>
      </div>
      <div class="editorial-text-col">
        <span class="editorial-date-badge">— ${escapeHtml(spreads[1].date)}</span>
        <blockquote class="editorial-quote-text">“${escapeHtml(spreads[1].quote)}”</blockquote>
        <p class="editorial-subtext">${escapeHtml(spreads[1].subtext)}</p>
      </div>
    `;
  }
}

// Polaroid album & lightbox
let activePolaroids = [];
let currentPolaroidIndex = 0;

function renderPolaroidAlbum(polaroids) {
  const grid = document.getElementById('polaroidGrid');
  if (!grid || !polaroids) return;

  activePolaroids = polaroids;
  grid.innerHTML = '';

  polaroids.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'polaroid-card reveal-on-scroll';
    card.style.transform = `rotate(${item.rotation || '0deg'})`;
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `${item.title} fotoğrafını büyüt`);

    const tapeType = item.tapeType || 'top-center';

    card.innerHTML = `
      <div class="polaroid-tape ${tapeType}"></div>
      <div class="polaroid-photo-frame">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" class="polaroid-img" loading="lazy">
      </div>
      <div class="polaroid-meta">
        <span class="polaroid-date">${escapeHtml(item.date)}</span>
        <h3 class="polaroid-title">${escapeHtml(item.title)}</h3>
        <p class="polaroid-caption">“${escapeHtml(item.note)}”</p>
      </div>
    `;

    card.addEventListener('click', () => openPolaroidLightbox(index));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openPolaroidLightbox(index);
      }
    });

    grid.appendChild(card);
  });

  initLightboxControls();
}

function openPolaroidLightbox(index) {
  if (!activePolaroids || activePolaroids.length === 0) return;
  currentPolaroidIndex = (index + activePolaroids.length) % activePolaroids.length;

  const modal = document.getElementById('polaroidLightboxModal');
  const img = document.getElementById('lightboxImage');
  const date = document.getElementById('lightboxDate');
  const title = document.getElementById('lightboxTitle');
  const note = document.getElementById('lightboxNote');
  const counter = document.getElementById('lightboxCounter');

  const item = activePolaroids[currentPolaroidIndex];

  img.src = item.image;
  img.alt = item.title;
  date.textContent = item.date;
  title.textContent = item.title;
  note.textContent = `“${item.note}”`;
  counter.textContent = `${currentPolaroidIndex + 1} / ${activePolaroids.length}`;

  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
}

function closePolaroidLightbox() {
  const modal = document.getElementById('polaroidLightboxModal');
  if (modal) {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }
}

function initLightboxControls() {
  const modal = document.getElementById('polaroidLightboxModal');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const backdrop = document.getElementById('lightboxBackdrop');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  if (closeBtn) closeBtn.addEventListener('click', closePolaroidLightbox);
  if (backdrop) backdrop.addEventListener('click', closePolaroidLightbox);

  if (prevBtn) prevBtn.addEventListener('click', () => openPolaroidLightbox(currentPolaroidIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => openPolaroidLightbox(currentPolaroidIndex + 1));

  window.addEventListener('keydown', (e) => {
    if (!modal || modal.hasAttribute('hidden')) return;
    if (e.key === 'Escape') closePolaroidLightbox();
    if (e.key === 'ArrowLeft') openPolaroidLightbox(currentPolaroidIndex - 1);
    if (e.key === 'ArrowRight') openPolaroidLightbox(currentPolaroidIndex + 1);
  });
}

// Special memories
function renderSpecialMemories(memories) {
  const grid = document.getElementById('specialMemoriesGrid');
  if (!grid || !memories) return;

  grid.innerHTML = '';

  memories.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'special-memory-card reveal-on-scroll';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `${item.title} anısını oku`);

    card.innerHTML = `
      <div class="special-memory-top">
        <div class="memory-icon-badge">${item.icon}</div>
        <span class="memory-date-tag">${escapeHtml(item.date)}</span>
      </div>
      <h3 class="special-memory-title">${escapeHtml(item.title)}</h3>
      <p class="special-memory-snippet">${escapeHtml(item.snippet)}</p>
      <div class="memory-read-more">
        <span>Devamını Oku</span>
        <span class="arrow-icon">→</span>
      </div>
    `;

    card.addEventListener('click', () => openMemoryDetailModal(item));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openMemoryDetailModal(item);
      }
    });

    grid.appendChild(card);
  });

  initMemoryModalControls();
}

function openMemoryDetailModal(item) {
  const modal = document.getElementById('memoryDetailModal');
  const icon = document.getElementById('memoryModalIcon');
  const date = document.getElementById('memoryModalDate');
  const title = document.getElementById('memoryModalTitle');
  const img = document.getElementById('memoryModalImg');
  const story = document.getElementById('memoryModalStory');
  const quote = document.getElementById('memoryModalQuote');

  if (icon) icon.textContent = item.icon || '💌';
  if (date) date.textContent = item.date;
  if (title) title.textContent = item.title;
  if (img) {
    img.src = item.image || '';
    img.alt = item.title;
  }
  if (story) story.textContent = item.fullStory || item.snippet;
  if (quote) quote.textContent = item.romanticNote || '';

  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
}

function closeMemoryDetailModal() {
  const modal = document.getElementById('memoryDetailModal');
  if (modal) {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }
}

function initMemoryModalControls() {
  const closeBtn = document.getElementById('memoryModalCloseBtn');
  const backdrop = document.getElementById('memoryModalBackdrop');

  if (closeBtn) closeBtn.addEventListener('click', closeMemoryDetailModal);
  if (backdrop) backdrop.addEventListener('click', closeMemoryDetailModal);

  window.addEventListener('keydown', (e) => {
    const modal = document.getElementById('memoryDetailModal');
    if (modal && !modal.hasAttribute('hidden') && e.key === 'Escape') {
      closeMemoryDetailModal();
    }
  });
}

// Letters & modal
function renderLetters(letters) {
  const grid = document.getElementById('lettersGrid');
  if (!grid || !letters) return;

  grid.innerHTML = '';

  letters.forEach((item) => {
    const envelope = document.createElement('div');
    envelope.className = 'envelope-card reveal-on-scroll';
    envelope.setAttribute('tabindex', '0');
    envelope.setAttribute('role', 'button');
    envelope.setAttribute('aria-label', `${item.title} mektubunu aç`);

    const waxColorClass = item.waxColor === 'gold' ? 'gold' : '';

    envelope.innerHTML = `
      <div class="envelope-flap"></div>
      <div class="envelope-wax-seal ${waxColorClass}">
        <span>♥</span>
      </div>
      <div class="envelope-recipient">${escapeHtml(item.recipient)}</div>
      <h3 class="envelope-title">${escapeHtml(item.title)}</h3>
      <span class="envelope-date">${escapeHtml(item.date)}</span>
      <p class="envelope-preview-text">“${escapeHtml(item.preview)}”</p>
      <div class="envelope-open-hint">Mektubu Aç ✉</div>
    `;

    envelope.addEventListener('click', () => openLetterReaderModal(item));
    envelope.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLetterReaderModal(item);
      }
    });

    grid.appendChild(envelope);
  });

  initLetterModalControls();
}

function openLetterReaderModal(item) {
  const modal = document.getElementById('letterReaderModal');
  const date = document.getElementById('letterModalDate');
  const title = document.getElementById('letterModalTitle');
  const recipient = document.getElementById('letterModalRecipient');
  const content = document.getElementById('letterModalContent');
  const signature = document.getElementById('letterModalSignature');

  date.textContent = item.date;
  title.textContent = item.title;
  recipient.textContent = `Kime: ${item.recipient}`;
  content.textContent = item.content;
  signature.textContent = `— ${item.sender}`;

  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLetterReaderModal() {
  const modal = document.getElementById('letterReaderModal');
  if (modal) {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }
}

function initLetterModalControls() {
  const closeBtn = document.getElementById('letterModalCloseBtn');
  const backdrop = document.getElementById('letterModalBackdrop');

  if (closeBtn) closeBtn.addEventListener('click', closeLetterReaderModal);
  if (backdrop) backdrop.addEventListener('click', closeLetterReaderModal);

  window.addEventListener('keydown', (e) => {
    const modal = document.getElementById('letterReaderModal');
    if (modal && !modal.hasAttribute('hidden') && e.key === 'Escape') {
      closeLetterReaderModal();
    }
  });
}

// Audio player
function initVintageMusicPlayer(musicData) {
  const trackTitle = document.getElementById('trackTitle');
  const trackArtist = document.getElementById('trackArtist');
  const mainPlayBtn = document.getElementById('mainPlayBtn');
  const quickPlayBtn = document.getElementById('quickPlayBtn');
  const quickPlayText = document.getElementById('quickPlayText');
  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');
  const vinylRecord = document.getElementById('vinylRecord');
  const progressBarBg = document.getElementById('progressBarBg');
  const progressBarFill = document.getElementById('progressBarFill');
  const currentTimeLabel = document.getElementById('currentTimeLabel');
  const durationLabel = document.getElementById('durationLabel');
  const volumeSlider = document.getElementById('volumeSlider');
  const rewindBtn = document.getElementById('rewindBtn');
  const forwardBtn = document.getElementById('forwardBtn');
  const vinylCrackleCheck = document.getElementById('vinylCrackleCheck');

  if (trackTitle && musicData.title) trackTitle.textContent = musicData.title;
  if (trackArtist && musicData.artist) trackArtist.textContent = musicData.artist;

  let isPlaying = false;
  let playbackSeconds = 0;
  const totalDuration = 204;
  let audioTimer = null;
  let volume = musicData.defaultVolume || 0.7;

  let realAudio = null;
  let usingRealAudio = false;

  if (musicData.audioSrc && musicData.audioSrc.trim() !== '') {
    realAudio = new Audio(musicData.audioSrc);
    realAudio.volume = volume;
    usingRealAudio = true;

    realAudio.addEventListener('timeupdate', () => {
      if (realAudio.duration) {
        updateProgress(realAudio.currentTime, realAudio.duration);
      }
    });
    realAudio.addEventListener('ended', () => {
      setPlayState(false);
    });
    realAudio.addEventListener('error', () => {
      usingRealAudio = false;
    });
  }

  let audioCtx = null;
  let crackleNode = null;
  let synthInterval = null;

  function initWebAudio() {
    if (audioCtx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    audioCtx = new AudioContext();

    createVinylCrackle();
  }

  function createVinylCrackle() {
    if (!audioCtx) return;
    try {
      const bufferSize = audioCtx.sampleRate * 2;
      const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        if (Math.random() < 0.0006) {
          output[i] = (Math.random() * 2 - 1) * 0.4;
        } else {
          output[i] = (Math.random() * 2 - 1) * 0.015;
        }
      }

      const whiteNoise = audioCtx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1800;
      filter.Q.value = 1.2;

      const crackleGain = audioCtx.createGain();
      crackleGain.gain.value = (vinylCrackleCheck && vinylCrackleCheck.checked) ? 0.08 * volume : 0;

      whiteNoise.connect(filter);
      filter.connect(crackleGain);
      crackleGain.connect(audioCtx.destination);
      whiteNoise.start(0);

      crackleNode = crackleGain;
    } catch (e) {
      console.warn('Crackle setup error:', e);
    }
  }

  const romanticMelody = [
    [261.63, 329.63, 392.00, 523.25],
    [220.00, 261.63, 329.63, 440.00],
    [174.61, 261.63, 349.23, 440.00],
    [196.00, 246.94, 293.66, 392.00],
    [164.81, 246.94, 329.63, 392.00],
    [220.00, 261.63, 329.63, 523.25],
    [146.83, 220.00, 293.66, 440.00],
    [196.00, 293.66, 392.00, 493.88]
  ];

  let chordIndex = 0;
  let noteIndex = 0;

  function playPianoNote(freq, timeOffset) {
    if (!audioCtx || audioCtx.state !== 'running') return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.value = freq;

    const now = audioCtx.currentTime + timeOffset;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.22 * volume, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 1.85);
  }

  function startSynthMelody() {
    if (synthInterval) clearInterval(synthInterval);

    synthInterval = setInterval(() => {
      if (!isPlaying) return;
      const currentChord = romanticMelody[chordIndex];
      const freq = currentChord[noteIndex];
      playPianoNote(freq, 0);

      noteIndex++;
      if (noteIndex >= currentChord.length) {
        noteIndex = 0;
        chordIndex = (chordIndex + 1) % romanticMelody.length;
      }
    }, 420);
  }

  function stopSynthMelody() {
    if (synthInterval) {
      clearInterval(synthInterval);
      synthInterval = null;
    }
  }

  function togglePlay() {
    setPlayState(!isPlaying);
  }

  function setPlayState(play) {
    isPlaying = play;

    if (isPlaying) {
      initWebAudio();
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      if (usingRealAudio && realAudio) {
        realAudio.play().catch(() => {
          usingRealAudio = false;
          startSynthMelody();
        });
      } else {
        startSynthMelody();
      }

      if (vinylRecord) vinylRecord.classList.add('spinning');
      if (playIcon) playIcon.classList.add('hidden');
      if (pauseIcon) pauseIcon.classList.remove('hidden');
      if (quickPlayText) quickPlayText.textContent = 'Müziği Duraklat';

      if (!usingRealAudio) {
        if (audioTimer) clearInterval(audioTimer);
        audioTimer = setInterval(() => {
          playbackSeconds = (playbackSeconds + 1) % totalDuration;
          updateProgress(playbackSeconds, totalDuration);
        }, 1000);
      }
    } else {
      if (usingRealAudio && realAudio) {
        realAudio.pause();
      } else {
        stopSynthMelody();
        if (audioTimer) clearInterval(audioTimer);
      }

      if (vinylRecord) vinylRecord.classList.remove('spinning');
      if (playIcon) playIcon.classList.remove('hidden');
      if (pauseIcon) pauseIcon.classList.add('hidden');
      if (quickPlayText) quickPlayText.textContent = 'Müziği Başlat';
    }
  }

  function updateProgress(current, duration) {
    const percent = Math.min((current / duration) * 100, 100);
    if (progressBarFill) progressBarFill.style.width = `${percent}%`;
    if (currentTimeLabel) currentTimeLabel.textContent = formatTime(current);
    if (durationLabel) durationLabel.textContent = formatTime(duration);
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  if (mainPlayBtn) mainPlayBtn.addEventListener('click', togglePlay);
  if (quickPlayBtn) quickPlayBtn.addEventListener('click', togglePlay);

  if (rewindBtn) {
    rewindBtn.addEventListener('click', () => {
      if (usingRealAudio && realAudio) {
        realAudio.currentTime = Math.max(0, realAudio.currentTime - 10);
      } else {
        playbackSeconds = Math.max(0, playbackSeconds - 10);
        updateProgress(playbackSeconds, totalDuration);
      }
    });
  }

  if (forwardBtn) {
    forwardBtn.addEventListener('click', () => {
      if (usingRealAudio && realAudio) {
        realAudio.currentTime = Math.min(realAudio.duration, realAudio.currentTime + 10);
      } else {
        playbackSeconds = Math.min(totalDuration, playbackSeconds + 10);
        updateProgress(playbackSeconds, totalDuration);
      }
    });
  }

  if (progressBarBg) {
    progressBarBg.addEventListener('click', (e) => {
      const rect = progressBarBg.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percent = Math.max(0, Math.min(1, clickX / rect.width));

      if (usingRealAudio && realAudio && realAudio.duration) {
        realAudio.currentTime = percent * realAudio.duration;
      } else {
        playbackSeconds = Math.floor(percent * totalDuration);
        updateProgress(playbackSeconds, totalDuration);
      }
    });
  }

  if (volumeSlider) {
    volumeSlider.addEventListener('input', (e) => {
      volume = parseFloat(e.target.value);
      if (realAudio) realAudio.volume = volume;
      if (crackleNode && vinylCrackleCheck && vinylCrackleCheck.checked) {
        crackleNode.gain.value = 0.08 * volume;
      }
    });
  }

  if (vinylCrackleCheck) {
    vinylCrackleCheck.addEventListener('change', (e) => {
      if (crackleNode) {
        crackleNode.gain.value = e.target.checked ? 0.08 * volume : 0;
      }
    });
  }
}

// Background particles
function initAmbientParticles() {
  const canvas = document.getElementById('ambientCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = 28;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 1.5,
      speedY: Math.random() * 0.4 + 0.15,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.35 + 0.1,
      type: Math.random() > 0.4 ? 'star' : 'heart'
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.y -= p.speedY;
      p.x += p.speedX;

      if (p.y < -20) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }

      ctx.save();
      ctx.globalAlpha = p.opacity;

      if (p.type === 'heart') {
        ctx.fillStyle = '#6B2D3A';
        drawSmallHeart(ctx, p.x, p.y, p.size * 1.5);
      } else {
        ctx.fillStyle = '#C5A059';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.7, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    });

    requestAnimationFrame(draw);
  }

  function drawSmallHeart(context, x, y, size) {
    context.beginPath();
    const topCurveHeight = size * 0.3;
    context.moveTo(x, y + topCurveHeight);
    context.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
    context.bezierCurveTo(x - size / 2, y + (size + topCurveHeight) / 2, x, y + (size + topCurveHeight) / 1.4, x, y + size);
    context.bezierCurveTo(x, y + (size + topCurveHeight) / 1.4, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
    context.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
    context.closePath();
    context.fill();
  }

  requestAnimationFrame(draw);
}

// Scroll reveal
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach((el) => observer.observe(el));
}

// Helper
function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
