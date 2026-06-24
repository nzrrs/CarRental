import { NavLink } from "react-router-dom";
import { Check, Play, ShieldCheck, Sparkles, Users } from "lucide-react";
import Breadcrumb from "../../../components/ui/Breadcrumb";
import FactsInNumbers from "../home/FactsInNumbers";
import stepsImg from "../../../assets/images/steps_img.png";
import counterImg from "../../../assets/images/counter_bg.png";
import vehicleImg from "../../../assets/images/vehicle_transparent.png";

const values = [
  {
    title: "Variety Brands",
    description:
      "Choose from a wide range of trusted rental partners, vehicle classes, and trip-ready options.",
  },
  {
    title: "Awesome Support",
    description:
      "Get quick help before pickup, during your trip, and when returning the vehicle.",
  },
  {
    title: "Maximum Freedom",
    description:
      "Compare cars, set your schedule, and book the ride that fits the way you travel.",
  },
  {
    title: "Flexibility on the go",
    description:
      "Adjust plans with clear rental details, responsive agencies, and simple next steps.",
  },
];

const checks = [
  "Verified agencies with clear vehicle details and availability.",
  "Flexible booking flow for rental dates, locations, and car type.",
  "Transparent pricing support for better trip planning.",
  "Fast contact paths when you need help from an agency.",
];

function PageHero() {
  return (
    <section className="rounded-[40px] bg-[#FAFAFA] px-6 py-16 text-center sm:py-20 flex justify-center flex-col items-center">
      <h1 className="font-[Work_Sans] text-4xl font-bold text-black sm:text-5xl">
        About Us
      </h1>
      <div className="mt-5">
        <Breadcrumb />
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="container">
      <PageHero />

      <section className="grid gap-12 py-16 lg:grid-cols-[360px_1fr] lg:py-20">
        <h2 className="font-[Work_Sans] text-4xl font-bold leading-tight text-black sm:text-5xl">
          Where every drive feels extraordinary
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {values.map((item) => (
            <article key={item.title}>
              <h3 className="font-[Work_Sans] text-2xl font-semibold text-black">
                {item.title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-7 text-black/60">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[20px] bg-[#111827]">
        <img
          src={stepsImg}
          alt="Car rental customer experience"
          className="h-90 w-full object-cover opacity-80 sm:h-130"
        />
        <button
          type="button"
          aria-label="Play overview video"
          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FF9E0C] text-white shadow-xl transition-transform hover:scale-105"
        >
          <Play className="ml-1 h-7 w-7" fill="currentColor" />
        </button>
      </section>

      {/* Using FactsInNumbers component which already has the CountUp functionality */}
      <section className="py-16 lg:py-20">
        <FactsInNumbers />
      </section>

      <section className="grid items-center gap-12 py-4 lg:grid-cols-[1fr_550px]">
        <div>
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#FF9E0C]/15 text-[#FF9E0C]">
            <Sparkles className="h-7 w-7" />
          </div>
          <h2 className="font-[Work_Sans] text-4xl font-bold leading-tight text-black sm:text-5xl">
            Unlock unforgettable memories on the road
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-black/60">
            We help customers find practical, comfortable vehicles without
            slowing down the trip. Search by city, compare agencies, and move
            from planning to pickup with confidence.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {checks.map((check) => (
              <div key={check} className="flex gap-3">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#5937E0] text-white">
                  <Check className="h-4 w-4" />
                </span>
                <p className="text-sm leading-6 text-black/70">{check}</p>
              </div>
            ))}
          </div>
        </div>

        <img
          src={counterImg}
          alt="Rental car on the road"
          className="h-105 w-full rounded-[20px] object-cover"
        />
      </section>

      <section className="my-16 overflow-hidden rounded-[20px] bg-[#5937E0] px-6 py-10 text-white sm:px-10 lg:my-20 lg:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_520px]">
          <div>
            <div className="mb-6 flex gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                <Users className="h-5 w-5" />
              </span>
            </div>
            <h2 className="font-[Work_Sans] text-3xl font-bold sm:text-5xl">
              Looking for a car?
            </h2>
            <p className="mt-4 text-2xl font-semibold text-[#FFCE83]">
              +537 547-6401
            </p>
            <p className="mt-6 max-w-2xl leading-7 text-white/75">
              Book a rental that matches your route, passenger count, and
              budget. Our team can help you compare available cars and confirm
              the right agency for your trip.
            </p>
            <NavLink
              to="/vehicles"
              className="mt-8 inline-flex rounded-xl bg-[#FF9E0C] px-7 py-3 font-semibold text-white transition-colors hover:bg-[#e68f0a]"
            >
              Book now
            </NavLink>
          </div>
          <img
            src={vehicleImg}
            alt="Available rental vehicle"
            className="mx-auto max-h-72 w-full object-contain lg:max-h-96"
          />
        </div>
      </section>
    </main>
  );
}
