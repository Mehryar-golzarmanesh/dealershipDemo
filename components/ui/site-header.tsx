"use client";

import { nav_links } from "@/lib/constants";
import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-20 w-full border-b border-[#323337] bg-[#14161a] px-4 py-5 text-white backdrop-blur supports-backdrop-blur:bg-background/60 sm:px-5">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
        <div className="flex items-center gap-5">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="لوگوی شرکت ارم خودرو عرفان"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-5 text-sm">
            {nav_links.map((link) => (
              <li key={link.label}>
                <Link className="hover:text-[#dadada]" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/test-drive">
          <Button className="rounded-none px-5 py-5.5 font-semibold">
            رزرو تست درایو
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
