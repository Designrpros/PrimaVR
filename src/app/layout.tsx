"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import styled from 'styled-components';
import "./globals.css";
import Toolbar from "./components/Toolbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const StyledBody = styled.body`
  background-color: #4b6079;
  margin: 0;
  min-height: 100vh; /* Ensure body spans at least viewport height */
  overflow-y: auto; /* Explicitly allow vertical scrolling */
  display: flex;
  flex-direction: column; /* Stack children vertically */
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledBody className={`${geistSans.variable} ${geistMono.variable}`}>
        <Toolbar />
        {children}
      </StyledBody>
    </html>
  );
}