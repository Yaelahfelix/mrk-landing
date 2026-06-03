import { defineField, defineType } from "sanity";
import { ThLargeIcon } from "@sanity/icons";

export const service = defineType({
  name: "service",
  title: "Layanan",
  type: "document",
  icon: ThLargeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Nama Layanan",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Deskripsi",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "icon",
      title: "Ikon",
      type: "string",
      description: "Pilih ikon yang mewakili layanan.",
      options: {
        list: [
          { title: "Web / Globe", value: "globe" },
          { title: "Aplikasi Mobile", value: "smartphone" },
          { title: "Kode / Custom Software", value: "code" },
          { title: "Cloud / Server", value: "cloud" },
          { title: "Database", value: "database" },
          { title: "Desain UI/UX", value: "palette" },
          { title: "Keamanan", value: "shield" },
          { title: "AI / Otomasi", value: "cpu" },
          { title: "E-Commerce", value: "shopping" },
          { title: "Konsultasi", value: "lightbulb" },
          { title: "Marketing Digital", value: "megaphone" },
          { title: "Maintenance", value: "wrench" },
        ],
      },
      initialValue: "code",
    }),
    defineField({
      name: "features",
      title: "Poin Fitur",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "order", title: "Urutan", type: "number", initialValue: 0 }),
  ],
  orderings: [
    { name: "order", title: "Urutan", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "description" },
  },
});
