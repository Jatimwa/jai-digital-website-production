import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JAi Digital",
  description: "Senior Digital Marketing Consultancy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
