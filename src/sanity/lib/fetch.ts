import { client } from "./client";
import { isSanityConfigured } from "../env";

/**
 * Pembungkus aman untuk client.fetch.
 * - Jika Sanity belum dikonfigurasi (projectId placeholder), langsung null.
 * - Jika fetch error (mis. project belum ada konten), kembalikan null
 *   sehingga komponen memakai konten fallback dan situs tetap tampil.
 */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  revalidate = 60,
): Promise<T | null> {
  if (!isSanityConfigured) return null;
  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate },
    });
  } catch (err) {
    console.warn("[sanity] fetch gagal, memakai konten fallback:", err);
    return null;
  }
}
