/* ============================================
   RESET & BASE
   ============================================ */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Segoe UI Emoji', Roboto, 'Helvetica Neue', Arial, sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    background: linear-gradient(135deg, #ff2d95 0%, #ff003c 50%, #ff2d95 100%);
    background-size: 400% 400%;
    animation: gradientShift 15s ease-in-out infinite;
}

/* Animated gradient background */
@keyframes gradientShift {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}

/* Soft blur overlay */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.15) 100%);
    backdrop-filter: blur(1px);
    pointer-events: none;
    z-index: 1;
}

/* ============================================
   FLOATING HEARTS BACKGROUND (SUBTLE)
   ============================================ */
.floating-hearts-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 2;
    overflow: hidden;
}

.floating-heart {
    position: absolute;
    font-size: 18px;
    opacity: 0.12;
    animation: floatUpSmooth 12s ease-in-out infinite;
}

@keyframes floatUpSmooth {
    0% {
        transform: translateY(100vh) rotate(0deg) scale(0.8);
        opacity: 0;
    }
    10% {
        opacity: 0.12;
    }
    90% {
        opacity: 0.12;
    }
    100% {
        transform: translateY(-100px) rotate(180deg) scale(1);
        opacity: 0;
    }
}

/* ============================================
   SPARKLE PARTICLES (MINIMAL)
   ============================================ */
.sparkle-particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 2;
    overflow: hidden;
}

.sparkle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: white;
    border-radius: 50%;
    opacity: 0;
    animation: sparkleFloat 4s ease-in-out infinite;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
}

@keyframes sparkleFloat {
    0%, 100% {
        opacity: 0;
        transform: translateY(0) scale(0);
    }
    50% {
        opacity: 0.6;
        transform: translateY(-60px) scale(1);
    }
}

/* ============================================
   MUTE TOGGLE
   ============================================ */
.mute-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.15);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease-in-out;
    font-size: 18px;
}

.mute-toggle:hover {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
}

/* ============================================
   HERO SECTION
   ============================================ */
.hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 10;
    padding: 40px 20px;
}

.hero-content {
    text-align: center;
    max-width: 600px;
    width: 100%;
    opacity: 0;
    animation: fadeInSmooth 1.2s ease-out 0.3s forwards;
}

@keyframes fadeInSmooth {
    to {
        opacity: 1;
    }
}

/* ============================================
   TYPOGRAPHY - Y2K GLOSSY BUBBLE STYLE
   ============================================ */
.main-heading {
    font-size: clamp(3.5rem, 12vw, 7rem);
    font-weight: 900;
    margin-bottom: 30px;
    color: white;
    text-shadow: 
        0 0 30px rgba(255, 255, 255, 0.6),
        0 0 60px rgba(255, 182, 217, 0.4),
        0 4px 15px rgba(0, 0, 0, 0.3);
    letter-spacing: 2px;
    animation: shimmerGlow 4s ease-in-out infinite;
    position: relative;
}

/* Shimmer animation */
@keyframes shimmerGlow {
    0%, 100% {
        text-shadow: 
            0 0 30px rgba(255, 255, 255, 0.6),
            0 0 60px rgba(255, 182, 217, 0.4),
            0 4px 15px rgba(0, 0, 0, 0.3);
    }
    50% {
        text-shadow: 
            0 0 40px rgba(255, 255, 255, 0.9),
            0 0 80px rgba(255, 182, 217, 0.6),
            0 4px 15px rgba(0, 0, 0, 0.3);
    }
}

.question {
    font-size: clamp(1.3rem, 4vw, 1.9rem);
    margin-bottom: 50px;
    font-weight: 300;
    letter-spacing: 0.5px;
    color: rgba(255, 255, 255, 0.95);
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    opacity: 0;
    animation: fadeInSmooth 1s ease-out 1.3s forwards;
}

/* ============================================
   GLASSMORPHISM BUTTONS - CHROME STYLE
   ============================================ */
.button-container {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 40px;
    opacity: 0;
    animation: fadeInSmooth 1s ease-out 1.6s forwards;
}

.btn {
    position: relative;
    padding: 18px 45px;
    font-size: clamp(1.1rem, 3vw, 1.35rem);
    font-weight: 700;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-radius: 50px;
    cursor: pointer;
    overflow: hidden;
    text-transform: lowercase;
    letter-spacing: 0.5px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    color: white;
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    transition: all 0.25s ease-in-out;
}

/* Glossy overlay effect */
.btn-gloss {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%);
    pointer-events: none;
}

.btn-content {
    position: relative;
    z-index: 1;
}

.btn:hover {
    transform: scale(1.08);
    box-shadow: 
        0 0 30px rgba(255, 45, 149, 0.6),
        0 8px 32px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.4);
    border-color: rgba(255, 255, 255, 0.6);
}

.btn:active {
    transform: scale(1.02);
}

/* Sparkle burst on hover */
.btn::after {
    content: '✨';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    font-size: 20px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease-in-out;
}

.btn:hover::after {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    animation: sparkleBurst 0.6s ease-out forwards;
}

@keyframes sparkleBurst {
    0% {
        transform: translate(-50%, -50%) scale(0.8);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -50%) scale(1.5);
        opacity: 0;
    }
}

/* Button-specific styles */
.btn-yes {
    background: linear-gradient(135deg, rgba(255, 45, 149, 0.3), rgba(255, 107, 181, 0.3));
}

