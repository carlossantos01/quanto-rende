import DataForm from "@/components/data-form/dataForm";

export const metadata = {
  title: "Calculadora de Juros Compostos | Quanto Rendeu?",
  description:
    "Calculadora de Juros Compostos online - Simule os juros compostos de seus investimentos com a Calculadora de Juros Compostos da Quanto Rendeu?.",
  openGraph: {
    title: "Calculadora de Juros Compostos | Quanto Rendeu?",
    description:
      "Calculadora de Juros Compostos online - Simule os juros compostos de seus investimentos com a Calculadora de Juros Compostos da Quanto Rendeu?.",
    url: "https://v1-quanto-rendeu.vercel.app/calculadora/juros-compostos",
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
  return <DataForm />;
}
