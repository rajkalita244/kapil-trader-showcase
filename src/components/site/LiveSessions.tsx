import { CalendarClock, Clock, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";
import { LINKS } from "./links";

const topics = [
  "Crypto",
  "Gold",
  "BTC",
  "ETH",
  "Market Analysis",
  "Live Chart Reading",
  "Liquidity",
  "Price Action",
];

export function LiveSessions() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Live"
          title={
            <>
              Join Daily <span className="text-neon">Live Trading</span>
            </>
          }
        />

        <Reveal delay={0.08}>
          <div className="glass-card mx-auto mt-14 max-w-4xl p-8 sm:p-12">
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <CalendarClock className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    Schedule
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold">Every Day</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Clock className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    Timing
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold">7:00 – 10:00 PM IST</p>
                </div>
              </div>
            </div>

            <div className="mt-9 border-t border-white/10 pt-8">
              <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                What we cover
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {topics.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <Button variant="hero" size="xl" className="mt-9 w-full sm:w-auto" asChild>
              <a href={LINKS.youtube} target="_blank" rel="noreferrer">
                <Play /> Watch Today's Live
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}