"use client";

import ResultCharts from "@/components/result-charts/resultCharts";
import { Button } from "@/components/ui/button";
import { calculateInvestment, convertToBRL } from "@/lib/utils";
import { Link } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [result, setResult] = useState<number>(0);

  const initialInvestment = searchParams.get("initialInvestment");
  const monthlyInvestment = searchParams.get("monthlyInvestment");
  const deadLine = searchParams.get("deadLine");
  const interestRate = searchParams.get("interestRate");

  useEffect(() => {
    const handleCalculateInvestment = () => {
      const result = calculateInvestment(
        parseFloat(initialInvestment ?? ""),
        parseFloat(monthlyInvestment ?? ""),
        parseFloat(deadLine ?? ""),
        parseFloat(interestRate ?? "")
      );

      setResult(result);
    };

    handleCalculateInvestment();
  }, [initialInvestment, monthlyInvestment, deadLine, interestRate]);

  const handleCopyLink = () => {
    const url = new URL(window.location.href);
    navigator.clipboard.writeText(url.href);
  };

  return (
    <div className="flex flex-col justify-center items-center h-dvh">
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
        Quanto Rende?
      </h1>
      <h2 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0 mb-3">
        Simulador de Investimento
      </h2>
      <ResultCharts
        result={result}
        initialInvestment={convertToBRL(parseFloat(initialInvestment ?? ""))}
      />
      <div className="flex flex-col gap-2 w-[280px] mt-4">
        <Button className="w-full" onClick={handleCopyLink}>
          <Link size={24} />
          Copiar link
        </Button>
        <Button
          className="w-full"
          variant={"secondary"}
          onClick={() => router.push("/")}
        >
          Fazer nova simulação
        </Button>
      </div>
    </div>
  );
}
