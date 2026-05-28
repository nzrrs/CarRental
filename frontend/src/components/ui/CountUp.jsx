import { useInView, useMotionValue, useSpring } from "motion/react";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export function CountUp({
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
        const numeric = typeof latest === "number" ? latest : Number.parseFloat(String(latest));
        const clean = Number.isFinite(numeric) ? Math.round(numeric) : 0;
        ref.current.textContent = formatNumber(clean);
      }
    });

    return () => unsubscribe();
  }, [springValue]);

  useEffect(() => {
    if (ref.current) {
      const startValue = Number(direction === "down" ? to : from);
      ref.current.textContent = formatNumber(Number.isFinite(startValue) ? startValue : 0);
    }
  }, [from, to, direction]);

  return <span className={className} ref={ref} />;
}

const numberLike = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

CountUp.propTypes = {
  to: numberLike.isRequired,
  from: numberLike,
  direction: PropTypes.oneOf(["up", "down"]),
  delay: PropTypes.number,
  duration: PropTypes.number,
  className: PropTypes.string,
  startWhen: PropTypes.bool,
  onStart: PropTypes.func,
  onEnd: PropTypes.func,
};
