"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const getDesktopLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `transition-all duration-300 px-1 py-0.5 border-b-2 ${
      isActive
        ? "border-[#2f3a1f] text-[#2f3a1f] font-medium"
        : "border-transparent text-[#2f3a1f]/80 hover:text-[#2f3a1f] hover:border-[#2f3a1f]/50"
    }`;
  };

  const getMobileLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `transition-all duration-300 ${
      isActive
        ? "text-[#2f3a1f] underline decoration-2 underline-offset-8"
        : "text-[#2f3a1f]/70 hover:text-[#2f3a1f]"
    }`;
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="flex items-center justify-between px-6 md:px-16 pt-6 mb-8 md:mb-0">

        {/* LEFT SIDE — logo + mobile hamburger */}
        <div className="flex items-center gap-4">

          {/* Mobile Hamburger */}
          <button
            className="flex flex-col gap-[5px] md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <span className="w-6 h-[2px] bg-[#2f3a1f]"></span>
            <span className="w-6 h-[2px] bg-[#2f3a1f]"></span>
            <span className="w-[18px] h-[2px] bg-[#2f3a1f]"></span>
          </button>

          {/* Desktop Logo */}
          <Link href="/">
            <h1 className="hidden md:block font-heading text-2xl font-medium tracking-wide hover:opacity-70 transition-opacity text-[#2f3a1f]">
              Dr. Maya
            </h1>
          </Link>

          {/* Mobile Logo */}
          <Link href="/" className="md:hidden">
            <h1 className="font-heading text-xl font-medium tracking-wide hover:opacity-70 transition-opacity text-[#2f3a1f]">
              Dr. Maya
            </h1>
          </Link>
        </div>

        {/* RIGHT SIDE — Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-base tracking-wide">
          <Link href="/" className={getDesktopLinkClass("/")}>
            Home
          </Link>
          <Link href="/blog" className={getDesktopLinkClass("/blog")}>
            Blog
          </Link>
          <Link href="/contact" className={getDesktopLinkClass("/contact")}>
            Contact
          </Link>
        </nav>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#F7F4EF] z-50 flex flex-col">

          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-6">

            {/* Close button */}
            <button onClick={() => setMenuOpen(false)} className="p-2 -ml-2">
              <span className="block w-6 h-[2px] bg-[#2f3a1f] rotate-45 translate-y-[1px]"></span>
              <span className="block w-6 h-[2px] bg-[#2f3a1f] -rotate-45"></span>
            </button>

            <Link href="/" onClick={() => setMenuOpen(false)}>
              <h1 className="font-heading text-xl font-medium tracking-wide text-[#2f3a1f] hover:opacity-70 transition-opacity">
                Dr. Maya
              </h1>
            </Link>

            <div className="w-6"></div>
          </div>

          {/* Menu links */}
          <div className="flex flex-1 items-center justify-center">
            <nav className="flex flex-col gap-10 text-3xl font-medium text-center">
              <Link href="/" onClick={() => setMenuOpen(false)} className={getMobileLinkClass("/")}>
                Home
              </Link>
              <Link href="/blog" onClick={() => setMenuOpen(false)} className={getMobileLinkClass("/blog")}>
                Blog
              </Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className={getMobileLinkClass("/contact")}>
                Contact
              </Link>
            </nav>
          </div>

        </div>
      )}
    </>
  );
}
