import stepsImg from "../../../assets/images/steps_img.png";

export default function HowItWorks() {
  const Steps = [
    {
      number: 1,
      title: "Choose Your Ride",
      description:
        "Browse our extensive fleet of vehicles and select the one that suits your needs and style.",
    },
    {
      number: 2,
      title: "Book with Ease",
      description:
        "Use our user-friendly platform to reserve your chosen vehicle in just a few clicks.",
    },
    {
      number: 3,
      title: "Wait for confirmation",
      description:
        "Receive a confirmation email and details about your booking.",
    },
    {
      number: 4,
      title: "Hit the Road",
      description:
        "Pick up your car and enjoy the freedom of the open road with confidence and convenience.",
    },
  ];

  return (
    <section className="py-20">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
    
    {/* IMAGE */}
    <div className="w-full lg:w-[55%] flex justify-center">
      <img
        src={stepsImg}
        alt="How it works"
        className="w-full max-w-155 h-full rounded-3xl object-cover"
      />
    </div>

    {/* STEPS */}
    <div className="w-full md:w-[80%] lg:w-[38%] flex flex-col gap-8">
      {Steps.map((step) => (
        <div
          key={step.number}
          className="flex flex-col gap-4"
        >
          {/* HEADER */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center min-w-9 h-9 rounded-full bg-[#5937E0] text-white font-[Work_Sans] font-semibold text-base shadow-md">
              {step.number}
            </div>

            <h3 className="font-[Work_Sans] font-semibold text-[20px] lg:text-[22px] text-black">
              {step.title}
            </h3>
          </div>

          {/* DESCRIPTION */}
          <p className="pl-13 text-[16px] lg:text-[17px] leading-7 text-[#00000080] font-[Work_Sans]">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}