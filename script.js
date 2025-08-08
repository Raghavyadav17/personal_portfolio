// Particles.js Configuration (theme-aware)
function destroyParticlesIfAny() {
    if (window.pJSDom && window.pJSDom.length) {
        try {
            window.pJSDom[0].pJS.fn.vendors.destroypJS();
            window.pJSDom = [];
        } catch (e) {}
    }
}

function initParticles(particleColor) {
    destroyParticlesIfAny();
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 70,
                density: { enable: true, value_area: 900 }
            },
            color: { value: particleColor },
            shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
            opacity: { value: 0.6 },
            size: { value: 2.5, random: true },
            line_linked: {
                enable: true,
                distance: 140,
                color: particleColor,
                opacity: 0.3,
                width: 1
            },
            move: {
                enable: true,
                speed: 3,
                out_mode: 'out'
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                repulse: { distance: 150, duration: 0.3 },
                push: { particles_nb: 3 }
            }
        },
        retina_detect: true
    });
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
}));

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Theme toggle
const themeToggleBtn = document.querySelector('.theme-toggle');
const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
const savedTheme = localStorage.getItem('theme');

function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        initParticles('#9aa0a6');
    } else {
        document.body.classList.remove('light');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        initParticles('#9aa0a6');
    }
}

const initialTheme = savedTheme || (prefersLight ? 'light' : 'dark');
applyTheme(initialTheme);

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });
}

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Remove language animation and set static greeting
window.addEventListener('load', () => {
    const gradientText = document.querySelector('.hero-title .gradient-text');
    if (gradientText) gradientText.textContent = "Hello, I'm";
});

// Intersection Observer for animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .timeline-item, .publication-item, .skill-category');

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Animate navbar links on load
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(-20px)';
        link.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Skill tags animation
document.addEventListener('DOMContentLoaded', () => {
    const skillTags = document.querySelectorAll('.skill-tag');

    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
        tag.style.animation = 'fadeInUp 0.6s ease forwards';
    });
});

// Add CSS animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .nav-link.active { color: var(--accent) !important; }

    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');

    if (hero && heroContent) {
        const rate = scrolled * -0.5;
        heroContent.style.transform = `translateY(${rate}px)`;
    }
});

// Project cards hover effect enhancement
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Timeline animation on scroll
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
        item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        timelineObserver.observe(item);
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Console welcome message
console.log(`
%cWelcome to My Portfolio! 🚀
%c
%cI'm a Computer Engineering student passionate about creating innovative solutions.
%cFeel free to explore my work and get in touch!
%c
%cBuilt with ❤️ using HTML, CSS, JavaScript, and Particles.js
`,
'color: #667eea; font-size: 20px; font-weight: bold;',
'',
'color: #ccc; font-size: 14px;',
'color: #667eea; font-size: 14px;',
'',
'color: #888; font-size: 12px;'
);
