import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VetCare | Cuidamos de quienes más quieres",
  description:
    "Atención veterinaria cercana, prevención y bienestar para tus compañeros de vida. Solicita una cita simulada en VetCare."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
