"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { testimonials } from "@/lib/tokens";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Testimonials() {
  return (
    <section
      className="bg-bg py-24 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 font-body text-body-l text-text-secondary"
          >
            04 — Voices
          </motion.p>
          <motion.h2
            id="testimonials-heading"
            variants={fadeUp}
            className="mb-12 font-heading text-hero-h3 text-text-primary"
          >
            What people say
          </motion.h2>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            {testimonials.map((t) => (
              <motion.blockquote
                key={t.author}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
                className="flex min-h-[220px] flex-col justify-between rounded-card bg-white p-8 shadow-low"
              >
                <p className="font-heading text-h3 leading-snug text-text-primary">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-8 font-body text-body-l text-text-secondary">
                  <cite className="not-italic text-text-primary">{t.author}</cite>
                  <span className="block">{t.role}</span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
