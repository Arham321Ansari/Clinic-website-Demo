import {
  Clock3,
  PhoneCall,
  CalendarCheck,
} from "lucide-react";

function WorkingHours() {
  const schedule = [
    { day: "Monday", time: "09:00 AM - 08:00 PM" },
    { day: "Tuesday", time: "09:00 AM - 08:00 PM" },
    { day: "Wednesday", time: "09:00 AM - 08:00 PM" },
    { day: "Thursday", time: "09:00 AM - 08:00 PM" },
    { day: "Friday", time: "09:00 AM - 08:00 PM" },
    { day: "Saturday", time: "09:00 AM - 05:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-14">

          <span className="text-teal-600 uppercase tracking-widest font-semibold">
            Working Hours
          </span>

          <h2 className="text-4xl font-bold mt-3">
            We're Available When You Need Us
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Visit us during our clinic hours or contact us for emergency
            medical assistance.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Schedule */}

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <div className="flex items-center gap-3 mb-8">

              <Clock3 className="text-teal-600" size={30} />

              <h3 className="text-2xl font-bold">
                Clinic Schedule
              </h3>

            </div>

            <div className="space-y-5">

              {schedule.map((item) => (

                <div
                  key={item.day}
                  className="flex justify-between items-center border-b pb-4"
                >

                  <span className="font-medium">
                    {item.day}
                  </span>

                  <span
                    className={`font-semibold ${
                      item.time === "Closed"
                        ? "text-red-500"
                        : "text-teal-600"
                    }`}
                  >
                    {item.time}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-3xl p-10 text-white flex flex-col justify-center">

            <CalendarCheck size={45} />

            <h3 className="text-3xl font-bold mt-6">
              Need an Appointment?
            </h3>

            <p className="mt-5 text-teal-100 leading-8">
              Book your consultation online or call us directly.
              Our friendly staff will help you schedule the best
              available appointment.
            </p>

            <a
              href="tel:+919876543210"
              className="mt-8 inline-flex items-center gap-3 bg-white text-teal-700 px-6 py-4 rounded-xl font-semibold hover:scale-105 transition w-fit"
            >

              <PhoneCall size={20} />

              Call Now

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WorkingHours;