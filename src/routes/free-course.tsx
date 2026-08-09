import {
  ArrowRight,
  BarChart3,
  Bitcoin,
  BookOpen,
  Brain,
  Building2,
  CheckCircle2,
  ChevronRight,
  Coins,
  Droplets,
  ExternalLink,
  GraduationCap,
  Layers,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Timer,
  Home,
  Users,
  Youtube,
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/free-course")({
  component: FreeCoursePage,
});



const DELTA_LINK = "https://www.delta.exchange/?code=DAJVDO";

const WHATSAPP_LINK =
  "https://wa.me/918619476606?text=Hi%20Kapil%2C%20I%20have%20opened%20my%20Delta%20Exchange%20account%20using%20your%20link.%20Please%20share%20the%20free%20course%20access";

const WHATSAPP_NUMBER = "https://wa.me/918619476606";

const courseTopics = [
  {
    icon: Layers,
    number: "01",
    title: "Market Structure",
    desc: "Understand highs, lows, trends and structural shifts to read price behaviour with clarity.",
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Technical Analysis",
    desc: "Learn chart analysis, confluence and technical tools to build structured trading decisions.",
  },
  {
    icon: Droplets,
    number: "03",
    title: "Liquidity Concepts",
    desc: "Understand liquidity pools, sweeps, stop hunts and the areas where liquidity often sits.",
  },
  {
    icon: Building2,
    number: "04",
    title: "Institutional Trading",
    desc: "Understand institutional footprints and how larger participants influence price and structure.",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Risk Management",
    desc: "Learn position sizing, stop-loss placement and risk control to protect your trading capital.",
  },
  {
    icon: Brain,
    number: "06",
    title: "Trading Psychology",
    desc: "Build discipline, patience and emotional control for better decisions under market pressure.",
  },
  {
    icon: Timer,
    number: "07",
    title: "Swing Trading",
    desc: "Learn higher-timeframe analysis and structured setups for traders who cannot watch charts all day.",
  },
  {
    icon: Bitcoin,
    number: "08",
    title: "Crypto Trading",
    desc: "Understand BTC, ETH and crypto market behaviour across volatile 24/7 conditions.",
  },
  {
    icon: Coins,
    number: "09",
    title: "Gold Trading",
    desc: "Learn XAUUSD analysis, sessions, volatility, news impact and structured entry models.",
  },
];

const steps = [
  {
    number: "01",
    title: "Open Delta Exchange",
    desc: "Create your Delta Exchange account using Kapil's referral link.",
  },
  {
    number: "02",
    title: "Message on WhatsApp",
    desc: "After registration, send a WhatsApp message confirming your registration.",
  },
  {
    number: "03",
    title: "Get Course Access",
    desc: "Once your registration is verified, the team will share the course access details.",
  },
];

const learningLevels = [
  {
    label: "LEVEL 01",
    title: "Market Fundamentals",
    items: [
      "How financial markets work",
      "Candles & price behaviour",
      "Market structure",
      "Trends & market phases",
    ],
  },
  {
    label: "LEVEL 02",
    title: "Technical Analysis",
    items: [
      "Support & resistance",
      "Technical confluence",
      "Liquidity concepts",
      "Price action",
    ],
  },
  {
    label: "LEVEL 03",
    title: "Advanced Concepts",
    items: [
      "Institutional footprints",
      "Liquidity sweeps",
      "Advanced market structure",
      "Entry & setup models",
    ],
  },
  {
    label: "LEVEL 04",
    title: "Trading Framework",
    items: [
      "Risk management",
      "Trading psychology",
      "Crypto & Gold",
      "Live market learning",
    ],
  },
];

function FreeCoursePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background pt-16">

        {/* FREE COURSE NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* LEFT - KV / KAPIL VARSHNEY */}
          <a
            href="/#home"
            className="group flex items-center gap-3"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-primary text-sm font-black text-primary-foreground transition-transform duration-300 group-hover:scale-105">
              KV
            </span>

            <span className="font-display text-sm font-bold tracking-tight sm:text-base">
              Kapil Varshney
            </span>
          </a>

          {/* RIGHT - GO HOME */}
                    <a
            href="/#home"
            aria-label="Go Home"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-background/60 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:text-primary sm:size-auto sm:gap-2 sm:px-4 sm:py-2.5"
            >
            <Home className="size-4" />
            <span className="hidden sm:inline">Go Home</span>
            </a>

        </nav>
      </header>

      {/* =========================================================
          HERO / BANNER
      ========================================================== */}
      <section className="relative border-b border-border/40">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-[-220px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

          <div className="absolute bottom-[-150px] left-[-120px] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />

          <div className="absolute right-[-120px] top-[25%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
        </div>

        <div className="container relative mx-auto px-4 pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">

          {/* Small heading above banner */}
          <div className="mx-auto mb-6 flex max-w-7xl justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs">
              <GraduationCap className="size-4" />
              Free Trading Education
            </div>
          </div>

          {/* Banner */}
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/30 shadow-2xl shadow-black/20 sm:rounded-3xl">
              <img
                src="/coursebanner.jpg"
                alt="Free Trading Course - Learn Trading From Basic to Advanced"
                className="block h-auto w-full"
              />
            </div>
          </div>

          {/* Hero text */}
          <div className="mx-auto mt-10 max-w-3xl text-center sm:mt-12">
            <h1 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Learn Trading
              <br />
              <span className="text-neon">
                From Basic to Advanced
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
              Build your trading knowledge step by step with structured
              education covering market fundamentals, technical analysis,
              liquidity, institutional concepts, risk management, crypto and
              gold.
            </p>

            {/* Hero buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#access"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/10 transition-all hover:scale-[1.02] hover:opacity-90 sm:w-auto"
              >
                <BookOpen className="size-4" />
                Get Course Access
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#curriculum"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-border bg-background/80 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-muted sm:w-auto"
              >
                Explore Curriculum
                <ChevronRight className="size-4" />
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-muted-foreground sm:text-sm">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-primary" />
                100% Free
              </span>

              <span className="hidden h-4 w-px bg-border sm:block" />

              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-primary" />
                Beginner Friendly
              </span>

              <span className="hidden h-4 w-px bg-border sm:block" />

              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-primary" />
                Basic to Advanced
              </span>

              <span className="hidden h-4 w-px bg-border sm:block" />

              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-primary" />
                Live Support
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-border/60 bg-card/50 p-5 text-center backdrop-blur-sm">
              <div className="font-display text-2xl font-bold text-primary">
                100%
              </div>

              <div className="mt-1 text-xs text-muted-foreground">
                Free Learning
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/50 p-5 text-center backdrop-blur-sm">
              <div className="font-display text-2xl font-bold text-primary">
                09+
              </div>

              <div className="mt-1 text-xs text-muted-foreground">
                Core Topics
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/50 p-5 text-center backdrop-blur-sm">
              <div className="font-display text-2xl font-bold text-primary">
                Live
              </div>

              <div className="mt-1 text-xs text-muted-foreground">
                Market Learning
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ACCESS
      ========================================================== */}
      <section
        id="access"
        className="scroll-mt-20 py-16 sm:py-24 lg:py-28"
      >
        <div className="container mx-auto px-4">

          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs">
              <Sparkles className="size-4" />
              Course Access
            </div>

            <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Start Learning in{" "}
              <span className="text-neon">
                3 Simple Steps
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Follow these simple steps to request access to the free trading
              course.
            </p>
          </div>

          {/* Steps */}
          <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-3 md:gap-5">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card sm:p-7"
              >
                {index < steps.length - 1 && (
                  <div className="absolute right-[-20px] top-12 z-10 hidden md:block">
                    <ChevronRight className="size-5 text-primary/40" />
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-bold tracking-widest text-primary">
                    {step.number}
                  </span>

                  <div className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <CheckCircle2 className="size-5" />
                  </div>
                </div>

                <h3 className="mt-6 font-display text-lg font-bold sm:text-xl">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Main Access CTA */}
          <div className="mx-auto mt-8 max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary/[0.04] p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-primary/[0.03]" />

              <div className="relative rounded-[calc(1.5rem-4px)] border border-border/40 bg-background/90 p-6 backdrop-blur-xl sm:p-10 lg:p-12">

                <div className="mx-auto max-w-3xl text-center">

                  <div className="mx-auto grid size-14 place-items-center rounded-2xl border border-primary/20 bg-primary/10 sm:size-16">
                    <GraduationCap className="size-7 text-primary sm:size-8" />
                  </div>

                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
                    Your First Step Starts Here
                  </p>

                  <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
                    Get Your{" "}
                    <span className="text-neon">
                      Free Course Access
                    </span>
                  </h3>

                  <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    Open your Delta Exchange account using the referral link,
                    then contact Kapil on WhatsApp to request your course
                    access.
                  </p>

                  {/* CTA buttons */}
                  <div className="mt-7 grid gap-3 sm:flex sm:justify-center">
                    <a
                      href={DELTA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:scale-[1.02] hover:opacity-90"
                    >
                      Open Delta Exchange
                      <ExternalLink className="size-4" />
                    </a>

                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 text-sm font-bold transition-all hover:bg-muted"
                    >
                      <MessageCircle className="size-4" />
                      Message on WhatsApp
                    </a>
                  </div>

                  {/* Referral info */}
                  <div className="mt-6 flex flex-col items-center justify-center gap-2 text-xs text-muted-foreground sm:flex-row sm:gap-5">
                    <span>
                      Referral Code:{" "}
                      <strong className="text-foreground">
                        DAJVDO
                      </strong>
                    </span>

                    <span className="hidden h-3 w-px bg-border sm:block" />

                    <a
                      href={WHATSAPP_NUMBER}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 transition-colors hover:text-primary"
                    >
                      WhatsApp: +91 86194 76606
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LEARNING ROADMAP
      ========================================================== */}
      <section className="border-y border-border/40 bg-muted/[0.18] py-16 sm:py-24 lg:py-28">
        <div className="container mx-auto px-4">

          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs">
              <Layers className="size-4" />
              Learning Roadmap
            </div>

            <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              From{" "}
              <span className="text-neon">
                Zero Knowledge
              </span>{" "}
              to Structured Trading
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Build your knowledge progressively instead of jumping directly
              into advanced concepts.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {learningLevels.map((level) => (
              <div
                key={level.label}
                className="rounded-2xl border border-border/60 bg-card/60 p-6"
              >
                <span className="text-[10px] font-bold tracking-[0.18em] text-primary sm:text-xs">
                  {level.label}
                </span>

                <h3 className="mt-3 font-display text-lg font-bold sm:text-xl">
                  {level.title}
                </h3>

                <div className="mt-5 space-y-3">
                  {level.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CURRICULUM
      ========================================================== */}
      <section
        id="curriculum"
        className="scroll-mt-20 py-16 sm:py-24 lg:py-28"
      >
        <div className="container mx-auto px-4">

          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs">
              <BookOpen className="size-4" />
              What You'll Learn
            </div>

            <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              A Complete Trading{" "}
              <span className="text-neon">
                Learning Foundation
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Explore the major areas covered throughout the learning journey,
              from market basics to advanced trading concepts.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courseTopics.map((topic) => {
              const Icon = topic.icon;

              return (
                <div
                  key={topic.title}
                  className="group rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid size-11 place-items-center rounded-2xl border border-primary/15 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105 sm:size-12">
                      <Icon className="size-5" />
                    </span>

                    <span className="font-display text-xs font-bold tracking-widest text-muted-foreground/50">
                      {topic.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold">
                    {topic.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {topic.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          MENTOR / LIVE SUPPORT
      ========================================================== */}
      <section className="border-y border-border/40 bg-muted/[0.18] py-16 sm:py-24 lg:py-28">
        <div className="container mx-auto px-4">

          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs">
                <Users className="size-4" />
                Learn With Guidance
              </div>

              <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                You Don't Have to{" "}
                <span className="text-neon">
                  Learn Alone
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                The learning experience goes beyond course material. Get
                guidance around trading concepts, ask questions and learn
                through real market discussions.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Structured course learning",
                  "Doubt solving and guidance",
                  "Real market discussions",
                  "Daily YouTube live learning",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium"
                  >
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary/10">
                      <CheckCircle2 className="size-4 text-primary" />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="rounded-3xl border border-border/60 bg-card/60 p-6 sm:p-8">

              <div className="grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                <Youtube className="size-7" />
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold">
                Learn From Real Market Sessions
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Follow live market analysis, trading discussions and
                educational sessions on YouTube while building your knowledge
                through the course.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border/60 bg-background/50 p-4">
                  <div className="text-sm font-semibold">
                    Live Market Learning
                  </div>

                  <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Understand concepts in real market conditions.
                  </div>
                </div>

                <div className="rounded-xl border border-border/60 bg-background/50 p-4">
                  <div className="text-sm font-semibold">
                    Doubt Solving
                  </div>

                  <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Get clarity when you are stuck.
                  </div>
                </div>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:opacity-90"
              >
                <MessageCircle className="size-4" />
                Contact for Course Access
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="container mx-auto px-4">

          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-primary/20 bg-primary/[0.04] p-7 text-center sm:p-12 lg:p-14">

            <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />

            <div className="relative">

              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs">
                <Sparkles className="size-4" />
                Start Today
              </span>

              <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                Your Trading Education{" "}
                <span className="text-neon">
                  Starts Here
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Learn the fundamentals, understand advanced concepts and
                develop a structured approach to the markets.
              </p>

              <div className="mt-8 grid gap-3 sm:flex sm:justify-center">
                <a
                  href={DELTA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:scale-[1.02] hover:opacity-90"
                >
                  <BookOpen className="size-4" />
                  Get Free Course
                  <ArrowRight className="size-4" />
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-background px-7 py-3.5 text-sm font-bold transition-colors hover:bg-muted"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp Kapil
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DISCLAIMER
      ========================================================== */}
      <section className="border-t border-border/40 py-7 sm:py-8">
        <div className="container mx-auto px-4">
          <p className="mx-auto max-w-3xl text-center text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
            <strong className="text-foreground">
              Important:
            </strong>{" "}
            This course and all related content are provided for educational
            and informational purposes only. Trading and investing involve
            substantial risk. Past performance does not guarantee future
            results. Please conduct your own research and make financial
            decisions according to your own risk tolerance, financial
            circumstances and objectives.
          </p>
        </div>
      </section>

        <div className="border-t border-white/10 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Kapil Varshney. All rights reserved.
      </div>

    </main>
  );
}
