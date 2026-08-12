// 1. MOBILE MENU TOGGLE LOGIC
const mobileNav = document.getElementById('mobileNav');
let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        mobileNav.classList.add('open');
        document.getElementById('menuIcon-open').style.display = 'none';
        document.getElementById('menuIcon-close').style.display = 'block';
        document.body.style.overflow = 'hidden'; 
    } else {
        mobileNav.classList.remove('open');
        document.getElementById('menuIcon-open').style.display = 'block';
        document.getElementById('menuIcon-close').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close mobile menu when clicking any nav item
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (isMenuOpen) toggleMenu();
    });
});

// 2. SCROLL REVEAL ANIMATIONS
function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const elementVisible = 80;

    reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealElements);
revealElements(); 

// 3. SMOOTH TYPING ANIMATION FOR TARGET ROLES
const roles = [
    "IT Service Desk L1.",
    "Non-Voice Chat Support.",
    "Content Moderator."
];

const typeElement = document.getElementById('typing-text');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typeElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typeElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 40 : 90;

    if (!isDeleting && charIndex === currentRole.length) {
        speed = 2200; // Pause at end of sentence
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400; 
    }

    setTimeout(typeEffect, speed);
}

// Initialize typing animation after load
setTimeout(typeEffect, 800);

// 4. FULLSCREEN LIGHTBOX FOR CERTIFICATES
function openLightbox(imgSrc, titleText) {
    const modal = document.getElementById('certLightbox');
    const modalImg = document.getElementById('lightboxImg');
    const modalTitle = document.getElementById('lightboxTitle');

    modal.classList.add('active');
    modalImg.src = imgSrc;
    modalTitle.textContent = titleText;
    document.body.style.overflow = 'hidden'; // Lock background scrolling
}

function closeLightbox() {
    const modal = document.getElementById('certLightbox');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
}
