import Link from "next/link";
import React from "react";

function Navbar({name, href}: {name: string, href: string}) {
  return (
    <nav className="flex  justify-between m-8 p-6   items-center">
      <div>
        {/* <Link className="font-medium tracking-wider text-xl" href={"/"}>
          Apu Chandra Das
        </Link> */}
      </div>
      <div>
        <Link className="font-medium animate-bounce hover:animate-none animate hover:text-blue-900  tracking-wider text-xl" href={href}>
          {name}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
