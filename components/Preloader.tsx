"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const TypewriterText: React.FC<{ text: string; delay?: number }> = ({
  text,
  delay = 0,
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 50);

      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span>{displayedText}</span>;
};

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 7000);
  }, []);

  useEffect(() => {
    const loadingDuration = 7000; // total loading time in milliseconds
    const startTime = Date.now(); // record the start time

    const intervalId = setInterval(() => {
      const elapsedTime = Date.now() - startTime; // calculate elapsed time
      const newStep = Math.min(
        Math.floor((elapsedTime / loadingDuration) * 100),
        100
      ); // calculate percentage
      setStep(newStep); // update step

      if (newStep >= 100) {
        clearInterval(intervalId); // clear interval when loading is complete
      }
    }, 100); // update every 100 milliseconds

    return () => clearInterval(intervalId);
  }, [isLoading]);

  useEffect(() => {
    if (step === 100) {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, [step, router]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          <motion.div
            className="text-center space-y-6"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-3xl md:text-5xl text-white font-bold"
              variants={textVariants}
            >
              <TypewriterText text="Hey there! I'm Aj Fred" delay={2000} />
            </motion.h1>

            <motion.p
              className="text-xl md:text-3xl text-gray-300"
              variants={textVariants}
            >
              <TypewriterText text="And Welcome to my domain..." delay={3000} />
            </motion.p>

            <motion.p
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-300 absolute bottom-0 right-0 mb-4 mr-4"
              variants={textVariants}
            >
              <span>{step}%</span>
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
