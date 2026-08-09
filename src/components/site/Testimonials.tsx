import { Star } from "lucide-react";
import { SectionHeading } from "./Reveal";

const reviews = [
  {
    name: "Amol K",
    role: "Swing Trader",
    initials: "AK",
    text: "The course itself is really detailed, but what I liked even more was being able to ask questions during the live sessions. Getting doubts cleared directly by the mentor made the learning much easier for me.",
  },
  {
    name: "Raj K",
    role: "Crypto Trader",
    initials: "RK",
    text: "I expected a few basic lessons because it's free, but the experience was much more than that. The course, regular YouTube live sessions and doubt solving together gave me a proper learning experience.",
  },
  {
    name: "Avinash K",
    role: "Full-time Trader",
    initials: "AK",
    text: "The live sessions made a big difference for me. I could see how the concepts from the course were applied to real market situations, and whenever I had a doubt, I could get it clarified.",
  },
  {
    name: "Nandini M",
    role: "Beginner Trader",
    initials: "NM",
    text: "As someone who was completely new to trading, having both the course and a mentor to learn from helped me a lot. The live YouTube sessions made it feel like I wasn't learning everything alone.",
  },
  {
    name: "Sudarshan P",
    role: "Part-time Trader",
    initials: "SP",
    text: "What impressed me most was the support after the lessons. Whenever something wasn't clear from the course, the live sessions gave me a chance to understand it properly through real market discussions and doubt solving.",
  },
  {
    name: "Naman",
    role: "Student",
    initials: "NB",
    text: "I genuinely didn't expect this level of support from a free course. The lessons are structured, the mentor explains things patiently, and the YouTube live sessions give you a chance to learn and get your doubts cleared in real time.",
  },
];

export function Testimonials() {
  // Duplicate reviews for a seamless infinite loop
  const marqueeReviews = [...reviews, ...reviews];

  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto w-full">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              What Traders Say
            </>
          }
        />

        {/* Floating Reviews - Right to Left */}
        <div className="relative mt-14 w-full overflow-hidden">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

          {/* Marquee Track */}
          <div className="animate-testimonials flex w-max gap-5">
            {marqueeReviews.map((r, i) => (
              <figure
                key={`${r.name}-${i}`}
                className="glass-card flex w-[320px] shrink-0 flex-col p-7 transition-transform duration-300 hover:-translate-y-2 md:w-[380px]"
              >
                {/* Stars */}
                <div
                  className="flex gap-1 text-primary"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="size-4 fill-current"
                    />
                  ))}
                </div>

                {/* Review */}
                <blockquote className="mt-5 min-h-[150px] flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{r.text}”
                </blockquote>

                {/* User */}
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-primary/25 bg-primary/10 font-display text-xs font-semibold text-primary">
                    {r.initials}
                  </span>

                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-foreground">
                      {r.name}
                    </span>

                    <span className="block truncate text-xs text-muted-foreground">
                      {r.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style>{`
        @keyframes testimonials {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 10px));
          }
        }

        .animate-testimonials {
          animation: testimonials 45s linear infinite;
          will-change: transform;
        }

        /* Pause entire marquee when cursor enters */
        .animate-testimonials:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-testimonials {
            animation-duration: 35s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-testimonials {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}