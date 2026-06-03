"use client";

import { useState } from "react";
import { X, Database } from "lucide-react";

/** Banner kecil yang mengingatkan untuk menyambungkan Sanity. */
export function SetupNotice() {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] flex justify-center px-4 pb-4">
      <div className="glass flex max-w-xl items-center gap-3 rounded-2xl px-4 py-3 text-sm shadow-2xl">
        <Database className="h-5 w-5 shrink-0 text-brand-300" />
        <p className="text-muted">
          Menampilkan konten contoh. Sambungkan Sanity di{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-brand-300">
            .env.local
          </code>{" "}
          lalu buka{" "}
          <a href="/studio" className="font-semibold text-brand-300 underline">
            /studio
          </a>{" "}
          untuk mengedit.
        </p>
        <button
          onClick={() => setHidden(true)}
          aria-label="Tutup"
          className="grid h-7 w-7 shrink-0 place-items-center rounded-lg text-muted hover:bg-white/10"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
