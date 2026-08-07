import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-60 h-0.5 origin-left bg-[image:var(--gradient-primary)]"
    />
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Button
      variant="glass"
      size="icon"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed right-5 bottom-6 z-50 size-11 rounded-full transition-all duration-500",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp />
    </Button>
  );
}

export function AmbientBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-32 size-[36rem] rounded-full bg-primary/8 blur-[140px]" />
      <div className="animate-pulse-glow absolute top-1/3 -right-40 size-[32rem] rounded-full bg-primary/6 blur-[160px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(0.87_0.26_138/0.06),transparent_55%)]" />
    </div>
  );
}