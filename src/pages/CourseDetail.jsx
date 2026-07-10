import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCourseById, gradeInfo } from "../data/courses";

function CourseDetail() {
  const { gradeId, courseId } = useParams();
  const course = getCourseById(courseId);
  const [selectedWeekIndex, setSelectedWeekIndex] = useState(0);

  const totalPdfCount = useMemo(() => {
    return course?.weeks?.reduce((total, week) => total + (week.pdfs?.length || 0), 0) || 0;
  }, [course]);

  if (!course) {
    return (
      <main className="page course-detail-page">
        <section className="empty-course">
          <h2>Ders bulunamadı</h2>
          <Link to="/notes">Ders Notlarına Dön</Link>
        </section>
      </main>
    );
  }

  const selectedWeek = course.weeks?.[selectedWeekIndex];

  return (
    <main className="page course-detail-page">
      <section className="course-hero-panel">
        <div className="breadcrumb">
          <Link to="/">Ana Sayfa</Link>
          <span>/</span>
          <Link to="/notes">Ders Notları</Link>
          <span>/</span>
          <Link to={`/notes/${gradeId}`}>{gradeInfo[gradeId]?.title || "Sınıf"}</Link>
        </div>

        <div className="course-hero-content">
          <div className="course-hero-icon">{course.icon}</div>

          <div>
            <p className="hero-label">COURSE DETAIL</p>
            <h1>{course.name}</h1>
            <p>{course.description}</p>
          </div>
        </div>

        <div className="course-stats">
          <div>
            <strong>{course.weeks?.length || 0}</strong>
            <span>Bölüm</span>
          </div>

          <div>
            <strong>{totalPdfCount}</strong>
            <span>Dosya</span>
          </div>

          <div>
            <strong>{course.status === "available" ? "Aktif" : "Planlı"}</strong>
            <span>Durum</span>
          </div>
        </div>
      </section>

      {!course.weeks || course.weeks.length === 0 ? (
        <section className="empty-course">
          <h2>Henüz hafta eklenmedi</h2>
          <p>Bu ders için PDF ve hafta içerikleri yakında eklenecek.</p>
        </section>
      ) : (
        <section className="course-layout professional">
          <aside className="week-sidebar pro-sidebar">
            <div className="sidebar-title">
              <span>Haftalar</span>
              <strong>{String(selectedWeekIndex + 1).padStart(2, "0")}</strong>
            </div>

            {course.weeks.map((week, index) => (
              <button
                type="button"
                key={`${week.week}-${week.title}`}
                className={`week-item ${selectedWeekIndex === index ? "active" : ""}`}
                onClick={() => setSelectedWeekIndex(index)}
              >
                <span>{String(week.week).padStart(2, "0")}</span>
                <strong>{week.title}</strong>
              </button>
            ))}
          </aside>

          <section className="week-content">
            <div className="bento-card large week-overview-card">
              <span className="bento-label">SEÇİLİ BÖLÜM</span>
              <h2>{selectedWeek.title}</h2>
              <p>{selectedWeek.summary}</p>
            </div>

            <div className="bento-grid pro-grid">
              <div className="bento-card">
                <span className="bento-label">KONULAR</span>

                {selectedWeek.topics?.length > 0 ? (
                  <div className="topic-list">
                    {selectedWeek.topics.map((topic, index) => (
                      <span key={index}>{topic}</span>
                    ))}
                  </div>
                ) : (
                  <p>Bu hafta için konu başlığı eklenmedi.</p>
                )}
              </div>

              <div className="bento-card">
                <span className="bento-label">DOSYALAR</span>

                {selectedWeek.pdfs?.length > 0 ? (
                  <div className="pdf-list pro-pdf-list">
                    {selectedWeek.pdfs.map((pdf, index) => (
                      <div className="pdf-card pro-pdf-card" key={`${pdf.title}-${index}`}>
                        <div className="pdf-card-top">
                          <span className="pdf-icon">📄</span>

                          <div>
                            <h3>{pdf.title}</h3>
                            <p>{pdf.type || "PDF"}</p>
                          </div>
                        </div>

                        <div className="pdf-actions">
                          <a href={pdf.file} target="_blank" rel="noopener noreferrer">
                            Görüntüle
                          </a>

                          <a href={pdf.file} download>
                            İndir
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>Bu haftaya ait PDF henüz eklenmedi.</p>
                )}
              </div>
            </div>
          </section>
        </section>
      )}
    </main>
  );
}

export default CourseDetail;