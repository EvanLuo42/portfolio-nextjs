import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import NavBar from "@/app/components/nav-bar";

export const metadata: Metadata = {
  title: "Evan Luo Portfolio",
  description: "Evan Ziyun Luo's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <NavBar/>
        </header>
        <main className="max-w-screen-xl mx-8 md:mx-40 md:p-4 mt-10">
          {children}
        </main>
        <footer className="h-40"></footer>
      </body>
    </html>
  );
}
