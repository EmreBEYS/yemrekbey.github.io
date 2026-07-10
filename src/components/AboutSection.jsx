import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const skills = ["React", "JavaScript", "Python", "Kotlin", "PostgreSQL", "Firebase", "OpenCV", "YOLO"];

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <SectionTitle
        label="About"
        title="Hakkımda"
        description="Teknik merakımı gerçek problemlere çözüm üreten projelere dönüştüren bir bilgisayar mühendisliği öğrencisiyim."
      />

      <div className="about-layout">
        <motion.div
          className="about-profile-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="about-avatar">
          <img
            src={`${import.meta.env.BASE_URL}images/profile.jpeg`}
              alt="Yunus Emre KUL"
            onError={(event) => { event.currentTarget.style.display = "none"; }}
          />
          </div>
          <span className="availability-badge"><i /> Yeni projelere açık</span>
          <h3>Yunus Emre KUL</h3>
          <p>Bilgisayar Mühendisliği Öğrencisi</p>
        </motion.div>

        <motion.div
          className="about-content-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="section-kicker">WHO I AM</p>
          <h3>Öğrenen, geliştiren ve ürettiğini paylaşan bir geliştirici.</h3>
          <p>
            İnönü Üniversitesi Bilgisayar Mühendisliği bölümünde eğitim görüyorum.
            Web geliştirme, mobil uygulamalar, veritabanı sistemleri, yapay zeka ve
            görüntü işleme alanlarında projeler geliştiriyorum. Çalışmalarımda temiz
            arayüz, anlaşılır kod yapısı ve gerçek kullanım senaryolarına odaklanıyorum.
          </p>
          <div className="about-highlights">
            <div><strong>5+</strong><span>Tamamlanan proje</span></div>
            <div><strong>8</strong><span>Teknoloji alanı</span></div>
            <div><strong>4.</strong><span>Sınıf öğrencisi</span></div>
          </div>
          <div className="skill-cloud">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
