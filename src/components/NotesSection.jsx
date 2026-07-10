import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const grades = [
  {
    grade: "1-sinif",
    icon: "🎓",
    title: "1. Sınıf",
    desc: "Temel programlama, matematik ve mühendisliğe giriş notları.",
  },
  {
    grade: "2-sinif",
    icon: "💻",
    title: "2. Sınıf",
    desc: "Veri yapıları, OOP, algoritma ve temel yazılım dersleri.",
  },
  {
    grade: "3-sinif",
    icon: "🚀",
    title: "3. Sınıf",
    desc: "Bilgisayar ağları, veritabanı, yapay zeka ve proje dersleri.",
  },
  {
    grade: "gelecek-donem",
    icon: "🧠",
    title: "4. Sınıf",
    desc: "Bitirme, ileri seviye seçmeli dersler ve uzmanlık çalışmaları.",
  },
];

function NotesSection() {
  return (
    <section id="notes" className="px-6 py-24">
      <SectionTitle
        label="Notes"
        title="Ders Notları"
        description="Ders notlarını sınıflara ayırarak düzenli şekilde paylaşacağım."
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-4">
        {grades.map((item) => (
          <Link
            key={item.grade}
            to={`/notes/${item.grade}`}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-purple-400/60 hover:bg-white/[0.07] hover:shadow-[0_0_35px_rgba(124,58,237,0.25)]"
          >
            <div className="text-4xl">{item.icon}</div>

            <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>

            <p className="mt-3 text-slate-400">{item.desc}</p>

            <span className="mt-6 inline-block rounded-xl bg-purple-600 px-4 py-2 text-sm transition hover:bg-purple-500">
              Derslere Git
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default NotesSection;