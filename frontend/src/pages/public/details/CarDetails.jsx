import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import AboutCar from "./AboutCar";
import AboutAgency from "./AboutAgency";
import SimilarCars from "./SimilarCars";
import CarSpecs from "./CarSpecs";
import SendMessage from "./SendMessage";
import { vehicles } from "../../../data/data";

export default function CarDetails() {
  const { id } = useParams();
  const vehicle = useMemo(() => vehicles.find((car) => String(car.id) === String(id)) || vehicles[0], [id]);

  return (
    <>
      <div className="container grid grid-cols-1 gap-6 pt-6 lg:grid-cols-6 lg:gap-4 lg:pt-10">
        <div className="lg:col-span-4">
          <Carousel images={vehicle?.gallery} title={vehicle?.title} />
        </div>
        <div className="lg:col-span-2">
          <AboutCar vehicle={vehicle} />
        </div>
        <div className="lg:col-span-4">
          <CarSpecs vehicle={vehicle} />
        </div>
        <div className="lg:col-span-2 flex h-full flex-col gap-4">
          <div className="flex-none lg:flex-2">
            <AboutAgency vehicle={vehicle} />
          </div>
          <div className="flex-none lg:flex-1">
            <SendMessage agency={vehicle?.agency} />
          </div>
        </div>
      </div>

      <div className="container mt-10 pb-10">
        <SimilarCars vehicle={vehicle} vehicles={vehicles} />
      </div>
    </>
  );
}
