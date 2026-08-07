import { Youtube, Send, Instagram, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";
import { LINKS } from "./links";

const socials = [
  {
    icon: Youtube,
    name: "YouTube",
    desc: "Daily live sessions, breakdowns and free market education.",
    stat: "Subscribers",
    href: LINKS.youtube,
  },
  {
    icon: Send,
    name: "Telegram",
    desc: "Chart updates, session reminders and community discussion.",
    stat: "Members",
    href: LINKS.telegram,
  },
  {
    icon: Instagram,
    name: "Instagram",
    desc: "Behind the screens, quick lessons and trading mindset reels.",
    stat: "Followers",
    href: LINKS.instagram,
  },
  { icon: Twitter, name: "X (Twitter)", desc: "Real-time market notes and levels.", stat: "Followers", href: "#" },
  { icon: Linkedin, name: "LinkedIn", desc: "Professional updates and long-form insight.", stat: "Connections", href: "#" },
];

export function SocialHub() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Community"
          title={
            <>
              Connect With <span className="text-neon">Kapil</span>
            </>
          }
          subtitle="One community, three places to learn. Everything is free."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {socials.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.07}>
              <div className="glass-card group flex h-full flex-col p-7">
                <div className="grid size-12 place-items-center rounded-2xl border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <s.icon className="size-5 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <p className="mt-5 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  — {s.stat}
                </p>
                <Button variant="glass" size="pill" className="mt-4 w-full" asChild>
                  <a href={s.href} target="_blank" rel="noreferrer">
                    Visit <ArrowUpRight />
                  </a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}