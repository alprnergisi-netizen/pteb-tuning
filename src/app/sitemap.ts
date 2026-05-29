import type { MetadataRoute } from "next";
import env from "@/env";
import { LOCATIONS } from "@/lib/locations";

const BASE_URL = env.NEXT_PUBLIC_APP_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-05-20"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/our-work`,
      lastModified: new Date("2026-05-20"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tuning-guide`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date("2026-05-20"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/warport`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/book`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/team`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    // Melbourne local
    {
      url: `${BASE_URL}/melbourne-tuning`,
      lastModified: new Date("2026-05-21"),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    // Remote tuning hub
    {
      url: `${BASE_URL}/remote-tuning`,
      lastModified: new Date("2026-05-21"),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    // Location pages
    ...LOCATIONS.map((loc) => ({
      url: `${BASE_URL}/remote-tuning/${loc.slug}`,
      lastModified: new Date("2026-05-21"),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
