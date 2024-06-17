import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apu Das | MERN Developer",
  description: "Explore the portfolio of Apu Chandra Das, a proficient Full Stack Web Developer skilled in HTML, CSS, JavaScript, React.js, Node.js, MongoDB, TypeScript, Next.js, Shadcn UI, Aeternity UI, Docker, Mongoose, Prisma, Redux, and Bootstrap. Discover his projects, expertise in building interactive user interfaces and RESTful APIs, and his passion for creating mobile-friendly web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50  max-w-[1400px] mx-auto`}>
      <Navbar  />
        {children}</body>
    </html>
  );
}
