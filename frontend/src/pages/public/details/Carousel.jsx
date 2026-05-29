import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const fallbackImages = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=1400&auto=format&fit=crop",
];

export default function Carousel({ images, title }) {
  const gallery = useMemo(() => (Array.isArray(images) && images.length ? images : fallbackImages), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryLength = Math.max(gallery.length, 1);
  const currentIndex = activeIndex % galleryLength;

  useEffect(() => {
    if (galleryLength <= 1) {
      return undefined;
    }

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryLength);
    }, 5000);

    return () => clearInterval(timer);
  }, [galleryLength]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + galleryLength) % galleryLength);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryLength);
  };

  return (
    <div className="h-full">
      <div className="relative h-65 overflow-hidden rounded-2xl bg-[#F5F5F5] sm:h-80 lg:h-105">
        <img
          src={gallery[currentIndex]}
          alt={`${title || "Car"} ${currentIndex + 1}`}
          className="h-full w-full object-cover"
        />
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1F1F1F] hover:bg-white"
          aria-label="Previous image"
        >
          <FiChevronLeft />
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1F1F1F] hover:bg-white"
          aria-label="Next image"
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="mt-4 grid grid-cols-3  gap-3 sm:grid-cols-5">
        {gallery.map((img, index) => (
          <button
            key={`${img}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`overflow-hidden rounded-xl border-2 ${
              currentIndex === index ? "border-[#5937E0]" : "border-transparent"
            }`}
          >
            <img
              src={img}
              alt={`${title || "Car"} thumbnail ${index + 1}`}
              className="h-16 w-full object-cover sm:h-16"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

Carousel.defaultProps = {
  images: undefined,
  title: "Car",
};
