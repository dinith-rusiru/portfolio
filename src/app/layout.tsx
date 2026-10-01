import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dinith Rusiru | Full-Stack Developer & Software Engineer Portfolio",
  description:
    "Official 3D Portfolio website of Dinith Rusiru, Software Engineer & Full-Stack Developer specializing in React.js, Next.js, Node.js, FastAPI, and SaaS development.",
  keywords: [
    "Dinith Rusiru",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js Portfolio",
    "React Developer Sri Lanka",
    "Node.js Engineer",
    "3D Web Developer"
  ],
  authors: [{ name: "Dinith Rusiru" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
