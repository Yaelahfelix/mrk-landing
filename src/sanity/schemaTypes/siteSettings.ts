import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Pengaturan Situs",
  type: "document",
  icon: CogIcon,
  groups: [
    { name: "umum", title: "Umum", default: true },
    { name: "navigasi", title: "Navigasi" },
    { name: "kontak", title: "Kontak" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "companyName",
      title: "Nama Perusahaan",
      type: "string",
      group: "umum",
      initialValue: "PT Maulida Rafa Kurnia",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "shortName",
      title: "Nama Singkat / Brand",
      type: "string",
      group: "umum",
      initialValue: "MRK",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      group: "umum",
      initialValue: "Agensi IT — Solusi Digital untuk Bisnis Anda",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      group: "umum",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Teks alternatif" }],
    }),
    defineField({
      name: "navLinks",
      title: "Menu Navigasi",
      type: "array",
      group: "navigasi",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "href", type: "string", title: "Tautan (mis. #layanan)" },
          ],
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        },
      ],
    }),
    defineField({
      name: "contact",
      title: "Kontak",
      type: "object",
      group: "kontak",
      fields: [
        { name: "email", type: "string", title: "Email" },
        { name: "phone", type: "string", title: "Telepon" },
        { name: "whatsapp", type: "string", title: "WhatsApp (cth: 628123456789)" },
        { name: "address", type: "text", title: "Alamat", rows: 2 },
        { name: "mapUrl", type: "url", title: "URL Google Maps" },
      ],
    }),
    defineField({
      name: "socials",
      title: "Media Sosial",
      type: "array",
      group: "kontak",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              type: "string",
              title: "Platform",
              options: {
                list: [
                  "Instagram",
                  "LinkedIn",
                  "Facebook",
                  "X",
                  "YouTube",
                  "TikTok",
                  "GitHub",
                ],
              },
            },
            { name: "url", type: "url", title: "URL" },
          ],
          preview: { select: { title: "platform", subtitle: "url" } },
        },
      ],
    }),
    defineField({
      name: "footerNote",
      title: "Catatan Footer",
      type: "text",
      group: "umum",
      rows: 2,
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      group: "seo",
      fields: [
        { name: "metaTitle", type: "string", title: "Meta Title" },
        {
          name: "metaDescription",
          type: "text",
          title: "Meta Description",
          rows: 3,
        },
        {
          name: "ogImage",
          type: "image",
          title: "OG Image (preview share)",
          fields: [{ name: "alt", type: "string", title: "Teks alternatif" }],
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Pengaturan Situs" }),
  },
});
