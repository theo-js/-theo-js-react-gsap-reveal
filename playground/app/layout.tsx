import path from "path";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { RevealObserverSetup } from "@theo-js/react-gsap-reveal";
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
  title: "@theo-js/react-gsap-reveal Playground",
  description:
    "A playground for testing and showcasing the @theo-js/react-gsap-reveal library.",
};

// Ensure the favicon path is correct based on the repo name
const faviconPath = path.join(
  "/",
  process.env.NEXT_PUBLIC_REPO_NAME ?? "",
  "favicon.ico",
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href={faviconPath} />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RevealObserverSetup threshold={1} />
        {children}
      </body>
    </html>
  );
}
