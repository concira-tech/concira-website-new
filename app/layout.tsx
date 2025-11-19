import type { Metadata } from "next";
// import { Theme } from "@radix-ui/themes";
import { inter, sora } from "./_utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Concira - hospitality automation dashboard",
  description: "A hospitality automation dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
