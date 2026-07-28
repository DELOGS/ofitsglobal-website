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
      <div className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-0.2 shrink-0">

            <Image
              src="/images/ofits logo.png"
              alt={company.name}
              width={140}
              height={55}
              priority
              className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto"
            />

            <div className="leading-tight">
              <h1 className="hidden lg:block text-lg font-bold text-blue-700">
                {company.name}
              </h1>
              <h1 className="block lg:hidden text-xl font-bold text-blue-700">
                {company.name}
              </h1>

              <p className="hidden sm:block text-xs italic text-gray-500">
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
