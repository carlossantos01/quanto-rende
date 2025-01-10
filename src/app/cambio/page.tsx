import ExchangeRatePage from "@/components/exchange-rate-page/exchangeRatePage";
import { Suspense } from "react";

export const metadata = {
  title: "Conversor de moedas | Quanto Rendeu?",
  description:
    "Conversor de moeda online - Acompanhe o câmbio e converta todas as principais moedas internacionais com o Conversor de Moedas da Quanto Rendeu?.",
  openGraph: {
    title: "Conversor de moedas | Quanto Rendeu?",
    description:
      "Conversor de moeda online - Acompanhe o câmbio e converta todas as principais moedas internacionais com o Conversor de Moedas da Quanto Rendeu?.",
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

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExchangeRatePage />
    </Suspense>
  );
}
