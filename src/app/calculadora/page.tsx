import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { BsFillCalculatorFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";

export const metadata = {
  title: "Calculadora de investimentos | Quanto Rendeu?",
  description:
    "Calculadora de investimentos online - Simule os seus investimentos com a Calculadora da Quanto Rendeu?.",
  openGraph: {
    title: "Calculadora de investimentos | Quanto Rendeu?",
    description:
      "Calculadora de investimentos online - Simule os seus investimentos com a Calculadora da Quanto Rendeu?.",
    url: "https://v1-quanto-rendeu.vercel.app/calculadora",
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
  const calculator = [
    {
      title: "Juros compostos",
      description: "Simule o rendimento de investimentos com juros compostos.",
      icon: BsFillCalculatorFill,
    },
  ];
  return (
    <div className="flex flex-col pt-4 md:pt-16 items-center gap-4 md:gap-6 max-w-screen-lg mx-auto">
      <h1 className="animate-fade-up text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl text-center flex flex-col md:flex-row items-center gap-1 md:gap-2">
        Calculadora de
        <span className="bg-gradient-to-r from-destructive to-destructive bg-clip-text text-transparent">
          investimentos
        </span>{" "}
        <BsFillCalculatorFill className="sm:text-5xl md:text-6xl lg:text-6xl md:inline-block hidden" />
      </h1>

      <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 px-4 md:px-0">
          {calculator.map((item, index) => (
            <div key={index}>
              <Link href="/calculadora/juros-compostos">
                <Card className="w-full md:hover:bg-zinc-100">
                  <CardContent className="flex items-center justify-between gap-4 pt-6">
                    <GoGraph className="sm:text-5xl md:text-6xl md:inline-block hidden" />
                    <div className="flex justify-between w-full items-center gap-4">
                      <div className="flex flex-col gap-2">
                        <h2 className="md:text-xl font-bold">{item.title}</h2>
                        <p className="text-xs">{item.description}</p>
                      </div>
                      <Button className="md:hidden block">Ir</Button>
                      <Button className="hidden md:block">Simular</Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-center mt-4 md:text-xs text-[8px] max-w-[280px] mx-auto md:max-w-full md:mx-0">
          Estamos trabalhando em mais tipos de calculadoras para seus
          investimentos.
        </p>
      </div>
    </div>
  );
}
