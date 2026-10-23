import type { NextConfig } from "next";
import { redireccionesConsolidacion } from "./redirects.consolidacion";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // 2026-10-23: consolidación SEO — ver redirects.consolidacion.ts
  async redirects() {
    return redireccionesConsolidacion;
  },
};

export default nextConfig;
