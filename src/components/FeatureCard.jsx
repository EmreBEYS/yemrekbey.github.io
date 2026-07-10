import { motion } from "framer-motion";

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-purple-400/60"
    >
      <div className="text-4xl">{icon}</div>
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="mt-2 text-slate-400">{description}</p>
    </motion.div>
  );
}

export default FeatureCard;