// ============================================================
//  main.js — App entry point
//  Assembles all components and initialises interactions
// ============================================================

import './style.css';

import { renderNav } from './components/nav.js';
import { renderHero } from './components/hero.js';
import { renderExperience } from './components/experience.js';
import { renderEducation } from './components/education.js';
import { renderProjects } from './components/projects.js';
import { renderTechStack } from './components/techstack.js';
import { renderContact } from './components/contact.js';

// ── 1. Render HTML ──────────────────────────────────────────
const app = document.getElementById('app');

app.innerHTML = /* html */ `
  <!-- Grain texture overlay -->
  <div class="grain-overlay"></div>

  <!-- Ambient blue glow -->
  <div class="ambient-glow"></div>

  ${renderNav()}

  <main class="main-content">
    ${renderHero()}
    ${renderExperience()}
    ${renderEducation()}
    ${renderProjects()}
    ${renderTechStack()}
    ${renderContact()}
  </main>
`;

// ── 2. Scroll-reveal animation ───────────────────────────────
const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ── 3. Active nav link on scroll ────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          const href = link.getAttribute('href').replace('#', '');
          link.style.color = href === entry.target.id ? '#ffffff' : '';
        });
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => sectionObserver.observe(section));

// ── 4. Dark-mode preference ──────────────────────────────────
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
}
