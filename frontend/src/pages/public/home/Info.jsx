import carSide from "../../../assets/images/car_side.svg";
import location from "../../../assets/images/location.svg";
import wallet from "../../../assets/images/wallet.svg";

const infoCards = [
  {
    image: carSide,
    alt: "Car Side",
    title: "Comfort",
    description:
      "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis",
  },
  {
    image: location,
    alt: "Location",
    title: "Availability",
    description:
      "Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis",
  },
  {
    image: wallet,
    alt: "Wallet",
    title: "Savings",
    description:
      "Pretium convallis id diam sed commodo vestibulum lobortis volutpat",
  },
];

export default function Info() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-15 items-stretch">
      {infoCards.map((card) => (
        <div
          key={card.title}
          className="group flex flex-col gap-5 items-center text-center h-full min-h-65 p-4"
        >
          {/* ICON */}
          <div className="w-16 h-16 flex items-center justify-center">
            <img
              src={card.image}
              alt={card.alt}
              className="w-16 h-16 object-contain transition-transform duration-300 group-hover:-translate-y-1.5"
            />
          </div>

          {/* TITLE */}
          <h3 className="font-[Work_Sans] font-semibold text-[22px] md:text-[24px]">
            {card.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-[15px] md:text-[16px] max-w-89.25 leading-7 font-light">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}