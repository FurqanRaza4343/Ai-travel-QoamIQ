"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/lib/constants";

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-4"
          >
            Built Different
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair leading-tight max-w-lg"
          >
            Everything your trip{" "}
            <span className="italic text-accent">deserves</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted text-sm max-w-xs leading-relaxed"
        >
          RoamIQ handles the logistics, so you can focus entirely on making memories.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-accent/5 rounded-3xl overflow-hidden border border-accent/10">
        {FEATURES.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ backgroundColor: "rgba(52, 211, 153, 0.03)" }}
            className="bg-bg p-8 flex flex-col items-start gap-5 glow-card transition-all relative"
          >
            {/* New tag */}
            {feature.tag === "New" && (
              <span className="absolute top-4 right-4 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/20">
                New
              </span>
            )}

            <div className={`w-12 h-12 rounded-2xl ${feature.color} border flex items-center justify-center text-2xl shadow-inner`}>
              {feature.icon}
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-widest text-muted mb-2">{feature.tag}</p>
              <h3 className="text-lg font-semibold text-text mb-2 syne">{feature.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
