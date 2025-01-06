"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export default function CustomHeader() {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="h-[60px] w-full bg-primary text-white px-10">
      <div className="max-w-screen-lg h-full flex mx-auto items-center justify-between w-full">
        <Link href={"/"}>
          <h1 className="text-xl font-extrabold tracking-tight lg:text-2xl">
            Quanto Rendeu?
          </h1>
        </Link>
        <div className="md:hidden flex">
            <button className="text-white" onClick={() => setShowMenu(!showMenu)}>
                <IoMenu className="text-2xl" />
            </button>
            {showMenu && (
                <div className="absolute top-[60px] right-0 bg-primary w-full flex flex-col items-center gap-5 py-4">
                    <Link href={"/calculadora/renda-fixa"} onClick={() => setShowMenu(false)}>
                        <span className="py-2">Calculadora</span>
                    </Link>
                    <Link href={"/cambio"} onClick={() => setShowMenu(false)}>
                        <span className="py-2">Câmbio</span>
                    </Link>
                    <Link href={"/planos"} onClick={() => setShowMenu(false)}>
                        <span className="py-2">Planos</span>
                    </Link>
                    <Link href={"/login"} onClick={() => setShowMenu(false)}>
                        <Button variant={"secondary"}>Login</Button>
                    </Link>
                </div>
            )}
        </div>
        <div className="md:flex md:items-center gap-6 hidden">
          <Link href={"/calculadora/renda-fixa"}>
            <span>Calculadora</span>
          </Link>
          <Link href={"/cambio"}>
            <span>Câmbio</span>
          </Link>
          <Link href={"/planos"}>
            <span>Planos</span>
          </Link>
          <Link href={"/login"}>
            <Button variant={"secondary"}>Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
