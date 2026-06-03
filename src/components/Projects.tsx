import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "./animations";
import type { Project } from "@/lib/types";

const gradients = [
  "from-brand-600/40 to-accent/30",
  "from-indigo-600/40 to-brand-500/30",
  "from-sky-600/40 to-cyan-400/30",
  "from-violet-600/40 to-brand-500/30",
];

export function Projects({ projects }: { projects: Project[] }) {
  if (!projects?.length) return null;
  return (
    <section id="proyek" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-background-2/40" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Portofolio"
          title="Proyek yang Telah Kami Kerjakan"
          highlight="Kami Kerjakan"
          description="Beberapa karya terbaik kami yang telah membantu klien tumbuh dan berkembang."
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Wrapper = p.url ? "a" : "div";
            return (
              <StaggerItem key={p._id}>
                <Wrapper
                  {...(p.url
                    ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-surface/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50"
                >
                  {/* Media */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {p.cover?.url ? (
                      <Image
                        src={p.cover.url}
                        alt={p.cover.alt || p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${
                          gradients[i % gradients.length]
                        }`}
                      >
                        <span className="px-6 text-center text-2xl font-bold text-white/90">
                          {p.title}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
                    {p.featured && (
                      <span className="absolute left-3 top-3 rounded-full bg-brand-500/90 px-2.5 py-1 text-xs font-semibold text-white shadow">
                        Unggulan
                      </span>
                    )}
                    <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Konten */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-brand-300">
                      {p.category && <span>{p.category}</span>}
                      {p.year && <span className="text-muted">· {p.year}</span>}
                    </div>
                    <h3 className="mt-2 text-lg font-bold transition-colors group-hover:text-brand-300">
                      {p.title}
                    </h3>
                    {p.client && (
                      <p className="text-sm text-muted">Klien: {p.client}</p>
                    )}
                    {p.description && (
                      <p className="mt-2 line-clamp-2 text-sm text-muted">
                        {p.description}
                      </p>
                    )}
                    {!!p.tags?.length && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-white/5 px-2 py-1 text-xs text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Wrapper>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
