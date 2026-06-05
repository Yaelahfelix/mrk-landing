export type SanityImage = {
  url: string;
  alt?: string;
  lqip?: string;
} | null;

export type CTA = { label?: string; href?: string };

export type Settings = {
  companyName?: string;
  shortName?: string;
  contact?: {
    email?: string;
    phone?: string;
    whatsapp?: string;
    address?: string;
    mapUrl?: string;
  };
  socials?: { platform: string; url: string }[];
  footerNote?: string;
};

export type Hero = {
  badge?: string;
  headline?: string;
  highlight?: string;
  subheadline?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  image?: SanityImage;
};

export type Stat = { value: number; suffix?: string; label: string };

export type Service = {
  _id: string;
  title: string;
  description?: string;
  icon?: string;
  features?: string[];
};

export type Project = {
  _id: string;
  title: string;
  slug?: string;
  category?: string;
  client?: string;
  year?: string;
  description?: string;
  tags?: string[];
  url?: string;
  featured?: boolean;
  cover?: SanityImage;
};

export type ProcessStep = {
  _id: string;
  step?: string;
  title: string;
  description?: string;
};

export type Testimonial = {
  _id: string;
  name: string;
  role?: string;
  company?: string;
  quote: string;
  rating?: number;
  avatar?: SanityImage;
};

export type Client = {
  _id: string;
  name: string;
  url?: string;
  logo?: SanityImage;
};

export type TeamMember = {
  _id: string;
  name: string;
  role?: string;
  bio?: string;
  photo?: SanityImage;
  socials?: { platform?: string; url?: string }[];
};

export type Faq = { _id: string; question: string; answer: string };

export type HomeData = {
  hero?: Hero;
  stats?: Stat[];
  services?: Service[];
  projects?: Project[];
  process?: ProcessStep[];
  testimonials?: Testimonial[];
  clients?: Client[];
  team?: TeamMember[];
  faqs?: Faq[];
};
