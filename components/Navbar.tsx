"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full glass border-b border-accent/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center group-hover:bg-accent/25 transition-all">
            <MapPin size={16} className="text-accent" />
          </div>
          <span className="text-xl syne font-800 tracking-tight text-text">
            Roam<span className="text-accent">IQ</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/plan"
            className="text-sm font-medium text-text/70 hover:text-accent transition-colors duration-200"
          >
            Plan Trip
          </Link>
          <Link
            href="/#destinations"
            className="text-sm font-medium text-text/70 hover:text-accent transition-colors duration-200"
          >
            Destinations
          </Link>
          <Link
            href="/#features"
            className="text-sm font-medium text-text/70 hover:text-accent transition-colors duration-200"
          >
            Features
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-text/70 hover:text-accent transition-colors duration-200"
          >
            About
          </Link>
        </div>

        <Link href="/plan">
          <motion.button
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="px-5 py-2.5 bg-accent text-bg rounded-lg text-sm font-semibold hover:shadow-[0_0_20px_rgba(52,211,153,0.35)] transition-all syne"
          >
            Start Free
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
}
