// ===========================
// TYPED TEXT EFFECT
// ===========================
const roles = [
  "Software Engineer",
  "Python Developer",
  "ERPNext Specialist",
  "Django Developer",
  "ERP Integration Expert"
];

let roleIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById('typed');

function type() {
  const current = roles[roleIdx];
  if (!deleting) {
    typedEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) {
      setTimeout(() => { deleting = true; typeLoop(); }, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.substring(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
    }
  }
  typeLoop();
}

function typeLoop() {
  setTimeout(type, deleting ? 60 : 80);
}

setTimeout(typeLoop, 1200);

// ===========================
// NAVBAR SCROLL
// ===========================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===========================
// HAMBURGER MENU
// ===========================
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===========================
// SCROLL REVEAL
// ===========================
const reveals = document.querySelectorAll('section, .timeline-card, .skill-group, .contact-card, .edu-card, .about-card, .stat');

reveals.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => observer.observe(el));

// ===========================
// SKILL BARS ANIMATION
// ===========================
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.bar-fill').forEach(bar => {
        bar.classList.add('animate');
      });
    }
  });
}, { threshold: 0.3 });

const skillBarsSection = document.querySelector('.skill-bars');
if (skillBarsSection) barObserver.observe(skillBarsSection);

// ===========================
// TERMINAL TYPING EFFECT
// ===========================
const terminalLines = document.querySelectorAll('#terminal-body p');
terminalLines.forEach((line, i) => {
  line.style.opacity = '0';
  line.style.transform = 'translateX(-10px)';
  line.style.transition = 'all 0.3s';
  setTimeout(() => {
    line.style.opacity = '1';
    line.style.transform = 'none';
  }, 600 + i * 180);
});

// ===========================
// CUSTOM CURSOR GLOW
// ===========================
const cursor = document.createElement('div');
cursor.style.cssText = `
  position: fixed; pointer-events: none; z-index: 9997;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 65%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s;
  top: 0; left: 0;
`;
document.body.appendChild(cursor);

window.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// ===========================
// ACTIVE NAV LINK HIGHLIGHT
// ===========================
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--neon)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => activeObserver.observe(s));