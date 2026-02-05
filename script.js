// ============ VARIABLES ============
let currentPage = 0;
const pages = document.querySelectorAll('.page');
const navDots = document.querySelectorAll('.nav-dot');
const bgMusic = document.getElementById('bgMusic');
const audioControl = document.getElementById('audioControl');
const audioIcon = document.getElementById('audioIcon');
let musicPlaying = false;

// ============ INITIALIZE ============
document.addEventListener('DOMContentLoaded', function() {
    initializeGallery();
    setupAudioControl();
});

// ============ PAGE NAVIGATION ============
function goToPage(pageIndex) {
    // Play music on first interaction
    if (!musicPlaying) {
        bgMusic.play().catch(e => console.log('Auto-play prevented:', e));
        musicPlaying = true;
        updateAudioIcon();
    }

    pages[currentPage].classList.remove('active');
    navDots[currentPage].classList.remove('active');

    currentPage = pageIndex;

    pages[currentPage].classList.add('active');
    navDots[currentPage].classList.add('active');
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        goToPage(currentPage + 1);
    }
}

// ============ GALLERY ============
function initializeGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    // EDIT FOTO GALLERY DI SINI
    const images = [
        {
            src: 'img/gallery-1.jpg',
            label: 'Momen Bahagia'
        },
        {
            src: 'img/gallery-2.jpg',
            label: 'Saat Spesial'
        },
        {
            src: 'img/gallery-3.jpg',
            label: 'Tawa & Canda'
        },
        {
            src: 'img/gallery-4.jpg',
            label: 'Pagi yang Cerah'
        }
    ];

    images.forEach((img, index) => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.style.animationDelay = `${0.6 + index * 0.1}s`;
        card.innerHTML = `
            <img src="${img.src}" alt="${img.label}" onclick="openLightbox('${img.src}')">
            <p class="gallery-label">${img.label}</p>
        `;
        galleryGrid.appendChild(card);
    });
}

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    lightboxImg.src = src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close lightbox on outside click
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// ============ CONFETTI EFFECT ============
function createConfetti() {
    createConfettiPieces();
    createLoveAnimation();
    playSuccessSound();
}

function createConfettiPieces() {
    const confettiCount = 100;
    const colors = ['#D4A574', '#E8D4C4', '#C9A885', '#FEFBF7', '#FF69B4'];

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0px';

        document.body.appendChild(confetti);

        const duration = Math.random() * 2 + 2;
        const xMove = (Math.random() - 0.5) * 200;

        confetti.animate([
            {
                transform: `translateY(0px) translateX(0px) rotate(0deg)`,
                opacity: 1
            },
            {
                transform: `translateY(${window.innerHeight + 20}px) translateX(${xMove}px) rotate(${Math.random() * 360}deg)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });

        setTimeout(() => confetti.remove(), duration * 1000);
    }
}

function createLoveAnimation() {
    const loveTexts = ['💕', '💖', '💗', '💝', '❤️'];
    const loveCount = 15;

    for (let i = 0; i < loveCount; i++) {
        const loveText = document.createElement('div');
        loveText.className = 'love-text';
        loveText.textContent = loveTexts[Math.floor(Math.random() * loveTexts.length)];
        loveText.style.left = Math.random() * window.innerWidth + 'px';
        loveText.style.top = window.innerHeight / 2 + 'px';
        loveText.style.fontSize = Math.random() * 1.5 + 1.5 + 'rem';
        loveText.style.opacity = 1;

        document.body.appendChild(loveText);

        const duration = Math.random() * 1.5 + 2;
        const xMove = (Math.random() - 0.5) * 300;
        const yMove = -(Math.random() * 400 + 200);

        loveText.animate([
            {
                transform: `translate(0, 0) scale(1)`,
                opacity: 1
            },
            {
                transform: `translate(${xMove}px, ${yMove}px) scale(0.3)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });

        setTimeout(() => loveText.remove(), duration * 1000);
    }
}

function playSuccessSound() {
    // Natural Frog Croak sound effect! 🐸
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Croak 1: Croak rendah & panjang
    playNaturalCroak(audioContext, 120, 0, 0.6);
    
    // Croak 2: Croak medium (setelah delay)
    playNaturalCroak(audioContext, 140, 0.7, 0.5);
    
    // Croak 3: Croak rendah lagi
    playNaturalCroak(audioContext, 125, 1.3, 0.55);
}

function playNaturalCroak(audioContext, frequency, delay, duration) {
    setTimeout(() => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        const filter = audioContext.createBiquadFilter();

        oscillator.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Natural frog croak characteristics
        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';
        
        // Add filter for natural timbre
        filter.type = 'lowpass';
        filter.frequency.value = 800;
        filter.Q.value = 5;
        
        // Amplitude envelope untuk efek natural croak
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.35, audioContext.currentTime + 0.05);
        gainNode.gain.linearRampToValueAtTime(0.25, audioContext.currentTime + duration - 0.15);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    }, delay * 1000);
}

// ============ AUDIO CONTROL ============
function setupAudioControl() {
    audioControl.addEventListener('click', function() {
        if (musicPlaying) {
            bgMusic.pause();
            musicPlaying = false;
        } else {
            bgMusic.play().catch(e => console.log('Play failed:', e));
            musicPlaying = true;
        }
        updateAudioIcon();
    });
}

function updateAudioIcon() {
    if (musicPlaying) {
        audioIcon.textContent = '🔊';
        audioControl.classList.remove('muted');
    } else {
        audioIcon.textContent = '🔇';
        audioControl.classList.add('muted');
    }
}

// ============ KEYBOARD NAVIGATION ============
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' && currentPage < pages.length - 1) {
        nextPage();
    } else if (e.key === 'ArrowLeft' && currentPage > 0) {
        goToPage(currentPage - 1);
    }
});

// ============ TOUCH SWIPE NAVIGATION ============
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const threshold = 50;
    if (touchStartX - touchEndX > threshold && currentPage < pages.length - 1) {
        nextPage();
    } else if (touchEndX - touchStartX > threshold && currentPage > 0) {
        goToPage(currentPage - 1);
    }
}