import { HeroBanner } from "@/components/banner/HereBanner";
import { InfiniteMoving } from "@/components/movingImg/InfiniteMoving";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative h-[100%] overflow-hidden">
        <div className="container">
          <HeroBanner />
        </div>
        <div className="absolute left-[-35%] top-0 -z-40">
          <Image
            src={`/svg/ex_bg.svg`}
            alt="hero"
            height={720}
            width={950}
            className="w-[50px]"
            draggable={false}
            layout="responsive"
          />
        </div>
        <div className="absolute right-[-35%] top-0 -z-40">
          <Image
            src={`/svg/ex_bg.svg`}
            alt="hero"
            height={720}
            width={950}
            className="w-[50px]"
            draggable={false}
            layout="responsive"
          />
        </div>
      </section>
      <section className="py-[50px] bg-[#17181F]">
        <div className="container">
          <h2 className="text-[36px] text-white text-center font-bold w-[550px] m-auto mb-5">
            “Join a community of industry leading professionals”
          </h2>
        </div>
        <InfiniteMoving />
      </section>
      <section className="py-[80px] relative">
        <div className="container"></div>
      </section>
    </>
  );
}
