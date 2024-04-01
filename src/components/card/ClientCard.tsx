import Image from "next/image";

interface Client {
  cimg: string;
  name: string;
  desc: string;
}

const ClientCard = ({ client }: { client: Client }) => {
  return (
    <div className="lex flex-row items-start gap-4 shadow-2xl bg-[#1B1A1E] rounded-xl border border-[#ffffff23] p-4 w-full">
      <Image
        src={client.cimg}
        width={50}
        height={50}
        alt="Client Images"
        className="rounded-xl object-fill border border-[#ffffff23]"
      />
      <div className="mt-5">
        <h5 className="text-[18px] font-semibold mb-3">{client.name}</h5>
        <p>{client.desc}</p>
      </div>
    </div>
  );
};

export default ClientCard;
