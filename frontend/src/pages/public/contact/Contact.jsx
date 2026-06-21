import { useState } from "react";
import { CalendarDays, Clock, Mail, MapPin, Phone } from "lucide-react";
import heroBg from "../../../assets/images/hero_section_bg.png";
import stepsImg from "../../../assets/images/steps_img.png";
import counterImg from "../../../assets/images/counter_bg.png";
import vehicleImg from "../../../assets/images/vehicle_transparent.png";
import { villes } from "../../../data/data";

const carTypes = ["Sedan", "Cabriolet", "Pickup", "Minivan", "SUV"];

const contactItems = [
  {
    Icon: MapPin,
    title: "Address",
    value: "Oxford Ave. Cary, NC 27511",
  },
  {
    Icon: Mail,
    title: "Email",
    value: "nwiger@yahoo.com",
  },
  {
    Icon: Phone,
    title: "Phone",
    value: "+537 547-6401",
  },
  {
    Icon: Clock,
    title: "Opening hours",
    value: "Sun-Mon: 10am - 10pm",
  },
];

const posts = [
  {
    title: "How to choose the right car",
    meta: "News / 12 April 2024",
    image: stepsImg,
  },
  {
    title: "Which plan is right for me?",
    meta: "News / 12 April 2024",
    image: counterImg,
  },
  {
    title: "Enjoy speed, choice & total control",
    meta: "News / 12 April 2024",
    image: heroBg,
  },
];

function SelectField({ id, label, value, onChange, children }) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="h-11 w-full appearance-none rounded-xl bg-[#694BE3] px-4 pr-10 text-sm text-white outline-none placeholder:text-white/80"
        required
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/80">
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
    </div>
  );
}

function DateField({ id, label, value, min, onChange }) {
  return (
    <div className="relative">
      <input
        id={id}
        type="date"
        value={value}
        min={min}
        onChange={onChange}
        onFocus={(event) => event.target.showPicker?.()}
        className="h-11 w-full appearance-none rounded-xl bg-[#694BE3] px-4 pr-10 text-sm text-white outline-none"
        required
      />
      {!value && (
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-white">
          {label}
        </span>
      )}
      <CalendarDays className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/80" />
    </div>
  );
}

function PageHero() {
  return (
    <section className="rounded-[40px] bg-[#FAFAFA] px-6 py-16 text-center sm:py-20">
      <h1 className="font-[Work_Sans] text-4xl font-bold text-black sm:text-5xl">
        Contact Us
      </h1>
      <p className="mt-5 text-lg text-black/60">
        Home <span className="text-black">/ Contact Us</span>
      </p>
    </section>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    carType: "",
    rentalPlace: "",
    returnPlace: "",
    rentalDate: "",
    returnDate: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => {
      const next = { ...prev, [id]: value };

      if (id === "rentalDate") {
        if (!value) {
          next.returnDate = "";
        } else if (next.returnDate && next.returnDate < value) {
          next.returnDate = value;
        }
      }

      if (id === "returnDate" && prev.rentalDate && value < prev.rentalDate) {
        next.returnDate = prev.rentalDate;
      }

      return next;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="container">
      <PageHero />

      <section className="grid gap-6 py-16 lg:grid-cols-[416px_1fr] lg:py-20">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 rounded-[20px] bg-[#5937E0] p-8 sm:p-10"
        >
          <h2 className="text-center font-[Work_Sans] text-3xl font-semibold text-white">
            Book your car
          </h2>

          <div className="flex flex-col gap-5">
            <SelectField
              id="carType"
              label="Car type"
              value={formData.carType}
              onChange={handleChange}
            >
              <option value="" disabled>
                Car type
              </option>
              {carTypes.map((type) => (
                <option key={type} value={type.toLowerCase()}>
                  {type}
                </option>
              ))}
            </SelectField>

            <SelectField
              id="rentalPlace"
              label="Place of rental"
              value={formData.rentalPlace}
              onChange={handleChange}
            >
              <option value="" disabled>
                Place of rental
              </option>
              {villes.slice(0, 12).map((ville) => (
                <option key={ville.id} value={ville.nom}>
                  {ville.nom}
                </option>
              ))}
            </SelectField>

            <SelectField
              id="returnPlace"
              label="Place of return"
              value={formData.returnPlace}
              onChange={handleChange}
            >
              <option value="" disabled>
                Place of return
              </option>
              {villes.slice(0, 12).map((ville) => (
                <option key={ville.id} value={ville.nom}>
                  {ville.nom}
                </option>
              ))}
            </SelectField>

            <DateField
              id="rentalDate"
              value={formData.rentalDate}
              onChange={handleChange}
            />
            <DateField
              id="returnDate"
              value={formData.returnDate}
              min={formData.rentalDate}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="h-11 rounded-xl bg-[#FF9E0C] font-semibold text-white transition-colors hover:bg-[#e68f0a]"
          >
            Book now
          </button>
        </form>

        <div className="relative min-h-105 overflow-hidden rounded-[20px] bg-[#111827] lg:min-h-125.75">
          <img
            src={heroBg}
            alt="Rental car ready for booking"
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          />
        </div>
      </section>

      <section className="grid gap-6 py-4 sm:grid-cols-2 xl:grid-cols-4">
        {contactItems.map(({ Icon, title, value }) => (
          <article key={title} className="flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#FF9E0C] text-white">
              <Icon className="h-7 w-7" />
            </span>
            <div>
              <p className="text-lg text-black/60">{title}</p>
              <p className="mt-1 font-[Work_Sans] text-lg font-semibold text-black">
                {value}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="py-16 lg:py-20">
        <h2 className="text-center font-[Work_Sans] text-4xl font-bold text-black sm:text-5xl">
          Latest blog posts & news
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title}>
              <img
                src={post.image}
                alt={post.title}
                className="h-60 w-full rounded-[20px] object-cover"
              />
              <h3 className="mt-5 font-[Work_Sans] text-xl font-semibold capitalize text-black">
                {post.title}
              </h3>
              <p className="mt-4 text-black/60">{post.meta}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-16 grid items-center gap-8 rounded-[20px] bg-[#FAFAFA] px-6 py-10 sm:px-10 lg:grid-cols-[1fr_360px] lg:px-16">
        <div>
          <h2 className="font-[Work_Sans] text-3xl font-bold text-black">
            Need a specific vehicle?
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-black/60">
            Tell us where and when you want to drive. We will help connect you
            with an agency that has the right car available.
          </p>
        </div>
        <img
          src={vehicleImg}
          alt="Featured rental car"
          className="mx-auto max-h-44 w-full object-contain"
        />
      </section>
    </main>
  );
}
