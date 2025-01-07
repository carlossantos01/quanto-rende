import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-dvh max-w-screen-lg mx-auto gap-4">
      <div className="flex flex-col items-center gap-4 md:mt-28 mt-10 px-4 md:px-2">
      <div className="space-y-4">
          <h1 className="animate-fade-up text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-center">
            A plataforma para cálculo de{" "}
            <span className="bg-gradient-to-r from-destructive to-destructive bg-clip-text text-transparent">
              renda fixa
            </span>{" "}
              <span className="inline-block rounded-lg bg-foreground px-4 py-2 text-background">
                mais completa
              </span>{" "}
              do mercado.
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-center">
            Aqui você encontra as melhores simulações para renda fixa, informações sobre câmbio e muito mais gratuitamente.
          </p>
        </div>
        <div className="flex gap-2 md:gap-4 items-center justify-center md:mt-6 mt-4 w-full md:w-[320px]">
          <Link href="/calculadora/renda-fixa">
            <Button className="md:w-[228px] w-[198px] h-10 md:h-12 font-bold flex items-center">
              <Calculator className="md:w-12 w-8" />
              Fazer simulação
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
