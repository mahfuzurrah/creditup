// InfiniteMoving.tsx

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMoving() {
  const testimonials = [
    {
      bimg: "/img/brand/1.png",
    },
    {
      bimg: "/img/brand/2.png",
    },
    {
      bimg: "/img/brand/3.png",
    },
    {
      bimg: "/img/brand/4.png",
    },
    {
      bimg: "/img/brand/5.png",
    },
    {
      bimg: "/img/brand/6.png",
    },
  ];

  return (
    <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials.map((testimonial, index) => ({
          bimg: testimonial.bimg,
        }))}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
