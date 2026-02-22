// ============================================================
//  techstack.js — Tech Stack section
// ============================================================

const techs = [
    'REACT', 'NEXT.JS', 'TYPESCRIPT', 'NODE.JS',
    'PYTHON', 'TAILWIND', 'DOCKER', 'FIREBASE',
];

export function renderTechStack() {
    return /* html */ `
    <section class="tech-section reveal">
      <div class="section-header">
        <h2 class="section-title">Tech Stack</h2>
        <div class="section-rule"></div>
      </div>
      <div class="tech-grid reveal-stagger">
        ${techs.map(t => `<div class="tech-item"><span>${t}</span></div>`).join('')}
      </div>
    </section>
  `;
}
