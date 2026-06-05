import { SocialIcon, MrkIcon } from "./icons";
import type { Settings } from "@/lib/types";

export function Footer({ settings }: { settings: Settings }) {
  const brand = settings.shortName || "MRK";
  const year = 2026; // tahun statis agar build deterministik

  return (
    <footer className="relative border-t border-border bg-background-2/60">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <MrkIcon className="h-9 w-9 shrink-0" />
              <div className="leading-none">
                <span className="block text-xl font-bold tracking-[0.2em] text-foreground">
                  {brand}
                </span>
                <span className="block text-[9px] font-semibold tracking-[5px] text-brand-500 uppercase">
                  IT SOLUTION
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {settings.footerNote ||
                `${settings.companyName} — agensi IT yang membangun produk digital modern.`}
            </p>
            {!!settings.socials?.length && (
              <div className="mt-5 flex gap-2.5">
                {settings.socials.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.platform}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted transition hover:border-brand-500/50 hover:text-brand-300"
                  >
                    <SocialIcon platform={s.platform} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Navigasi
            </h4>
            <ul className="mt-4 space-y-2.5">
              {(settings.navLinks ?? []).map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted transition hover:text-brand-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Kontak
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {settings.contact?.email && (
                <li>
                  <a
                    href={`mailto:${settings.contact.email}`}
                    className="transition hover:text-brand-300"
                  >
                    {settings.contact.email}
                  </a>
                </li>
              )}
              {settings.contact?.phone && (
                <li>{settings.contact.phone}</li>
              )}
              {settings.contact?.address && (
                <li>{settings.contact.address}</li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row">
          <p>
            © {year} {settings.companyName}. Hak cipta dilindungi.
          </p>
          <p>
            Dibuat dengan <span className="text-brand-500">♥</span> oleh tim{" "}
            {brand}
          </p>
        </div>
      </div>
    </footer>
  );
}
