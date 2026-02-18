import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julian Maldonado | Programación & Fotografía",
  description: "Software Developer & Analog Photographer",
  keywords: ["Julian Maldonado", "Programación UTN", "UBA Imagen y Sonido", "DevOps", "Fotografía Analógica", "Next.js"],
  authors: [{ name: "Julian Maldonado" }],
  openGraph: {
    title: "Julian Maldonado | Portfolio",
    description: "Desarrollo de software y fotografía analógica.",
    url: "https://julimaldonado.com",
    siteName: "Julian Maldonado Portfolio",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Logo Julian Maldonado",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
