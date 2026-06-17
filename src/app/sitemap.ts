import { MetadataRoute } from "next";
import { articles } from "./Blog/Articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://recaudocarteraipsyeps.com",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    // Servicios
    {
      url: "https://recaudocarteraipsyeps.com/Servicios/recuperacion-cartera-eps",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: "https://recaudocarteraipsyeps.com/Servicios/cobro-adres",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: "https://recaudocarteraipsyeps.com/Servicios/cartera-glosada",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: "https://recaudocarteraipsyeps.com/Servicios/proceso-ejecutivo-eps",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: "https://recaudocarteraipsyeps.com/Servicios/medidas-cautelares-eps",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },

    // Sectores
    {
      url: "https://recaudocarteraipsyeps.com/Sectores/ips",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://recaudocarteraipsyeps.com/Sectores/clinicas",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://recaudocarteraipsyeps.com/Sectores/hospitales",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Blog principal
    {
      url: "https://recaudocarteraipsyeps.com/Blog",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const pillarArticles = [
    "como-recuperar-cartera-eps-colombia",
    "como-demandar-eps-colombia",
    "cobro-cartera-adres",
    "como-responder-glosas-medicas",
    "mejorar-liquidez-financiera-ips",
    "cobro-cartera-eps-intervenidas",
    "prescripcion-cartera-salud",
    "medidas-cautelares-cobro-eps",
  ];

  const blogPages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `https://recaudocarteraipsyeps.com/Blog/${article.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: pillarArticles.includes(article.slug) ? 0.9 : 0.8,
  }));

  return [...staticPages, ...blogPages];
}
