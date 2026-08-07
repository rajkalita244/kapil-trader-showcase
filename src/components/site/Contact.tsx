import { useState, type FormEvent } from "react";
import { Youtube, Send, Instagram, Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal, SectionHeading } from "./Reveal";
import { LINKS } from "./links";

const channels = [
  { icon: Youtube, label: "YouTube", href: LINKS.youtube },
  { icon: Send, label: "Telegram", href: LINKS.telegram },
  { icon: Instagram, label: "Instagram", href: LINKS.instagram },
  { icon: Mail, label: "Email", href: LINKS.email },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent", {
        description: "Thanks for reaching out — you'll get a reply soon.",
      });
    }, 700);
  };

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's <span className="text-neon">Talk</span>
            </>
          }
          subtitle="Questions, collaborations or feedback — every message is welcome."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="glass-card h-full p-8">
              <h3 className="font-display text-xl font-semibold">Reach out directly</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The fastest replies come through Telegram, where the community is most active.
              </p>
              <div className="mt-7 grid gap-3">
                {channels.map((c) => (
                  <Button key={c.label} variant="glass" size="pill" className="justify-start" asChild>
                    <a href={c.href} target="_blank" rel="noreferrer">
                      <c.icon /> {c.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={onSubmit} className="glass-card h-full space-y-5 p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input id="contact-name" name="name" required placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  placeholder="How can Kapil help you?"
                />
              </div>
              <Button type="submit" variant="hero" size="xl" disabled={sending} className="w-full">
                {sending ? "Sending…" : "Send Message"}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}