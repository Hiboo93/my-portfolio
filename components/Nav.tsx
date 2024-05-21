"use client";

import { LINKS } from "@/constants";
import { linkType } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";



const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {LINKS.map(({id, name, path}:linkType) => (
        <Link
          key={id}
          href={path}
          className={`${
            path === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
