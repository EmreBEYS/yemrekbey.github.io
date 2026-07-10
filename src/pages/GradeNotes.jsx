import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCoursesByGrade, gradeInfo } from "../data/courses";

function GradeNotes() {
  const { gradeId } = useParams();
  const [searchTerm, setSearchTerm] = useState("all");

  const courses = getCoursesByGrade(gradeId);
  const info = gradeInfo[gradeId];

  const filteredCourses = useMemo(() => {
    if (searchTerm === "all") return courses;

    return courses.filter((course) => {
      const text = `${course.name} ${course.description} ${course.status}`.toLowerCase();
      return text.includes(searchTerm.toLowerCase());
    });
  }, [courses, searchTerm]);

  return (
    <main className="page grade-notes-page">
      <section className="page-header">
        <p className="hero-label">COURSE LIST</p>
        <h1>{info?.title}</h1>
        <p>{info?.subtitle}</p>
      </section>

      <section className="notes-toolbar">
        <div className="search-box">
          <span>🔎</span>
          <input
            type="text"
            placeholder="Ders ara..."
            value={searchTerm === "all" ? "" : searchTerm}
            onChange={(e) => setSearchTerm(e.target.value || "all")}
          />
        </div>

        <button
          type="button"
          className={searchTerm === "all" ? "filter-chip active" : "filter-chip"}
          onClick={() => setSearchTerm("all")}
        >
          Tüm Dersler
        </button>

        <button
          type="button"
          className={searchTerm === "available" ? "filter-chip active" : "filter-chip"}
          onClick={() => setSearchTerm("available")}
        >
          Notu Olanlar
        </button>

        <button
          type="button"
          className={searchTerm === "planned" ? "filter-chip active" : "filter-chip"}
          onClick={() => setSearchTerm("planned")}
        >
          Planlanan
        </button>
      </section>

      <section className="course-list">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <Link
              to={`/notes/${gradeId}/${course.id}`}
              className="course-row"
              key={course.id}
            >
              <span className="course-icon">{course.icon}</span>

              <div>
                <h2>{course.name}</h2>
                <p>{course.description}</p>
              </div>

              <span className="course-arrow">→</span>
            </Link>
          ))
        ) : (
          <div className="empty-course">
            <h2>Ders bulunamadı</h2>
            <p>Arama veya filtreye uygun ders bulunamadı.</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default GradeNotes;