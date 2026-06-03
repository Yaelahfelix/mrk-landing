import { defineField, defineType } from "sanity";
import { RocketIcon } from "@sanity/icons";

export const hero = defineType({
  name: "hero",
  title: "Hero (Bagian Atas)",
  type: "document",
  icon: RocketIcon,
  fields: [
    defineField({
      name: "badge",
      title: "Badge kecil di atas judul",
      type: "string",
      initialValue: "Agensi IT Terpercaya",
    }),
    defineField({
      name: "headline",
      title: "Judul Utama",
      type: "string",
      initialValue: "Wujudkan Transformasi Digital Bisnis Anda",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "highlight",
      title: "Kata yang di-highlight (warna biru)",
      type: "string",
      description: "Bagian dari judul yang ingin diberi warna aksen.",
      initialValue: "Transformasi Digital",
    }),
    defineField({
      name: "subheadline",
      title: "Sub-judul",
      type: "text",
      rows: 3,
      initialValue:
        "MRK membantu perusahaan membangun website, aplikasi, dan sistem digital yang cepat, aman, dan siap berkembang.",
    }),
    defineField({
      name: "primaryCta",
      title: "Tombol Utama",
      type: "object",
      fields: [
        { name: "label", type: "string", title: "Teks", initialValue: "Mulai Proyek" },
        { name: "href", type: "string", title: "Tautan", initialValue: "#kontak" },
      ],
    }),
    defineField({
      name: "secondaryCta",
      title: "Tombol Sekunder",
      type: "object",
      fields: [
        { name: "label", type: "string", title: "Teks", initialValue: "Lihat Portofolio" },
        { name: "href", type: "string", title: "Tautan", initialValue: "#proyek" },
      ],
    }),
    defineField({
      name: "image",
      title: "Gambar / Ilustrasi (opsional)",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Teks alternatif" }],
    }),
  ],
  preview: { prepare: () => ({ title: "Hero" }) },
});
