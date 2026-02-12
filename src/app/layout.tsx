import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recuperación de Cartera en Salud | PRAVICE Abogados",
  description:
    "Recuperación estratégica de cartera para IPS, clínicas y hospitales en Colombia. Modelo 10% sobre recaudo efectivo. Diagnóstico gratuito.",
  keywords: [
    "recuperación de cartera en salud",
    "cobro jurídico EPS",
    "cartera ADRES",
    "demanda contra EPS",
    "recuperación cartera IPS Colombia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
