"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./animations";
import type { Faq as FaqType } from "@/lib/types";

export function Faq({ faqs }: { faqs: FaqType[] }) {
  const [open, setOpen] = useState<string | null>(faqs?.[0]?._id ?? null);
  if (!faqs?.length) return null;

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan yang Sering Diajukan"
          highlight="Sering Diajukan"
        />

        <div className="mt-12 space-y-3">
          {faqs.map((f) => {
            const isOpen = open === f._id;
            return (
              <Reveal key={f._id}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen
                      ? "border-brand-500/50 bg-surface"
                      : "border-border bg-surface/40"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : f._id)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold">{f.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-500/15 text-brand-300"
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
                          {f.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
