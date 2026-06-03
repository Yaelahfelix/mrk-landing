import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: Image) {
  return builder.image(source);
}

/** Helper aman: kembalikan string URL atau null jika source kosong. */
export function imageUrl(
  source: Image | undefined | null,
  width?: number,
  height?: number,
): string | null {
  if (!source || !(source as { asset?: unknown }).asset) return null;
  let b = builder.image(source).auto("format").fit("max");
  if (width) b = b.width(width);
  if (height) b = b.height(height);
  return b.url();
}
