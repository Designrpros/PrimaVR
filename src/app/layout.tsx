// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Toolbar from "./components/Toolbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tjenestedesign og PRIMA - AKTHE",
  description: "Tjenestedesign og PRIMA-aktiviteter fra AKTHE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-329ZE249M1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-329ZE249M1');
            `,
          }}
        />
      </head>
      <body className={`styled-body ${geistSans.variable} ${geistMono.variable}`}>
        <Toolbar />
        {children}
      </body>
    </html>
  );
}