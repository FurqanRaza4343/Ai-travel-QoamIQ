"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingOverlayProps {
  isVisible: boolean;
  onComplete: () => void;
}

const STEPS = [
  { msg: "Analysing your destination", icon: "🌍" },
  { msg: "Crafting your day-by-day itinerary", icon: "🗓️" },
  { msg: "Sourcing flights & stays", icon: "✈️" },
  { msg: "Compiling your travel checklist", icon: "✅" },
];

export default function LoadingOverlay({ isVisible, onComplete }: LoadingOverlayProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCurrentStep(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < STEPS.length - 1 ? prev + 1 : prev));
    }, 1000);

    const timeout = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/90 backdrop-blur-2xl"
        >
          <div className="text-center max-w-sm w-full px-8">
            {/* Spinner */}
            <div className="relative w-20 h-20 mx-auto mb-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-accent/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border-t-2 border-accent"
              />
              <div className="absolute inset-0 flex items-center justify-center text-xl">
                {STEPS[currentStep]?.icon}
              </div>
            </div>

            <p className="syne text-xs font-bold uppercase tracking-widest text-accent mb-8">
              RoamIQ is thinking…
            </p>

            <div className="space-y-3">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.msg}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: i <= currentStep ? 1 : 0.2,
                    x: 0,
                  }}
                  className={`flex items-center gap-3 text-sm ${
                    i === currentStep ? "text-text" : i < currentStep ? "text-muted" : "text-muted/30"
                  }`}
                >
                  <span className="text-base w-6 text-center">
                    {i < currentStep ? "✓" : i === currentStep ? "›" : "·"}
                  </span>
                  <span className={i === currentStep ? "font-semibold text-accent" : ""}>{step.msg}</span>
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-10 w-full h-0.5 bg-surface rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-accent/40 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
