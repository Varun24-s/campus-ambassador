"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Rocket {
  id: number;
  size: number;
  startX: number;
  startY: number;
  delay: number;
}

export default function LoaderDash() {
  const [rockets, setRockets] = useState<Rocket[]>([]);

  useEffect(() => {
    const r: Rocket[] = Array.from({ length: 5 }).map((_, idx) => ({
      id: idx,
      size: 15 + Math.random() * 10,
      startX: Math.random() * 300 - 150,
      startY: Math.random() * 200 - 100,
      delay: Math.random() * 2,
    }));
    setRockets(r);
  }, []);

  return (
    <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Orbiting ambassador badges */}
      {Array.from({ length: 8 }).map((_, idx) => {
        const radius = 60 + idx * 15;
        return (
          <motion.div
            key={idx}
            className="absolute rounded-full bg-yellow-400 shadow-xl"
            style={{ width: 12, height: 12 }}
            animate={{ rotate: [0, 360] }}
            transition={{
              repeat: Infinity,
              duration: 4 + idx * 0.5,
              ease: "linear",
            }}
          >
            <motion.div
              className="absolute rounded-full bg-yellow-500"
              style={{ width: 12, height: 12, top: -radius, left: -6 }}
              animate={{ rotate: [0, 360] }}
              transition={{
                repeat: Infinity,
                duration: 4 + idx * 0.5,
                ease: "linear",
              }}
            />
          </motion.div>
        );
      })}

      {/* Zooming task rockets */}
      {rockets.map((rocket) => (
        <motion.div
          key={rocket.id}
          className="absolute rounded-full bg-yellow-300 shadow-lg"
          style={{
            width: rocket.size,
            height: rocket.size,
            top: "50%",
            left: "50%",
          }}
          animate={{
            x: [
              rocket.startX,
              rocket.startX + Math.random() * 200 - 100,
              rocket.startX,
            ],
            y: [
              rocket.startY,
              rocket.startY + Math.random() * 200 - 100,
              rocket.startY,
            ],
            rotate: [0, 360],
            scale: [1, 1.8, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + rocket.delay,
            ease: "easeInOut",
            delay: rocket.delay,
          }}
        />
      ))}
    </div>
  );
}
