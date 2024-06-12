import { env } from "~/env";

export const appData: AppData = {
  name: "Robert Kovacs - Personal Portfolio",
  slug: "/",
  description:
    "An animated portfolio designed and built using modern tech stack.",
  domain: env.DOMAIN,
  creator: {
    name: "Robert Kovacs",
    link: "https://github.com/roby-codes",
  },
  keywords: ["web app", "web site", "robert kovacs"],
  brandColor: "#FFFFFF",
};
