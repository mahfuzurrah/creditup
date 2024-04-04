"use client";
import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";

interface NumberCounterProps {
  endValue: number;
  duration?: number;
  initialValue?: number; // Optional initial value
}

const NumberCounter: React.FC<NumberCounterProps> = ({
  endValue,
  duration = 3000,
  initialValue = 0,
}) => {
  const [startValue, setStartValue] = useState<number>(initialValue);

  useEffect(() => {
    let intervalRef: ReturnType<typeof setInterval> | null = null;

    if (typeof window !== "undefined") {
      const step = (endValue - startValue) / (duration / 1000);
      intervalRef = setInterval(() => {
        setStartValue((prevValue) => {
          if (
            (step > 0 && prevValue >= endValue) ||
            (step < 0 && prevValue <= endValue)
          ) {
            clearInterval(intervalRef!);
            return endValue;
          }
          return prevValue + step;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef) clearInterval(intervalRef);
    };
  }, [startValue, endValue, duration]);

  const { number } = useSpring({
    from: { number: startValue },
    to: { number: endValue },
    config: { duration },
  });

  return <animated.div>{number.to((val) => Math.floor(val))}</animated.div>;
};

export default NumberCounter;
