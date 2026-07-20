import { PhoneCall, CalendarCheck } from "lucide-react";

function EmergencyCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">

      <div className="max-w-7xl mx-auto px-5">

        <div className="rounded-3xl bg-white p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-xl">

          <div>

            <span className="text-red-500 font-semibold uppercase">
              Emergency Support
            </span>

            <h2 className="text-4xl font-bold mt-3">
              Need Immediate Medical Assistance?
            </h2>

            <p className="text-slate-600 mt-5 leading-8 max-w-2xl">
              Our experienced medical professionals are available to provide
              emergency care and urgent consultations whenever you need us.
            </p>

          </div>

          <div className="flex flex-col sm:flex-row gap-5">

            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl transition"
            >
              <PhoneCall />

              Call Emergency

            </a>

            <button className="flex items-center justify-center gap-3 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl transition">

              <CalendarCheck />

              Book Appointment

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default EmergencyCTA;