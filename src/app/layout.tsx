import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";

const mono = JetBrains_Mono({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "My Dogs App",
  description: "N! Factorial Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mono.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
