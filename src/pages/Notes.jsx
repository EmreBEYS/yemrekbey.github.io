import { Link } from "react-router-dom";
import { getCoursesByGrade } from "../data/courses";

function Notes() {
  const grades = [
    {
      id: "1-sinif",
      title: "1. Sınıf",
      subtitle: "Temel Başlangıç",
      description:
        "Programlama, matematik ve mühendisliğe giriş derslerinin notlarına ulaş.",
      icon: "🎓",
    },
    {
      id: "2-sinif",
      title: "2. Sınıf",
      subtitle: "Bilgisayar Bilimleri",
      description:
        "Veri organizasyonu, mantık devreleri, algoritma ve temel bilgisayar dersleri.",
      icon: "💻",
    },
    {
      id: "3-sinif",
      title: "3. Sınıf",
      subtitle: "Uzmanlık Dersleri",
      description:
        "Bilgisayar ağları, yapay zeka, işletim sistemleri ve proje dersleri.",
      icon: "🚀",
    },
    {
      id: "gelecek-donem",
      title: "Gelecek Dönem",
      subtitle: "Yeni Hedefler",
      description:
        "Önümüzdeki dönem alınacak dersleri ve hazırlanacak içerikleri incele.",
      icon: "🧠",
    },
  ];

  return (
    <main className="page notes-page">
      <section className="notes-hero">
        <p className="hero-label">ACADEMIC LIBRARY</p>

        <h1>
          Ders <span>Notları</span>
        </h1>

        <p>
          Bilgisayar mühendisliği ders notlarına sınıflara ayrılmış, düzenli ve
          kolay erişilebilir şekilde ulaş.
        </p>

        <div className="notes-hero-stats">
          <div>
            <strong>4</strong>
            <span>Sınıf</span>
          </div>

          <div>
            <strong>28+</strong>
            <span>Ders</span>
          </div>

          <div>
            <strong>PDF</strong>
            <span>Görüntüle ve İndir</span>
          </div>
        </div>
      </section>

      <section className="professional-grade-grid">
        {grades.map((grade, index) => {
          const gradeCourses = getCoursesByGrade(grade.id);

          const availableCourses = gradeCourses.filter(
            (course) => course.weeks && course.weeks.length > 0
          ).length;

          return (
            <Link
              to={`/notes/${grade.id}`}
              className="professional-grade-card"
              key={grade.id}
            >
              <div className="grade-card-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="professional-grade-icon">{grade.icon}</div>

              <span className="grade-subtitle">{grade.subtitle}</span>

              <h2>{grade.title}</h2>

              <p>{grade.description}</p>

              <div className="grade-information">
                <div>
                  <strong>{gradeCourses.length}</strong>
                  <span>Ders</span>
                </div>

                <div>
                  <strong>{availableCourses}</strong>
                  <span>Notu Hazır</span>
                </div>
              </div>

              <div className="grade-card-button">
                <span>Derslere Git</span>
                <strong>→</strong>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}

export default Notes;