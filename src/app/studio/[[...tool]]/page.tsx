/**
 * Route Sanity Studio yang tertanam di aplikasi Next.js.
 * Buka /studio untuk mengedit semua konten landing page.
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
