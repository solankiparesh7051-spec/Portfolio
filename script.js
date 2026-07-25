/* ==========================================================================
   PARESH SOLANKI - PORTFOLIO INTERACTIVE & ANIMATION ENGINE
   ========================================================================== */

// 1. Mobile Menu Drawer Toggle
function toggleMenu() {
    const menuLinks = document.getElementById('menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    if (menuLinks) {
        menuLinks.classList.toggle('open');
    }
    if (hamburgerIcon) {
        hamburgerIcon.classList.toggle('open');
    }
}

document.addEventListener('DOMContentLoaded', () => {

    // 2. Typed.js Initialization
    const typedTarget = document.getElementById('element');
    if (typedTarget && typeof Typed !== 'undefined') {
        new Typed('#element', {
            strings: [
                'Frontend Dev.',
                'Problem Solver',
                'Computer Science Student',
                '3rd Year BCA (Semester 5)'
            ],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1500,
            loop: true
        });
    }

    // 3. GSAP & ScrollTrigger Animations
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Profile Entrance
        gsap.from('.gsap-hero-img', {
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        });

        gsap.from('.gsap-hero-text > *', {
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 1,
            ease: 'power3.out'
        });

        // Scroll Reveals for Sections
        const revealSections = document.querySelectorAll('.gsap-reveal');
        revealSections.forEach((sec) => {
            gsap.from(sec, {
                scrollTrigger: {
                    trigger: sec,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 40,
                opacity: 0,
                duration: 0.9,
                ease: 'power3.out'
            });
        });
    }

    // 4. Scroll Active Navigation Link Tracker
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 160;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach((item) => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}` || (current === '' && item.getAttribute('href') === '#')) {
                item.classList.add('active');
            }
        });
    });

    // 5. Theme Switcher (Dark Mode Default / Light Mode)
    const themeCheckbox = document.getElementById('theme-checkbox');
    const themeCheckboxMobile = document.getElementById('theme-checkbox-mobile');

    function applyTheme(isLight) {
        if (isLight) {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
        if (themeCheckbox) themeCheckbox.checked = isLight;
        if (themeCheckboxMobile) themeCheckboxMobile.checked = isLight;
        localStorage.setItem('paresh_theme', isLight ? 'light' : 'dark');
    }

    // Load saved preference
    const savedTheme = localStorage.getItem('paresh_theme');
    if (savedTheme === 'light') {
        applyTheme(true);
    }

    if (themeCheckbox) {
        themeCheckbox.addEventListener('change', (e) => applyTheme(e.target.checked));
    }
    if (themeCheckboxMobile) {
        themeCheckboxMobile.addEventListener('change', (e) => applyTheme(e.target.checked));
    }
});
