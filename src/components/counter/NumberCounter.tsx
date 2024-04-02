"use client";
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

interface NumberCounterProps {
  endValue: number;
  duration?: number;
}

const NumberCounter: React.FC<NumberCounterProps> = ({ endValue, duration = 3000 }) => {
  const [startValue, setStartValue] = useState<number>(() => {
    const storedValue = localStorage.getItem('counterValue');
    return storedValue ? parseFloat(storedValue) : 0;
  });

  useEffect(() => {
    if (startValue === endValue) return; // If startValue and endValue are equal, no need for animation

    const difference = endValue - startValue;
    const step = difference / (duration / 1000); // Calculate step per second
    let currentValue = startValue;

    const interval = setInterval(() => {
      currentValue += step;
      if ((step > 0 && currentValue >= endValue) || (step < 0 && currentValue <= endValue)) {
        clearInterval(interval);
        currentValue = endValue;
      }
      setStartValue(currentValue);
    }, 1000); // Run every second

    return () => clearInterval(interval);
  }, [startValue, endValue, duration]);

  useEffect(() => {
    localStorage.setItem('counterValue', startValue.toString());
  }, [startValue]);

  const { number } = useSpring({
    from: { number: startValue },
    to: { number: endValue },
    config: { duration },
  });

  return (
    <animated.div>
      {number.interpolate((val) => Math.floor(val))}
    </animated.div>
  );
};

export default NumberCounter;
