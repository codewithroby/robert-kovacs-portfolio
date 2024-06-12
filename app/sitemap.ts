import { MetadataRoute } from "next";
import { appData as app } from "~/config/app.config";

const Sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: app.domain,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1.0,
    },
  ];
};

export default Sitemap;
