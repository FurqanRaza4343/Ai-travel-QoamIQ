import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-28 pb-20 px-6 max-w-4xl mx-auto">
        <span className="tag-pill mb-8 inline-flex">Our Story</span>
        <h1 className="text-5xl md:text-7xl font-playfair mb-12 leading-tight">
          About <span className="italic text-accent">RoamIQ</span>
        </h1>

        <div className="space-y-8 text-base text-muted leading-relaxed">
          <p>
            RoamIQ was built on a single idea: travel planning should feel as exciting as the trip itself.
            We combined advanced AI reasoning with real-world travel data to give every explorer a
            world-class personal concierge — available instantly, at no cost.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
            <div className="p-8 rounded-2xl bg-surface border border-accent/10 glow-card">
              <h3 className="text-accent syne text-sm font-bold mb-3 uppercase tracking-widest">Our Mission</h3>
              <p className="text-sm leading-relaxed">
                To democratise bespoke travel — making truly personalised, intelligent trip planning
                accessible to every curious mind, regardless of budget or experience.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-surface border border-accent2/10 glow-card">
              <h3 className="text-accent2 syne text-sm font-bold mb-3 uppercase tracking-widest">Our Tech</h3>
              <p className="text-sm leading-relaxed">
                We leverage state-of-the-art language models and live travel data feeds to generate
                accurate, current, and deeply personal itineraries at lightning speed.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-playfair text-text mt-12 mb-4">Designed for Modern Explorers</h2>
          <p>
            Whether you are chasing street food in Ho Chi Minh City, sunrise hikes in Patagonia, or
            quiet canal-side mornings in Amsterdam — RoamIQ understands your style, respects your
            budget, and builds itineraries that feel genuinely handcrafted.
          </p>

          <div className="mt-16 p-10 rounded-3xl glass border border-accent/15 text-center">
            <p className="text-4xl font-playfair mb-3">Ready to explore?</p>
            <p className="text-muted text-sm mb-6">Start planning your next trip in under 30 seconds.</p>
            <a
              href="/plan"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-bg rounded-xl font-bold text-sm hover:shadow-[0_0_30px_rgba(52,211,153,0.3)] transition-all syne"
            >
              Plan My Trip
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
