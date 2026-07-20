import {
  MapPin,
  Car,
  Accessibility,
  Navigation,
} from "lucide-react";

function GoogleMap() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="text-teal-600 font-semibold uppercase tracking-wider">
            Our Location
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Visit CarePlus Clinic
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Conveniently located in the heart of the city with easy access,
            parking facilities, and a patient-friendly environment.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Card */}

          <div className="bg-slate-50 rounded-3xl p-8 shadow">

            <div className="space-y-8">

              <div className="flex gap-4">

                <MapPin className="text-teal-600 mt-1" />

                <div>
                  <h3 className="font-bold text-xl">
                    Address
                  </h3>

                  <p className="text-slate-600 mt-2">
                    123 Health Avenue,
                    Gomti Nagar,
                    Lucknow,
                    Uttar Pradesh
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <Car className="text-teal-600 mt-1" />

                <div>

                  <h3 className="font-bold text-xl">
                    Parking
                  </h3>

                  <p className="text-slate-600 mt-2">
                    Free parking available for patients.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Accessibility className="text-teal-600 mt-1" />

                <div>

                  <h3 className="font-bold text-xl">
                    Accessibility
                  </h3>

                  <p className="text-slate-600 mt-2">
                    Wheelchair accessible entrance and lift.
                  </p>

                </div>

              </div>

            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10 bg-teal-600 text-white px-6 py-4 rounded-xl hover:bg-teal-700 transition"
            >
              <Navigation size={20} />

              Get Directions

            </a>

          </div>

          {/* Google Map */}

          <div className="rounded-3xl overflow-hidden shadow-xl">

            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.9749169085144!2d83.39940837521941!3d26.777069476728308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145bbe55eae31%3A0xdbe0808a8acec120!2sCENTRAL%20HOSPITAL!5e0!3m2!1sen!2sin!4v1784544011047!5m2!1sen!2sin"
              width="100%"
              height="500"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </div>

    </section>
  );
}

export default GoogleMap;
