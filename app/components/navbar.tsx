"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white p-4 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="ml-2 text-2xl font-bold tracking-wide">SmartFund AI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <Link href="/" className="hover:text-gray-200 transition duration-300">Home</Link>
          <Link href="/dashboard" className="hover:text-gray-200 transition duration-300">Dashboard</Link>
          <Link href="/about" className="hover:text-gray-200 transition duration-300">About</Link>
          <Link href="/services" className="hover:text-gray-200 transition duration-300">Services</Link>
          <Link href="/faq" className="hover:text-gray-200 transition duration-300">FAQ</Link>
          <Link href="/contact" className="hover:text-gray-200 transition duration-300">Contact</Link>
          <Link href="/signup" className="ml-4 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">Sign Up</Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-16 left-0 w-full bg-[#1E3A8A] text-white transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <ul className="flex flex-col items-center py-4 space-y-4">
          <li><Link href="/" className="block py-2 hover:text-gray-200" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/dashboard" className="block py-2 hover:text-gray-200" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>
          <li><Link href="/about" className="block py-2 hover:text-gray-200" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="/services" className="block py-2 hover:text-gray-200" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link href="/faq" className="block py-2 hover:text-gray-200" onClick={() => setMenuOpen(false)}>FAQ</Link></li>
          <li><Link href="/contact" className="block py-2 hover:text-gray-200" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link href="/signup" className="block py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200 transition duration-300" onClick={() => setMenuOpen(false)}>Sign Up</Link></li>
        </ul>
      </div>
    </nav>
  );
}