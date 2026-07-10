import SectionTitle from "./SectionTitle";

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <SectionTitle
        label="Contact"
        title="İletişime Geç"
        description="Proje, iş birliği veya teknik konular için benimle iletişime geçebilirsin."
      />

      <div className="contact-layout">
        <div className="contact-copy">
          <p className="section-kicker">LET'S BUILD SOMETHING</p>
          <h3>Yeni fikirleri birlikte geliştirelim.</h3>
          <p>Mesaj göndermek için formu kullanabilir veya sosyal platformlardan bana ulaşabilirsin.</p>
          <div className="contact-links">
            <a href="mailto:yunusemrekul44@outlook.com">✉️ yunusemrekul44@outlook.com</a>
            <a href="https://github.com/EmreBEYS" target="_blank" rel="noreferrer">💻 GitHub Profili</a>
            <a href="https://www.linkedin.com/in/yunus-emre-kul-8a75b82b6/" target="_blank" rel="noreferrer">🔗 LinkedIn Profili</a>
          </div>
        </div>

        <form className="contact-form" action="mailto:yunusemrekul@example.com" method="post" encType="text/plain">
          <label>Ad Soyad<input name="name" type="text" placeholder="Adınızı yazın" required /></label>
          <label>E-posta<input name="email" type="email" placeholder="ornek@mail.com" required /></label>
          <label>Konu<input name="subject" type="text" placeholder="Mesaj konusu" required /></label>
          <label>Mesaj<textarea name="message" rows="5" placeholder="Mesajınızı yazın" required /></label>
          <button type="submit">Mesaj Gönder →</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
