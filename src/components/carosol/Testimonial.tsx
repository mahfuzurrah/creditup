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
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}
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
