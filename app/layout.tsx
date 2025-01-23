import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({subsets: ["latin"]})
export const metadata: Metadata = {
  title: "Portfolio | Abatov",
  description: "Portfolio website made by  next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favivon.png" />
      </head>
      <body
        className={`${inter.className}antialiased`}
      >
        <ThemeProvider
        attribute="class"
        enableSystem
        defaultTheme="system">
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
