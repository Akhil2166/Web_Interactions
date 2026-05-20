"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      id="about"
      ref={ref}
      className="bg-bg py-24 md:py-40"
      aria-labelledby="about-heading"
    >
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8"
        >
          <motion.div variants={fadeUp} className="lg:col-span-4">
            <p className="font-body text-body-l text-text-secondary">
              03 — About
            </p>
            <h2
              id="about-heading"
              className="mt-4 font-heading text-hero-h4 text-text-primary md:text-[32px] md:leading-[34px]"
            >
              Editorial by design
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-8">
            <motion.p
              style={{ x }}
              className="font-heading text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-text-primary"
            >
              We believe the internet is still interesting. Fuse-inspired
              curation celebrates oversized type, soft motion, and the colors
              extracted from the real Fuse.kiwi system — not generic templates.
            </motion.p>
            <p className="mt-8 max-w-2xl font-body text-body-l leading-relaxed text-text-secondary">
              Built on a 2px spacing grid with Syne for headlines and Syne Mono
              for labels. Primary accent{" "}
              <span className="text-primary">#0000ff</span> drives interaction.
              Light canvas <span className="text-black">#f2f2f2</span> keeps
              focus on the work.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-line/30 pt-12 sm:grid-cols-3">
              {[
                { n: "240px", l: "Display type" },
                { n: "21", l: "CSS variables" },
                { n: "2px", l: "Base grid" },
              ].map((stat) => (
                <motion.div key={stat.l} variants={fadeUp}>
                  <p className="font-heading text-[32px] text-text-primary">
                    {stat.n}
                  </p>
                  <p className="mt-1 font-body text-body-l text-text-secondary">
                    {stat.l}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
