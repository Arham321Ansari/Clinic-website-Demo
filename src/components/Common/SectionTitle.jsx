function SectionTitle({
  subtitle,
  title,
  description,
  center = false,
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <span className="text-teal-600 font-semibold uppercase tracking-widest">
        {subtitle}
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-3">
        {title}
      </h2>

      <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}

export default SectionTitle;