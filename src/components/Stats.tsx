import { Counter, Stagger, StaggerItem } from "./animations";
import type { Stat } from "@/lib/types";

export function Stats({ stats }: { stats: Stat[] }) {
  if (!stats?.length) return null;
  return (
    <section className="relative -mt-8 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Stagger className="glass grid grid-cols-2 gap-6 rounded-3xl px-6 py-9 sm:px-10 md:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
                <Counter value={s.value} suffix={s.suffix || ""} />
              </div>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
