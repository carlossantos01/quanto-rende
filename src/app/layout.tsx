import type { Metadata } from "next";
import "./globals.css";
import { Mulish } from 'next/font/google';
import { Toaster } from "@/components/ui/sonner"
import CustomHeader from "@/components/custom-header/customHeader";
import CustomFooter from "@/components/custom-footer/customFooter";

const mulish = Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Quanto Rendeu? - Calculadora de Renda Fixa",
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
        <CustomHeader />
        {children}
        <Toaster position="top-center" richColors/>
        <CustomFooter />
      </body>
    </html>
  );
}
