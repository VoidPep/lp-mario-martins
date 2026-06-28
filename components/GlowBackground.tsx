"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function GlowBackground() {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-[#B8924A]/[0.18] blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#B8924A]/[0.1] blur-[100px]"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-[10%] -left-[5%] w-[500px] h-[500px] rounded-full bg-[#B8924A]/[0.1] blur-[100px]"
      />
    </div>
  );
}