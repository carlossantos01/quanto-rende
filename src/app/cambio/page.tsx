"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  calculateCurrencyConversion,
  cn,
  convertToCurrency,
  inputMask,
} from "@/lib/utils";
import { useEffect, useState } from "react";
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
import { Check, ChevronsUpDown, Clipboard } from "lucide-react";
import { toast } from "sonner";

export default function Home() {
  const [fromCurrencyValue, setFromCurrencyValue] = useState<string>("");
  const [toCurrencyValue, setToCurrencyValue] = useState<string>("");
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("BRL");
  const [openFromCurrency, setOpenFromCurrency] = useState(false);
  const [openToCurrency, setOpenToCurrency] = useState(false);
  const [toCurrencyActualValue, setToCurrencyActualValue] = useState<number>(0);

  const [currencies, setCurrencies] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    const handleGetActualCurrencyValue = async () => {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const data = await response.json();
      setToCurrencyActualValue(data.rates[toCurrency]);
    };

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

    handleGetActualCurrencyValue();
  }, [fromCurrency, toCurrency, toCurrencyActualValue]);

  useEffect(() => {
    setFromCurrencyValue(convertToCurrency(1, fromCurrency));
    setToCurrencyValue(convertToCurrency(toCurrencyActualValue, toCurrency));
  }, []);

  // const handleSwitchCurrency = () => {
  //   const to = toCurrency;
  //   const toValue = toCurrencyValue;
  //   const from = fromCurrency;
  //   const fromValue = fromCurrencyValue;

  //   setFromCurrencyValue(toValue);
  //   setToCurrencyValue(fromValue);
  //   setFromCurrency(to);
  //   setToCurrency(from);
  // };

  const handleCopyQuotation = () => {
    const actualDate = new Date();

    const text = `
      Cotação de câmbio:
      Data: ${actualDate.toLocaleDateString(
        "pt-br"
      )} ${actualDate.toLocaleTimeString()}

      Quantia: ${fromCurrencyValue} ${fromCurrency} 
      Convertido para: ${toCurrencyValue} ${toCurrency}

      Para mais informações, acesse: https://quantorendeu.vercel.app/cambio
    `;
    navigator.clipboard.writeText(text);
    toast.success("Cotação copiada para a área de transferência.");
  };


  const handleCalculateFromCurrency = () => {
    if(toCurrencyActualValue){
      setFromCurrencyValue(
        convertToCurrency(
          calculateCurrencyConversion(toCurrencyValue, toCurrencyActualValue),
          fromCurrency
        )
      );
    }
  };

  useEffect(() => {
    if (toCurrencyActualValue) {
      setToCurrencyValue(
        convertToCurrency(
          calculateCurrencyConversion(fromCurrencyValue, toCurrencyActualValue),
          toCurrency
        )
      );
    }
  }, [fromCurrencyValue, toCurrencyActualValue, toCurrency]);

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
                onChange={(e) => {
                  setFromCurrencyValue(inputMask(e.target.value, fromCurrency));
                }}
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
                <PopoverContent
                  className="w-[200px] p-0"
                  align="start"
                  side="bottom"
                >
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
          {/* <div className="flex justify-center items-center">
            <Button
              className="w-12 h-12 rounded-full bg-primary-500 hover:text-white text-destructive"
              onClick={handleSwitchCurrency}
            >
              <TbTransferVertical />
            </Button>
          </div> */}
          <div>
            <div className="flex flex-col gap-2 md:flex-row">
              <Input
                className="w-full h-16 font-bold md:text-2xl text-zinc-800 disabled:text-zinc-800"
                id="ToCurrencyValue"
                value={toCurrencyValue}
                onChange={(e) => {
                  setToCurrencyValue(inputMask(e.target.value, toCurrency));
                  handleCalculateFromCurrency();
                }}
                
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
                <PopoverContent
                  className="w-[200px] p-0"
                  align="start"
                  side="bottom"
                >
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
      <Button
        className="w-full mt-4 h-12 font-bold flex items-center"
        onClick={handleCopyQuotation}
      >
        <Clipboard className="w-6 h-6" />
        Copiar cotação
      </Button>
        </CardContent>
      </Card>
    </div>
  );
}
