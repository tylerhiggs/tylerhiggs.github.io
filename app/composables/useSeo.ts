export const SITE_URL = "https://tylerhiggs.github.io";
export const SITE_NAME = "Tyler Higgs";

/**
 * Sets title/description, Open Graph, and Twitter Card meta tags plus a
 * canonical link for a page. `path` must be the route's path (e.g. "/" or
 * "/eave-inspect") so absolute canonical/og:url/og:image values can be built
 * for a statically generated site with no server-side origin to infer from.
 */
export function usePageSeo(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const url = `${SITE_URL}${opts.path}`;
  const image = opts.image ? `${SITE_URL}${opts.image}` : undefined;

  useSeoMeta({
    title: opts.title,
    description: opts.description,
    ogTitle: opts.title,
    ogDescription: opts.description,
    ogUrl: url,
    ogType: "website",
    ogSiteName: SITE_NAME,
    ogImage: image,
    twitterCard: image ? "summary_large_image" : "summary",
    twitterTitle: opts.title,
    twitterDescription: opts.description,
    twitterImage: image,
  });
  useHead({
    link: [{ rel: "canonical", href: url }],
  });
}
