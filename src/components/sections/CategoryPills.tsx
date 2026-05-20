"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { categoryColors } from "@/lib/tokens";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function CategoryPills() {
  return (
    <section className="bg-bg py-16 md:py-24" aria-label="Categories">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 font-body text-body-l text-text-secondary"
          >
            02 — Categories
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mb-10 font-heading text-h2 text-text-primary md:text-[28px]"
          >
            Filter by medium
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap gap-2"
          >
            {categoryColors.map((cat) => (
              <motion.button
                key={cat.label}
                variants={fadeUp}
                type="button"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="min-h-[44px] rounded-pill px-6 py-3 font-body text-body-l font-medium text-black transition-shadow duration-300 hover:shadow-low"
                style={{ backgroundColor: cat.color }}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
