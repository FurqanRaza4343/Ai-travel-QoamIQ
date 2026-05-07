"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Zap, Shield } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const TRUST_BADGES = [
  { icon: Globe, label: "150+ Countries" },
  { icon: Zap, label: "Instant Plans" },
  { icon: Shield, label: "Privacy First" },
];

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 px-6 overflow-hidden">
      {/* Decorative corner element */}
      <div className="absolute top-32 right-8 md:right-24 w-px h-32 bg-gradient-to-b from-accent/40 to-transparent" />
      <div className="absolute top-32 right-8 md:right-24 w-8 h-px bg-gradient-to-r from-accent/40 to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto"
      >
        {/* Label */}
        <motion.div variants={item} className="mb-8">
          <span className="tag-pill">✦ AI-Powered Travel Intelligence</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-8xl font-playfair font-bold leading-[1.05] mb-8 max-w-4xl"
        >
          Your World,
          <br />
          <span className="italic gradient-text">Perfectly Planned.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-muted max-w-xl mb-12 leading-relaxed"
        >
          Tell RoamIQ where you want to go. Get a complete day-by-day itinerary, 
          curated hotels, flights, and smart packing lists — all in seconds.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-start gap-4 mb-16">
          <Link href="/plan">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 bg-accent text-bg rounded-xl text-base font-bold flex items-center gap-2.5 hover:shadow-[0_0_40px_rgba(52,211,153,0.3)] transition-all syne"
            >
              Plan My Trip <ArrowRight size={18} />
            </motion.button>
          </Link>
          <Link href="#destinations">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 glass text-text/80 rounded-xl text-base font-medium border border-accent/15 hover:border-accent/35 transition-all"
            >
              Explore Destinations
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={item}
          className="flex flex-wrap gap-6 items-center"
        >
          {/* Stats */}
          <div className="flex items-center gap-8 pr-8 border-r border-accent/15">
            <div>
              <p className="syne text-3xl font-bold text-accent">80K+</p>
              <p className="text-[10px] uppercase tracking-widest text-muted mt-0.5">Trips Planned</p>
            </div>
            <div>
              <p className="syne text-3xl font-bold text-accent">150+</p>
              <p className="text-[10px] uppercase tracking-widest text-muted mt-0.5">Countries</p>
            </div>
            <div>
              <p className="syne text-3xl font-bold text-accent">4.8★</p>
              <p className="text-[10px] uppercase tracking-widest text-muted mt-0.5">Avg Rating</p>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3">
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface/60 border border-accent/10 text-xs text-muted"
              >
                <Icon size={12} className="text-accent" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Floating mini card */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="hidden xl:block absolute right-16 top-48 glass p-5 rounded-2xl border border-accent/15 w-52 shadow-xl"
      >
        <p className="text-[9px] uppercase tracking-widest text-accent font-bold mb-3">Latest Plan</p>
        <p className="font-playfair text-lg font-bold mb-1">Kyoto, Japan</p>
        <p className="text-xs text-muted mb-4">7 days · ¥280,000</p>
        <div className="w-full h-1.5 bg-surface rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
        </div>
        <p className="text-[9px] text-muted mt-2">Plan ready in 4s</p>
      </motion.div>
    </section>
  );
}
