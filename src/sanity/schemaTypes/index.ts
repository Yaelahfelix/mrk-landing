import { type SchemaTypeDefinition } from "sanity";

import { siteSettings } from "./siteSettings";
import { hero } from "./hero";
import { stat } from "./stat";
import { service } from "./service";
import { project } from "./project";
import { processStep } from "./processStep";
import { testimonial } from "./testimonial";
import { clientLogo } from "./client";
import { teamMember } from "./teamMember";
import { faq } from "./faq";

export const schemaTypes: SchemaTypeDefinition[] = [
  // Singleton
  siteSettings,
  hero,
  // Koleksi
  stat,
  service,
  project,
  processStep,
  testimonial,
  clientLogo,
  teamMember,
  faq,
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};
