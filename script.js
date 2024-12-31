
/* ===================== Sticky Navigation Bar ==================== */
const navbar = document.getElementById('nav');
const navPos = navbar.getBoundingClientRect().top;

// Sticky navbar functionality  
const handleStickyNavbar = () => {
  const scrollPos = window.scrollY;
  navbar.classList.toggle('sticky', scrollPos > navPos);
};

window.addEventListener('scroll', handleStickyNavbar);

/* =================== Navigation Bar Open/Close Toggle ================ */
const toggleMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('show'));
  }
  
};
// Initialize the menu toggle
toggleMenu('nav-toggle', 'nav-menu');

/* ===================== Close Navigation Bar on Link Click =================== */
const closeNavOnClick = () => {
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('#nav-menu').classList.remove('show');
    });
  });
};

// Initialize the close functionality for the links
closeNavOnClick();

/* ======================== Testimonial Swiper Initialization ================= */
const initSwiper = () => {
  new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    mousewheel: true,
    keyboard: true,
  });
};

// Initialize Swiper
initSwiper();

/* ===================== Scroll Reveal Animations =================== */
const scrollRevealConfig = {
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true,
};

const martScroll = ScrollReveal(scrollRevealConfig);

// Scroll reveal for various sections
const revealSections = () => {
  martScroll.reveal('.home__data-title, .home__data-desc, .home__data-btn, .home__data-image');
  martScroll.reveal('.about__image, .about__data');
  martScroll.reveal('.whychooseus__tag, .whychooseus__title, .whychooseus__data');
  martScroll.reveal('.services__tag, .services__title, .services__single, .services__buttons');
  martScroll.reveal('.testimonial__tag, .testimonial__title, .swiper');
  martScroll.reveal('.contact__tag, .contact__title, .contact__form');
  martScroll.reveal('.footer__container');
};

// Initialize ScrollReveal for all sections
revealSections();
