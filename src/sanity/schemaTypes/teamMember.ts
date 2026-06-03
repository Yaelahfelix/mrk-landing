import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export const teamMember = defineType({
  name: "teamMember",
  title: "Tim",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Nama",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "role", title: "Jabatan", type: "string" }),
    defineField({ name: "bio", title: "Bio Singkat", type: "text", rows: 2 }),
    defineField({
      name: "photo",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Teks alternatif" }],
    }),
    defineField({
      name: "socials",
      title: "Media Sosial",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", type: "string", title: "Platform" },
            { name: "url", type: "url", title: "URL" },
          ],
          preview: { select: { title: "platform", subtitle: "url" } },
        },
      ],
    }),
    defineField({ name: "order", title: "Urutan", type: "number", initialValue: 0 }),
  ],
  orderings: [
    { name: "order", title: "Urutan", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "name", subtitle: "role", media: "photo" } },
});
