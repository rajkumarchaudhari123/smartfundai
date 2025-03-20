"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { IconType } from "react-icons";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = ["/slider1.jpg", "/slider2.jpg", "/slider3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-14 bg-[#0b0f19]">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white p-4 shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-wide">
            SmartFund AI
          </Link>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <ul className="hidden md:flex space-x-6 font-medium">
            <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-200">About</Link></li>
            <li><Link href="/services" className="hover:text-gray-200">Services</Link></li>
            <li><Link href="/contact" className="hover:text-gray-200">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gray-900 text-white text-center py-20 mt-16">
        <h1 className="text-4xl font-bold">AI-Powered Investment Solutions</h1>
        <p className="mt-4 text-lg">
          Maximize your financial growth with AI-driven insights
        </p>
        <Link href="/get-started" className="mt-6 inline-block bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-700">
          Get Started
        </Link>
      </header>

      {/* Full-Width Slider Section */}
      <div className="relative w-full h-[50vh] sm:h-[80vh] md:h-[100vh] overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src={images[index]} 
              alt="Slider Image"
              width={1920}
              height={1080}
              priority
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold">Why Choose SmartFund AI?</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">AI-Powered Insights</h3>
            <p className="mt-2">
              Get smart investment strategies with AI-driven analysis.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Secure & Reliable</h3>
            <p className="mt-2">Your data is safe with top-tier security measures.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">24/7 Support</h3>
            <p className="mt-2">Our experts are available anytime to assist you.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <p>© {new Date().getFullYear()} SmartFund AI. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
