import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "./animations";
import type { ProcessStep } from "@/lib/types";

export function Process({ steps }: { steps: ProcessStep[] }) {
  if (!steps?.length) return null;
  return (
    <section id="proses" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Cara Kerja"
          title="Proses Kerja yang Transparan"
          highlight="Transparan"
          description="Empat tahapan sederhana untuk mewujudkan produk digital Anda."
        />

        <Stagger className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* garis penghubung */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent lg:block" />
          {steps.map((s) => (
            <StaggerItem key={s._id} className="relative">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <span className="relative z-10 mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-500 text-lg font-bold text-white shadow-lg shadow-brand-600/40">
                  {s.step}
                </span>
                <h3 className="text-lg font-bold">{s.title}</h3>
                {s.description && (
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.description}
                  </p>
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
