import { HeroBanner } from "@/components/banner/HereBanner";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative h-[100%]">
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
      <section className="py-[80px]">
        <div className="container">
          <h1>Section Title</h1>
        </div>
      </section>
    </>
  );
}
