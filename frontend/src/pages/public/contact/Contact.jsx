import { useState } from "react";
import { Clock, Mail, MapPin, Phone, User } from "lucide-react";
import heroBg from "../../../assets/images/hero_section_bg.png";
import stepsImg from "../../../assets/images/steps_img.png";
import counterImg from "../../../assets/images/counter_bg.png";
import vehicleImg from "../../../assets/images/vehicle_transparent.png";
import Breadcrumb from "@/components/ui/Breadcrumb";

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

function PageHero() {
  return (
    <section className="rounded-[40px] bg-[#FAFAFA] px-6 py-16 text-center sm:py-20 flex justify-center flex-col items-center">
      <h1 className="font-[Work_Sans] text-4xl font-bold text-black sm:text-5xl">
        Contact Us
      </h1>
      <p className="mt-5">
        <Breadcrumb />
      </p>
    </section>
  );
}

function InputField({ id, type = "text", placeholder, icon, value, onChange }) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-11 w-full rounded-xl bg-[#694BE3] px-4 pr-10 text-sm text-white outline-none placeholder:text-white/60"
        required
      />
      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/60">
        {icon}
      </span>
    </div>
  );
}

export default function Contact() {
  const [personalData, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handlePersonalChange = (e) => {
    const { id, value } = e.target;
    setPersonalData((prev) => ({ ...prev, [id]: value }));
  };

  const handlePersonalSubmit = (e) => {
    e.preventDefault();
    // handle submit
  };

  return (
    <main className="container">
      <PageHero />

      <section className="grid gap-6 py-16 lg:grid-cols-[416px_1fr] lg:py-20">
        <form
          onSubmit={handlePersonalSubmit}
          className="flex flex-col gap-8 rounded-[20px] bg-[#5937E0] p-8 sm:p-10"
        >
          <h2 className="text-center font-[Work_Sans] text-3xl font-semibold text-white">
            Your information
          </h2>

          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              <InputField
                id="firstName"
                placeholder="First name"
                icon={<User className="h-4 w-4" />}
                value={personalData.firstName}
                onChange={handlePersonalChange}
              />
              <InputField
                id="lastName"
                placeholder="Last name"
                icon={<User className="h-4 w-4" />}
                value={personalData.lastName}
                onChange={handlePersonalChange}
              />
            </div>
            <InputField
              id="email"
              type="email"
              placeholder="Email address"
              icon={<Mail className="h-4 w-4" />}
              value={personalData.email}
              onChange={handlePersonalChange}
            />
            <InputField
              id="phone"
              type="tel"
              placeholder="Phone number"
              icon={<Phone className="h-4 w-4" />}
              value={personalData.phone}
              onChange={handlePersonalChange}
            />
            <div className="relative">
              <textarea
                id="message"
                value={personalData.message}
                onChange={handlePersonalChange}
                placeholder="Your message"
                rows={4}
                className="w-full rounded-xl bg-[#694BE3] px-4 py-3 text-sm text-white outline-none placeholder:text-white/60 resize-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="h-11 rounded-xl bg-[#FF9E0C] font-semibold text-white hover:bg-[#e68f0a] transition-colors"
          >
            Send message
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
