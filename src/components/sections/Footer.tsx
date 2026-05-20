"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp } from "@/lib/motion";

const links = [
  { label: "Explore", href: "#showcase" },
  { label: "About", href: "#about" },
  { label: "Submit", href: "#" },
  { label: "Twitter", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-black text-bg">
      <Container className="py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="mb-8 font-body text-body-l text-visited">
            Inspired by Fuse.kiwi — built with extracted tokens
          </p>

          <h2
            className="text-display text-bg"
            style={{ fontSize: "clamp(64px, 14vw, 200px)" }}
          >
            Interesting
            <br />
            Internet
          </h2>

          <nav
            className="mt-12 flex flex-wrap gap-6 border-t border-line/40 pt-8 font-body text-body-l"
            aria-label="Footer"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="min-h-[44px] inline-flex items-center text-visited transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="mt-12 font-body text-body-l text-line">
            © {new Date().getFullYear()} Fuse-inspired studio. All rights
            reserved.
          </p>
        </motion.div>
      </Container>
    </footer>
  );
}
