import { MetadataRoute } from "next";

export default function SiteMap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://recaudocarteraipsyeps.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://recaudocarteraipsyeps.com/Blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://recaudocarteraipsyeps.com/Servicios/recuperacion-cartera-eps",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://recaudocarteraipsyeps.com/Servicios/cobro-adres",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://recaudocarteraipsyeps.com/Servicios/cartera-glosada",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://recaudocarteraipsyeps.com/Servicios/proceso-ejecutivo-eps",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://recaudocarteraipsyeps.com/Servicios/medidas-cautelares-eps",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://recaudocarteraipsyeps.com/Sectores/ips",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://recaudocarteraipsyeps.com/Sectores/clinicas",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://recaudocarteraipsyeps.com/Sectores/hospitales",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
