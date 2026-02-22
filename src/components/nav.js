// ============================================================
//  nav.js — Fixed navigation component
// ============================================================

export function renderNav() {
  return /* html */ `
    <nav class="nav" id="main-nav">
      <div class="nav-inner">
        <a href="#home" class="nav-logo">AK.</a>
        <div class="nav-links">
          <a class="nav-link" href="#home">Home</a>
          <a class="nav-link" href="#experience">Experience</a>
          <a class="nav-link" href="#projects">Projects</a>
          <a class="nav-link" href="#contact">Contact</a>
        </div>
        <a class="nav-cta" href="#contact">LET'S TALK</a>
      </div>
    </nav>
  `;
}
