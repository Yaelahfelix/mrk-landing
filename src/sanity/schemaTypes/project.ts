import { defineField, defineType } from "sanity";
import { CaseIcon } from "@sanity/icons";

export const project = defineType({
  name: "project",
  title: "Proyek / Portofolio",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "title",
      title: "Judul Proyek",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          "Website",
          "Aplikasi Mobile",
          "Web App / SaaS",
          "E-Commerce",
          "Sistem Internal",
          "UI/UX Design",
          "Lainnya",
        ],
      },
    }),
    defineField({ name: "client", title: "Klien", type: "string" }),
    defineField({ name: "year", title: "Tahun", type: "string" }),
    defineField({
      name: "description",
      title: "Deskripsi",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "cover",
      title: "Gambar Sampul",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Teks alternatif" }],
    }),
    defineField({
      name: "tags",
      title: "Teknologi / Tag",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "url", title: "Tautan Proyek", type: "url" }),
    defineField({
      name: "featured",
      title: "Unggulan?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({ name: "order", title: "Urutan", type: "number", initialValue: 0 }),
  ],
  orderings: [
    { name: "order", title: "Urutan", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "cover" },
  },
});
