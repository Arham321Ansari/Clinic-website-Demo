import {
  HeartPulse,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-5 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3">

              <div className="bg-teal-600 p-3 rounded-xl">
                <HeartPulse />
              </div>

              <h2 className="text-2xl font-bold">
                CarePlus
              </h2>

            </div>

            <p className="mt-5 text-slate-400 leading-7">
              Providing compassionate healthcare with modern medical facilities
              and experienced specialists.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-teal-600 transition"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-teal-600 transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-teal-600 transition"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-teal-600 transition"
              >
                <FaXTwitter size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 mt-6 text-slate-400">

              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Doctors</a></li>
              <li><a href="#">Contact</a></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold">
              Services
            </h3>

            <ul className="space-y-3 mt-6 text-slate-400">

              <li>Cardiology</li>
              <li>Dental Care</li>
              <li>Pediatrics</li>
              <li>Orthopedics</li>
              <li>Neurology</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-5 mt-6 text-slate-400">

              <div className="flex gap-3">

                <Phone className="text-teal-500" />

                <span>+91 98765 43210</span>

              </div>

              <div className="flex gap-3">

                <Mail className="text-teal-500" />

                <span>contact@careplus.com</span>

              </div>

              <div className="flex gap-3">

                <MapPin className="text-teal-500" />

                <span>Lucknow, Uttar Pradesh</span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-slate-500 text-center">
            © 2026 CarePlus Clinic. All Rights Reserved.
          </p>

          <p className="text-slate-500">
            Designed with ❤️ by Arham
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;