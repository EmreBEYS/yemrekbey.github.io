import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    title: "Otobüs Yoğunluk Analizi",
    desc: "Durak ve araç içi kamera görüntülerinden yolcu yoğunluğu tahmini yapan, sefer optimizasyonunu destekleyen görüntü işleme sistemi.",
    tech: ["YOLO", "Python", "Görüntü İşleme"],
    status: "Geliştiriliyor",
    progress: 65,
    icon: "🚌",
  },
  {
    title: "Android Durak Uygulaması",
    desc: "Durak bilgileri, kullanıcı profili, filtreleme ve Firebase altyapısı içeren modern mobil ulaşım uygulaması.",
    tech: ["Kotlin", "Firebase", "Android"],
    status: "Tamamlandı",
    progress: 100,
    icon: "📱",
  },
  {
    title: "Otobüs Sefer Veritabanı",
    desc: "Hat, durak, otobüs, sefer, bilet ve arıza süreçlerini yöneten ilişkisel veritabanı sistemi.",
    tech: ["PostgreSQL", "ER", "Trigger"],
    status: "Tamamlandı",
    progress: 100,
    icon: "🗄️",
  },
  {
    title: "Trafik Lambası Tanıma",
    desc: "Görüntülerdeki trafik lambalarını algılayan ve ışık durumunu sınıflandıran derin öğrenme modeli.",
    tech: ["Python", "Derin Öğrenme", "OpenCV"],
    status: "Tamamlandı",
    progress: 100,
    icon: "🚦",
  },
  {
    title: "Ulaşım Bilgi Platformu",
    desc: "Otobüs hatları, duraklar ve ulaşım bilgilerini erişilebilir bir arayüzde sunan web uygulaması.",
    tech: ["React", "CSS", "JavaScript"],
    status: "Tamamlandı",
    progress: 100,
    icon: "🌐",
  },
];

function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [paused]);

  const project = projects[activeIndex];

  return (
    <section id="projects" className="projects-showcase">
      <SectionTitle
        label="Projects"
        title="Projelerim"
        description="Yazılım, yapay zeka, veritabanı, mobil uygulama ve görüntü işleme alanlarında geliştirdiğim çalışmalar."
      />

      <div className="project-showcase-shell">
        <div className="project-showcase-info">
          <p className="section-kicker">PROJECT SHOWCASE</p>
          <h3>Fikirleri çalışan ürünlere dönüştürüyorum.</h3>
          <p>
            Akademik çalışmalarımı yalnızca ödev olarak bırakmıyor; kullanılabilir,
            ölçülebilir ve geliştirilebilir projelere dönüştürüyorum.
          </p>

          <div className="project-summary">
            <div><strong>{projects.length}</strong><span>Toplam Proje</span></div>
            <div><strong>{projects.filter((item) => item.status === "Tamamlandı").length}</strong><span>Tamamlanan</span></div>
            <div><strong>{projects.filter((item) => item.status === "Geliştiriliyor").length}</strong><span>Aktif Proje</span></div>
          </div>
        </div>

        <div
          className="project-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.article
              key={project.title}
              className="project-feature-card"
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -22, scale: 0.98 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="project-card-topline">
                <span className={`project-status ${project.status === "Tamamlandı" ? "completed" : "developing"}`}>
                  <i /> {project.status}
                </span>
                <span className="project-index">{String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
              </div>

              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="project-tech-list">
                {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>

              <div className="project-progress-info">
                <span>Proje ilerlemesi</span><strong>{project.progress}%</strong>
              </div>
              <div className="progress-track"><div style={{ width: `${project.progress}%` }} /></div>
            </motion.article>
          </AnimatePresence>

          <div className="project-carousel-controls" aria-label="Proje seçimi">
            {projects.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={index === activeIndex ? "active" : ""}
                onClick={() => setActiveIndex(index)}
                aria-label={`${item.title} projesini göster`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
