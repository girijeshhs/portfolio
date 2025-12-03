"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface StatCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export default function StatCounter({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  label,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [isInView, end, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setCount(Math.round(latest));
    });

    return () => unsubscribe();
  }, [springValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center p-6 bg-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-sm hover:border-violet-600 transition-colors"
    >
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-2">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-sm text-slate-400 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}
