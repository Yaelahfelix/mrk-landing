import { defineField, defineType } from "sanity";
import { TrendUpwardIcon } from "@sanity/icons";

export const stat = defineType({
  name: "stat",
  title: "Statistik / Angka",
  type: "document",
  icon: TrendUpwardIcon,
  fields: [
    defineField({
      name: "value",
      title: "Angka",
      type: "number",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "suffix",
      title: "Akhiran (cth: +, %, jt)",
      type: "string",
    }),
    defineField({
      name: "label",
      title: "Keterangan",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", title: "Urutan", type: "number", initialValue: 0 }),
  ],
  orderings: [
    { name: "order", title: "Urutan", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "label", value: "value", suffix: "suffix" },
    prepare: ({ title, value, suffix }) => ({
      title: `${value ?? ""}${suffix ?? ""}`,
      subtitle: title,
    }),
  },
});
