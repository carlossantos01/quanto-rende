import { FaPeopleCarryBox } from "react-icons/fa6";

export default function Home() {
    return (
        <div className="flex flex-col pt-8 md:pt-16 items-center h-dvh gap-2 md:gap-4">
            <FaPeopleCarryBox className="md:text-8xl text-4xl text-primary" />
            <h1 className="text-2xl md:text-[48px] font-bold text-center">Opa, Estamos quase lá!</h1>
            <p className="text-sm md:text-xl font-normal text-center max-w-[280px] md:max-w-none">Estamos trabalhando para trazer essa funcionalidade para você o mais rápido possível.</p>
        </div>
    )
}