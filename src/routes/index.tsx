import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { SocialHub } from "@/components/site/SocialHub";
import { YouTubeSection } from "@/components/site/YouTubeSection";
import { LiveSessions } from "@/components/site/LiveSessions";
import { Expertise } from "@/components/site/Expertise";
import { Philosophy } from "@/components/site/Philosophy";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress, BackToTop, AmbientBackdrop } from "@/components/site/Chrome";

const TITLE = "Kapil Varshney | Professional Trader & Market Educator";
const DESCRIPTION =
  "Learn professional trading, market structure, liquidity concepts, crypto trading and gold analysis with Kapil Varshney. Join daily live sessions and free educational content.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Kapil Varshney, crypto trading, gold trading, BTC, ETH, market analysis, price action, liquidity, trading mentor, live trading, technical analysis, market education",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Kapil Varshney",
          jobTitle: "Professional Trader & Market Educator",
          description: DESCRIPTION,
          knowsAbout: [
            "Market Structure",
            "Liquidity Concepts",
            "Price Action",
            "Risk Management",
            "Crypto Trading",
            "Gold Trading",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <AmbientBackdrop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <SocialHub />
        <YouTubeSection />
        <LiveSessions />
        <Expertise />
        <Philosophy />
        <Gallery />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
