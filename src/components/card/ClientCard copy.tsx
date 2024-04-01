import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

interface Client {
  className: string;
  cimg: string;
  name: string;
  desc: string;
}

const ClientCard = ({ client }: { client: Client }) => {
  return (
    <div className=" w-full sm:w-[50%] my-5">
      <div
        className={`flex flex-row items-start gap-4 shadow-2xl bg-[#1B1A1E] rounded-xl border border-[#ffffff23] p-4 w-full md:w-[350px] ${client.className}`}
      >
        <Image
          src={client.cimg}
          width={50}
          height={50}
          alt="Client Images"
          className="rounded-xl object-fill"
        />
        <div>
          <h5 className="text-[18px] font-semibold">{client.name}</h5>
          <p>{client.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
