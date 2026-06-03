import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "./animations";
import { SocialIcon } from "./icons";
import type { TeamMember } from "@/lib/types";

export function Team({ team }: { team: TeamMember[] }) {
  if (!team?.length) return null;
  return (
    <section id="tim" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Tim Kami"
          title="Orang-orang Hebat di Balik MRK"
          highlight="Hebat"
          description="Tim profesional yang berpengalaman dan berdedikasi untuk kesuksesan proyek Anda."
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <StaggerItem key={m._id}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-surface/50 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50">
                <div className="relative aspect-square overflow-hidden">
                  {m.photo?.url ? (
                    <Image
                      src={m.photo.url}
                      alt={m.photo.alt || m.name}
                      fill
                      sizes="(max-width:768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-600/40 to-accent/30">
                      <span className="text-5xl font-bold text-white/90">
                        {m.name.slice(0, 1)}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-70" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold">{m.name}</h3>
                  {m.role && <p className="text-sm text-brand-300">{m.role}</p>}
                  {m.bio && (
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      {m.bio}
                    </p>
                  )}
                  {!!m.socials?.length && (
                    <div className="mt-4 flex justify-center gap-2">
                      {m.socials.map((s, i) => (
                        <a
                          key={i}
                          href={s.url || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.platform}
                          className="grid h-8 w-8 place-items-center rounded-lg border border-border text-muted transition hover:border-brand-500/50 hover:text-brand-300"
                        >
                          <SocialIcon platform={s.platform} className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
