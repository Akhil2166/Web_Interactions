"use client";

import { motion } from "framer-motion";
import { marqueeWords } from "@/lib/tokens";

export function Marquee() {
  const items = [...marqueeWords, ...marqueeWords];

  return (
    <section
      className="overflow-hidden border-y border-line/20 bg-black py-8"
      aria-label="Scrolling marquee"
    >
      <motion.div
        className="flex w-max gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 28,
            ease: "linear",
          },
        }}
      >
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="font-heading text-[clamp(48px,8vw,120px)] font-medium leading-none tracking-tight text-bg"
            style={{ letterSpacing: "-0.04em" }}
          >
            {word}
            <span className="mx-6 text-primary" aria-hidden>
              ·
            </span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
