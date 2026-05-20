"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "ghost" | "filled" | "accent";
  className?: string;
  href?: string;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "ghost",
  className,
  href,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex min-h-[44px] items-center justify-center font-heading text-btn font-medium transition-colors duration-300";

  const variants = {
    ghost:
      "bg-transparent text-black rounded-[4px] px-0 py-1 hover:text-primary",
    filled:
      "bg-black text-white rounded-[24px] px-3 py-2 hover:bg-[#333]",
    accent:
      "bg-primary text-white rounded-[24px] px-4 py-2 hover:opacity-90",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
