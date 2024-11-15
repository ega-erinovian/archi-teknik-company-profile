import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/utils/font";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Archi Teknik | Home",
  description:
    "Discover exceptional architectural and engineering consulting services, offering innovative designs, precise planning, and sustainable solutions for projects worldwide. Partner with experts to bring your vision to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
