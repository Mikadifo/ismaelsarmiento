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
    { path: "./../fonts/Sansation_Light.ttf", weight: "200", style: "normal" },
  ],
});

export const metadata = {
  title: "Psicólogo Ismael Sarmiento",
  description:
    "Hola mucho gusto, mi nombre es Ismael Sarmiento y tengo 28 años de edad. Llevo desempeñando mi profesión de psicólogo clínico desde hace más de 4 años. La verdad ha sido una experiencia gratificante el poder brindar una orientación y apoyo a todas aquellas personas que están pasando por momentos difíciles en su vida. La experiencia y los casos que he abordado han sido mi mayor fuente de aprendizaje hasta aquí. Tengo muchos deseos y ambición por seguir creciendo profesionalmente. Cada día es una experiencia y un aprendizaje más para mi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sansation.className} antialiased`}>{children}</body>
    </html>
  );
}
