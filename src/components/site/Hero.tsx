import { motion } from "motion/react";
import { Play, Send, Instagram, Bitcoin, CandlestickChart, TrendingUp, Coins, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LINKS } from "./links";
import {Link} from "@tanstack/react-router";
import heroPortrait from "@/assets/kapil-portrait.jpg.asset.json";

const floaters = [
  { Icon: Bitcoin, label: "BTC", className: "left-[-6%] top-[14%]", delay: 0 },
  { Icon: Coins, label: "GOLD", className: "right-[-4%] top-[26%]", delay: 0.8 },
  { Icon: CandlestickChart, label: "Price Action", className: "left-[-2%] bottom-[22%]", delay: 1.6 },
  { Icon: TrendingUp, label: "+18.4%", className: "right-[2%] bottom-[10%]", delay: 2.4 },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs tracking-[0.18em] text-primary uppercase">
            <span className="animate-pulse-glow size-1.5 rounded-full bg-primary" />
            YOUR FREE GUIDE TO THE REAL MARKET
          </span>

          <h1 className="mt-7 text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-gradient">Master the Markets</span>
            <br />
            with <span className="text-neon">Confidence</span>
          </h1>

          <p className="mt-6 font-display text-lg font-medium sm:text-xl">Kapil Varshney</p>
          <p className="mt-1 text-sm tracking-wide text-primary/90">
            Professional Trader • Market Educator • Live YouTube Mentor
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            With over 6 years of experience in financial markets, Kapil Varshney has helped
            thousands of traders understand market structure, price action, liquidity concepts, and
            disciplined trading through free educational content and live market sessions.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button variant="hero" size="xl" asChild>
              <Link to="/free-course" target="_blank" rel="noreferrer">
                <BookOpen />Get Free Course
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href={LINKS.youtube} target="_blank" rel="noreferrer">
                <Play /> Watch Live
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href={LINKS.telegram} target="_blank" rel="noreferrer">
                <Send /> Join Telegram
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href={LINKS.instagram} target="_blank" rel="noreferrer">
                <Instagram /> Follow Instagram
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-8 rounded-full bg-primary/15 blur-[90px]" aria-hidden />
          <div className="glass-card relative overflow-hidden p-2">
            <img
              src="/kapil-formal.jpg"
              alt="Kapil Varshney, professional trader and market educator"
              width={929}
              height={1651}
              className="w-full rounded-[calc(var(--radius)+4px)] object-cover"
            />
          </div>

          {floaters.map(({ Icon, label, className, delay }) => (
            <motion.div
              key={label}
              className={`absolute ${className} hidden sm:block`}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
            >
              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-background/70 px-3.5 py-2.5 text-xs font-medium backdrop-blur-xl">
                <Icon className="size-4 text-primary" />
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}