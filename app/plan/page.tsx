import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlannerTabs from "@/components/PlannerTabs";

export default function PlanPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <span className="tag-pill mb-6 inline-flex">AI-Powered Planner</span>
          <h1 className="text-4xl md:text-6xl font-playfair mb-4 leading-tight">
            Build your perfect <span className="italic text-accent">escape.</span>
          </h1>
          <p className="text-muted max-w-lg mx-auto text-sm leading-relaxed">
            Use our quick-start form or chat with your RoamIQ AI assistant to craft an itinerary that fits you perfectly.
          </p>
        </div>

        <PlannerTabs />
      </main>
      <Footer />
    </>
  );
}
