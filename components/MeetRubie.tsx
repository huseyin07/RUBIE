import Image from "next/image";
import { Reveal, SectionHeading } from "./ui";

const photos = [
  {
    src: "/rubie.png",
    alt: "Rubie sitting beside her ball",
    title: "Rubie",
    subtitle: "The dog behind the story.",
  },
  {
    src: "/frank-rubie.jpg",
    alt: "Frank holding Rubie at an outdoor café",
    title: "Frank & Rubie",
    subtitle: "The real friendship behind the meme.",
  },
] as const;

export function MeetRubie() {
  return (
    <section id="meet-rubie" className="section meet-rubie" aria-label="Meet Rubie">
      <div className="shell">
        <SectionHeading eyebrow="THE FACES BEHIND THE STORY" title="Meet Rubie" center />
        <div className="meet-rubie-grid">
          {photos.map((photo) => (
            <Reveal className="meet-rubie-card" key={photo.title}>
              <div className="meet-rubie-photo">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  quality={90}
                  sizes="(max-width: 700px) calc(100vw - 28px), (max-width: 1200px) 46vw, 540px"
                />
              </div>
              <div className="meet-rubie-caption">
                <h3>{photo.title}</h3>
                <p>{photo.subtitle}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="meet-rubie-note">
          These photos are presented only to explain the origin story and do not imply endorsement or official affiliation.
        </p>
      </div>
    </section>
  );
}
