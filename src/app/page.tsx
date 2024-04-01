import { Faq } from "@/components/accordion/Faq";
import { HeroBanner } from "@/components/banner/HereBanner";
import { CardHoverEffect } from "@/components/card/CardHoverEffect";
import ClientCard from "@/components/card/ClientCard";
import ClientsData from "@/components/card/ClientsData";
import { WorkCard } from "@/components/card/WorkCard";
import { InfiniteMoving } from "@/components/movingImg/InfiniteMoving";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative h-[100%] overflow-hidden" id="home">
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
      <section className="py-[50px] bg" id="benefits">
        <div className="container">
          <div className="w-full sm:w-[550px] m-auto mb-5">
            <h2 className="text-[30px] sm:text-[36px] text-white text-center font-bold">
              “Join a community of industry leading professionals”
            </h2>
          </div>
        </div>
        <InfiniteMoving />
      </section>
      <section className="py-[80px] relative overflow-hidden">
        <div className="container">
          <div className="flex items-start justify-center w-full">
            <div className="flex flex-row items-center justify-center absolute top-[50px] -z-10">
              <h1 className="combined">Benefits</h1>
              <h1 className="combined">Benefits</h1>
            </div>
            <div className="w-[550px] m-auto text-center">
              <h2 className="text-[30px] sm:text-[36px] md:text-[56px] mt-[-15px] md:mt-0 text-white text-center font-bold">
                Benefits
              </h2>
            </div>
          </div>
          <CardHoverEffect />
        </div>
      </section>
      <section className="py-[80px] h-full relative bg overflow-hidden">
        <div className="container">
          <div className="flex items-start justify-center w-full">
            <div className="flex flex-row items-center justify-center absolute top-[50px] -z-1">
              <h1 className="combined">Voices of clients</h1>
              <h1 className="combined">Voices of clients</h1>
            </div>
            <div className="w-[550px] m-auto text-center">
              <h2 className="text-[30px] sm:text-[36px] md:text-[56px] mt-[-15px] md:mt-0 text-white text-center font-bold">
                Voices Of Clients
              </h2>
            </div>
          </div>
          <div className="relative w-full mt-0 md:mt-[-40px]">
            <Image
              width={700}
              height={700}
              src="/img/client_bg.png"
              alt=""
              className="mt-20 m-auto sm:block hidden "
            />
            <div className="flex flex-wrap items-center justify-between w-full sm:absolute top-0">
              {ClientsData.map((client) => (
                <ClientCard key={client.id} client={client} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-[80px] relative overflow-hidden">
        <div className="container">
          <div className="flex items-start justify-center w-full">
            <div className="flex flex-row items-center justify-center absolute top-[50px] -z-1">
              <h1 className="combined">How does this work</h1>
              <h1 className="combined">How does this work</h1>
            </div>
            <div className="text-center">
              <h2 className="text-[30px] sm:text-[36px] md:text-[56px] mt-[-15px] md:mt-0 text-white text-center font-bold">
                How does this work?
              </h2>
            </div>
          </div>
          <div className="mt-8">
            <WorkCard />
          </div>
        </div>
      </section>
      <section className="py-[80px] relative overflow-hidden">
        <div className="container">
          <div className="flex items-start justify-center w-full">
            <div className="flex flex-row items-center justify-center absolute top-[50px] -z-10">
              <h1 className="combined">Frequently asked questions</h1>
              <h1 className="combined">Frequently asked questions</h1>
            </div>
            <div className="text-center">
              <h2 className="text-[30px] sm:text-[36px] md:text-[56px] mt-[-15px] md:mt-0 text-white text-center font-bold">
                HAVE QUESTIONS?
              </h2>
            </div>
          </div>
          <div className="mt-8 z-10">
            <Faq />
          </div>
        </div>
      </section>
    </>
  );
}
