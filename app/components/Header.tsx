"use client";

import {
  Briefcase,
  FileUser,
  LayoutGrid,
  Send,
  UserRoundPen,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "About", icon: UserRoundPen },
  { href: "/cv", label: "CV", icon: FileUser },
  { href: "/work", label: "Projects", icon: LayoutGrid },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between bg-darkGray/80 py-3 px-5 rounded-2xl">
      {/* Left nav */}
      <div className="flex gap-3">
        {navLinks.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`min-w-36 flex items-center justify-center gap-1 text-sm font-semibold px-5 py-2 border-b-2 transition-colors duration-200 ease-in-out ${
                isActive
                  ? "bg-orange hover:bg-orangeHover text-darkGray border-orange"
                  : "text-porcelain border-orange hover:bg-orangeHover"
              }`}
            >
              <Icon size={20} />
              <p>{label}</p>
            </Link>
          );
        })}
      </div>

      {/* CTA */}
      <Link
        href="/contact"
        className="min-w-36 flex items-center justify-center gap-1 text-sm font-semibold bg-orange px-5 py-2 hover:bg-orangeHover transition-colors duration-200 ease-in-out"
      >
        <Send size={20} />
        <p>{"Contact Me"}</p>{" "}
      </Link>
    </div>
  );
};

export default Header;
