"use client";
import { convertInterestRate, inputMask } from "@/lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GoGraph } from "react-icons/go";
import { Card, CardContent } from "../ui/card";
import { Calculator } from "lucide-react";

export default function DataForm() {
  const [initialInvestment, setInitialInvestment] = useState<string>("");
  const [monthlyInvestment, setMonthlyInvestment] = useState<string>("");
  const [deadLine, setDeadLine] = useState<string>("");
  const [interestRate, setInterestRate] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      initialInvestment: parseFloat(initialInvestment.replace(/\D/g, "")) / 100,
      monthlyInvestment: parseFloat(monthlyInvestment.replace(/\D/g, "")) / 100,
      deadLine: parseInt(deadLine),
      interestRate: parseFloat(interestRate.replace(/\D/g, "")) / 100,
    };

    const params = new URLSearchParams();
    params.set("initialInvestment", data.initialInvestment.toString());
    params.set("monthlyInvestment", data.monthlyInvestment.toString());
    params.set("deadLine", data.deadLine.toString());
    params.set("interestRate", data.interestRate.toString());

    router.push(`/calculadora/juros-compostos/resultado?${params.toString()}`);
  };

  const handleConvertCurrency = (
    event: React.ChangeEvent<HTMLInputElement>
  ): string => {
    const value = event.target.value;
    const formattedValue = inputMask(value);
    return formattedValue;
  };

  return (
    <div className="flex flex-col pt-4 md:pt-16 items-center h-dvh gap-4 md:gap-6 max-w-screen-lg mx-auto">
      <h1 className="animate-fade-up text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl text-center flex items-center gap-1 md:gap-2">
        Juros
        <span className="bg-gradient-to-r from-destructive to-destructive bg-clip-text text-transparent">
          compostos
        </span>
        <GoGraph className="sm:text-5xl md:text-6xl inline-block" />
      </h1>
      <Card className="w-[280px] md:w-[520px] md:h-fit py-6">
        <CardContent className="flex flex-col gap-2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full h-full"
          >
            <div>
              <div className="flex flex-col gap-2 md:flex-row">
                <Input
                  className="w-full h-16 font-bold md:text-2xl text-zinc-800"
                  name="initialInvestment"
                  placeholder="Investimento Inicial"
                  value={initialInvestment}
                  onChange={(e) =>
                    setInitialInvestment(handleConvertCurrency(e))
                  }
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2 md:flex-row">
                <Input
                  className="w-full h-16 font-bold md:text-2xl text-zinc-800 disabled:text-zinc-800"
                  name="monthlyInvestment"
                  placeholder="Investimento Mensal"
                  value={monthlyInvestment}
                  onChange={(e) =>
                    setMonthlyInvestment(handleConvertCurrency(e))
                  }
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2 md:flex-row">
                <Input
                  className="w-full h-16 font-bold md:text-2xl text-zinc-800 disabled:text-zinc-800"
                  name="deadLine"
                  placeholder="Prazo (Meses)"
                  type="number"
                  value={deadLine}
                  onChange={(e) => setDeadLine(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2 md:flex-row">
                <Input
                  className="w-full h-16 font-bold md:text-2xl text-zinc-800 disabled:text-zinc-800"
                  name="interestRate"
                  placeholder="Rentabilidade (% a.m.)"
                  value={interestRate}
                  onChange={(e) =>
                    setInterestRate(convertInterestRate(e.target.value))
                  }
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full mt-4 h-12 md:h-14 font-bold flex items-center mx-auto"
            >
              <Calculator className="w-6 h-6" />
              Calcular
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
