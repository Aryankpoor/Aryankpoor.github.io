
const education = [
    {
        icon: 'school',
        title: 'Vellore Institute of Technology',
        date: '2024 — 2028',
        role: 'B.Tech Computer Science',
        desc: 'Pursuing a Bachelor of Technology in Computer Science at one of India\'s premier technical universities, focusing on software engineering, algorithms, and modern web technologies.',
    },
];

function renderEducationItem(item) {
    const dot = item.logo
        ? `<img alt="${item.logoAlt}" src="${item.logo}" />`
        : `<span class="material-symbols-outlined">${item.icon}</span>`;

    return /* html */ `
    <div class="timeline-item">
      <div class="timeline-dot">${dot}</div>
      <div class="timeline-row">
        <h3 class="timeline-title">${item.title}</h3>
        <span class="timeline-date">${item.date}</span>
      </div>
      <p class="timeline-role">${item.role}</p>
      ${item.desc ? `<p class="timeline-desc">${item.desc}</p>` : ''}
    </div>
  `;
}

export function renderEducation() {
    return /* html */ `
    <section class="experience-section reveal" id="education">
      <div class="section-header">
        <h2 class="section-title">Education</h2>
        <div class="section-rule"></div>
      </div>
      <div class="timeline-wrapper">
        <div class="timeline-line"></div>
        <div class="timeline-items reveal-stagger">
          ${education.map(renderEducationItem).join('')}
        </div>
      </div>
    </section>
  `;
}
