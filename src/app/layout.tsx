import type { Metadata } from "next";
import "./globals.css";
import { MotionInfrastructure } from "@/components/system/MotionInfrastructure";

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
        <MotionInfrastructure />
        {children}
      </body>
    </html>
  );
}
