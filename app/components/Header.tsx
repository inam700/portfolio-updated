"use client";
import {
  FileUser,
  Send,
  UserRoundPen,
  Menu,
  LayoutGrid,
  Handshake,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "About", icon: UserRoundPen },
  { href: "/cv", label: "CV", icon: FileUser },
  { href: "/work", label: "Projects", icon: LayoutGrid },
  { href: "/hire-me", label: "Hire Me", icon: Handshake },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 xl:static bg-darkGray/80 xl:rounded-2xl px-4 py-3 shadow-md backdrop-blur">
      <div className="flex justify-between items-center">
        {/* Mobile menu toggle */}
        <div className="xl:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Menu size={24} className="text-porcelain" />
          </button>
        </div>

        {/* Nav Links - Hidden on small screens */}
        <nav className="hidden xl:flex gap-3">
          {navLinks.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`min-w-28 flex items-center justify-center gap-1 text-sm font-semibold px-4 py-2 border-b-2 transition-all duration-200 ${
                  isActive
                    ? "bg-orange text-darkGray border-orange"
                    : "text-porcelain border-orange hover:bg-orangeHover"
                }`}
              >
                <Icon size={20} />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="min-w-28 flex items-center justify-center gap-1 text-sm font-semibold bg-orange px-4 py-2 hover:bg-orangeHover transition-colors duration-200"
        >
          <Send size={20} />
          <span>Contact Me</span>
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col mt-3 gap-2 xl:hidden">
          {navLinks.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-orange text-darkGray"
                    : "text-porcelain hover:bg-orangeHover"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
