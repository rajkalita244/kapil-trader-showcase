import {
  CheckCircle2,
  MessageCircle,
  ExternalLink,
  BookOpen,
  Layers,
  Droplets,
  Building2,
  ShieldCheck,
  Brain,
  Activity,
  Timer,
  Bitcoin,
  Coins,
  BarChart3,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";

const DELTA_LINK =
  "https://www.delta.exchange/?code=DAJVDO";

const WHATSAPP_LINK =
  "https://wa.me/918619476606?text=Hi%20Kapil%2C%20I%20have%20opened%20my%20Delta%20Exchange%20account%20using%20your%20link.%20Please%20share%20the%20free%20course%20access";

const freecourse = [
  {
    icon: Layers,
    title: "Market Structure",
    desc: "Learn to read highs, lows, trends and structural shifts to understand where price is likely heading.",
  },
  {
    icon: Activity,
    title: "Price Action",
    desc: "Build a strong foundation in pure candle and price behaviour without depending blindly on indicators.",
  },
  {
    icon: BarChart3,
    title: "Technical Analysis",
    desc: "Learn chart analysis, confluence and technical tools to turn market information into trading decisions.",
  },
  {
    icon: Droplets,
    title: "Liquidity Concepts",
    desc: "Understand liquidity pools, stop hunts, sweeps and the areas where major market participants look for liquidity.",
  },
  {
    icon: Building2,
    title: "Institutional Trading",
    desc: "Understand institutional footprints and how larger participants influence price and market structure.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    desc: "Learn position sizing, stop-loss placement and risk control to protect your trading capital.",
  },
  {
    icon: Brain,
    title: "Trading Psychology",
    desc: "Develop discipline, patience and emotional control to make better decisions under real market pressure.",
  },
  {
    icon: Timer,
    title: "Swing Trading",
    desc: "Learn higher-timeframe analysis and structured setups for traders who cannot stay on charts all day.",
  },
  {
    icon: Bitcoin,
    title: "Crypto Trading",
    desc: "Understand BTC, ETH and other crypto markets across volatile 24/7 trading conditions.",
  },
  {
    icon: Coins,
    title: "Gold Trading",
    desc: "Learn XAUUSDT analysis, sessions, volatility, news impact and precision-based entry models.",
  },
];

const steps = [
  // {
  //   number: "01",
  //   title: "Open a Delta Exchange Account",
  //   description: (
  //     <>
  //       Create your Delta Exchange account using Kapil's referral link below.
  //     </>
  //   ),
  // },
  // {
  //   number: "02",
  //   title: "Send a WhatsApp Message",
  //   description:
  //     "After opening your account, message Kapil on WhatsApp and mention that you have completed the registration.",
  // },
  // {
  //   number: "03",
  //   title: "Get Free Course Access",
  //   description:
  //     "Once your registration is verified, Kapil's team will share access to the free trading course.",
  // },
];

export function FreeCourse() {
  return (
    <section id="freecourse" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Free Course"
          title={
            <>
              Learn <span className="text-neon">Everything For Free</span>
              <br />
              Start Your Trading Journey
            </>
          }
        />

        {/* Course Access Steps */}
        {/*
        <Reveal className="mx-auto mt-20 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <CheckCircle2 className="size-4" />
            How to Get Access
          </div>

          <h3 className="mt-5 font-display text-2xl font-semibold sm:text-3xl">
            Get Started in 3 Simple Steps
          </h3>
        </Reveal>
        */}

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.08}>
                <div className="glass-card relative h-full p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-semibold text-primary">
                      {step.number}
                    </span>

                    <CheckCircle2 className="size-5 text-primary" />
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <Reveal delay={0.2} className="mt-8">
            <div className="glass-card overflow-hidden p-1">
              <div className="rounded-[calc(var(--radius)+4px)] bg-background/60 p-7 sm:p-10">
                <div className="mx-auto max-w-2xl text-center">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10">
                    <BookOpen className="size-7 text-primary" />
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-semibold sm:text-3xl">
                    Get Your{" "}
                    <span className="text-neon">Free Course Access</span>
                  </h3>

                  <p className="mt-6 text-sm font-bold text-muted-foreground">
                    A structured trading course designed to take you from the
                    fundamentals of the market to advanced concepts, with a
                    focus on practical chart reading and real-world trading.
                  </p>

                  {/*
                  <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Open your Delta Exchange account using the referral link,
                    then send Kapil a WhatsApp message with your registered
                    details to request access.
                  </p>
                  */}

                  {/* MOBILE RESPONSIVE BUTTONS */}
                  <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                    <Button
                      variant="hero"
                      size="xl"
                      asChild
                      className="w-full sm:w-auto"
                    >
                      <Link
                        to="/free-course"
                        target="_blank"
                        rel="noreferrer"
                        className="flex w-full items-center justify-center gap-2 sm:w-auto"
                      >
                        <ExternalLink className="size-4 shrink-0" />

                        {/* Desktop */}
                        <span className="hidden sm:inline">
                          Click Here to Get Free Course
                        </span>

                        {/* Mobile */}
                        <span className="inline sm:hidden">
                          Get Free Course
                        </span>
                      </Link>
                    </Button>

                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 text-sm font-semibold transition-all hover:bg-muted sm:w-auto"
                    >
                      <MessageCircle className="size-4 shrink-0" />

                      <span className="text-center">
                        Message on WhatsApp
                      </span>
                    </a>
                  </div>

                  <p className="mt-6 text-center text-xs text-muted-foreground">
                    <strong className="font-bold text-foreground">
                      Happy Learning and Trading!
                    </strong>
                  </p>

                  {/*
                  <p className="mt-2 text-xs text-muted-foreground">
                    WhatsApp:{" "}
                    <a
                      href="https://wa.me/918619476606"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
                    >
                      +91 86194 76606
                    </a>
                  </p>
                  */}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* What You'll Learn */}
        {/*
        <Reveal className="mx-auto mt-10 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <BookOpen className="size-4" />
            What You'll Learn
          </div>

          <h3 className="mt-5 font-display text-2xl font-semibold sm:text-3xl">
            From Basic to Advanced
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Build your trading knowledge step by step — starting with market
            fundamentals and progressing towards advanced price action,
            liquidity and institutional concepts.
          </p>
        </Reveal>
        */}

        {/* freecourse Grid */}
        {/*
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {freecourse.map((item, i) => (
            <Reveal key={item.title} delay={(i % 5) * 0.06}>
              <div className="glass-card group h-full p-6">
                <span className="grid size-11 place-items-center rounded-2xl border border-primary/15 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="size-5" />
                </span>

                <h3 className="mt-5 font-display text-base font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        */}

        {/* Disclaimer */}
        {/*
        <Reveal delay={0.3} className="mt-6">
          <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Important:</strong> This
            course is provided for educational and informational purposes
            only. Trading and investing involve risk. Please do your own
            research and make financial decisions according to your own risk
            tolerance and circumstances.
          </p>
        </Reveal>
        */}
      </div>
    </section>
  );
}