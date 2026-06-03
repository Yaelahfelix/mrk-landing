import { defineField, defineType } from "sanity";
import { HelpCircleIcon } from "@sanity/icons";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: "question",
      title: "Pertanyaan",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "answer",
      title: "Jawaban",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", title: "Urutan", type: "number", initialValue: 0 }),
  ],
  orderings: [
    { name: "order", title: "Urutan", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "question" } },
});
