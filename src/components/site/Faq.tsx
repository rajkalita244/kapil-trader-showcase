import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "./Reveal";

const faqs = [
  {q: "How to get free courses access ?",
   a: "Go to the free courses page & then follow the steps given there.",
  },
  {q: "Can I get mentorship from Kapil Varshney?",
    a: "Yes, you will be guided by Kapil Varshney in the live sessions, and you can ask questions in the YouTube chat or through social media platforms.",
  },
  {
    q: "Is the learning free?",
    a: "Yes. All the courses, live session, video and community access is completely free. The focus is education, not selling.",
  },
  {
    q: "How can I join the live sessions?",
    a: "Simply subscribe on YouTube and turn on notifications. Sessions go live every day at 7:00 PM IST — no registration, no fee.",
  },
  {
    q: "Where can I ask questions?",
    a: "Ask live in the YouTube chat during sessions, or you can ask doubts by dm in any social media platform given here.",
  },
  {
    q: "How can I contact Kapil?",
    a: "Use the contact form below or reach out through WhatsApp, Instagram or Telegram  — messages are read regularly.",
  },
  {
    q: "How often are live sessions conducted?",
    a: "Every single day, three hours a night, covering crypto, gold and overall market conditions in real time.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="section-pad">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Frequently Asked <span className="text-neon">Questions</span>
            </>
          }
        />
        <Reveal delay={0.08}>
          <Accordion type="single" collapsible className="mt-12 space-y-3">
            {faqs.map((f) => (
              <AccordionItem
                key={f.q}
                value={f.q}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 backdrop-blur-xl"
              >
                <AccordionTrigger className="text-left text-base hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}