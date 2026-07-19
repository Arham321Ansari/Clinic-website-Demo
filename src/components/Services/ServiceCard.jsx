import { ArrowRight } from "lucide-react";

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

      <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center group-hover:bg-teal-600 transition">

        <Icon
          className="text-teal-600 group-hover:text-white transition"
          size={32}
        />

      </div>

      <h3 className="text-2xl font-bold mt-6">
        {service.title}
      </h3>

      <p className="text-gray-600 mt-4 leading-7">
        {service.description}
      </p>

      <button className="mt-6 flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-4 transition-all">

        Learn More

        <ArrowRight size={18} />

      </button>

    </div>
  );
}

export default ServiceCard;