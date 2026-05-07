import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Destinations />

        {/* CTA Section */}
        <section className="py-28 px-6">
          <div className="max-w-4xl mx-auto rounded-3xl glass p-12 md:p-20 text-center border border-accent/20 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-accent/4 blur-[120px] -z-10" />
            <span className="tag-pill mb-6 inline-flex">Ready to explore?</span>
            <h2 className="text-4xl md:text-6xl font-playfair mb-6 leading-tight">
              Your next adventure <br />
              <span className="italic text-accent">starts here.</span>
            </h2>
            <p className="text-muted text-base mb-10 max-w-md mx-auto leading-relaxed">
              Join thousands of smart travellers who plan better, spend less, and experience more with RoamIQ.
            </p>
            <a
              href="/plan"
              className="inline-flex items-center gap-2.5 px-10 py-4 bg-accent text-bg rounded-xl text-lg font-bold hover:shadow-[0_0_40px_rgba(52,211,153,0.3)] transition-all syne"
            >
              Start Planning — It's Free
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
