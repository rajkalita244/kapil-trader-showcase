import { Youtube, Send, Instagram, Mail } from "lucide-react";
import { LINKS, NAV_ITEMS } from "./links";

const socials = [
  { icon: Youtube, href: LINKS.youtube, label: "YouTube" },
  { icon: Send, href: LINKS.telegram, label: "Telegram" },
  { icon: Instagram, href: LINKS.instagram, label: "Instagram" },
  { icon: Mail, href: LINKS.email, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-[image:var(--gradient-primary)] font-display text-sm font-bold text-primary-foreground">
              KV
            </span>
            <span className="font-display text-base font-semibold">Kapil Varshney</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Professional trader and market educator sharing free, disciplined trading education
            through daily live sessions on crypto, gold and global markets.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h3 className="text-xs tracking-[0.18em] text-muted-foreground uppercase">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs tracking-[0.18em] text-muted-foreground uppercase">Legal</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Terms of Use
              </a>
            </li>
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Educational content only. Not financial advice.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Kapil Varshney. All rights reserved.
      </div>
    </footer>
  );
}