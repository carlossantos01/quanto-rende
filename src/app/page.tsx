import DataForm from "@/components/data-form/dataForm";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-dvh">
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
        Quanto Rende?
      </h1>
      <h2 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0 mb-3">
        Simulador de Investimento
      </h2>
      <DataForm />
    </div>
  );
}