.btn-no {
    background: linear-gradient(135deg, rgba(255, 0, 60, 0.3), rgba(255, 77, 109, 0.3));
}

/* Smooth shake animation for NO button */
@keyframes smoothShake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    75% { transform: translateX(8px); }
}

.shake-animation {
    animation: smoothShake 0.4s ease-in-out;
}

/* ============================================
   RESPONSE MESSAGE
   ============================================ */
.response-message {
    font-size: clamp(1.6rem, 5vw, 2.6rem);
    font-weight: 700;
    margin-top: 40px;
    color: white;
    text-shadow: 
        0 0 25px rgba(255, 255, 255, 0.7),
        0 4px 12px rgba(0, 0, 0, 0.4);
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.5s ease-in-out;
}

.response-message.show {
    opacity: 1;
    transform: scale(1);
}

/* Glow pulse animation */
.glow-pulse {
    animation: glowPulseEffect 2s ease-in-out infinite;
}

@keyframes glowPulseEffect {
    0%, 100% {
        text-shadow: 
            0 0 25px rgba(255, 255, 255, 0.7),
            0 4px 12px rgba(0, 0, 0, 0.4);
    }
    50% {
        text-shadow: 
            0 0 40px rgba(255, 255, 255, 0.9),
            0 0 60px rgba(255, 182, 217, 0.6),
            0 4px 12px rgba(0, 0, 0, 0.4);
    }
}

/* ============================================
   HEART CONFETTI (SUBTLE)
   ============================================ */
.confetti-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 100;
}

.confetti-heart {
    position: absolute;
    font-size: 26px;
    opacity: 0.8;
    animation: confettiFallSmooth 3.5s ease-out forwards;
}

@keyframes confettiFallSmooth {
    0% {
        transform: translateY(-80px) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}

/* Crying emoji animation */
.crying-emoji {
    position: absolute;
    font-size: 35px;
    opacity: 0.9;
    animation: cryFallSmooth 2.5s ease-out forwards;
}

@keyframes cryFallSmooth {
    0% {
        transform: translateY(-40px);
        opacity: 1;
    }
    100% {
        transform: translateY(180px);
        opacity: 0;
    }
}

/* ============================================
   FINAL SECTION
   ============================================ */
.final-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #ff003c 0%, #8b0000 100%);
    position: relative;
    z-index: 10;
    padding: 60px 20px;
}

.final-text {
    font-size: clamp(4.5rem, 15vw, 9rem);
    font-weight: 900;
    text-align: center;
    display: flex;
    gap: clamp(8px, 2vw, 15px);
    flex-wrap: wrap;
    justify-content: center;
    color: white;
}

.final-text .letter {
    display: inline-block;
    text-shadow: 
        0 0 40px rgba(255, 255, 255, 0.8),
        0 0 80px rgba(255, 45, 149, 0.7),
        0 6px 20px rgba(0, 0, 0, 0.5);
    animation: 
        letterStretchSmooth 2.5s ease-in-out infinite,
        letterWobbleSmooth 3.5s ease-in-out infinite,
        pulseSmooth 1.8s ease-in-out infinite;
    position: relative;
}

/* Sparkle sweep animation */
.final-text .letter::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%);
    animation: sparkleSweep 3s ease-in-out infinite;
    pointer-events: none;
}

@keyframes sparkleSweep {
    0%, 100% {
        opacity: 0;
        transform: translateX(-100%);
    }
    50% {
        opacity: 1;
        transform: translateX(100%);
    }
}

/* Stagger animation delays */
.final-text .letter:nth-child(1) { animation-delay: 0s; }
.final-text .letter:nth-child(2) { animation-delay: 0.15s; }
.final-text .letter:nth-child(3) { animation-delay: 0.3s; }
.final-text .letter:nth-child(4) { animation-delay: 0.45s; }
.final-text .letter:nth-child(5) { animation-delay: 0.6s; }
.final-text .letter:nth-child(6) { animation-delay: 0.75s; }
.final-text .letter:nth-child(7) { animation-delay: 0.9s; }

@keyframes letterStretchSmooth {
    0%, 100% {
        transform: scaleX(1) scaleY(1);
    }
    50% {
        transform: scaleX(1.15) scaleY(0.85);
    }
}

@keyframes letterWobbleSmooth {
    0%, 100% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(-3deg);
    }
    75% {
        transform: rotate(3deg);
    }
}

@keyframes pulseSmooth {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.08);
    }
}

/* ============================================
   RESPONSIVE DESIGN (MOBILE-FIRST)
   ============================================ */
@media (max-width: 768px) {
    .button-container {
        flex-direction: column;
        gap: 15px;
        align-items: center;
    }
    
    .btn {
        width: 100%;
        max-width: 280px;
    }
    
    .mute-toggle {
        width: 42px;
        height: 42px;
        font-size: 16px;
        top: 15px;
        right: 15px;
    }
    
    .final-text {
        gap: 5px;
    }
}

@media (max-width: 480px) {
    .hero-section {
        padding: 30px 15px;
    }
    
    .question {
        margin-bottom: 35px;
    }
    
    .btn {
        padding: 15px 35px;
    }
}

/* ============================================
   SMOOTH TRANSITIONS & PERFORMANCE
   ============================================ */
* {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* Hardware acceleration for smooth animations */
.btn,
.main-heading,
.response-message,
.final-text .letter {
    will-change: transform;
}
