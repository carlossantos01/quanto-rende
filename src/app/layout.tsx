import type { Metadata } from "next";
import "./globals.css";
import { Mulish } from 'next/font/google';

const mulish = Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Quanto Rende? - Calculadora de Renda Fixa",
  description: "Calcule quanto você pode ganhar com investimentos em renda fixa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${mulish.className}} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
