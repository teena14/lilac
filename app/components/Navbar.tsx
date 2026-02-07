"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="flex items-center justify-between px-6 md:px-16 pt-6">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">

          {/* Mobile Hamburger */}
          <button
            className="flex flex-col gap-1 md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <span className="w-6 h-[2px] bg-green-900"></span>
            <span className="w-6 h-[2px] bg-green-900"></span>
            <span className="w-6 h-[2px] bg-green-900"></span>
          </button>

          {/* Desktop Logo */}
          <h1 className="hidden md:block font-heading text-2xl font-medium tracking-wide ">
            Dr. Maya
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-lg">
          <Link href="#" className="hover:underline">Blog</Link>
          <Link href="#" className="hover:underline">Contact</Link>
        </nav>

        {/* Mobile Logo (rightmost) */}
        <h1 className="md:hidden font-heading text-xl font-medium tracking-wide ">
          Dr Maya
        </h1>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#F3EFE7] z-50 flex flex-col">

          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-6">

            {/* Close button */}
            <button onClick={() => setMenuOpen(false)}>
              <span className="block w-6 h-[2px] bg-green-900 rotate-45 translate-y-[1px]"></span>
              <span className="block w-6 h-[2px] bg-green-900 -rotate-45"></span>
            </button>

            <h1 className="font-heading text-xl font-medium tracking-wide text-green-900">
              Lilac Template
            </h1>

            <div className="w-6"></div>
          </div>

          {/* Menu links */}
          <div className="flex flex-1 items-center justify-center">
            <nav className="flex flex-col gap-6 text-3xl font-medium text-green-900 text-center">
              <Link href="#" onClick={() => setMenuOpen(false)}>Blog</Link>
              <Link href="#" onClick={() => setMenuOpen(false)}>Contact</Link>
            </nav>
          </div>

        </div>
      )}
    </>
  );
}
