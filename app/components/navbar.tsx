"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles, Cpu, Zap, Globe, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: <Sparkles size={16} /> },
    { name: "Dashboard", href: "/dashboard", icon: <Cpu size={16} /> },
    { name: "About", href: "/about", icon: <Globe size={16} /> },
    { name: "Services", href: "/services", icon: <Zap size={16} /> },
    { name: "FAQ", href: "/faq", icon: <ChevronRight size={16} /> },
    { name: "Contact", href: "/contact", icon: <ChevronRight size={16} /> },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_8px_32px_rgba(0,255,255,0.15)]"
            : "bg-transparent"
        }`}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x" />
        
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 backdrop-blur-3xl" />

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo with AI animation */}
            <Link href="/" className="flex items-center group">
              <div className="relative">
                {/* Animated rings */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-75 group-hover:opacity-100 blur-lg transition-opacity duration-500 animate-pulse" />
                <div className="relative flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.5)] group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">AI</span>
                  </div>
                  <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-x">
                    SmartFund AI
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Menu - Ultra Modern */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group px-4 py-2"
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {/* Hover background effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-xl transition-all duration-300 ${
                      hoveredLink === link.name
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90"
                    }`}
                  />
                  
                  {/* Glow effect */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl blur-lg transition-opacity duration-300 ${
                      hoveredLink === link.name ? "opacity-50" : "opacity-0"
                    }`}
                  />
                  
                  {/* Content */}
                  <div className="relative flex items-center space-x-2">
                    <span
                      className={`transition-all duration-300 ${
                        hoveredLink === link.name
                          ? "text-cyan-300 rotate-12"
                          : "text-white/70"
                      }`}
                    >
                      {link.icon}
                    </span>
                    <span
                      className={`font-medium transition-all duration-300 ${
                        hoveredLink === link.name
                          ? "text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text"
                          : "text-white/90"
                      }`}
                    >
                      {link.name}
                    </span>
                  </div>
                </Link>
              ))}

              {/* Sign Up Button - AI Themed */}
              <Link
                href="/signup"
                className="relative group ml-4"
              >
                {/* Animated gradient border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300 animate-gradient-xy" />
                
                {/* Button content */}
                <div className="relative px-6 py-2.5 bg-gray-900 rounded-xl flex items-center space-x-2">
                  <span className="text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text font-bold">
                    Get Started
                  </span>
                  <Sparkles className="w-4 h-4 text-cyan-300 group-hover:rotate-12 transition-transform" />
                </div>

                {/* Floating particles */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-300" />
              </Link>
            </div>

            {/* Hamburger Menu - Modern Design */}
            <button
              className="lg:hidden relative w-10 h-10 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl blur opacity-50" />
              <div className="relative w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                {menuOpen ? (
                  <X className="w-5 h-5 text-cyan-300" />
                ) : (
                  <Menu className="w-5 h-5 text-cyan-300" />
                )}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Ultra Modern Slide-out */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop with blur */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-xl transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-cyan-500/20 shadow-[-8px_0_32px_rgba(0,255,255,0.15)] transition-transform duration-500 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-y" />

          {/* Menu header */}
          <div className="relative p-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Menu
              </span>
            </div>
          </div>

          {/* Menu links */}
          <div className="relative p-6 space-y-3">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="block group"
                onClick={() => setMenuOpen(false)}
              >
                <div
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 animate-slide-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white">{link.icon}</span>
                  </div>
                  <span className="flex-1 text-white/90 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all">
                    {link.name}
                  </span>
                  <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}

            {/* Sign Up button in mobile menu */}
            <Link
              href="/signup"
              className="block group mt-6"
              onClick={() => setMenuOpen(false)}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300 animate-gradient-xy" />
                <div className="relative px-4 py-3 bg-gray-900 rounded-xl flex items-center justify-center space-x-2">
                  <span className="text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text font-bold">
                    Get Started
                  </span>
                  <Sparkles className="w-4 h-4 text-cyan-300 group-hover:rotate-12 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white/30 text-sm">
            <div className="flex justify-center space-x-2">
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
              <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-150" />
              <div className="w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-300" />
            </div>
            <p className="mt-2">AI-Powered Platform</p>
          </div>
        </div>
      </div>

      {/* Add these styles to your global CSS file */}
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-y {
          0%, 100% { background-position: 50% 0%; }
          50% { background-position: 50% 100%; }
        }
        
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 0%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-gradient-y {
          animation: gradient-y 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-gradient-xy {
          animation: gradient-xy 4s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .delay-150 {
          animation-delay: 150ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </>
  );
}