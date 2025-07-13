"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";

const counterVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Reduced from 7000ms to 3000ms for faster loading
  }, []);

  useEffect(() => {
    const loadingDuration = 3000; // Reduced total loading time
    const startTime = Date.now();

    const intervalId = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newStep = Math.min(
        Math.floor((elapsedTime / loadingDuration) * 100),
        100
      );
      setStep(newStep);

      if (newStep === 99) {
        clearInterval(intervalId);

        // Pause at 98% for a second
        setTimeout(() => {
          setStep(100);
        }, 500);
      }
    }, 50); // Update more frequently for smoother counting

    return () => clearInterval(intervalId);
  }, [isLoading]);

  useEffect(() => {
    if (step === 100) {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, [step, router]);

  // Trigger confetti when the loader disappears
  useEffect(() => {
    if (!isLoading) {
      // Trigger confetti from left side
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { x: 0.1, y: 0.6 },
        scalar: 1.5,
        gravity: 1.2,
      });

      // Trigger confetti from right side
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { x: 0.9, y: 0.6 },
        scalar: 1.5,
        gravity: 1.2,
      });

      // Add a big bang effect
      confetti({
        particleCount: 200,
        spread: 180,
        startVelocity: 45,
        origin: { x: 0.5, y: 0.6 },
        gravity: 1,
        scalar: 2,
      });
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          <motion.div
            className="text-center"
            variants={counterVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-8xl md:text-9xl lg:text-[10rem] font-semibold font-fancy tracking-tighter text-white"
              key={step}
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {step}%
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
