import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "@/shared/theme";
import { ReactNode } from "react";

const mono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Dogs App",
  description: "N! Factorial Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={darkTheme}>
        <body className={mono.className}>
          <Header />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
