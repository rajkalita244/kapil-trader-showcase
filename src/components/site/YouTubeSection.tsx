import { useEffect, useState } from "react";
import { Youtube, Bell, Users, PlaySquare, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";
import { LINKS } from "./links";

const CHANNEL_ID = "UCZx42Yp1-Virc1IlEEz2GIg";

const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

// Free RSS → JSON proxy
const FEED_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
  RSS_URL
)}`;

type Video = {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
};

const channelStats = [
  { icon: Users, label: "Subscribers", value: "5k+" },
  { icon: PlaySquare, label: "Videos", value: "100+" },
  { icon: Eye, label: "Views", value: "100k+" },
  { icon: Bell, label: "Live", value: "Daily" },
];

export function YouTubeSection() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(FEED_URL)
      .then((res) => res.json())
      .then((data) => {
        if (!data.items) return;

        const latest = data.items.slice(0, 6).map((item: any) => {
          const id =
            item.guid?.split(":").pop() ||
            item.link.split("v=")[1];

          return {
            id,
            title: item.title,
            link: item.link,
            thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
          };
        });

        setVideos(latest);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="youtube" className="py-20">
      <div className="container mx-auto">

        <SectionHeading
          eyebrow="YouTube"
          title={<>Latest Videos</>}
          subtitle="Automatically loaded from the official YouTube RSS feed."
        />

        <Reveal delay={0.05}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10">

       <div className="relative h-64 w-full overflow-hidden bg-black sm:h-72 lg:h-80">
  <img
    src="/thumbnail.jpg"
    alt="YouTube Thumbnail"
    className="absolute inset-0 h-full w-full object-fill"
  />

  <div className="absolute inset-0 bg-black/15" />
</div>

            <div className="grid gap-6 bg-white/[0.03] p-7 backdrop-blur-xl md:grid-cols-[1.4fr_1fr]">

              <div>
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <Youtube className="size-5 text-primary" />
                    Hiteshislive
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Latest uploads fetched automatically using the official
                  YouTube RSS feed.
                </p>

                <Button
                  variant="hero"
                  size="pill"
                  className="mt-5"
                  asChild
                >
                  <a
                    href={LINKS.youtube}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Bell />
                    Subscribe
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {channelStats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <s.icon className="size-4 text-primary" />
                    <p className="mt-3 text-lg font-semibold">
                      {s.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </Reveal>

        {loading && (
          <div className="mt-12 text-center text-muted-foreground">
            Loading latest videos...
          </div>
        )}

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {videos.map((video, index) => (
            <Reveal key={video.id} delay={(index % 3) * 0.08}>
              <article className="glass-card overflow-hidden">

                <a
                  href={video.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="aspect-video w-full object-cover"
                  />
                </a>

                <div className="p-5">

                  <h3 className="line-clamp-2 text-sm font-medium">
                    {video.title}
                  </h3>

                  <Button
                    size="sm"
                    className="mt-4 w-full"
                    asChild
                  >
                    <a
                      href={video.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Watch on YouTube
                    </a>
                  </Button>

                </div>

              </article>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}