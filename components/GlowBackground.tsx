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
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[500px] lg:w-[900px] lg:h-[700px] rounded-full bg-[#B8924A]/[0.18] blur-[80px] md:blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[40%] -right-[10%] w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-[#B8924A]/[0.1] blur-[60px] md:blur-[100px]"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-[10%] -left-[5%] w-[200px] h-[200px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#B8924A]/[0.1] blur-[60px] md:blur-[100px]"
      />
    </div>
  );
}