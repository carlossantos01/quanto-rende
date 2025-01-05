"use client";
import { convertInterestRate, inputMask } from "@/lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

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

    router.push(`/resultado?${params.toString()}`);
  };

  const handleReset = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInitialInvestment("");
    setMonthlyInvestment("");
    setDeadLine("");
    setInterestRate("");
  };

  const handleConvertCurrency = (
    event: React.ChangeEvent<HTMLInputElement>
  ): string => {
    const value = event.target.value;
    const formattedValue = inputMask(value);
    return formattedValue;
  };

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      className="flex flex-col gap-4 w-[280px]"
    >
      <div className="flex flex-col gap-2">
        <Input
          name="initialInvestment"
          placeholder="Investimento Inicial"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(handleConvertCurrency(e))}
        />
        <Input
          name="monthlyInvestment"
          placeholder="Investimento Mensal"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(handleConvertCurrency(e))}
        />
        <Input
          name="deadLine"
          placeholder="Prazo (Meses)"
          type="number"
          value={deadLine}
          onChange={(e) => setDeadLine(e.target.value)}
        />
        <Input
          name="interestRate"
          placeholder="Rentabilidade (% a.m.)"
          value={interestRate}
          onChange={(e) => setInterestRate(convertInterestRate(e.target.value))}
        />
      </div>
      <div className="flex justify-between gap-2">
        <Button type="reset" className="w-1/2 " variant={"secondary"}>
          Limpar
        </Button>
        <Button type="submit" className="w-1/2 font-semibold">
          Calcular
        </Button>
      </div>
    </form>
  );
}
