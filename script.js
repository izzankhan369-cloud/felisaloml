// ============================================
// AUDIO CONTEXT & SOUND MANAGEMENT
// ============================================

let audioContext = null;
let isMuted = false;
let audioInitialized = false;
let noClickCount = 0;

// Initialize audio context on first user interaction
function initAudio() {
    if (!audioInitialized) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        audioInitialized = true;
        console.log('Audio initialized');
    }
}

// Soft glossy click sound
function playClickSound() {
    if (!audioContext || isMuted) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.08);
    
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.12);
    
    oscillator.type = 'sine';
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.12);
}

// Light sparkle chime for YES hover
function playSparkleChime() {
    if (!audioContext || isMuted) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1800, audioContext.currentTime + 0.15);
    
    gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.25);
    
    oscillator.type = 'sine';
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.25);
}

// Mute toggle functionality
const muteToggle = document.getElementById('muteToggle');
muteToggle.addEventListener('click', () => {
    isMuted = !isMuted;
    muteToggle.querySelector('.mute-icon').textContent = isMuted ? '🔇' : '🔊';
});

// ============================================
// FLOATING HEARTS BACKGROUND (SUBTLE)
// ============================================

function createFloatingHearts() {
    const container = document.getElementById('floatingHeartsBg');
    const heartEmojis = ['💕', '💖', '💗', '💓', '💘'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 6 + 10) + 's';
        heart.style.animationDelay = Math.random() * 3 + 's';
        
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 15000);
    }, 1200);
}

// ============================================
// SPARKLE PARTICLES (MINIMAL)
// ============================================

function createSparkleParticles() {
    const container = document.getElementById('sparkleParticles');
    
    setInterval(() => {
        if (Math.random() > 0.6) { // 40% chance
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 2 + 's';
            
            container.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 5000);
        }
    }, 800);
}

// ============================================
// BUTTON LOGIC - YES BUTTON
// ============================================

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const responseMessage = document.getElementById('responseMessage');
const confettiContainer = document.getElementById('confettiContainer');

// YES button hover - sparkle chime
yesBtn.addEventListener('mouseenter', () => {
    initAudio();
    playSparkleChime();
});

// YES button click
yesBtn.addEventListener('click', () => {
    initAudio();
    playClickSound();
    
    // Brighten background gradient slightly
    document.body.style.background = 'linear-gradient(135deg, #ff6bb5 0%, #ff2d95 50%, #ff6bb5 100%)';
    document.body.style.backgroundSize = '400% 400%';
    document.body.style.animation = 'gradientShift 12s ease-in-out infinite';
    
    // Show response message
    responseMessage.textContent = 'okay wait… that was actually elite 🥹💘';
    responseMessage.classList.add('show', 'glow-pulse');
    
    // Hide buttons with smooth fade
    yesBtn.style.opacity = '0';
    noBtn.style.opacity = '0';
    setTimeout(() => {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
    }, 300);
    
    // Create subtle heart confetti
    createHeartConfetti();
    
    // Increase floating hearts slightly
    increaseFloatingHearts();
    
    // Show mute toggle
    setTimeout(() => {
        muteToggle.style.display = 'flex';
    }, 500);
});

// ============================================
// BUTTON LOGIC - NO BUTTON
// ============================================

noBtn.addEventListener('click', () => {
    initAudio();
    playClickSound();
    
    noClickCount++;
    
    if (noClickCount === 1) {
        // First NO click
        responseMessage.textContent = 'be serious rn 😭 think about it again';
        responseMessage.classList.add('show');
        
        // Grow YES button, shrink NO button (smooth)
        yesBtn.style.transform = 'scale(1.15)';
        noBtn.style.transform = 'scale(0.9)';
        
        // Small shake animation
        noBtn.classList.add('shake-animation');
        setTimeout(() => noBtn.classList.remove('shake-animation'), 400);
        
    } else if (noClickCount >= 2) {
        // Second NO click
        responseMessage.textContent = 'wow. bold.';
        
        // Dim background slightly
        document.body.style.background = 'linear-gradient(135deg, #d92479 0%, #cc0036 50%, #d92479 100%)';
        document.body.style.backgroundSize = '400% 400%';
        
        // Make YES button glow stronger
        yesBtn.style.transform = 'scale(1.3)';
        yesBtn.style.boxShadow = '0 0 50px rgba(255, 45, 149, 0.9), 0 8px 32px rgba(0, 0, 0, 0.4)';
        
        // Shrink NO button more
        noBtn.style.transform = 'scale(0.75)';
        
        // Shake animation
        noBtn.classList.add('shake-animation');
        setTimeout(() => noBtn.classList.remove('shake-animation'), 400);
        
        // Small falling crying emoji animation
        createCryingEmoji();
    }
});

// ============================================
// HEART CONFETTI ANIMATION (SUBTLE)
// ============================================

function createHeartConfetti() {
    const heartEmojis = ['💕', '💖', '💗', '💓', '💘'];
    
    // Create 25 hearts (moderate amount)
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'confetti-heart';
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 0.4 + 's';
            heart.style.animationDuration = (Math.random() * 1.5 + 3) + 's';
            
            confettiContainer.appendChild(heart);
            
            setTimeout(() => heart.remove(), 5000);
        }, i * 60);
    }
}

// Increase floating hearts slightly after YES
function increaseFloatingHearts() {
    const container = document.getElementById('floatingHeartsBg');
    const heartEmojis = ['💕', '💖', '💗', '💓', '💘'];
    
    const interval = setInterval(() => {
        for (let i = 0; i < 2; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
            heart.style.opacity = '0.2';
            
            container.appendChild(heart);
            
            setTimeout(() => heart.remove(), 13000);
        }
    }, 600);
}

// ============================================
// CRYING EMOJI ANIMATION (MINIMAL)
// ============================================

function createCryingEmoji() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.className = 'crying-emoji';
            emoji.textContent = '😭';
            emoji.style.left = (Math.random() * 60 + 20) + '%';
            emoji.style.top = '25%';
            
            confettiContainer.appendChild(emoji);
            
            setTimeout(() => emoji.remove(), 2500);
        }, i * 300);
    }
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    createSparkleParticles();
    console.log('Valentine\'s website loaded 💕');
});
