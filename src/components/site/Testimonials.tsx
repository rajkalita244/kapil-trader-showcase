import { Star } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const reviews = [
  {
    name: "Amol K",
    role: "Swing Trader",
    initials: "AK",
    text: "The way liquidity and market structure are explained finally made charts click for me. My entries are calmer and far more selective now.",
  },
  {
    name: "Raj K",
    role: "Crypto Trader",
    initials: "RK",
    text: "Six months of live sessions taught me more about risk than two years of courses. The focus on process over profits is rare.",
  },
  {
    name: "Avinash K",
    role: "Full-time Trader",
    initials: "AK",
    text: "Daily gold analysis is incredibly consistent. No hype, no signals — just clean reasoning you can actually learn from.",
  },
  {
    name: "Nandini M",
    role: "Beginner Trader",
    initials: "NM",
    text: "I started with zero knowledge. The free community answered every question patiently until I understood it properly.",
  },
  {
    name: "Sudarshan P",
    role: "Part-time Trader",
    initials: "SP",
    text: "The psychology segments helped me stop revenge trading. That alone changed my monthly results completely.",
  },
  {
    name: "Naman",
    role: "Student",
    initials: "NB",
    text: "Live chart reading every evening is like a masterclass. Genuine, authentic and always educational.",
  },
];

export function Testimonials() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              What Traders <span className="text-neon">Say</span>
            </>
          }
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.08}>
              <figure className="glass-card flex h-full flex-col p-7">
                <div className="flex gap-1 text-primary" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-primary/25 bg-primary/10 font-display text-xs font-semibold text-primary">
                    {r.initials}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium">{r.name}</span>
                    <span className="block truncate text-xs text-muted-foreground">{r.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}