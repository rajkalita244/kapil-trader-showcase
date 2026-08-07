import { Youtube, Bell, Users, PlaySquare, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";
import { LINKS } from "./links";

// Placeholder video IDs — swap with real IDs or wire up the YouTube Data API
// (see fetchLatestVideos placeholder below) once the channel key is available.
const videos = [
  { id: "dQw4w9WgXcQ", title: "BTC Live Market Analysis — Liquidity Sweep Setup" },
  { id: "dQw4w9WgXcQ", title: "Gold (XAUUSD): Reading Institutional Order Flow" },
  { id: "dQw4w9WgXcQ", title: "Market Structure Explained for Beginners" },
  { id: "dQw4w9WgXcQ", title: "ETH Swing Trade Breakdown — Risk First" },
  { id: "dQw4w9WgXcQ", title: "Trading Psychology: Surviving a Losing Streak" },
  { id: "dQw4w9WgXcQ", title: "Daily Live Session Replay — Price Action Deep Dive" },
];

const channelStats = [
  { icon: Users, label: "Subscribers", value: "—" },
  { icon: PlaySquare, label: "Videos", value: "—" },
  { icon: Eye, label: "Total Views", value: "—" },
  { icon: Bell, label: "Live Sessions", value: "1000+" },
];

export function YouTubeSection() {
  return (
    <section id="youtube" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="YouTube"
          title={
            <>
              Latest <span className="text-neon">Videos</span>
            </>
          }
          subtitle="Free education, every single day — live sessions, breakdowns and market recaps."
        />

        <Reveal delay={0.05}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10">
            <div className="relative h-36 bg-[image:var(--gradient-primary)] opacity-90 sm:h-44">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,oklch(0_0_0/0.55),transparent_60%)]" />
            </div>
            <div className="grid gap-6 bg-white/[0.03] p-7 backdrop-blur-xl md:grid-cols-[1.4fr_1fr] md:items-center">
              <div className="min-w-0">
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <Youtube className="size-5 shrink-0 text-primary" /> Kapil Varshney Trading
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Live market analysis on crypto and gold, price action education and disciplined
                  risk management — broadcast every evening at 7:00 PM IST.
                </p>
                <Button variant="hero" size="pill" className="mt-5" asChild>
                  <a href={LINKS.youtube} target="_blank" rel="noreferrer">
                    <Bell /> Subscribe
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {channelStats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <s.icon className="size-4 text-primary" />
                    <p className="mt-3 font-display text-lg font-semibold">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 0.08}>
              <article className="glass-card overflow-hidden">
                <div className="aspect-video w-full bg-black">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="size-full"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-sm leading-snug font-medium">{v.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}