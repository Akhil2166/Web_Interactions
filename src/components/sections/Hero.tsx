"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/motion";

const floatingOrbs = [
  { color: "var(--illustration)", size: 120, x: "8%", y: "18%", delay: 0 },
  { color: "var(--photo)", size: 80, x: "78%", y: "12%", delay: 0.2 },
  { color: "var(--type)", size: 64, x: "85%", y: "55%", delay: 0.4 },
  { color: "var(--graphic)", size: 48, x: "12%", y: "62%", delay: 0.3 },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-bg pt-6 pb-24"
      aria-label="Hero"
    >
      <Container className="relative z-10">
        <motion.nav
          className="mb-16 flex items-center justify-between font-body text-body-l"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-heading text-h3 text-text-primary">Fuse</span>
          <div className="flex items-center gap-6">
            <a href="#showcase" className="hover:text-primary transition-colors">
              Explore
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <MagneticButton variant="filled" href="#showcase">
              Start
            </MagneticButton>
          </div>
          <MagneticButton variant="filled" href="#showcase" className="sm:hidden">
            Start
          </MagneticButton>
        </motion.nav>

        <motion.div style={{ y, opacity }} className="relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 font-body text-body-l uppercase tracking-widest text-text-secondary"
            >
              Curated creative discovery
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-display text-text-primary"
            >
              Interesting
              <br />
              Internet
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="mt-2 flex flex-wrap items-end gap-4 md:gap-8"
            >
              <span
                className="font-heading text-[clamp(48px,10vw,240px)] font-medium leading-none tracking-tight text-illustration"
                style={{ letterSpacing: "-0.04em" }}
              >
                illustration
              </span>
              <span className="mb-4 max-w-xs font-body text-body-l text-text-secondary md:mb-8">
                A typography-first index of the weird, wonderful, and worth
                bookmarking.
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <MagneticButton variant="accent" href="#showcase">
                Browse collection
              </MagneticButton>
              <Button variant="ghost" href="#about">
                Read manifesto →
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full blur-[1px]"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: orb.color,
          }}
          animate={{
            y: [0, -16, 0],
            x: [0, i % 2 === 0 ? 8 : -8, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      <motion.div
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 font-body text-body-l text-text-secondary"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Scroll
      </motion.div>
    </section>
  );
}
