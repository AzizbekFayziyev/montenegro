import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoTopBtn from "@/components/GoTopBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Роял ВНЖ",
  description:
    "Получите ВНЖ Черногории за 30-45 дней за 3.000 евро в стране, где солнце, море, горы и которая скоро станет Европой.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" />

      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />

        <GoTopBtn />
      </body>
    </html>
  );
}
