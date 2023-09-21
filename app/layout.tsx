import Provider from "@/components/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Potfolio | Karan Chaudhary",
  description:
    "Software Engineer | Full Stack Developer | Frontend Developer | Backend Developer | SEO | Karan Chaudhary | Nextjs | Reactjs | Tailwindcss | Framer Motion | Tailwindcss | Framer Motion | Tailwindcss | Framer Motion | Tailwindcss | Framer Motion | Tailwindcss | Animation ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/karan.png" sizes="128 *111" />
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}