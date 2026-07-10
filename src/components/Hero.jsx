import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { features } from "../data/features";

function Hero() {
  return (
    <section id="top" className="hero-section relative flex min-h-screen items-center justify-center px-6">
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-purple-600/30 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl text-center"
      >
        <p className="mb-4 text-blue-400 tracking-[0.4em] uppercase">
          Academic Portfolio
        </p>

        <h1 className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
          Yunus Emre KUL
        </h1>

        <p className="mt-6 text-lg text-slate-300 md:text-xl">
          Bilgisayar Mühendisliği öğrencisi olarak ders notlarımı, projelerimi
          ve teknik çalışmalarımı burada topluyorum.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#notes"
            className="rounded-xl bg-purple-600 px-6 py-3 transition hover:bg-purple-500"
          >
            Ders Notları
          </a>

          <a
            href="#projects"
            className="rounded-xl border border-blue-500/60 px-6 py-3 transition hover:bg-blue-500/10"
          >
            Projelerim
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;