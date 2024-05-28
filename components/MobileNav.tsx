"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { LINKSMOBILE } from "@/constants";

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Hiboo<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {LINKSMOBILE.map(({id, name, path}) => (
            <Link key={id} href={path} className={`${path === pathName && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
              {name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav