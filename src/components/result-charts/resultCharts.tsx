import { convertToBRL } from "@/lib/utils";
import ResultItemCard from "../result-item-card/resultItemCard";

interface ResultChartsProps {
    result: number;
    initialInvestment: string;
}

export default function ResultCharts({ result, initialInvestment: receivedInitialInvestments }: ResultChartsProps) {
    const initialInvestment = parseFloat(receivedInitialInvestments.replace(/\D/g, "")) / 100
    const totalInterest = (result - initialInvestment); 
    const finalValue = convertToBRL(result); 

    return (
        <div className="flex flex-col gap-4 w-[280px]">
            <div className="flex flex-col gap-2">
                <ResultItemCard title="Valor total bruto" value={finalValue} />
                <ResultItemCard title="Valor investido" value={receivedInitialInvestments} />
                <ResultItemCard title="Valor em juros" value={convertToBRL(totalInterest)} />
            </div>
        </div>
    );
}