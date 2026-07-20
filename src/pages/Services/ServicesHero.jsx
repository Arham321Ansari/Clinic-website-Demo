function ServicesHero() {
  return (
    <section
      className="relative h-[420px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600')",
      }}
    >
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 text-center text-white px-5">

        <h1 className="text-5xl md:text-6xl font-bold">
          Our Medical Services
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200">
          Comprehensive healthcare solutions with experienced doctors,
          modern technology, and compassionate care.
        </p>

      </div>

    </section>
  );
}

export default ServicesHero;