import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SRH Mutter-Kind Verwaltung",
  description: "Verwaltungssoftware für SRH Mutter-Kind-Gruppe - Fokus auf Bildungswerke und Fördergelder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.Node;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
