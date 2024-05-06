import { MetadataRoute } from "next";
import { getAllShows } from "./lib/shows/getAllShows";
const websiteHost = process.env.WEBSITE_HOST_URL || "segunaniyi.com";

type changeFrequency =
  | "always"
  | "daily"
  | "hourly"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const changeFrequency = "daily" as changeFrequency;

    const gigs = await getAllShows(); // Await the result of getAllShows

    const shows = gigs.map(({ slug, created_at }) => ({
      url: `${websiteHost}/shows/${slug}`,
      lastModified: created_at,
      changeFrequency,
    }));

    const routes = ["/shows", "/gallery", "/music", ""].map((route) => ({
      url: `${websiteHost}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency,
    }));
    return [...routes, ...shows];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
}
