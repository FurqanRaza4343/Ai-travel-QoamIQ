"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink, Bot, Zap, MapPin, Users, Calendar,
  MessageSquare, ChevronRight, Plane, CheckCircle,
  Wallet, ShieldCheck, Sparkles, ArrowUpRight, Clock, Hotel
} from "lucide-react";
import LoadingOverlay from "./LoadingOverlay";
import { MOCK_PLAN } from "@/lib/constants";

const STYLES = ["Adventure", "Relaxation", "Culture", "Food", "Luxury", "Budget"];

export default function PlannerTabs() {
  const [activeTab, setActiveTab] = useState<"ai" | "form">("form");
  const [isLoading, setIsLoading] = useState(false);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [budget, setBudget] = useState(5000);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [destination, setDestination] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const dest = params.get("dest");
      if (dest) {
        setDestination(dest.charAt(0).toUpperCase() + dest.slice(1));
      }
    }
  }, []);

  const toggleStyle = (style: string) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setIsResultVisible(true);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12">
      <LoadingOverlay isVisible={isLoading} onComplete={handleLoadingComplete} />

      {/* Tab Switcher */}
      <div className="flex p-1 bg-surface/60 rounded-xl mb-12 w-fit mx-auto border border-accent/10">
        <button
          onClick={() => setActiveTab("form")}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all syne ${
            activeTab === "form"
              ? "bg-accent text-bg shadow-lg"
              : "text-muted hover:text-text"
          }`}
        >
          <Zap size={16} /> Quick Planner
        </button>
        <button
          onClick={() => setActiveTab("ai")}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all syne ${
            activeTab === "ai"
              ? "bg-accent text-bg shadow-lg"
              : "text-muted hover:text-text"
          }`}
        >
          <Bot size={16} /> AI Assistant
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "ai" ? (
          <motion.div
            key="ai"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full"
          >
            <div className="glass p-12 md:p-20 rounded-3xl border border-accent/10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 blur-[120px] -z-10" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent2/5 blur-[120px] -z-10" />

              <div className="w-20 h-20 bg-gradient-to-br from-accent/80 to-accent2/80 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(52,211,153,0.25)]">
                <Bot size={40} className="text-bg" />
              </div>

              <h2 className="text-4xl md:text-5xl font-playfair mb-5 leading-tight">
                Meet your <span className="italic text-accent">RoamIQ Assistant</span>
              </h2>
              <p className="text-muted text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Have a real conversation about your dream trip. Our AI agent adapts to your vibe,
                budget, and interests to craft an itinerary that feels truly yours.
              </p>

              <div className="flex flex-col items-center gap-5">
                <a
                  href="https://opal.google/app/19TbGtN_9orsDYe9H32SZGxmViLMnMy0v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-10 py-4 bg-accent text-bg rounded-xl text-lg font-bold flex items-center gap-3 hover:scale-105 hover:shadow-[0_0_40px_rgba(52,211,153,0.35)] transition-all duration-300 syne"
                >
                  Launch AI Assistant <Sparkles size={18} className="group-hover:animate-pulse" />
                </a>
                <div className="flex items-center gap-2 text-xs text-muted/50 uppercase tracking-widest font-bold">
                  <ShieldCheck size={13} /> Secure · Private · Free to try
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-accent/8 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div>
                  <p className="text-accent font-bold text-sm mb-2 syne">Conversational</p>
                  <p className="text-xs text-muted leading-relaxed">Chat naturally about your preferences and refine your plan in real-time.</p>
                </div>
                <div>
                  <p className="text-accent2 font-bold text-sm mb-2 syne">Live Data</p>
                  <p className="text-xs text-muted leading-relaxed">Access real-time flight prices, hotel availability, and local event info.</p>
                </div>
                <div>
                  <p className="text-accent3 font-bold text-sm mb-2 syne">Truly Personal</p>
                  <p className="text-xs text-muted leading-relaxed">Learns your travel style to surface hidden gems you'd never find alone.</p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full"
          >
            {isResultVisible ? (
              /* ── RESULT VIEW ── */
              <div className="space-y-10">
                {/* Header */}
                <div className="glass p-8 rounded-3xl border border-accent/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent via-accent2 to-accent3" />
                  <div>
                    <p className="tag-pill mb-3">Plan Ready</p>
                    <h2 className="text-3xl md:text-4xl font-playfair mb-2">
                      Your trip to{" "}
                      <span className="italic text-accent">{destination || "the world"}</span>
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted font-medium">
                      <span className="flex items-center gap-1.5"><Users size={12} className="text-accent" /> 2 Travelers</span>
                      <span className="opacity-30">·</span>
                      <span className="flex items-center gap-1.5"><Calendar size={12} className="text-accent" /> 7 Days</span>
                      <span className="opacity-30">·</span>
                      <span className="flex items-center gap-1.5"><Wallet size={12} className="text-accent" /> ${budget.toLocaleString()} Budget</span>
                    </div>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <button
                      onClick={() => setIsResultVisible(false)}
                      className="px-5 py-2.5 glass rounded-xl text-sm font-semibold border border-accent/15 hover:border-accent/30 transition-all"
                    >
                      Edit
                    </button>
                    <a
                      href="https://opal.google/app/19TbGtN_9orsDYe9H32SZGxmViLMnMy0v"
                      target="_blank"
                      className="px-5 py-2.5 bg-accent text-bg rounded-xl text-sm font-semibold flex items-center gap-2 syne"
                    >
                      Refine with AI <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Itinerary */}
                  <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-xl font-playfair flex items-center gap-2.5">
                      <MapPin size={18} className="text-accent" /> Day-by-Day Itinerary
                    </h3>
                    {MOCK_PLAN.itinerary.map((day) => (
                      <motion.div
                        key={day.day}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: day.day * 0.1 }}
                        className="glass rounded-2xl p-7 border border-accent/8 glow-card group"
                      >
                        <div className="flex items-center justify-between mb-5">
                          <span className="syne text-accent text-2xl font-bold tracking-widest">DAY {day.day}</span>
                          <span className="px-3 py-1 bg-surface/60 rounded-full text-[9px] font-bold uppercase tracking-widest border border-accent/10">
                            {day.spend}
                          </span>
                        </div>
                        <h4 className="text-xl font-playfair font-bold mb-5 group-hover:text-accent transition-colors">{day.title}</h4>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                          {[
                            { label: "Morning", text: day.morning, color: "text-accent/70" },
                            { label: "Afternoon", text: day.afternoon, color: "text-accent2/70" },
                            { label: "Evening", text: day.evening, color: "text-accent3/70" },
                          ].map(({ label, text, color }) => (
                            <div key={label}>
                              <p className={`text-[9px] font-bold uppercase tracking-widest ${color} flex items-center gap-1.5 mb-2`}>
                                <Clock size={10} /> {label}
                              </p>
                              <p className="text-xs text-muted leading-relaxed">{text}</p>
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-5 border-t border-accent/8">
                          <div className="flex items-start gap-3 p-4 bg-surface/40 rounded-xl border border-accent/8">
                            <Sparkles size={15} className="text-accent shrink-0 mt-0.5" />
                            <p className="text-xs text-muted leading-relaxed">
                              <span className="font-semibold text-text">Pro Tip: </span>{day.tips}
                            </p>
                          </div>
                          <div className="flex items-start gap-3 p-4 bg-surface/40 rounded-xl border border-accent/8">
                            <CheckCircle size={15} className="text-accent2 shrink-0 mt-0.5" />
                            <p className="text-xs text-muted leading-relaxed">
                              <span className="font-semibold text-text">Dining: </span>
                              {day.lunch} · {day.dinner}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-10">
                    {/* Hotels */}
                    <div>
                      <h3 className="text-xl font-playfair flex items-center gap-2.5 mb-5">
                        <Hotel size={18} className="text-accent" /> Recommended Stays
                      </h3>
                      <div className="space-y-3">
                        {MOCK_PLAN.bookings.hotels.map((hotel, i) => (
                          <div key={i} className="glass p-5 rounded-2xl border border-accent/8 glow-card cursor-pointer">
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="font-semibold text-sm">{hotel.name}</h5>
                              <span className="text-accent text-xs">{"★".repeat(Math.floor(hotel.stars))}</span>
                            </div>
                            <p className="text-[10px] text-muted mb-3 leading-relaxed">{hotel.reason}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-xs font-bold text-accent">{hotel.price}</span>
                              <span className="text-[10px] text-accent/70 flex items-center gap-1 hover:text-accent transition-colors">
                                View <ArrowUpRight size={10} />
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Flights */}
                    <div>
                      <h3 className="text-xl font-playfair flex items-center gap-2.5 mb-5">
                        <Plane size={18} className="text-accent" /> Flight Options
                      </h3>
                      <div className="glass rounded-2xl border border-accent/8 overflow-hidden">
                        {MOCK_PLAN.bookings.flights.map((flight, i) => (
                          <div
                            key={i}
                            className="p-4 flex items-center justify-between text-xs border-b border-accent/5 last:border-0 hover:bg-accent/5 transition-colors cursor-pointer"
                          >
                            <div>
                              <p className="font-semibold mb-0.5">{flight.airline}</p>
                              <p className="text-muted text-[10px]">{flight.duration} · {flight.type}</p>
                            </div>
                            <span className="font-bold text-accent">{flight.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Checklist */}
                    <div>
                      <h3 className="text-xl font-playfair flex items-center gap-2.5 mb-5">
                        <ShieldCheck size={18} className="text-accent" /> Pre-Trip Checklist
                      </h3>
                      <div className="space-y-2.5">
                        {MOCK_PLAN.checklist.map((item, i) => (
                          <div key={i} className="flex gap-4 p-4 glass rounded-xl border border-accent/8 hover:bg-accent/5 transition-all">
                            <span className="text-lg shrink-0">{item.icon}</span>
                            <div>
                              <p className="text-xs font-semibold text-text mb-0.5">{item.title}</p>
                              <p className="text-[10px] text-muted leading-relaxed">{item.content}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="text-center py-16 border-t border-accent/8">
                  <h4 className="text-3xl font-playfair mb-4">Want to adjust anything?</h4>
                  <p className="text-muted mb-8 max-w-md mx-auto text-sm">Change the dates, budget, or travel style and we'll rebuild your plan in seconds.</p>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => setIsResultVisible(false)}
                      className="px-8 py-3 bg-accent text-bg rounded-xl font-bold hover:shadow-[0_0_30px_rgba(52,211,153,0.3)] transition-all syne"
                    >
                      Regenerate Plan
                    </button>
                    <button
                      onClick={() => setActiveTab("ai")}
                      className="px-8 py-3 glass rounded-xl font-bold border border-accent/15 hover:border-accent/30 transition-all"
                    >
                      Talk to AI
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* ── FORM VIEW ── */
              <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-3xl border border-accent/10 space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Left */}
                  <div className="space-y-8">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-muted font-bold mb-3 flex items-center gap-2">
                        <MapPin size={12} className="text-accent" /> Destination
                      </label>
                      <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="e.g. Kyoto, Lisbon, Cape Town…"
                        className="w-full bg-surface/60 border border-accent/15 rounded-xl px-5 py-3.5 focus:border-accent outline-none text-text placeholder:text-muted/50 transition-all text-sm"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-muted font-bold mb-3 flex items-center gap-2">
                          <Users size={12} className="text-accent" /> Travelers
                        </label>
                        <input
                          type="number"
                          min="1"
                          defaultValue="2"
                          className="w-full bg-surface/60 border border-accent/15 rounded-xl px-5 py-3.5 focus:border-accent outline-none text-text transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-muted font-bold mb-3 flex items-center gap-2">
                          <Calendar size={12} className="text-accent" /> Days
                        </label>
                        <input
                          type="number"
                          min="1"
                          defaultValue="7"
                          className="w-full bg-surface/60 border border-accent/15 rounded-xl px-5 py-3.5 focus:border-accent outline-none text-text transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-muted font-bold mb-3 flex items-center gap-2">
                        <Zap size={12} className="text-accent" /> Travel Style
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {STYLES.map((style) => (
                          <button
                            key={style}
                            type="button"
                            onClick={() => toggleStyle(style)}
                            className={`px-4 py-2 rounded-lg text-[10px] font-bold border transition-all uppercase tracking-widest syne ${
                              selectedStyles.includes(style)
                                ? "bg-accent border-accent text-bg"
                                : "border-accent/15 text-muted hover:border-accent/40"
                            }`}
                          >
                            {style}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-[10px] uppercase tracking-widest text-muted font-bold">
                          Total Budget (USD)
                        </label>
                        <span className="syne text-2xl font-bold text-accent">${budget.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="500"
                        max="20000"
                        step="500"
                        value={budget}
                        onChange={(e) => setBudget(parseInt(e.target.value))}
                        className="w-full accent-accent bg-surface h-1 rounded-full appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between mt-2 text-[9px] text-muted font-bold uppercase tracking-tighter">
                        <span>$500</span>
                        <span>$10,000</span>
                        <span>$20,000+</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-muted font-bold mb-3 flex items-center gap-2">
                        <MessageSquare size={12} className="text-accent" /> Special Requests
                      </label>
                      <textarea
                        rows={6}
                        placeholder="Describe your ideal trip… (e.g. 'I love photography, local markets, and quiet mornings by the water.')"
                        className="w-full bg-surface/60 border border-accent/15 rounded-xl px-5 py-3.5 focus:border-accent outline-none text-text placeholder:text-muted/50 transition-all resize-none text-sm"
                      />
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01, y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full py-5 bg-accent text-bg rounded-2xl text-lg font-bold flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(52,211,153,0.3)] transition-all syne"
                >
                  Generate My Itinerary <ChevronRight size={22} />
                </motion.button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
