import { Star, BriefcaseMedical } from "lucide-react";
import Button from "../Common/Button";

function DoctorCard({ doctor }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">

      <div className="overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-100 object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {doctor.name}
        </h3>

        <p className="text-teal-600 font-medium mt-2">
          {doctor.specialization}
        </p>

        <div className="flex justify-between mt-5">

          <div className="flex items-center gap-2">
            <BriefcaseMedical
              size={18}
              className="text-teal-600"
            />
            <span>{doctor.experience}</span>
          </div>

          <div className="flex items-center gap-1">

            <Star
              size={18}
              fill="#facc15"
              className="text-yellow-400"
            />

            <span>{doctor.rating}</span>

          </div>

        </div>

        <Button className="w-full mt-6">
          Book Appointment
        </Button>

      </div>

    </div>
  );
}

export default DoctorCard;