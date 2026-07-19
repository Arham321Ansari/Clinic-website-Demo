import Button from "../Common/Button";
import {
  CheckCircle,
  Award,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";

function About() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700"
              alt="Doctor"
              className="rounded-3xl shadow-2xl"
            />

            <div className="absolute -bottom-8 -left-8 bg-teal-600 text-white p-6 rounded-3xl shadow-xl">

              <h2 className="text-4xl font-bold">
                20+
              </h2>

              <p>Years Experience</p>

            </div>

            <div className="absolute top-10 -right-6 bg-white p-6 rounded-3xl shadow-xl">

              <h2 className="text-3xl font-bold text-teal-600">
                5000+
              </h2>

              <p className="text-gray-500">
                Happy Patients
              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <span className="text-teal-600 uppercase tracking-widest font-semibold">
              About Our Doctor
            </span>

            <h2 className="text-5xl font-bold mt-4 leading-tight">
              Meet Our Experienced Medical Specialist
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Our clinic is dedicated to providing high-quality healthcare
              with compassion, professionalism, and advanced medical
              technology. We believe every patient deserves personalized
              treatment and exceptional care.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">

              <div className="flex gap-3">
                <GraduationCap className="text-teal-600" />
                <div>
                  <h4 className="font-semibold">MBBS, MD</h4>
                  <p className="text-gray-500 text-sm">
                    Qualified Specialist
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Award className="text-teal-600" />
                <div>
                  <h4 className="font-semibold">
                    20+ Years
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Clinical Experience
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <HeartHandshake className="text-teal-600" />
                <div>
                  <h4 className="font-semibold">
                    Patient Care
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Compassionate Treatment
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-teal-600" />
                <div>
                  <h4 className="font-semibold">
                    Emergency
                  </h4>
                  <p className="text-gray-500 text-sm">
                    24/7 Medical Support
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-10">
              <Button icon>
                Meet The Doctor
              </Button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;