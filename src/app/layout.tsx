"use client"

// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import styled from 'styled-components';
import "./globals.css";
import Toolbar from "./components/Toolbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const StyledBody = styled.body`
  background-color: #4b6079;
  margin: 0;
  min-height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

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
      <StyledBody className={`${geistSans.variable} ${geistMono.variable}`}>
        <Toolbar />
        {children}
      </StyledBody>
    </html>
  );
}