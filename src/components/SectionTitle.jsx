function SectionTitle({ label, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-blue-400">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-slate-400">{description}</p>
    </div>
  );
}

export default SectionTitle;