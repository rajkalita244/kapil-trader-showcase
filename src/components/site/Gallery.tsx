import { Reveal, SectionHeading } from "./Reveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import hero from "@/assets/kapil-hero.jpg";
import about from "@/assets/kapil-about.jpg";

const images = [
  { src: g1, alt: "Kapil Varshney speaking at a trading seminar", span: "sm:row-span-2", w: 900, h: 1200 },
  { src: g2, alt: "Kapil Varshney reading live candlestick charts", w: 1200, h: 900 },
  { src: g3, alt: "Kapil Varshney recording a live YouTube trading session", w: 1200, h: 900 },
  { src: g4, alt: "Kapil Varshney mentoring a group of traders", span: "sm:row-span-2", w: 900, h: 1200 },
  { src: about, alt: "Kapil Varshney at his multi-monitor trading desk", w: 1024, h: 1024 },
  { src: hero, alt: "Studio portrait of Kapil Varshney", w: 1024, h: 1280 },
];

export function Gallery() {
  return (
    <section id="gallery" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              Moments from the <span className="text-neon">Journey</span>
            </>
          }
        />

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <Reveal key={img.alt} delay={(i % 3) * 0.07} className={img.span ?? ""}>
              <figure className="group h-full overflow-hidden rounded-3xl border border-white/10">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}