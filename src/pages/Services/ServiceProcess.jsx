import {
  CalendarCheck,
  UserRound,
  Microscope,
  HeartPulse,
  Smile,
} from "lucide-react";

function ServiceProcess() {

  const steps = [
    {
      id: 1,
      icon: <CalendarCheck size={40} />,
      title: "Book Appointment",
      description:
        "Schedule your consultation online or by phone.",
    },
    {
      id: 2,
      icon: <UserRound size={40} />,
      title: "Meet Doctor",
      description:
        "Consult with our experienced specialists.",
    },
    {
      id: 3,
      icon: <Microscope size={40} />,
      title: "Diagnosis",
      description:
        "Get accurate tests and medical evaluation.",
    },
    {
      id: 4,
      icon: <HeartPulse size={40} />,
      title: "Treatment",
      description:
        "Receive personalized treatment plans.",
    },
    {
      id: 5,
      icon: <Smile size={40} />,
      title: "Recovery",
      description:
        "Follow-up care for long-term wellness.",
    },
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center">

          <span className="text-teal-600 uppercase tracking-widest font-semibold">
            Treatment Process
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Your Healthcare Journey
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            We make healthcare simple, efficient, and patient-friendly.
          </p>

        </div>

        {/* Process Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mt-16">

          {steps.map((step) => (

            <div
              key={step.id}
              className="bg-slate-50 rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300 shadow-sm hover:shadow-xl"
            >

              <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto">

                {step.icon}

              </div>

              <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mt-5 font-bold">

                {step.id}

              </div>

              <h3 className="text-xl font-bold mt-5">
                {step.title}
              </h3>

              <p className="text-slate-600 mt-4 leading-7">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ServiceProcess;