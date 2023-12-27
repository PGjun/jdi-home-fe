"use client";

import Link from "next/link";
import logo from "@/public/image/JDI_LOGO 1.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const navmenu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Example",
    path: "/example",
  },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const currentPathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-white flex justify-center fixed w-full h-[70px] z-50 ${
        scrolled ? "border-b border-gray-200 " : ""
      }`}
    >
      <main className="w-[1170px] flex justify-between items-center px-10 h-full">
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={40} height={40} />
        </Link>
        <nav className="flex gap-10 pr-10">
          {navmenu.map((menu) => {
            return (
              <Link href={menu.path} key={menu.name}>
                <button
                  className={`hover:text-blue-500 ${
                    menu.path == currentPathname
                      ? "text-blue-500"
                      : "text-slate-700"
                  }  `}
                >
                  {menu.name}
                </button>
              </Link>
            );
          })}
        </nav>
      </main>
    </header>
  );
};
