import {
  Layers,
  Droplets,
  Building2,
  ShieldCheck,
  Brain,
  Activity,
  Timer,
  Bitcoin,
  Coins,
  BarChart3,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const items = [
  { icon: Layers, title: "Market Structure", desc: "Reading highs, lows and shifts to map where price is truly heading." },
  { icon: Droplets, title: "Liquidity Concepts", desc: "Spotting stop hunts, sweeps and the pools institutions target." },
  { icon: Building2, title: "Institutional Trading", desc: "Following smart-money footprints instead of retail noise." },
  { icon: ShieldCheck, title: "Risk Management", desc: "Position sizing and stop placement that keep you in the game." },
  { icon: Brain, title: "Trading Psychology", desc: "Discipline, patience and emotional control under real pressure." },
  { icon: Activity, title: "Price Action", desc: "Clean, indicator-free chart reading built on pure candles." },
  { icon: Timer, title: "Swing Trading", desc: "Higher-timeframe setups for traders with limited screen time." },
  { icon: Bitcoin, title: "Crypto Trading", desc: "BTC, ETH and altcoin structure across volatile 24/7 markets." },
  { icon: Coins, title: "Gold Trading", desc: "XAUUSD sessions, news impact and precision entry models." },
  { icon: BarChart3, title: "Technical Analysis", desc: "Confluence-based analysis that turns charts into decisions." },
];

export function Expertise() {
  return (
    <section id="expertise" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Expertise"
          title={
            <>
              Trading <span className="text-neon">Expertise</span>
            </>
          }
          subtitle="The core pillars taught across every live session and video."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 5) * 0.06}>
              <div className="glass-card group h-full p-6">
                <span className="grid size-11 place-items-center rounded-2xl border border-primary/15 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}