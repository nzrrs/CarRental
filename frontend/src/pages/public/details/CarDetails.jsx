import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import AboutCar from "./AboutCar";
import AboutAgency from "./AboutAgency";
import SimilarCars from "./SimilarCars";
import CarSpecs from "./CarSpecs";
import SendMessage from "./SendMessage";
import Modal from "./Modal";
import { vehicles } from "../../../data/data";

export default function CarDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const vehicle = useMemo(
    () => vehicles.find((car) => String(car.id) === String(id)) || vehicles[0],
    [id],
  );

  return (
    <div className="relative">
      <div className="container grid grid-cols-1 gap-6 pt-6 lg:grid-cols-6 lg:gap-4 lg:pt-10">
        <div className="lg:col-span-4">
          <Carousel images={vehicle?.gallery} title={vehicle?.title} />
        </div>
        <div className="lg:col-span-2">
          <AboutCar vehicle={vehicle} setIsModalOpen={setIsModalOpen} />
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

      {/* MODAL COMPONENT  */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* background blur layer */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          {/* modal box */}
          <div className="relative z-10" onClick={(e) => e.stopPropagation()}>
            <Modal />
          </div>
        </div>
      )}
    </div>
  );
}
