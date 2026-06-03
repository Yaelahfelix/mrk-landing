import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "./animations";
import { ServiceIcon } from "./icons";
import type { Service } from "@/lib/types";

export function Services({ services }: { services: Service[] }) {
  if (!services?.length) return null;
  return (
    <section id="layanan" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Layanan Kami"
          title="Solusi Digital Lengkap untuk Bisnis Anda"
          highlight="Lengkap"
          description="Dari ide hingga peluncuran, kami menyediakan layanan teknologi end-to-end yang dirancang untuk pertumbuhan Anda."
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s._id}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface/50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:bg-surface">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-5 inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-600/30 to-accent/20 text-brand-300 ring-1 ring-brand-500/20 transition-transform duration-300 group-hover:scale-110">
                  <ServiceIcon name={s.icon} className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                {s.description && (
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {s.description}
                  </p>
                )}
                {!!s.features?.length && (
                  <ul className="mt-5 space-y-2">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-muted"
                      >
                        <Check className="h-4 w-4 shrink-0 text-brand-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
