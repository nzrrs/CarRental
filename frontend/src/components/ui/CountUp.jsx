import { useInView, useMotionValue, useSpring } from "motion/react";
import propTypes from "prop-types";
import { useEffect, useRef } from "react";

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  onStart,
  onEnd,
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
  });

  const isInView = useInView(ref, { once: true, margin: "0px" });


  const formatNumber = (num) => {
    const abs = Math.abs(num);

    if (abs >= 1_000_000)
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    if (abs >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "k";

    return num.toString();
  };

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === "function") onStart();

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === "down" ? from : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(
        () => {
          if (typeof onEnd === "function") onEnd();
        },
        delay * 1000 + duration * 1000,
      );

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [
    isInView,
    startWhen,
    motionValue,
    direction,
    from,
    to,
    delay,
    onStart,
    onEnd,
    duration,
  ]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const clean = Math.round(latest);
        ref.current.textContent = formatNumber(clean);
      }
    });

    return () => unsubscribe();
  }, [springValue]);

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatNumber(direction === "down" ? to : from);
    }
  }, [from, to, direction]);

  return <span className={className} ref={ref} />;
}

propTypes.any = propTypes.oneOfType([propTypes.string, propTypes.number]);

CountUp.propTypes = {
  to: propTypes.any.isRequired,
  from: propTypes.any,
  direction: propTypes.oneOf(["up", "down"]),
  delay: propTypes.number,
  duration: propTypes.number,
  className: propTypes.string,
  startWhen: propTypes.bool,
  onStart: propTypes.func,
  onEnd: propTypes.func,
};
