import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",

        allow: "/",

        disallow: [
          "/_next/",
          "/api/",
          "/*.woff2$",
          "/*.woff$",
          "/*.ttf$",
          "/*.ico$",
        ],
      },
    ],

    sitemap: "https://recaudocarteraipsyeps.com/sitemap.xml",
  };
}
