import { useEffect, useState } from "react";
import { Menu, X, Play, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LINKS, NAV_ITEMS } from "./links";
import {Link} from "@tanstack/react-router";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-white/10 bg-background/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-2.5">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)] font-display text-sm font-bold text-primary-foreground">
            KV
          </span>
          <span className="truncate font-display text-sm font-semibold tracking-tight sm:text-base">
            Kapil Varshney
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Button variant="hero" size="pill" className="hidden sm:inline-flex" asChild>
            <Link to="/free-course" target="_blank" rel="noreferrer">
              <BookOpen />Enroll Free Course
            </Link>
          </Button>
          <Button
            variant="glass"
            size="icon"
            className="rounded-full lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <Button variant="hero" size="pill" className="mt-4" asChild>
              <Link to="/free-course" target="_blank" rel="noreferrer">
                <BookOpen />Enroll Free Course
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}