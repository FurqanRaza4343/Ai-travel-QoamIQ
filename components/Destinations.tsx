"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DESTINATIONS } from "@/lib/constants";
import Image from "next/image";

export default function Destinations() {
  return (
    <section id="destinations" className="py-28 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4"
          >
            Curated Destinations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-playfair leading-tight"
          >
            Places worth <span className="italic text-accent">every mile.</span>
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/plan"
            className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors flex items-center gap-2 group syne"
          >
            See all <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
        {DESTINATIONS.map((dest, i) => (
          <motion.div
            key={dest.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
              dest.size === "tall" ? "lg:row-span-2" : ""
            }`}
          >
            <Image
              src={dest.image}
              alt={dest.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-108"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/10 to-bg/85 opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
            <div className={`absolute inset-0 bg-gradient-to-t ${dest.gradient} mix-blend-overlay opacity-30`} />

            {/* Top tag */}
            <div className="absolute top-5 left-5 z-10">
              <span className="tag-pill">{dest.tag}</span>
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-7 flex flex-col justify-end z-10">
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent mb-1 group-hover:translate-x-1.5 transition-transform duration-400">
                {dest.country}
              </p>
              <h3 className="text-4xl font-playfair font-bold mb-1 group-hover:translate-x-1.5 transition-transform duration-400 delay-50">
                {dest.name}
              </h3>
              <p className="text-xs text-text/60 mb-4 group-hover:translate-x-1.5 transition-transform duration-400 delay-75">
                {dest.desc}
              </p>
              <Link
                href={`/plan?dest=${dest.id}`}
                className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-400 delay-100 text-accent"
              >
                Plan this trip <ArrowUpRight size={12} />
              </Link>
            </div>

            {/* Border glow */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-accent/20 rounded-3xl transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
