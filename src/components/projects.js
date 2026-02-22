// ============================================================
//  projects.js — Selected Projects section
// ============================================================

const projects = [
    {
        icon: 'payments',
        gradientColor: 'rgba(59, 130, 246, 0.10)',
        name: 'Welp',
        year: '2024',
        desc: 'A financial-resource app allowing users to create and send invoices within the website with built-in email interface.',
        tags: ['NEXT.JS', 'STRIPE', 'CLERK'],
        link: '#',
    },
    {
        icon: 'smart_toy',
        gradientColor: 'rgba(168, 85, 247, 0.10)',
        name: 'MetaMorpheus',
        year: '2024',
        desc: 'A Chat-GPT like AI assistant website made using Gemini API and React for real-time conversational intelligence.',
        tags: ['REACT', 'GEMINI API'],
        link: '#',
    },
];

function renderProjectCard(project) {
    return /* html */ `
    <div class="glass-card project-card">
      <div class="project-card-visual">
        <div class="visual-gradient" style="background: linear-gradient(to bottom, ${project.gradientColor}, transparent);"></div>
        <span class="material-symbols-outlined">${project.icon}</span>
      </div>
      <div class="project-card-body">
        <div class="project-card-header">
          <h3 class="project-name">${project.name}</h3>
          <span class="project-year">${project.year}</span>
        </div>
        <p class="project-desc">${project.desc}</p>
        <div class="project-tags">
          ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <a class="project-link" href="${project.link}">
          View Project <span class="material-symbols-outlined">arrow_outward</span>
        </a>
      </div>
    </div>
  `;
}

export function renderProjects() {
    return /* html */ `
    <section class="projects-section reveal" id="projects">
      <div class="section-header">
        <h2 class="section-title">Selected Projects</h2>
        <div class="section-rule"></div>
      </div>
      <div class="projects-grid reveal-stagger">
        ${projects.map(renderProjectCard).join('')}
      </div>
    </section>
  `;
}
