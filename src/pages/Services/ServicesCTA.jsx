import { CalendarCheck, PhoneCall } from "lucide-react";

function ServicesCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700">

      <div className="max-w-6xl mx-auto px-5">

        <div className="bg-white rounded-[32px] shadow-2xl p-10 md:p-16 text-center">

          {/* Badge */}
          <span className="inline-block bg-teal-100 text-teal-700 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
            Your Health Matters
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mt-6 text-slate-900">
            Ready to Take the First Step Toward Better Health?
          </h2>

          {/* Description */}
          <p className="mt-6 text-slate-600 text-lg leading-8 max-w-3xl mx-auto">
            Our experienced healthcare professionals are here to provide
            compassionate care, accurate diagnosis, and personalized treatment.
            Schedule your visit today and let us help you achieve better health.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

            <button className="flex items-center justify-center gap-3 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition duration-300">

              <CalendarCheck size={22} />

              Book Appointment

            </button>

            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-3 border-2 border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
            >

              <PhoneCall size={22} />

              Call Now

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ServicesCTA;