import { HeartHandshake, Target, Eye, ShieldCheck, Users, Award } from "lucide-react";

function AboutNxt() {
  return (
    <main className="pt-24">

      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-5 text-center">

          <h1 className="text-5xl font-bold">
            About CarePlus Clinic
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-teal-100">
            Delivering compassionate healthcare through experienced doctors,
            modern facilities, and patient-centered treatment.
          </p>

        </div>
      </section>

      {/* Story */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">

          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop"
            alt="Clinic"
            className="rounded-3xl shadow-xl h-[500px] w-full object-cover"
          />

          <div>

            <span className="text-teal-600 font-semibold uppercase">
              Our Story
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Caring Beyond Medicine
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              At CarePlus Clinic, healthcare is more than treating illnesses—
              it's about building trust, providing comfort, and supporting every
              patient throughout their wellness journey.
            </p>

            <p className="mt-5 text-slate-600 leading-8">
              With advanced medical technology, experienced specialists,
              and compassionate care, we strive to create a welcoming
              environment where every patient feels valued.
            </p>

          </div>

        </div>

      </section>

      {/* Mission & Vision */}

      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl p-10 shadow-lg">

            <Target className="text-teal-600" size={45} />

            <h3 className="text-3xl font-bold mt-5">
              Our Mission
            </h3>

            <p className="mt-5 text-slate-600 leading-8">
              To provide affordable, accessible, and world-class healthcare
              while treating every patient with dignity and compassion.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-10 shadow-lg">

            <Eye className="text-teal-600" size={45} />

            <h3 className="text-3xl font-bold mt-5">
              Our Vision
            </h3>

            <p className="mt-5 text-slate-600 leading-8">
              To become one of the most trusted healthcare providers,
              recognized for excellence, innovation, and patient satisfaction.
            </p>

          </div>

        </div>

      </section>

      {/* Values */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-5">

          <div className="text-center">

            <h2 className="text-4xl font-bold">
              Our Core Values
            </h2>

            <p className="text-slate-600 mt-4">
              The principles that guide everything we do.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            <div className="bg-slate-50 rounded-3xl p-8 text-center">
              <HeartHandshake className="mx-auto text-teal-600" size={45} />
              <h3 className="font-bold text-xl mt-5">Compassion</h3>
              <p className="text-slate-600 mt-3">
                Caring for every patient like family.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 text-center">
              <ShieldCheck className="mx-auto text-teal-600" size={45} />
              <h3 className="font-bold text-xl mt-5">Integrity</h3>
              <p className="text-slate-600 mt-3">
                Honest, ethical, and transparent care.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 text-center">
              <Users className="mx-auto text-teal-600" size={45} />
              <h3 className="font-bold text-xl mt-5">Teamwork</h3>
              <p className="text-slate-600 mt-3">
                Working together for better outcomes.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 text-center">
              <Award className="mx-auto text-teal-600" size={45} />
              <h3 className="font-bold text-xl mt-5">Excellence</h3>
              <p className="text-slate-600 mt-3">
                Delivering the highest quality healthcare.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="py-20 bg-teal-600 text-white">

        <div className="max-w-7xl mx-auto px-5 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-5xl font-bold">5000+</h2>
            <p className="mt-3">Happy Patients</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">20+</h2>
            <p className="mt-3">Specialist Doctors</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">15+</h2>
            <p className="mt-3">Years Experience</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">24/7</h2>
            <p className="mt-3">Emergency Support</p>
          </div>

        </div>

      </section>

      {/* Team */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-5">

          <div className="text-center">

            <h2 className="text-4xl font-bold">
              Meet Our Team
            </h2>

            <p className="text-slate-600 mt-4">
              Experienced professionals dedicated to your health.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop"
              className="rounded-3xl h-96 w-full object-cover"
              alt="Doctor"
            />

            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop"
              className="rounded-3xl h-96 w-full object-cover"
              alt="Doctor"
            />

            <img
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&auto=format&fit=crop"
              className="rounded-3xl h-96 w-full object-cover"
              alt="Doctor"
            />

          </div>

        </div>

      </section>

    </main>
  );
}

export default AboutNxt;