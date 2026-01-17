"use client";

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';

type AnimatedStatProps = {
  value: number;
};

export function AnimatedStat({ value }: AnimatedStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);

  useEffect(() => {
    if (isInView) {

      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });

      return () => controls.stop();
    }
  }, [isInView, value, count]);


  const displayValue = useMotionValue(count.get().toFixed(0));

  useEffect(() => {

    const unsubscribe = count.onChange((latest) => {
      displayValue.set(latest.toFixed(0));
    });
    return () => unsubscribe();
  }, [count, displayValue]);

  return (

    <motion.span ref={ref} className="text-2xl font-bold text-white">
      {displayValue}
    </motion.span>
  );
}