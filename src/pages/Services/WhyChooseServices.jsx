import {
  Stethoscope,
  HeartHandshake,
  Hospital,
  ShieldCheck,
} from "lucide-react";

function WhyChooseServices() {
  const features = [
    {
      icon: <Stethoscope size={42} />,
      title: "Experienced Specialists",
      description:
        "Our highly qualified doctors provide expert diagnosis and treatment across multiple specialties.",
    },
    {
      icon: <Hospital size={42} />,
      title: "Modern Medical Equipment",
      description:
        "We use advanced diagnostic and treatment technologies to deliver accurate healthcare.",
    },
    {
      icon: <HeartHandshake size={42} />,
      title: "Personalized Patient Care",
      description:
        "Every patient receives an individualized treatment plan designed for their unique needs.",
    },
    {
      icon: <ShieldCheck size={42} />,
      title: "Safe & Trusted Healthcare",
      description:
        "We follow strict medical standards to ensure safety, quality, and patient satisfaction.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center">

          <span className="text-teal-600 uppercase tracking-widest font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Healthcare Built Around You
          </h2>

          <p className="mt-5 text-slate-600 max-w-3xl mx-auto leading-8">
            We combine experienced doctors, advanced technology,
            compassionate care, and modern facilities to deliver
            exceptional healthcare for every patient.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-600">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseServices;