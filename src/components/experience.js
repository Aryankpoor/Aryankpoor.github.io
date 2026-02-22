// ============================================================
//  experience.js — Experience / Education timeline section
// ============================================================

const experiences = [
  {
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALgfFvAIexgJ372mK1x41oov4uHCfUEJC974KYQ0YxT9aw1aRha54WzTUNKKZZplJyXVfIRJetIPbOk0NSEpHKN8N1YHo2cDEIvapgF9s6VgF0CA6yBzGO2Su_RH2oEkNzmcUQ-c5FCKZwf1J51ugnMYL8afFlq8VxCkuAZyvZdZCULJxKrPUyflzNuGJc3vgp0xaxlktbXIMF-rc3PGVL3eLATExN9sTP5zr5Kacm9_Er4Bdz7vDNXZiavOwCcTh4oIVDrXx_QVw',
    logoAlt: 'Hack Club HCB',
    title: 'Hack Club HCB',
    date: 'SEPT 2024 — PRESENT',
    role: 'Junior Onboarder',
    desc: 'Working on streamlining the onboarding process for the teenage coding community, ensuring thousands of students can launch their non-profits with HCB.',
  },
  {
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMz-tIAxI8QlTpj6-RsUTFna8sJeQzciFkdcYa05W3bBwe2D3NyJx4ReHBuevA1uPzfgDlm9gLV4KvzrqgiyYML7hc2SfUyCsb0sFuL1IBEFaVT__3qz9h4W1W6MSEqPxuBTkL0V8gq60--s5FtO_0vo2Sxbo6z83rkxDTGxmQeUwFKLUKYZYSoJnYcya4PoiiCSvblvOq2Fds-T_UtzXrR7tcsxByk8DpzarDhijkrdUXYzcKxHPr-drl-V_We4ZGOQNOSRGOgJo',
    logoAlt: 'Hack Club',
    title: 'Hack Club',
    date: 'JULY 2024 — SEPT 2024',
    role: 'Volunteer',
    desc: 'Assisted in various open-source initiatives and community projects within the global Hack Club ecosystem.',
  },
];

function renderTimelineItem(item) {
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

export function renderExperience() {
  return /* html */ `
    <section class="experience-section reveal" id="experience">
      <div class="section-header">
        <h2 class="section-title">Experience</h2>
        <div class="section-rule"></div>
      </div>
      <div class="timeline-wrapper">
        <div class="timeline-line"></div>
        <div class="timeline-items reveal-stagger">
          ${experiences.map(renderTimelineItem).join('')}
        </div>
      </div>
    </section>
  `;
}
