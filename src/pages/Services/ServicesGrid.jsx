import services from "../../data/servicesPage";

function ServicesGrid() {
  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center">

          <span className="text-teal-600 uppercase font-semibold tracking-widest">
            Services
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Healthcare Services We Provide
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service) => (

            <div
              key={service.id}
              className="bg-white rounded-3xl p-8 shadow hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >

              <div className="text-5xl">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {service.title}
              </h3>

              <p className="text-slate-600 mt-4 leading-7">
                {service.description}
              </p>

              <button className="mt-6 text-teal-600 font-semibold">
                Learn More →
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ServicesGrid;