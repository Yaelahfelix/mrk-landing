"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import type { Hero as HeroType } from "@/lib/types";

const ease = [0.22, 1, 0.36, 1] as const;

function withHighlight(headline?: string, highlight?: string) {
  if (!headline) return null;
  if (!highlight || !headline.includes(highlight))
    return <>{headline}</>;
  const [before, after] = headline.split(highlight);
  return (
    <>
      {before}
      <span className="text-gradient">{highlight}</span>
      {after}
    </>
  );
}

export function Hero({ data }: { data: HeroType }) {
  return (
    <section
      id="beranda"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-28 pb-16"
    >
      {/* Blob gradient animasi */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 h-[36rem] w-[36rem] rounded-full bg-brand-600/25 blur-[130px] animate-pulse-slow" />
        <div className="absolute -right-32 bottom-0 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-[120px] animate-pulse-slow" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-700/20 blur-[100px]" />
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Kiri: teks */}
        <div>
          {data.badge && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300"
            >
              <Sparkles className="h-4 w-4" />
              {data.badge}
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {withHighlight(data.headline, data.highlight)}
          </motion.h1>

          {data.subheadline && (
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              {data.subheadline}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            {data.primaryCta?.label && (
              <a
                href={data.primaryCta.href || "#kontak"}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-7 py-3.5 font-semibold text-white shadow-xl shadow-brand-600/30 transition hover:shadow-brand-500/50"
              >
                {data.primaryCta.label}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            )}
            {data.secondaryCta?.label && (
              <a
                href={data.secondaryCta.href || "#proyek"}
                className="group inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-6 py-3.5 font-semibold text-foreground transition hover:border-brand-500/50 hover:bg-surface"
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-500/20 text-brand-300">
                  <Play className="h-3.5 w-3.5 fill-current" />
                </span>
                {data.secondaryCta.label}
              </a>
            )}
          </motion.div>
        </div>

        {/* Kanan: visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative animate-float">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand-600/30 to-accent/30 blur-2xl" />
            <div className="glass relative overflow-hidden rounded-[2rem] p-2 glow">
              {data.image?.url ? (
                <Image
                  src={data.image.url}
                  alt={data.image.alt || "MRK"}
                  width={720}
                  height={560}
                  priority
                  className="h-auto w-full rounded-3xl object-cover"
                />
              ) : (
                <MockDashboard />
              )}
            </div>
          </div>

          {/* Kartu mengambang */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="glass absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl sm:-left-8"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-green-500/20 text-green-400">
              ✓
            </span>
            <div>
              <p className="text-sm font-bold">Proyek Tepat Waktu</p>
              <p className="text-xs text-muted">98% on-time delivery</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/** Ilustrasi dashboard tiruan saat belum ada gambar dari Sanity. */
function MockDashboard() {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-surface-2 to-surface p-5">
      <div className="mb-4 flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
        <span className="h-3 w-3 rounded-full bg-green-400/70" />
      </div>
      <div className="mb-4 h-28 rounded-2xl bg-gradient-to-r from-brand-600/40 to-accent/30" />
      <div className="grid grid-cols-3 gap-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-xl bg-white/5 p-3">
            <div className="mb-2 h-2 w-8 rounded-full bg-brand-400/60" />
            <div className="h-5 w-12 rounded bg-white/15" />
          </div>
        ))}
      </div>
      <div className="mt-3 space-y-2">
        <div className="h-3 w-full rounded-full bg-white/10" />
        <div className="h-3 w-4/5 rounded-full bg-white/10" />
        <div className="h-3 w-2/3 rounded-full bg-white/10" />
      </div>
    </div>
  );
}
