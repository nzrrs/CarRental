"use client";

import PropTypes from "prop-types";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const PriceSlider = ({ labelId = "price-range-label" }) => {
  const [value, setValue] = useState([20, 200]);

  return (
    <div className="flex w-full flex-col gap-3">
      <Slider
        aria-labelledby={labelId}
        id="price-range"
        max={200}
        min={20}
        onValueChange={setValue}
        value={value}
      />
      <div className="flex items-center justify-between text-muted-foreground text-xs sm:text-sm">
        <span>${value[0]}</span>
        <span>${value[1]}</span>
      </div>
    </div>
  );
};

PriceSlider.propTypes = {
  labelId: PropTypes.string,
};

export default PriceSlider;
