// ============================================================
//  contact.js — Contact CTA section + Footer
// ============================================================

export function renderContact() {
    return /* html */ `
    <section class="contact-section reveal" id="contact">
      <div class="glass-card contact-card">
        <div class="contact-gradient"></div>
        <div class="contact-content">
          <h2 class="contact-title">
            Let's build something <br/> exceptional together.
          </h2>
          <p class="contact-subtitle">
            Currently seeking new opportunities and creative collaborations.
            My inbox is always open.
          </p>
          <div class="contact-actions">
            <a class="btn-email" href="mailto:hello@aryankap.com">Email Me</a>
            <div class="social-links">
              <a class="social-link" href="#" aria-label="GitHub">
                <img
                  alt="GitHub"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg5sU6uwwbze8lVV6bzmPzH-q7SiDK2DRWqU5P5vYpmzGwgYUKhzTxTg2Ojovo2LKVO6IYLkcKfIX6fiJpY19hGaOgBY1bk8sRLuLMg8nYS_uSLrddXRNxk59v_OxoDLrZOwRi9WTVjr2MKECA9T-CYn3P5NaW1PWDYW4ecuLt2Eq6_KyGuWX5rT-MnyJAwGpMsMklLQc1JdfJBgDC1d9xmHqpLP3soRcRpG87LvUS_wKYWnz0rhom13dju3NNHiZglqgKtjbP12s"
                />
              </a>
              <a class="social-link" href="#" aria-label="Social">
                <span class="material-symbols-outlined">share</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div>© 2024 ARYAN KAPOOR. ALL RIGHTS RESERVED.</div>
      <div class="footer-links">
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
      </div>
    </footer>
  `;
}
