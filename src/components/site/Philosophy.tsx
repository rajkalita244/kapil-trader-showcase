import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

export function Philosophy() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/2 -z-10 h-80 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,oklch(0.87_0.26_138/0.12),transparent_65%)]"
      />
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <Quote className="mx-auto size-8 text-primary/70" />
          <blockquote className="mt-8 font-display text-2xl leading-[1.3] font-medium text-balance sm:text-3xl md:text-4xl lg:text-5xl">
            “Consistency is built through discipline, patience, and proper risk management—
            <span className="text-neon">not by chasing profits</span>.”
          </blockquote>
          <p className="mt-8 text-sm tracking-[0.18em] text-muted-foreground uppercase">
            Kapil Varshney
          </p>
        </Reveal>
      </div>
    </section>
  );
}