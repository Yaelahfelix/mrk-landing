import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "./animations";
import type { Testimonial } from "@/lib/types";

export function Testimonials({ items }: { items: Testimonial[] }) {
  if (!items?.length) return null;
  return (
    <section id="testimoni" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-background-2/40" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimoni"
          title="Apa Kata Klien Kami"
          highlight="Klien Kami"
          description="Kepuasan klien adalah prioritas. Inilah cerita mereka bekerja bersama MRK."
        />

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <StaggerItem key={t._id}>
              <figure className="relative flex h-full flex-col rounded-2xl border border-border bg-surface/50 p-7 transition-colors hover:border-brand-500/40">
                <Quote className="h-9 w-9 text-brand-500/40" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < (t.rating ?? 5)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-white/15"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  {t.avatar?.url ? (
                    <Image
                      src={t.avatar.url}
                      alt={t.avatar.alt || t.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-500/30"
                    />
                  ) : (
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-accent text-lg font-bold text-white">
                      {t.name.slice(0, 1)}
                    </span>
                  )}
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted">
                      {[t.role, t.company].filter(Boolean).join(", ")}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
