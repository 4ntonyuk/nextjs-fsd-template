import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "NextJS FSD Template",
  description: "Lorem ipsum dolor",
};

export function RootLayout({
  children,
}: Readonly<{
  children: Children;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
