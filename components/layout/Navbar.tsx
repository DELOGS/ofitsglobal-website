"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { company } from "@/lib/company";
import Button from "@/components/ui/Button";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Investors", href: "/investors" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7-xl mx-auto px-4">

        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">

            <Image
              src="/images/ofits logo.png"
              alt={company.name}
              width={120}
              height={50}
              priority
              className="w-16 md:w-20 lg:w-28 h-auto priority"
            />

            <div className="leading-tight">
              {/*Mobile*/}
              <h1 className="block md:hidden text-base font-bold text-blue-700">
                {company.name}
              </h1>
              {/*Tablet & Desktop */}
              <h1 className="hidden md:block text-lg font-bold text-blue-700">
                {company.name}
              </h1>

              <p className="hidden md:block text-xs italic text-gray-500">
                {company.slogan}
              </p>
            </div>

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-700 transition font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          {/* Desktop Button */}
          <div className="hidden lg:block">

            <Button href="/request" variant="primary" size="md">
              How May We Serve You?
            </Button>

          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
          >
            {menuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-white border-t shadow-lg animate-in slide-in-from-top duration-300">

          <div className="px-6 py-5 space-y-5">

            {links.map((link) => (

              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 font-medium hover:text-blue-700"
              >
                {link.name}
              </Link>

            ))}
              <div className="pt-4">
                <Button href="/reqest" size="lg" className="w-full">
                  How May We Serve You?
                </Button>
              </div>
          </div>

        </div>

      )}

    </header>
  );
}
