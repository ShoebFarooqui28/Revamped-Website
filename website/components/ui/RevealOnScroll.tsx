"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const RevealOnScroll = ({
  children,
  delay = 0.1,
  duration = 0.6,
  className = "",
}: RevealOnScrollProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
