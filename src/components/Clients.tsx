import Image from "next/image";
import type { Client } from "@/lib/types";

export function Clients({ clients }: { clients: Client[] }) {
  if (!clients?.length) return null;
  const loop = [...clients, ...clients];

  return (
    <section id="klien" className="border-y border-border py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted">
          Dipercaya oleh perusahaan & instansi
        </p>

        <div className="group relative mt-9 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-12 group-hover:[animation-play-state:paused]">
            {loop.map((c, i) => (
              <div
                key={`${c._id}-${i}`}
                className="flex h-16 shrink-0 items-center justify-center opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
              >
                {c.logo?.url ? (
                  <Image
                    src={c.logo.url}
                    alt={c.logo.alt || c.name}
                    width={140}
                    height={48}
                    className="h-10 w-auto object-contain"
                  />
                ) : (
                  <span className="whitespace-nowrap rounded-xl border border-border bg-surface/60 px-6 py-3 text-lg font-bold text-muted">
                    {c.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
