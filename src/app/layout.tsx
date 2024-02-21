import type { Metadata } from "next";
import { Montserrat, Fraunces } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--montserrat",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "700",
  variable: "--fraunces",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${fraunces.variable}`}>
        {children}
      </body>
    </html>
  );
}
