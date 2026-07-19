import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

function ContactInfo() {
  return (
    <div className="bg-teal-600 text-white rounded-3xl p-8 h-full">

      <h3 className="text-3xl font-bold">
        Contact Information
      </h3>

      <p className="mt-4 text-teal-100">
        We'd love to hear from you. Reach out anytime.
      </p>

      <div className="mt-10 space-y-8">

        <div className="flex gap-4">

          <MapPin />

          <div>
            <h4 className="font-semibold">
              Address
            </h4>

            <p className="text-teal-100">
              123 Healthcare Avenue,
              Lucknow, Uttar Pradesh
            </p>

          </div>

        </div>

        <div className="flex gap-4">

          <Phone />

          <div>

            <h4 className="font-semibold">
              Phone
            </h4>

            <p className="text-teal-100">
              +91 98765 43210
            </p>

          </div>

        </div>

        <div className="flex gap-4">

          <Mail />

          <div>

            <h4 className="font-semibold">
              Email
            </h4>

            <p className="text-teal-100">
              contact@clinic.com
            </p>

          </div>

        </div>

        <div className="flex gap-4">

          <Clock />

          <div>

            <h4 className="font-semibold">
              Working Hours
            </h4>

            <p className="text-teal-100">
              Mon - Sat : 9AM - 8PM
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ContactInfo;