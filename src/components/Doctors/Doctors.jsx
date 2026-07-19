import SectionTitle from "../Common/SectionTitle";
import doctors from "../../data/doctors";
import DoctorCard from "./DoctorCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Doctors() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <SectionTitle
          center
          subtitle="Our Doctors"
          title="Meet Our Medical Specialists"
          description="Our experienced doctors are dedicated to providing exceptional healthcare with compassion and expertise."
        />

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mt-14 pb-14"
        >
          {doctors.map((doctor) => (
            <SwiperSlide key={doctor.id}>
              <DoctorCard doctor={doctor} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default Doctors;