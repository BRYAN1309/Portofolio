// src/components/common/LoadingScreen.tsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 4; // increase faster
          if (next >= 100) {
            clearInterval(interval);
            setTimeout(() => setIsLoading(false), 500); // smooth fade
            return 100;
          }
          return next;
        });
      }, 100); // every 100ms → 100/4 * 100ms = 2.5s total
    }

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#E6E6E6]"
        >
          {/* Glowing circle */}
          <motion.div
            animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="absolute w-40 h-40 rounded-full bg-[#343434] opacity-10 blur-3xl"
          />

          {/* Title / Brand */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl font-bold tracking-wide"
            style={{ color: "#343434" }}
          >
            Bryan Thanaya Portfolio
          </motion.h1>

          {/* Percentage counter */}
          <motion.p
            key={progress}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="mt-4 text-lg font-semibold"
            style={{ color: "#343434" }}
          >
            {progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
