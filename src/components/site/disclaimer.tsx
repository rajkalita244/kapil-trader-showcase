import { AlertTriangle, BookOpen, ShieldCheck, UserCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const points = [
  {
    icon: BookOpen,
    title: "Educational Purpose Only",
    description:
      "All content shared by Kapil Varshney is intended strictly for educational and informational purposes. It is designed to help viewers understand financial markets, trading concepts, technical analysis, and market behaviour.",
  },
  {
    icon: AlertTriangle,
    title: "Trading Involves Risk",
    description:
      "Trading and investing in financial markets involve substantial risk and may result in partial or complete loss of capital. Past performance or examples discussed do not guarantee future results.",
  },
  {
    icon: UserCheck,
    title: "Make Your Own Decisions",
    description:
      "Any trading or investment decision you make is entirely your own responsibility. Always evaluate your financial situation, risk tolerance, and objectives before taking any position.",
  },
  {
    icon: ShieldCheck,
    title: "No Financial Advice",
    description:
      "Nothing shared on this website, social media, live sessions, videos, or other platforms should be considered financial, investment, trading, or legal advice. Please conduct your own research and, where appropriate, consult a qualified professional.",
  },
];

export function Disclaimer() {
  return (
    <section id="disclaimer" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Disclaimer"
          title={
            <>
              Learn. Analyze.{" "}
              <span className="text-primary">Decide Responsibly.</span>
            </>
          }
        />

        <Reveal className="mx-auto mt-12 max-w-4xl">
          <div className="glass-card overflow-hidden p-8 sm:p-10">
            <div className="mb-8 flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <AlertTriangle className="size-6 text-primary" />
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold">
                  Important Disclaimer
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Please read this disclaimer carefully before using any
                  information shared by Kapil Varshney.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {points.map((point, index) => (
                <Reveal key={point.title} delay={index * 0.08}>
                  <div className="flex gap-4 rounded-2xl border border-border/50 bg-background/30 p-5">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <point.icon className="size-5 text-primary" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground">
                        {point.title}
                      </h4>

                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <p className="text-center text-sm leading-7 text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Remember:
                </span>{" "}
                No trading strategy can eliminate market risk. Never trade
                with money you cannot afford to lose. Take decisions only
                after understanding the risks involved and according to your
                own financial circumstances.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}