import { Award, Radio, LineChart, Users } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { Counter } from "./Counter";
import aboutPhoto from "@/assets/kapil-formal.jpg.asset.json";

const stats = [
  { icon: Award, value: 6, suffix: "+", label: "Years Experience" },
  { icon: Radio, value: 1000, suffix: "+", label: "Live Sessions" },
  { icon: LineChart, value: 365, suffix: "", label: "Days of Market Analysis" },
  { icon: Users, value: 100, suffix: "%", label: "Free Learning Community" },
];

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              Who is <span className="text-neon">Kapil Varshney</span>?
            </>
          }
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="glass-card overflow-hidden p-2">
              <img
                src={aboutPhoto.url}
                alt="Kapil Varshney analysing live markets from his trading desk"
                width={768}
                height={1365}
                loading="lazy"
                className="w-full rounded-[calc(var(--radius)+4px)] object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-5 text-muted-foreground">
            <p className="leading-relaxed">
              Kapil Varshney has spent more than six years inside the financial markets — trading
              crypto, gold and indices through every kind of volatility. What began as a personal
              pursuit of consistency turned into a mission to teach.
            </p>
            <p className="leading-relaxed">
              His approach is grounded in market structure, liquidity and institutional order flow,
              taught in plain language. Every session pairs live chart reading with the two things
              most traders skip: <span className="text-foreground">trading psychology</span> and{" "}
              <span className="text-foreground">risk management</span>.
            </p>
            <p className="leading-relaxed">
              Through daily live analysis and a free learning community, he helps traders replace
              guesswork with a repeatable process — because consistency, not luck, is what compounds.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass-card h-full p-6">
                <s.icon className="size-6 text-primary" />
                <p className="mt-5 font-display text-3xl font-semibold">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}