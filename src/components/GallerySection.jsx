import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const galleryItems = [
  { title: "Yoğunluk Analizi", category: "Yapay Zeka", icon: "🚌", className: "wide" },
  { title: "Mobil Durak Uygulaması", category: "Android", icon: "📱" },
  { title: "Sefer Veritabanı", category: "PostgreSQL", icon: "🗄️" },
  { title: "Trafik Işığı Modeli", category: "Derin Öğrenme", icon: "🚦" },
  { title: "Ders Notları Platformu", category: "React", icon: "📚", className: "wide" },
  { title: "Ulaşım Arayüzü", category: "Web Tasarım", icon: "🌐" },
];

function GallerySection() {
  return (
    <section id="gallery" className="gallery-section">
      <SectionTitle
        label="Gallery"
        title="Proje Galerisi"
        description="Projelerimin arayüz, mimari ve geliştirme süreçlerinden seçilmiş çalışmalar."
      />

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <motion.article
            key={item.title}
            className={`gallery-card ${item.className || ""}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.07 }}
            whileHover={{ y: -8 }}
          >
            <div className="gallery-glow" />
            <span className="gallery-icon">{item.icon}</span>
            <div>
              <span>{item.category}</span>
              <h3>{item.title}</h3>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
