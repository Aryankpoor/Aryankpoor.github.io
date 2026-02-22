// ============================================================
//  hero.js — Hero / Landing section
// ============================================================

export function renderHero() {
    return /* html */ `
    <section class="hero-section reveal" id="home">
      <div class="hero-layout">
        <div class="hero-text">
          <span class="label-pill">AVAILABLE FOR WORK</span>
          <h1 class="hero-title">
            Hi, I'm <br/>
            <span class="hero-title-muted">Aryan Kapoor.</span>
          </h1>
          <p class="hero-subtitle">
            College freshman and developer at <span>Hack Club</span>.
            I build high-performance web applications and focus on integrating
            automation into user experiences.
          </p>
          <div class="hero-actions">
            <a class="btn-primary" href="#projects">View My Work</a>
            <div class="hero-avatars">
              <div class="avatar">
                <img
                  alt="Github"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg5sU6uwwbze8lVV6bzmPzH-q7SiDK2DRWqU5P5vYpmzGwgYUKhzTxTg2Ojovo2LKVO6IYLkcKfIX6fiJpY19hGaOgBY1bk8sRLuLMg8nYS_uSLrddXRNxk59v_OxoDLrZOwRi9WTVjr2MKECA9T-CYn3P5NaW1PWDYW4ecuLt2Eq6_KyGuWX5rT-MnyJAwGpMsMklLQc1JdfJBgDC1d9xmHqpLP3soRcRpG87LvUS_wKYWnz0rhom13dju3NNHiZglqgKtjbP12s"
                />
              </div>
              <div class="avatar">
                <span class="material-symbols-outlined">link</span>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-portrait-wrap">
          <div class="hero-portrait-glow"></div>
          <img
            class="hero-portrait"
            alt="Aryan"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcQREZwj0ABdTbQZ14kslVsGlQMerbY7DCippUblBrw0iYgvlP6kFCQC8BNOSQ74xbnBnYiLNUGuMI4gvmxpj16idZiYUMmsctWktaYX1BpC-7nxS0u90VzS_3YHwMyec8JdAo7dsiiojjyB-i9mvxWkacOgQ9gCAg1e3nMIMdC0FMt71yNSTQHWafFdWo0Khs95STYqydAkGRC-9JdT504sccLCYuBY9EPmp3FkIggKwBCoDRlysGDTQvV71UQ3nuCZtB8TzKJgE"
          />
        </div>
      </div>
    </section>
  `;
}
