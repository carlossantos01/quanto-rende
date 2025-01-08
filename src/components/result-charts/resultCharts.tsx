import { convertToBRL } from "@/lib/utils";
import ResultItemCard from "../result-item-card/resultItemCard";

interface ResultChartsProps {
    result: number;
    totalInvestment: string;
}

export default function ResultCharts({ result, totalInvestment }: ResultChartsProps) {
    const initialInvestment = parseFloat(totalInvestment.replace(/\D/g, "")) / 100
    const totalInterest = (result - initialInvestment); 
    const finalValue = convertToBRL(result); 

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <ResultItemCard title="Valor total bruto" value={finalValue} />
                <ResultItemCard title="Valor investido" value={totalInvestment} />
                <ResultItemCard title="Valor em juros" value={convertToBRL(totalInterest)} />
            </div>
        </div>
    );
}