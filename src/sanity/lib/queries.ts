import { groq } from "next-sanity";

const imageFields = `
  "url": asset->url,
  "alt": coalesce(alt, ""),
  "lqip": asset->metadata.lqip
`;

export const settingsQuery = groq`*[_type == "siteSettings"][0]{
  companyName,
  shortName,
  tagline,
  "logo": logo{${imageFields}},
  navLinks[]{ label, href },
  contact{ email, phone, whatsapp, address, mapUrl },
  socials[]{ platform, url },
  footerNote,
  seo{ metaTitle, metaDescription, "ogImage": ogImage{${imageFields}} }
}`;

export const homeQuery = groq`{
  "hero": *[_type == "hero"][0]{
    badge,
    headline,
    highlight,
    subheadline,
    primaryCta{ label, href },
    secondaryCta{ label, href },
    "image": image{${imageFields}}
  },
  "stats": *[_type == "stat"] | order(order asc){ value, suffix, label },
  "services": *[_type == "service"] | order(order asc){
    _id, title, description, icon, features
  },
  "projects": *[_type == "project"] | order(featured desc, order asc){
    _id, title, "slug": slug.current, category, client, year, description,
    tags, url, featured, "cover": cover{${imageFields}}
  },
  "process": *[_type == "processStep"] | order(order asc){
    _id, step, title, description
  },
  "testimonials": *[_type == "testimonial"] | order(order asc){
    _id, name, role, company, quote, rating, "avatar": avatar{${imageFields}}
  },
  "clients": *[_type == "client"] | order(order asc){
    _id, name, url, "logo": logo{${imageFields}}
  },
  "team": *[_type == "teamMember"] | order(order asc){
    _id, name, role, bio, socials, "photo": photo{${imageFields}}
  },
  "faqs": *[_type == "faq"] | order(order asc){
    _id, question, answer
  }
}`;
