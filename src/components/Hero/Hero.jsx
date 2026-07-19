import { ArrowRight, Calendar, ShieldCheck, Users } from "lucide-react";
import Button from "../Common/Button";
function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 pt-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Section */}
        <div>

          <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full font-medium">
            Trusted Healthcare Since 2005
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6 leading-tight">
            Caring For
            <span className="text-teal-600"> Your Health </span>
            Like Family.
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            We provide world-class healthcare with experienced doctors,
            advanced medical technology, and compassionate care for every
            patient.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <Button icon>
              Book Appointment
              <ArrowRight size={18} />
            </Button>

            <Button className="border-2 border-teal-600 text-teal-600 px-7 py-4 rounded-full hover:bg-teal-600 hover:text-white transition">
              Learn More
            </Button>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12">

            <div className="bg-white shadow-lg rounded-2xl p-5 text-center">
              <Users className="mx-auto text-teal-600 mb-2" />
              <h3 className="text-2xl font-bold">5000+</h3>
              <p className="text-gray-500 text-sm">Patients</p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-5 text-center">
              <ShieldCheck className="mx-auto text-teal-600 mb-2" />
              <h3 className="text-2xl font-bold">20+</h3>
              <p className="text-gray-500 text-sm">Years</p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-5 text-center">
              <Calendar className="mx-auto text-teal-600 mb-2" />
              <h3 className="text-2xl font-bold">24/7</h3>
              <p className="text-gray-500 text-sm">Support</p>
            </div>

          </div>

        </div>

        {/* Right Section */}
        <div className="relative flex justify-center">

          {/* Decorative Circle */}
          <div className="absolute w-[420px] h-[420px] bg-teal-100 rounded-full blur-2xl"></div>

          {/* Doctor Image */}
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700"
            alt="Doctor"
            className="relative z-10 rounded-3xl shadow-2xl w-[450px] object-cover"
          />

          {/* Floating Card */}
          <div className="absolute top-8 -left-4 bg-white shadow-xl rounded-2xl p-4 z-20">
            <h3 className="font-bold text-lg">⭐ 4.9 Rating</h3>
            <p className="text-gray-500 text-sm">Trusted by Patients</p>
          </div>

          <div className="absolute bottom-10 -right-5 bg-white shadow-xl rounded-2xl p-4 z-20">
            <h3 className="font-bold text-lg">100%</h3>
            <p className="text-gray-500 text-sm">Patient Satisfaction</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;