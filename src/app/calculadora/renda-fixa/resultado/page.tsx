"use client";

import ResultCharts from "@/components/result-charts/resultCharts";
import { Button } from "@/components/ui/button";
import { calculateInvestment, convertToBRL } from "@/lib/utils";
import { Link } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { toast } from "sonner"

function ResultPageContent() {
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
    toast.success("Link copiado para a área de transferência");
  };

  const handleCalculateTotalInvestment = () => {
    const res = parseFloat(initialInvestment ?? "") + parseFloat(monthlyInvestment ?? "") * parseFloat(deadLine ?? "");
    return convertToBRL(res);
  }

  return (
    <div className="flex flex-col pt-12 items-center h-dvh">
      <ResultCharts
        result={result}
        totalInvestment={handleCalculateTotalInvestment()}
      />
      <div className="flex flex-col gap-2 w-[280px] mt-4">
        <Button className="w-full" onClick={handleCopyLink}>
          <Link size={24} />
          Copiar link
        </Button>
        <Button
          className="w-full"
          variant={"secondary"}
          onClick={() => router.push("/calculadora/renda-fixa")}
        >
          Fazer nova simulação
        </Button>
      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultPageContent />
    </Suspense>
  );
}
