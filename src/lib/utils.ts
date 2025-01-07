import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertToBRL(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}

export function convertToCurrency(value: number, currency: string) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: currency,
  }).format(value)
}

export function inputMask (e: string) {
  const value = e.replace(/\D/g, ""); 
  const numericValue = parseFloat(value) / 100; 
  const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
  }).format(numericValue); 

  return formattedValue;
};

export function convertInterestRate(e: string) {
  const value = e.replace(/\D/g, ""); 
  const numericValue = parseFloat(value) / 100; 
  const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "decimal",
      minimumFractionDigits: 2,
  }).format(numericValue); 

  return formattedValue;
}

export function calculateInvestment(initialInvestment: number, monthlyInvestment: number, deadLine: number, interestRate: number) {
  let finalValue = initialInvestment;

  for (let i = 0; i < deadLine; i++) {
    finalValue += monthlyInvestment;
    finalValue += finalValue * (interestRate / 100);
  }

  return finalValue;
}

export function calculateFinalInterest(result: number, initialInvestment: number) {
  return result - initialInvestment;
}