import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CustomFooter() {
  return (
    <div className="h-[60px] w-full bg-primary text-white px-10">
      <div className="max-w-screen-lg h-full flex mx-auto items-center justify-between w-full">
        <span className="text-sm text-zinc-50 opacity-90">
          Desenvolvido por Carlos Santos
        </span>
        <HoverCard>
          <HoverCardTrigger>
            <Link
              href={"https://www.carlosrsantos.com.br/"}
              rel="noopener noreferrer"
              target="_blank"
              className="text-sm text-zinc-50 opacity-90 hidden md:block"
            >
              Visite carlosrsantos.com.br
            </Link>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="flex ">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CS</AvatarFallback>
              </Avatar>
              Created and maintained by Carlos Santos.
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}
