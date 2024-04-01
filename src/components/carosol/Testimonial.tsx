"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ClientCard from "@/components/card/ClientCard";
import ClientsData from "@/components/card/ClientsData";
import "swiper/swiper-bundle.css";

export default function Testimonial() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
      >
        {ClientsData.map((client) => (
          <SwiperSlide key={client.id}>
            <ClientCard client={client} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
