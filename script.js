// ============================================
// AUDIO CONTEXT & SOUND MANAGEMENT
// ============================================

let audioContext = null;
let isMuted = false;
let audioInitialized = false;
let ambientMusic = null;
let noClickCount = 0;

// Initialize audio context on first user interaction
function initAudio() {
    if (!audioInitialized) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        audioInitialized = true;
        console.log('Audio context initialized');
    }
}

// Create oscillator-based sounds (lightweight, no external files needed)
function playSparkleChime() {
    if (!audioContext || isMuted) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Soft, airy sparkle sound
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1600, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime); // Low volume (20%)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.type = 'sine';
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

function playPopSound() {
    if (!audioContext || isMuted) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Soft pop sound
    oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.25, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
    
    oscillator.type = 'sine';
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.15);
}

function playSadViolin() {
    if (!audioContext || isMuted) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Dramatic sad note
    oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(250, audioContext.currentTime + 0.5);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
    
    oscillator.type = 'triangle';
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1);
}

// Ambient music (soft romantic loop)
function startAmbientMusic() {
    if (!audioContext || isMuted || ambientMusic) return;
    
    // Create a simple ambient loop with multiple oscillators
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Soft ambient frequencies
    osc1.frequency.setValueAtTime(220, audioContext.currentTime); // A3
    osc2.frequency.setValueAtTime(330, audioContext.currentTime); // E4
    
    gainNode.gain.setValueAtTime(0.15, audioContext.currentTime); // Low volume (15%)
    
    osc1.type = 'sine';
    osc2.type = 'sine';
    
    osc1.start();
    osc2.start();
    
    ambientMusic = { osc1, osc2, gainNode };
}

function stopAmbientMusic() {
    if (ambientMusic) {
        ambientMusic.osc1.stop();
        ambientMusic.osc2.stop();
        ambientMusic = null;
    }
}

// Mute toggle functionality
const muteToggle = document.getElementById('muteToggle');
muteToggle.addEventListener('click', () => {
    isMuted = !isMuted;
    muteToggle.querySelector('.mute-icon').textContent = isMuted ? '🔇' : '🔊';
    
    if (isMuted) {
        stopAmbientMusic();
    } else if (document.getElementById('responseMessage').classList.contains('show')) {
        startAmbientMusic();
    }
});

// ============================================
// FLOATING HEARTS BACKGROUND
// ============================================

function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const heartEmojis = ['💕', '💖', '💗', '💓', '💘'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => heart.remove(), 10000);
    }, 500);
}

// ============================================
// CURSOR FOLLOWER HEARTS
// ============================================

let cursorHeartTimeout;

document.addEventListener('mousemove', (e) => {
    clearTimeout(cursorHeartTimeout);
    
    cursorHeartTimeout = setTimeout(() => {
        if (Math.random() > 0.8) { // 20% chance
            const heart = document.createElement('div');
            heart.className = 'cursor-heart';
            heart.textContent = '💕';
            heart.style.left = e.clientX + 'px';
            heart.style.top = e.clientY + 'px';
            heart.style.setProperty('--tx', (Math.random() - 0.5) * 100 + 'px');
            heart.style.setProperty('--ty', -50 + (Math.random() - 0.5) * 50 + 'px');
            
            document.getElementById('cursorHearts').appendChild(heart);
            
            setTimeout(() => heart.remove(), 1000);
        }
    }, 100);
});

// ============================================
// BUTTON LOGIC - YES BUTTON
// ============================================

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const responseMessage = document.getElementById('responseMessage');
const heroSection = document.getElementById('heroSection');
const confettiContainer = document.getElementById('confettiContainer');

// YES button hover - play sparkle chime
yesBtn.addEventListener('mouseenter', () => {
    initAudio();
    playSparkleChime();
});

// YES button click
yesBtn.addEventListener('click', () => {
    initAudio();
    playPopSound();
    
    // Change background to brighter pink gradient
    document.body.style.background = 'linear-gradient(135deg, #ff6bb5 0%, #ff2d95 50%, #ff6bb5 100%)';
    
    // Show response message
    responseMessage.textContent = 'STOP that was actually elite energy 🥹💘';
    responseMessage.classList.add('show');
    
    // Hide buttons
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    
    // Create heart confetti
    createHeartConfetti();
    
    // Start ambient music
    setTimeout(() => {
        startAmbientMusic();
        muteToggle.style.display = 'flex'; // Show mute toggle
    }, 500);
    
    // Increase floating hearts
    increaseFloatingHearts();
});

// ============================================
// BUTTON LOGIC - NO BUTTON
// ============================================

// NO button click
noBtn.addEventListener('click', () => {
    initAudio();
    playPopSound();
    
    noClickCount++;
    
    if (noClickCount === 1) {
        // First NO click
        responseMessage.textContent = 'be serious rn 😭 think about it again';
        responseMessage.classList.add('show');
        
        // Grow YES button, shrink NO button
        yesBtn.style.transform = 'scale(1.15)';
        noBtn.style.transform = 'scale(0.9)';
        
    } else if (noClickCount >= 2) {
        // Second NO click
        responseMessage.textContent = '💔😭 wow okay';
        
        // Play sad violin
        playSadViolin();
        
        // Shake NO button
        noBtn.classList.add('shake-animation');
        setTimeout(() => noBtn.classList.remove('shake-animation'), 500);
        
        // Make YES button even larger and more glowing
        yesBtn.style.transform = 'scale(1.3)';
        yesBtn.style.boxShadow = '0 0 50px rgba(255, 45, 149, 1), 0 8px 20px rgba(0, 0, 0, 0.4)';
        
        // Shrink NO button more
        noBtn.style.transform = 'scale(0.75)';
        
        // Create crying emoji animation
        createCryingEmoji();
    }
});

// ============================================
// HEART CONFETTI ANIMATION
// ============================================

function createHeartConfetti() {
    const heartEmojis = ['💕', '💖', '💗', '💓', '💘', '❤️'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'confetti-heart';
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 0.5 + 's';
            heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            confettiContainer.appendChild(heart);
            
            setTimeout(() => heart.remove(), 5000);
        }, i * 50);
    }
}

// Increase floating hearts after YES click
function increaseFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const heartEmojis = ['💕', '💖', '💗', '💓', '💘'];
    
    // Create more hearts faster
    const interval = setInterval(() => {
        for (let i = 0; i < 3; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
            
            container.appendChild(heart);
            
            setTimeout(() => heart.remove(), 8000);
        }
    }, 300);
}

// ============================================
// CRYING EMOJI ANIMATION
// ============================================

function createCryingEmoji() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.className = 'crying-emoji';
            emoji.textContent = '😭';
            emoji.style.left = (Math.random() * 80 + 10) + '%';
            emoji.style.top = '30%';
            
            confettiContainer.appendChild(emoji);
            
            setTimeout(() => emoji.remove(), 2000);
        }, i * 200);
    }
}

// ============================================
// IMAGE MODAL (Full-screen view)
// ============================================

const childhoodImage = document.getElementById('childhoodImage');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');

// Open modal on image click
childhoodImage.addEventListener('click', () => {
    imageModal.style.display = 'block';
});

// Close modal on X click
modalClose.addEventListener('click', () => {
    imageModal.style.display = 'none';
});

// Close modal on background click
imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        imageModal.style.display = 'none';
    }
});

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imageModal.style.display === 'block') {
        imageModal.style.display = 'none';
    }
});

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    console.log('Valentine\'s Day website loaded! 💕');
});
