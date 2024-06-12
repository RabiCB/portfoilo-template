import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "John Murphy-Frontend Developer",
  openGraph: {
    title: "John Murphy-Frontend developer ",
    images: "/me.jpeg",
    siteName:"John Murphy",
    description:
      "John Murphy: Frontend developer adept in React, with 2 year's experience. Specializes in building robust, responsive interfaces with a focus on modern web practices. ",
  },
  twitter: {
    title: "John Murphy-Frontend developer ",
    images: "/me.jpeg",
    site: "https://X.com",
    description:
      "John Murphy: Frontend developer adept in React, with 2 year's experience. Specializes in building robust, responsive interfaces with a focus on modern web practices. ",
  },
  robots: {
    index: true,
    follow: true, 
  },

  description:
    "John Murphy: Frontend developer adept in React, with 2 year's experience. Specializes in building robust, responsive interfaces with a focus on modern web practices. ",
  keywords:
    "john murphy, frontend developer, frontend, react, javascript, typescript, html, css, nextjs, tailwindcss, reactjs, react native, react hooks, redux, redux toolkit, redux saga, redux persist, react router, react router dom, styled components, styled system, emotion, material ui, material ui icons, material ui icons, material ui icons, material ui icons, material ui icons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={GeistSans.className} lang="en">
      <body>
        <main className="bg-[#090A14]">{children}</main>
      </body>
    </html>
  );
}
