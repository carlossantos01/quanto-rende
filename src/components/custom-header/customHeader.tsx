"use client";

import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { Calculator, Home } from "lucide-react";

export default function CustomHeader() {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="h-[60px] w-full bg-primary text-white px-10">
      <div className="max-w-screen-lg h-full flex mx-auto items-center justify-between w-full">
        <Link href={"/"}>
          <h1 className="text-xl font-extrabold tracking-tight lg:text-2xl">
            Quanto Rendeu<span className="text-destructive">?</span>
          </h1>
        </Link>
        <div className="md:hidden flex">
          <button className="text-white" onClick={() => setShowMenu(!showMenu)}>
            <IoMenu className="text-2xl" />
          </button>
          {showMenu && (
            <div className="absolute top-[60px] right-0 bg-primary w-full flex flex-col gap-5 py-4 px-10">
              <Link
                href={"/"}
                className="flex items-center gap-1"
                onClick={() => setShowMenu(false)}
              >
                <Home className="w-4" />
                <span>Início</span>
              </Link>
              <Link
                href={"/calculadora"}
                className="flex items-center gap-1"
                onClick={() => setShowMenu(false)}
              >
                <Calculator className="w-4" />
                <span>Calculadora</span>
              </Link>
            </div>
          )}
        </div>
        <div className="md:flex md:items-center gap-6 hidden">
          <Link
            href={"/"}
            className="hover:border-b-2 hover:border-zinc-50 flex items-center gap-1"
          >
            <Home className="w-4" />
            <span>Início</span>
          </Link>
          <Link
            href={"/calculadora"}
            className="hover:border-b-2 hover:border-zinc-50 flex items-center gap-1"
          >
            <Calculator className="w-4" />
            <span>Calculadora</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
