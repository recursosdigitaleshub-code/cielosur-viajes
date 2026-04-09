/* ========================================
   CieloSur Viajes - Main JS
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initTestimonios();
  initScrollAnimations();
  initContactForm();
  initSmoothScroll();
});

/* --- Header scroll effect --- */
function initHeader() {
  const header = document.getElementById('header');
  const onScroll = () => {
    header.classList.toggle('header--scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* --- Mobile navigation --- */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  nav.querySelectorAll('.header__nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* --- Testimonios carousel --- */
function initTestimonios() {
  const cards = document.querySelectorAll('.testimonio-card');
  const dotsContainer = document.getElementById('testimonios-dots');
  const prevBtn = document.getElementById('prev-testimonio');
  const nextBtn = document.getElementById('next-testimonio');
  let current = 0;
  let autoplayInterval;

  // Create dots
  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = `testimonios__dot${i === 0 ? ' active' : ''}`;
    dot.setAttribute('aria-label', `Testimonio ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    cards[current].classList.remove('active');
    dotsContainer.children[current].classList.remove('active');
    current = (index + cards.length) % cards.length;
    cards[current].classList.add('active');
    dotsContainer.children[current].classList.add('active');
    resetAutoplay();
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(() => goTo(current + 1), 5000);
  }
  resetAutoplay();
}

/* --- Scroll animations --- */
function initScrollAnimations() {
  const elements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* --- Contact form validation --- */
function initContactForm() {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
      showSuccess();
    }
  });

  // Clear errors on input
  form.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('error');
      const errorEl = document.getElementById(`${input.id}-error`);
      if (errorEl) errorEl.textContent = '';
    });
  });
}

function validateForm() {
  let valid = true;

  // Nombre
  const nombre = document.getElementById('nombre');
  if (!nombre.value.trim()) {
    showError('nombre', 'Por favor ingresá tu nombre');
    valid = false;
  } else if (nombre.value.trim().length < 2) {
    showError('nombre', 'El nombre debe tener al menos 2 caracteres');
    valid = false;
  }

  // Email
  const email = document.getElementById('email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    showError('email', 'Por favor ingresá tu email');
    valid = false;
  } else if (!emailRegex.test(email.value.trim())) {
    showError('email', 'Por favor ingresá un email válido');
    valid = false;
  }

  // Telefono (argentino)
  const telefono = document.getElementById('telefono');
  const telClean = telefono.value.replace(/[\s\-\(\)\.]/g, '');
  const telRegex = /^(\+?54)?(9?\d{10}|\d{6,8})$/;
  if (!telefono.value.trim()) {
    showError('telefono', 'Por favor ingresá tu teléfono');
    valid = false;
  } else if (!telRegex.test(telClean)) {
    showError('telefono', 'Ingresá un teléfono argentino válido');
    valid = false;
  }

  return valid;
}

function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorEl = document.getElementById(`${fieldId}-error`);
  field.classList.add('error');
  if (errorEl) errorEl.textContent = message;
}

function showSuccess() {
  const form = document.getElementById('contact-form');
  form.innerHTML = `
    <div class="form-success">
      <div class="form-success__icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
          <path d="M22 4L12 14.01l-3-3"/>
        </svg>
      </div>
      <h3>Consulta enviada</h3>
      <p>Gracias por contactarnos. Un asesor se comunicará con vos en menos de 24 horas.</p>
    </div>
  `;
}

/* --- Smooth scroll for anchor links --- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.header__nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { passive: true });
}
