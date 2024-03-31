import Image from "next/image";

interface Client {
  className: string;
  cimg: string;
  name: string;
  desc: string;
}

const ClientCard = ({ client }: { client: Client }) =>  {
  return (
    <div className={`flex flex-row items-start gap-4 rounded-md border border-emerald-400 p-4 w-full md:w-[350px] ${client.className}`}>
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
  );
};

export default ClientCard;
