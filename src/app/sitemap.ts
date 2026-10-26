import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const paths = ["", "/services", "/doctors", "/patient-information", "/contact"];
  return paths.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
  }));
}
