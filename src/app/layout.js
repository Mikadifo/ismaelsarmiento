import localFont from "next/font/local";
import "./globals.css";

const sansation = localFont({
  src: [
    {
      path: "./../fonts/Sansation_Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  src: [
    { path: "./../fonts/Sansation_Bold.ttf", weight: "700", style: "normal" },
  ],
  src: [
    { path: "./../fonts/Sansation_Light.ttf", weight: "300", style: "normal" },
  ],
});

export function generateMetadata() {
  return {
    title:
      "Ismael Sarmiento | Psicólogo en Cuenca, Ecuador | Terapia y Bienestar Emocional",
    description:
      "Ismael Sarmiento, psicólogo en Cuenca, Ecuador. Ofrezco terapia psicológica personalizada para el bienestar emocional, manejo del estrés, ansiedad, depresión y más. ¡Agenda tu cita hoy!",
    keywords:
      "psicólogo Cuenca, terapia psicológica, bienestar emocional, ansiedad, depresión, estrés, psicólogo en Ecuador, Ismael Sarmiento, psicólogos en Cuenca Ecuador",
    authors: [{ name: "Ismael Sarmiento" }],
    other: {
      "geo.region": "EC-AZ",
      "geo.placename": "Cuenca",
      "geo.position": "-2.90055;-79.00453",
      ICBM: "-2.90055, -79.00453",
      language: "Spanish",
    },
    icons: {
      icon: "/favicon.ico",
    },
    alternates: {
      canonical: "https://ismaelsarmiento.com/",
    },
    openGraph: {
      title:
        "Ismael Sarmiento | Psicólogo en Cuenca, Ecuador | Terapia y Bienestar Emocional",
      description:
        "Ismael Sarmiento, psicólogo en Cuenca, Ecuador. Ofrezco terapia psicológica personalizada para el bienestar emocional, manejo del estrés, ansiedad, depresión y más. ¡Agenda tu cita hoy!",
      type: "website",
      url: "https://ismaelsarmiento.com",
      siteName: "Psicólogo Ismael Sarmiento",
      images: [
        {
          url: "https://ismaelsarmiento.com/portrait.png",
          alt: "Ismael Sarmiento | Psicólogo en Cuenca, Ecuador | Terapia y Bienestar Emocional",
        },
      ],
      locale: "es_EC",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${sansation.className} antialiased`}>{children}</body>
    </html>
  );
}
