import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-14 px-6 border-t border-accent/10 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center">
                <MapPin size={14} className="text-accent" />
              </div>
              <span className="text-lg syne font-bold text-text">
                Roam<span className="text-accent">IQ</span>
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Smart AI travel planning for modern explorers. Build your perfect trip in seconds.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-accent/70 syne">Product</p>
              <Link href="/plan" className="block text-muted hover:text-accent transition-colors">Plan a Trip</Link>
              <Link href="/#features" className="block text-muted hover:text-accent transition-colors">Features</Link>
              <Link href="/#destinations" className="block text-muted hover:text-accent transition-colors">Destinations</Link>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-accent/70 syne">Company</p>
              <Link href="/about" className="block text-muted hover:text-accent transition-colors">About Us</Link>
              <Link href="/contact" className="block text-muted hover:text-accent transition-colors">Contact</Link>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-accent/70 syne">Legal</p>
              <Link href="/privacy" className="block text-muted hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block text-muted hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-accent/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted/60">
            © {new Date().getFullYear()} RoamIQ. All rights reserved.
          </p>
          <p className="text-xs text-muted/40">
            Built with AI · Powered by curiosity
          </p>
        </div>
      </div>
    </footer>
  );
}
