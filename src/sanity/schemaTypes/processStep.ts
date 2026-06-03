import { defineField, defineType } from "sanity";
import { ClipboardIcon } from "@sanity/icons";

export const processStep = defineType({
  name: "processStep",
  title: "Tahapan Kerja",
  type: "document",
  icon: ClipboardIcon,
  fields: [
    defineField({
      name: "step",
      title: "Nomor Langkah",
      type: "string",
      initialValue: "01",
    }),
    defineField({
      name: "title",
      title: "Judul",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Deskripsi",
      type: "text",
      rows: 3,
    }),
    defineField({ name: "order", title: "Urutan", type: "number", initialValue: 0 }),
  ],
  orderings: [
    { name: "order", title: "Urutan", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "title", subtitle: "step" } },
});
