import { Youtube, Send, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";
import { LINKS } from "./links";

const channels = [
  { icon: MessageCircle, label: "WhatsApp", href: LINKS.whatsapp },
  { icon: Instagram, label: "Instagram", href: LINKS.instagram },
  { icon: Youtube, label: "YouTube", href: LINKS.youtube },
  { icon: Send, label: "Telegram", href: LINKS.telegram },
 
];

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's <span className="text-neon">Talk</span> 
            </>
          }
          subtitle="Questions, collaborations or feedback — connect with Kapil through any of the platforms below."
        />

        <div className="mt-14 flex justify-center">
          <Reveal>
            <div className="glass-card w-full max-w-xl p-8">
              <h3 className="font-display text-xl font-semibold">
                Reach out directly
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The fastest replies come through whatsapp, where the community is
                most active.
              </p>

              <div className="mt-7 grid gap-3">
                {channels.map((channel) => (
                  <Button
                    key={channel.label}
                    variant="glass"
                    size="pill"
                    className="justify-start"
                    asChild
                  >
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <channel.icon className="mr-2 h-5 w-5" />
                      {channel.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}