"use client";

import ResultCharts from "@/components/result-charts/resultCharts";
import { Button } from "@/components/ui/button";
import { calculateInvestment, convertToBRL } from "@/lib/utils";
import { Share } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { GoGraph } from "react-icons/go";
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

    if (navigator.share) {
      navigator.share({
        title: "Calculadora de Juros Compostos | Quanto Rendeu?",
        url: url.toString(),
      });
    } else {
      navigator.clipboard.writeText(url.toString());
      toast.success("Link copiado para a área de transferência.");
    }
  };

  const handleCalculateTotalInvestment = () => {
    const res = parseFloat(initialInvestment ?? "") + parseFloat(monthlyInvestment ?? "") * parseFloat(deadLine ?? "");
    return convertToBRL(res);
  }

  return (
    <div className="flex flex-col pt-12 items-center gap-4">
      <h1 className="animate-fade-up text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl text-center flex items-center gap-1 md:gap-2">
        Juros
        <span className="bg-gradient-to-r from-destructive to-destructive bg-clip-text text-transparent">
          compostos
        </span>
        <GoGraph className="sm:text-5xl md:text-6xl inline-block" />
      </h1>
      <ResultCharts
        result={result}
        totalInvestment={handleCalculateTotalInvestment()}
      />
      <div className="flex flex-col gap-2 w-[280px]">
        <Button className="w-full" onClick={handleCopyLink}>
          <Share size={24} />
          Compartilhar
        </Button>
        <Button
          className="w-full"
          variant={"secondary"}
          onClick={() => router.push("/calculadora/juros-compostos")}
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
