import { useState, useEffect, useRef } from "react";
import CountUp from "../../../components/ui/CountUp";
import { useInView } from "motion/react";

import counterImg from "../../../assets/images/counter_bg.png";
import carStats from "../../../assets/icons/car_stats.svg";
import userStats from "../../../assets/icons/user_stats.svg";
import cityStats from "../../../assets/icons/city_stats.svg";
import agencyIcon from "../../../assets/icons/agency_icon_stats.svg";

function FactsInNumbers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const countersData = [
    { id: 1, value: 100, label: "Cars", suffix: "+", icon: carStats },
    { id: 2, value: 100000, label: "Customers", suffix: "+", icon: userStats },
    { id: 3, value: 30, label: "Cities Covered", suffix: "+", icon: cityStats },
    { id: 4, value: 22, label: "Agencies", suffix: "+", icon: agencyIcon },
  ];
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (!isInView) return;

    let i = 0;

    const run = () => {
      setActiveIndex(i);

      const duration = 1200; // match CountUp duration

      setTimeout(() => {
        i++;
        if (i < countersData.length) {
          run(); // next AFTER current finishes
        }
      }, duration + 300); // wait full animation
    };

    run();
  }, [countersData.length, isInView]);

  return (
    <div
      ref={ref}
      className="bg-cover bg-center rounded-[20px] p-6 lg:p-10 flex flex-col gap-10 w-full"
      style={{ backgroundImage: `url(${counterImg})` }}
    >
      {/* TEXT */}
      <div className="w-full max-w-2xl text-center mx-auto">
        <h1 className="lg:text-[50px] text-[32px] text-white font-bold">
          Facts In Numbers
        </h1>
        <p className="text-white/80 mt-3 text-sm lg:text-base">
          Discover the impressive statistics that define our impact and success
          in the car rental industry.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 w-full">
        {countersData.map((counter, index) => (
          <div
            key={counter.id}
            className="bg-white rounded-[20px] p-4 flex items-center gap-3 w-full"
          >
            <img
              src={counter.icon}
              alt={`${counter.label} icon`}
              className="w-10 h-10 bg-[#FF9E0C] rounded-xl p-2 shrink-0"
            />

            <div className="flex flex-col">
              <h2 className="text-black text-xl lg:text-2xl font-bold">
                {activeIndex >= index ? (
                  <>
                    <CountUp from={0} to={counter.value} duration={1.2} />
                    {counter.suffix}
                  </>
                ) : (
                  0
                )}
              </h2>

              <p className="text-gray-500 text-sm">{counter.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FactsInNumbers;
