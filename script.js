// Mode toggle functionality
function setMode(mode) {
    if (mode === 'light') {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        document.querySelector('.mode-btn.light').classList.add('active');
        document.querySelector('.mode-btn.dark').classList.remove('active');
        localStorage.setItem('portfolio-mode', 'light');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        document.querySelector('.mode-btn.light').classList.remove('active');
        document.querySelector('.mode-btn.dark').classList.add('active');
        localStorage.setItem('portfolio-mode', 'dark');
    }
}

// Initialize mode from localStorage or default to dark
document.addEventListener('DOMContentLoaded', function() {
    const savedMode = localStorage.getItem('portfolio-mode') || 'dark';
    setMode(savedMode);
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Ignore empty or invalid hashes
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

    
    // Add interactive effects
    addInteractiveEffects();
    
    // Add parallax effect on scroll
    //addParallaxEffect();
    
    // Add reveal animations on scroll
    addScrollReveal();
});

function addInteractiveEffects() {
    // Add hover animations to experience items
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(8px) scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
    
    // Add hover effects to project items
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.addEventListener('click', function() {
            // Add a subtle pulse effect on click
            this.style.animation = 'pulse 0.3s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 300);
        });
    });
    
    // Add floating animation to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.05}s`;
        tag.addEventListener('mouseenter', function() {
            this.style.animation = 'float 0.6s ease-in-out';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
}

function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const container = document.querySelector('.container');
        
        if (container) {
            const speed = 0.5;
            container.style.transform = `translateY(${scrolled * speed}px)`;
        }
    });
}

function addScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Add floating animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
    }
`;
document.head.appendChild(style);

// Menu toggle for mobile
document.querySelector('.menu-btn')?.addEventListener('click', function() {
    console.log('Menu clicked');
    // Add mobile menu functionality here if needed
});

// Add typing effect for the name (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on load
window.addEventListener('load', function() {
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const originalText = nameElement.textContent;
        typeWriter(nameElement, originalText, 150);
    }
});
