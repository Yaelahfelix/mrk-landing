"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Reveal } from "./animations";
import type { Settings } from "@/lib/types";

export function Contact({ settings }: { settings: Settings }) {
  const c = settings.contact ?? {};
  const [form, setForm] = useState({ name: "", company: "", message: "" });

  const waNumber = c.whatsapp?.replace(/\D/g, "");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Halo ${settings.shortName || "MRK"}, saya ${form.name}` +
        (form.company ? ` dari ${form.company}` : "") +
        `.\n\n${form.message}`,
    );
    if (waNumber) {
      window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");
    } else if (c.email) {
      window.location.href = `mailto:${c.email}?subject=Permintaan Proyek&body=${text}`;
    }
  };

  const items = [
    c.email && { icon: Mail, label: "Email", value: c.email, href: `mailto:${c.email}` },
    c.phone && { icon: Phone, label: "Telepon", value: c.phone, href: `tel:${c.phone.replace(/\s/g, "")}` },
    c.address && { icon: MapPin, label: "Lokasi", value: c.address, href: c.mapUrl },
  ].filter(Boolean) as { icon: typeof Mail; label: string; value: string; href?: string }[];

  return (
    <section id="kontak" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-500/20 bg-gradient-to-br from-surface to-background-2 p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-600/25 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" />

          <div className="relative grid gap-12 lg:grid-cols-2">
            {/* Kiri: ajakan + info */}
            <div>
              <Reveal>
                <span className="inline-block rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-300">
                  Mulai Sekarang
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                  Punya ide? <span className="text-gradient">Mari wujudkan</span>{" "}
                  bersama kami.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 max-w-md text-muted">
                  Ceritakan kebutuhan Anda, dan tim kami akan menghubungi Anda
                  dengan solusi terbaik.
                </p>
              </Reveal>

              <div className="mt-9 space-y-4">
                {items.map((it) => (
                  <Reveal key={it.label} delay={0.12}>
                    <a
                      href={it.href || "#"}
                      className="flex items-center gap-4 rounded-xl border border-border bg-surface/40 px-4 py-3.5 transition hover:border-brand-500/50"
                    >
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/15 text-brand-300">
                        <it.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-muted">
                          {it.label}
                        </p>
                        <p className="font-medium">{it.value}</p>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Kanan: form */}
            <Reveal delay={0.15}>
              <form
                onSubmit={onSubmit}
                className="glass rounded-2xl p-6 sm:p-8"
              >
                <div className="space-y-4">
                  <Field
                    label="Nama"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="Nama Anda"
                    required
                  />
                  <Field
                    label="Perusahaan"
                    value={form.company}
                    onChange={(v) => setForm({ ...form, company: v })}
                    placeholder="Nama perusahaan (opsional)"
                  />
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-muted">
                      Pesan
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Ceritakan kebutuhan proyek Anda..."
                      className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:shadow-brand-500/50"
                  >
                    {waNumber ? (
                      <MessageCircle className="h-5 w-5" />
                    ) : (
                      <Send className="h-5 w-5" />
                    )}
                    Kirim {waNumber ? "via WhatsApp" : "Pesan"}
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-muted">
        {label}
      </label>
      <input
        type="text"
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
      />
    </div>
  );
}
