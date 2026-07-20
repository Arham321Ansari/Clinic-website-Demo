import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Ambulance,
} from "lucide-react";

function ContactInfo() {
  const contactItems = [
    {
      icon: <Phone size={22} />,
      title: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: <Mail size={22} />,
      title: "Email",
      value: "contact@careplus.com",
      link: "mailto:contact@careplus.com",
    },
    {
      icon: <MapPin size={22} />,
      title: "Address",
      value: "123 Health Avenue, Lucknow, Uttar Pradesh",
      link: "#",
    },
    {
      icon: <Clock size={22} />,
      title: "Working Hours",
      value: "Mon - Sat : 9:00 AM - 8:00 PM",
      link: "#",
    },
    {
      icon: <Ambulance size={22} />,
      title: "Emergency",
      value: "24/7 Emergency Support",
      link: "tel:+919999999999",
    },
  ];

  return (
    <div className="space-y-6">

      <div>
        <span className="text-teal-600 font-semibold uppercase tracking-wider">
          Contact Details
        </span>

        <h2 className="text-4xl font-bold mt-3">
          We're Here To Help
        </h2>

        <p className="mt-4 text-slate-600 leading-8">
          Reach out to us anytime. Whether you have a question,
          need medical guidance, or want to schedule an appointment,
          our team is ready to assist you.
        </p>
      </div>

      {contactItems.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="flex items-start gap-5 bg-white p-5 rounded-2xl shadow hover:shadow-lg transition duration-300"
        >
          <div className="bg-teal-100 text-teal-600 p-4 rounded-xl">
            {item.icon}
          </div>

          <div>
            <h4 className="font-semibold text-lg">
              {item.title}
            </h4>

            <p className="text-slate-600 mt-1">
              {item.value}
            </p>
          </div>
        </a>
      ))}

    </div>
  );
}

export default ContactInfo;