import Image from "next/image";
import { prisma } from "../../lib/prisma";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPostgresql, SiPrisma, SiShadcnui } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default async function Home() {
  const user = await prisma.user.findFirst({
    where: {
      email: "dev@test.com"
    }
  })
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <h1 className="text-8xl">Hi! {user?.name}</h1>
      <div className="flex gap-4">
       <TooltipProvider>
         <Tooltip>
           <TooltipTrigger>
        <RiNextjsFill size={32} />
           </TooltipTrigger>
           <TooltipContent>NEXT.js</TooltipContent>
         </Tooltip>
         <Tooltip>
           <TooltipTrigger>
        <SiPrisma size={32} />
           </TooltipTrigger>
           <TooltipContent>Prisma</TooltipContent>
         </Tooltip>
         <Tooltip>
           <TooltipTrigger>
        <SiPostgresql size={32} />
           </TooltipTrigger>
           <TooltipContent>PostgreSQL</TooltipContent>
         </Tooltip>
         <Tooltip>
           <TooltipTrigger>
        <RiTailwindCssFill size={32} />
           </TooltipTrigger>
           <TooltipContent>Tailwind CSS</TooltipContent>
         </Tooltip>
         <Tooltip>
           <TooltipTrigger>
        <SiShadcnui size={32} />
           </TooltipTrigger>
           <TooltipContent>Shadcn UI</TooltipContent>
         </Tooltip>
       </TooltipProvider>
      </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://blog.carlosrsantos.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Docs
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Visit carlosrsantos.com.br →
        </a>
      </footer>
    </div>
  );
}
