import { CalendarCheck, Phone } from "lucide-react";
import Button from "../Common/Button";

function AppointmentCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500">

      <div className="max-w-7xl mx-auto px-5">

        <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-14 text-center">

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Need Medical Assistance?
          </h2>

          <p className="mt-6 text-lg text-teal-50 max-w-2xl mx-auto leading-8">
            Book an appointment with our experienced specialists and receive compassionate, world-class healthcare tailored to your needs.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <Button className="bg-transparent border text-teal-700 hover:bg-slate-100">
              <CalendarCheck className="mr-2" size={20} />
              Book Appointment
            </Button>

            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-white font-semibold transition hover:bg-white hover:text-teal-700"
            >
              <Phone className="mr-2" size={20} />
              Call Now
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AppointmentCTA;