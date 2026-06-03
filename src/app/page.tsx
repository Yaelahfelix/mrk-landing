import { sanityFetch } from "@/sanity/lib/fetch";
import { homeQuery, settingsQuery } from "@/sanity/lib/queries";
import { isSanityConfigured } from "@/sanity/env";
import { fallbackHome, fallbackSettings } from "@/lib/fallback";
import type { HomeData, Settings } from "@/lib/types";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Clients } from "@/components/Clients";
import { Team } from "@/components/Team";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SetupNotice } from "@/components/SetupNotice";

// Pakai nilai Sanity bila ada isinya, jika tidak pakai fallback.
function pick<T>(value: T | undefined | null, fallback: T): T {
  if (value == null) return fallback;
  if (Array.isArray(value) && value.length === 0) return fallback;
  if (typeof value === "object" && Object.keys(value).length === 0)
    return fallback;
  return value;
}

export const revalidate = 60;

export default async function HomePage() {
  const [settingsRaw, homeRaw] = await Promise.all([
    sanityFetch<Settings>(settingsQuery),
    sanityFetch<HomeData>(homeQuery),
  ]);

  const settings: Settings = {
    ...fallbackSettings,
    ...(settingsRaw ?? {}),
    navLinks: pick(settingsRaw?.navLinks, fallbackSettings.navLinks!),
    contact: { ...fallbackSettings.contact, ...(settingsRaw?.contact ?? {}) },
    socials: pick(settingsRaw?.socials, fallbackSettings.socials!),
  };

  const home: HomeData = {
    hero: pick(homeRaw?.hero, fallbackHome.hero!),
    stats: pick(homeRaw?.stats, fallbackHome.stats!),
    services: pick(homeRaw?.services, fallbackHome.services!),
    projects: pick(homeRaw?.projects, fallbackHome.projects!),
    process: pick(homeRaw?.process, fallbackHome.process!),
    testimonials: pick(homeRaw?.testimonials, fallbackHome.testimonials!),
    clients: pick(homeRaw?.clients, fallbackHome.clients!),
    team: pick(homeRaw?.team, fallbackHome.team!),
    faqs: pick(homeRaw?.faqs, fallbackHome.faqs!),
  };

  return (
    <>
      <Navbar settings={settings} />
      <main>
        <Hero data={home.hero!} />
        <Stats stats={home.stats!} />
        <Services services={home.services!} />
        <Projects projects={home.projects!} />
        <Process steps={home.process!} />
        <Testimonials items={home.testimonials!} />
        <Clients clients={home.clients!} />
        <Team team={home.team!} />
        <Faq faqs={home.faqs!} />
        <Contact settings={settings} />
      </main>
      <Footer settings={settings} />
      {!isSanityConfigured && <SetupNotice />}
    </>
  );
}
