"use client";

import PropTypes from "prop-types";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const PriceSlider = ({
  labelId = "price-range-label",
  value,
  min = 20,
  max = 200,
  onValueChange,
}) => {
  const isControlled = Array.isArray(value);
  const [internalValue, setInternalValue] = useState([min, max]);
  const sliderValue = isControlled ? value : internalValue;

  function handleChange(nextValue) {
    if (!isControlled) {
      setInternalValue(nextValue);
    }
    onValueChange?.(nextValue);
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <Slider
        aria-labelledby={labelId}
        id="price-range"
        max={max}
        min={min}
        onValueChange={handleChange}
        value={sliderValue}
      />
      <div className="flex items-center justify-between text-muted-foreground text-xs sm:text-sm">
        <span>${sliderValue?.[0] ?? min}</span>
        <span>${sliderValue?.[1] ?? max}</span>
      </div>
    </div>
  );
};

PriceSlider.propTypes = {
  labelId: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.number),
  min: PropTypes.number,
  max: PropTypes.number,
  onValueChange: PropTypes.func,
};

export default PriceSlider;
