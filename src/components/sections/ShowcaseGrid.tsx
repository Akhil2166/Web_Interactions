"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { showcaseItems } from "@/lib/tokens";
import { fadeUp, staggerContainer } from "@/lib/motion";

function ShowcaseCard({
  title,
  category,
  color,
  span,
  aspect,
  index,
}: (typeof showcaseItems)[number] & { index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(py * -8);
    rotateY.set(px * 8);
    x.set(px * 12);
    y.set(py * 12);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href="#"
      onMouseMove={handleMove}
      onMouseLeave={reset}
      variants={fadeUp}
      custom={index}
      className={`group relative block overflow-hidden rounded-card shadow-low ${span}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{ x, y }}
        className={`relative ${aspect} w-full overflow-hidden`}
      >
        <motion.div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          style={{ background: color }}
        />
        <motion.div
          className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10"
        />
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-6 md:p-8"
          initial={false}
        >
          <span className="mb-2 inline-block w-fit rounded-pill bg-white/90 px-3 py-1 font-body text-body-l text-black">
            {category}
          </span>
          <h3 className="font-heading text-hero-h3 text-white mix-blend-difference">
            {title}
          </h3>
          <p className="mt-2 max-w-sm translate-y-4 font-body text-body-l text-white/0 transition-all duration-500 group-hover:translate-y-0 group-hover:text-white/90">
            Immersive preview — hover to reveal
          </p>
        </motion.div>
      </motion.div>
    </motion.a>
  );
}

export function ShowcaseGrid() {
  return (
    <section
      id="showcase"
      className="bg-bg py-24 md:py-32"
      aria-labelledby="showcase-heading"
    >
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-body text-body-l text-text-secondary">
                01 — Showcase
              </p>
              <h2
                id="showcase-heading"
                className="mt-2 font-heading text-[clamp(40px,6vw,48px)] font-medium leading-[56px] text-text-primary"
              >
                Selected works
              </h2>
            </div>
            <p className="max-w-md font-body text-body-l text-text-secondary">
              Asymmetrical grid with cinematic hover states. Each tile uses
              extracted category colors from Fuse.kiwi.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 gap-2 md:grid-cols-12 md:auto-rows-[minmax(180px,auto)] md:gap-2"
            style={{ perspective: 1200 }}
          >
            {showcaseItems.map((item, i) => (
              <ShowcaseCard key={item.title} {...item} index={i} />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
