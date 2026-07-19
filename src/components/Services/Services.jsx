import services from "../../data/service";
import ServiceCard from "./ServiceCard";
import SectionTitle from "../Common/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Services() {
  return (
    <section className="mt-6 py-16 md:py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-5">

        <SectionTitle
          center
          subtitle="Our Services"
          title="Medical Services We Offer"
          description="Our experienced healthcare professionals provide comprehensive medical services with compassion, advanced technology, and personalized treatment."
        />

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={25}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mt-14 pb-14"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}

export default Services;