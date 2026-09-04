import { nav_links } from "@/lib/constants";
import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className=" bg-[#14161a] py-5 text-white border-b border-[#323337] w-full supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 backdrop-blur px-5">
      <div className="flex max-w-6xl mx-auto justify-between items-center">
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
          <Button className="py-5.5 px-5 rounded-none font-semibold">
            رزرو تست درایو
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
