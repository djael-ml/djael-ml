// Typing animation for intro text
const typingText = document.querySelector('.typing-text');
const text = "I am Atomic...";
let index = 0;

function typeText() {
    if (index < text.length) {
        typingText.textContent = text.substring(0, index + 1);
        index++;
        setTimeout(typeText, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    typingText.textContent = "";
    setTimeout(typeText, 500);
});

// Glitch effect for the main title
const glitchElement = document.querySelector('.glitch');

function createGlitch() {
    const glitchChance = Math.random();
    if (glitchChance > 0.95) {
        glitchElement.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
        glitchElement.style.textShadow = `
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #ff0000,
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #00ff00,
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #0000ff
        `;
        
        setTimeout(() => {
            glitchElement.style.transform = 'translate(0, 0)';
            glitchElement.style.textShadow = '0 0 5px rgba(0, 255, 0, 0.5)';
        }, 50);
    }
}

setInterval(createGlitch, 100);

// Smooth scroll animation for sections
const sections = document.querySelectorAll('.section');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.5s ease-in forwards';
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Easter egg: Konami code
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            document.body.style.animation = 'matrix 2s ease-in-out';
            setTimeout(() => {
                alert('🕶️ You found the secret! "Efficiency over Fame" - Atomic');
                document.body.style.animation = '';
            }, 1000);
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// Add matrix effect on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        // Scrolling down
        document.body.style.backgroundColor = '#000';
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);

console.log('%c Welcome to Atomic\'s Terminal ', 'background: #000; color: #0f0; font-size: 20px; padding: 10px;');
console.log('%c I am Atomic... Developer in the Shadows 💻', 'color: #0a0; font-size: 14px;');
console.log('%c "I do not seek fame, I seek mastery."', 'color: #070; font-style: italic;');