import { defineField, defineType } from "sanity";
import { UsersIcon } from "@sanity/icons";

export const clientLogo = defineType({
  name: "client",
  title: "Klien / Partner",
  type: "document",
  icon: UsersIcon,
  fields: [
    defineField({
      name: "name",
      title: "Nama Klien",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Teks alternatif" }],
    }),
    defineField({ name: "url", title: "Website", type: "url" }),
    defineField({ name: "order", title: "Urutan", type: "number", initialValue: 0 }),
  ],
  orderings: [
    { name: "order", title: "Urutan", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "name", media: "logo" } },
});
