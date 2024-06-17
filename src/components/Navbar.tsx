'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {

  const pathname = usePathname()

  

  return (
    <nav className="flex flex-col md:flex-row m-2 md:m-12 shadow bg-white p-8 rounded-lg gap-4 lg:gap-8 items-center">
        <Link href={'/'} >
        <Image className="rounded-full object-cover lg:w-32 lg:h-32 w-20 h-20 " src="/me.jpg" alt="logo" width={100} height={100} />
        </Link>

      <div className="flex  uppercase flex-col">
        <h1 className="font-medium tracking-wide text-xl">Apu Chandra Das</h1>
        <div className="h-1 bg-blue-700 rounded-full w-10 lg:mb-6 mb-2" />
        <ul className="flex gap-4 text-sm" >
          <li><Link className={pathname === '/projects' ? 'active' : ''} href={'/projects'}>Projects</Link></li>
          <li><Link className={pathname === '/work' ? 'active' : ''} href={'/work'}>work</Link></li>
          <li><Link className={pathname === '/about' ? 'active' : ''} href={'/about'}>about</Link></li>
          <li><Link className={pathname === '/contact' ? 'active' : ''} href={'/contact'}>contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
