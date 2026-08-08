import { Award, Radio, LineChart, Users } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { Counter } from "./Counter";
import aboutPhoto from "@/assets/kapil-formal.jpg.asset.json";

const stats = [
  { icon: Award, value: 6, suffix: "+", label: "Years Experience" },
  { icon: Radio, value: 100, suffix: "+", label: "Live Sessions" },
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
                src="/kapil-portrait.jpg"
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
    Kapil Varshney brings more than <span className="text-foreground">six years of experience</span> in the financial markets, specializing
    in crypto, gold, and indices. His journey from becoming a consistently profitable trader to
    mentoring others is built on practical market experience and disciplined execution.
  </p>

  <p className="leading-relaxed">
  As a{" "}
  <span className="text-foreground">core team member and market educator</span>{" "}
  at{" "}
  <a
    href="https://www.hiteshnanwani.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-neon hover:text-neon hover:underline transition-colors cursor-pointer"
  >
    Trader Hitesh Nanwani
  </a>
  , Kapil regularly hosts live trading and educational sessions on Hitesh
  Sir's official second YouTube channel, helping traders understand real-time
  market structure, liquidity, and institutional order flow.
</p>

  <p className="leading-relaxed">
    Every session combines live chart analysis with the two foundations most traders overlook:
    <span className="text-foreground"> trading psychology</span> and{" "}
    <span className="text-foreground"> risk management</span>. Through free educational content and
    daily live market discussions, Kapil aims to help traders build a disciplined, repeatable
    trading process based on consistency—not luck.
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