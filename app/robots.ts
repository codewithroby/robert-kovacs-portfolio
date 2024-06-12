import { MetadataRoute } from "next";
import { appData as app } from "~/config/app.config";

const Robots = (): MetadataRoute.Robots => {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/private",
      },
    ],
    sitemap: `${app.domain}/sitemap.xml`,
  };
};

export default Robots;
