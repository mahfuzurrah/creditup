import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function WorkCard() {
  return (
    <BentoGrid className="w-full">
      <div className="md:grid md:grid-cols-3 gap-4 my-4">
        {items.slice(0, 3).map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            listOne={item.listOne}
            listTwo={item.listTwo}
            header={item.header}
          />
        ))}
      </div>
      <div className="md:grid md:grid-cols-2 gap-4 my-4">
        {items.slice(3, 5).map((item, i) => (
          <BentoGridItem
            key={i + 3}
            title={item.title}
            listOne={item.listOne}
            listTwo={item.listTwo}
            header={item.header}
          />
        ))}
      </div>
      <h3 className="text-[28px] text-center font-semibold">
        Now lets look at the difference, once your a{" "}
        <span className="text-[#C5B1F0]">Creditup</span> user
      </h3>
      <div className="w-full mt-4">
        {items.slice(5).map((item, i) => (
          <BentoGridItem
            key={i + 5}
            title={item.title}
            listOne={item.listOne}
            listTwo={item.listTwo}
            header={item.header}
          />
        ))}
      </div>
    </BentoGrid>
  );
}

const items = [
  {
    title: "Barclay - Personal loan",
    listOne: "Balance Outstanding = £5,000.00",
    listTwo: "Current Repayment = £350.00",
    header: "1",
  },
  {
    title: " Lloyds - CreditCard",
    listOne: "Balance Outstanding = £5,000.00",
    listTwo: "Current Repayment = £350.00",
    header: "2",
  },
  {
    title: "Capital One - CreditCard",
    listOne: "Balance Outstanding = £5,000.00",
    listTwo: "Current Repayment = £350.00",
    header: "3",
  },
  {
    listOne: "Total outstanding balance = £11, 000.00",
    listTwo: "Total monthly repayment = £750.00 off which 60% on average",
    listThree: "goes towards purely interest and charges.e",
    header: "4",
  },
  {
    listOne:
      "This means in reality only £300.00 goes towards your balances and £450.00 is purely interest and charges.",
    header: "5",
  },
  {
    listOne: "Current outstanding balance = £11, 000.00",
    listTwo: "NEW monthly repayment = £375.00 off which £29.99 is your",
    listThree: "Creditup subscription. This means the balance £345.01 goes directly towards your outstanding balances.",
    header: "6",
  },
];
