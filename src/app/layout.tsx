import type { Metadata } from "next";
import "./globals.css";
import { Mulish } from 'next/font/google';
import { Toaster } from "@/components/ui/sonner"
import CustomHeader from "@/components/custom-header/customHeader";

const mulish = Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Quanto Rendeu? - Calculadora de Investimentos",
  description: "Calcule quanto você pode ganhar com seus investimentos, cotações de câmbio e muito mais.",
  openGraph: {
    title: "Quanto Rendeu? - Calculadora de Investimentos",
    description: "Calcule quanto você pode ganhar com seus investimentos, cotações de câmbio e muito mais.",
    url: "https://v1-quanto-rendeu.vercel.app/",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/e8f59c28-7e0e-4fba-a398-e0c4b598d342.png?token=8zRNDuCPpBHg_Ou8vp07Go4IvIuPMycY4rle2NqQnrM&height=675&width=1200&expires=33272310195",
        width: 800,
        height: 600,
      },
    ],
  },
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
      </body>
    </html>
  );
}
