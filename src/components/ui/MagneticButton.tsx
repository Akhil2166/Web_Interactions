"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: "filled" | "accent" | "ghost";
};

export function MagneticButton({
  children,
  className,
  href = "#showcase",
  variant = "filled",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const variants = {
    ghost:
      "bg-transparent text-black rounded-[4px] px-0 py-1",
    filled:
      "bg-black text-white rounded-[24px] px-4 py-3 shadow-low",
    accent:
      "bg-primary text-white rounded-[24px] px-4 py-3",
  };

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "inline-flex min-h-[44px] items-center justify-center font-heading text-[24px] font-medium",
        variants[variant],
        className,
      )}
    >
      {children}
    </motion.a>
  );
}
