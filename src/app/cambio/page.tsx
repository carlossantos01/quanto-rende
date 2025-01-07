"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn, convertToCurrency } from "@/lib/utils";
import { useEffect, useState } from "react";
import { TbTransferVertical } from "react-icons/tb";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";

export default function Home() {
  const [fromCurrencyValue, setFromCurrencyValue] = useState<string>("");
  const [toCurrencyValue, setToCurrencyValue] = useState<string>("");
  const [fromCurrency, setFromCurrency] = useState<string>("BRL");
  const [toCurrency, setToCurrency] = useState<string>("USD");
  const [openFromCurrency, setOpenFromCurrency] = useState(false);
  const [openToCurrency, setOpenToCurrency] = useState(false);

  const [currencies, setCurrencies] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    setFromCurrencyValue(convertToCurrency(1, fromCurrency));
    setToCurrencyValue(convertToCurrency(1, toCurrency));
    setCurrencies([
      { label: "Real brasileiro", value: "BRL" },
      { label: "Dólar dos Estados Unidos", value: "USD" },
      { label: "Euro", value: "EUR" },
      { label: "Iene japonês", value: "JPY" },
      { label: "Libra esterlina", value: "GBP" },
      { label: "Dólar australiano", value: "AUD" },
      { label: "Dólar canadense", value: "CAD" },
      { label: "Franco suíço", value: "CHF" },
      { label: "Yuan chinês", value: "CNY" },
      { label: "Peso argentino", value: "ARS" },
    ]);
  }, [fromCurrency, toCurrency]);

  const handleSwitchCurrency = () => {
    setFromCurrencyValue(toCurrencyValue);
    setToCurrencyValue(fromCurrencyValue);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="flex flex-col pt-4 md:pt-16 items-center h-dvh gap-4 md:gap-6 max-w-screen-lg mx-auto">
      <h1 className="animate-fade-up text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl text-center">
        Câmbio{" "}
        <span className="bg-gradient-to-r from-destructive to-destructive bg-clip-text text-transparent">
          hoje
        </span>{" "}
        em{" "}
        <span className="inline-block rounded-lg bg-foreground px-4 py-2 text-background">
          tempo real
        </span>
      </h1>
      <Card className="w-[280px] h-[390px] md:w-[520px] md:h-[250px] py-6">
        <CardContent className="flex flex-col gap-2">
          <div>
            <div className="flex flex-col gap-2 md:flex-row">
              <Input
                className="w-full h-16 font-bold md:text-2xl text-zinc-800"
                id="fromCurrencyValue"
                value={fromCurrencyValue}
                onChange={(e) => setFromCurrencyValue(e.target.value)}
              />
              <Popover
                open={openFromCurrency}
                onOpenChange={setOpenFromCurrency}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    className="md:w-1/3 w-full h-16 justify-between font-bold md:text-2xl text-zinc-800"
                  >
                    {fromCurrency
                      ? currencies.find(
                          (currency) => currency.value === fromCurrency
                        )?.value
                      : "Selecione uma moeda..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Selecione uma moeda..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>Nenhuma moeda encontrada.</CommandEmpty>
                      <CommandGroup>
                        {currencies.map((currency) => (
                          <CommandItem
                            key={currency.value}
                            value={currency.value}
                            onSelect={(currentValue) => {
                              setFromCurrency(
                                currentValue === fromCurrency
                                  ? ""
                                  : currentValue
                              );
                              setOpenFromCurrency(false);
                            }}
                          >
                            {currency.label}
                            <Check
                              className={cn(
                                "ml-auto",
                                fromCurrency === currency.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Button
              className="w-12 h-12 rounded-full bg-primary-500 hover:text-white text-destructive"
              onClick={handleSwitchCurrency}
            >
              <TbTransferVertical />
            </Button>
          </div>
          <div>
            <div className="flex flex-col gap-2 md:flex-row">
              <Input
                className="w-full h-16 font-bold md:text-2xl text-zinc-800"
                id="ToCurrencyValue"
                value={toCurrencyValue}
                onChange={(e) => setToCurrencyValue(e.target.value)}
              />
              <Popover open={openToCurrency} onOpenChange={setOpenToCurrency}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    className="md:w-1/3 w-full h-16 justify-between font-bold md:text-2xl text-zinc-800"
                  >
                    {toCurrency
                      ? currencies.find(
                          (currency) => currency.value === toCurrency
                        )?.value
                      : "Selecione uma moeda..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Selecione uma moeda..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>Nenhuma moeda encontrada.</CommandEmpty>
                      <CommandGroup>
                        {currencies.map((currency) => (
                          <CommandItem
                            key={currency.value}
                            value={currency.value}
                            onSelect={(currentValue) => {
                              setToCurrency(
                                currentValue === toCurrency ? "" : currentValue
                              );
                              setOpenToCurrency(false);
                            }}
                          >
                            {currency.label}
                            <Check
                              className={cn(
                                "ml-auto",
                                toCurrency === currency.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
