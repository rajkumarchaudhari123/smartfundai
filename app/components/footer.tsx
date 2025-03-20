"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-white text-2xl font-semibold">SmartFund AI</h2>
            <p className="mt-3 text-gray-400">
              AI-powered financial solutions to optimize your investments and savings.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-white text-lg font-semibold">Contact Us</h3>
            <p className="mt-3 text-gray-400">Email: contact@smartfund.ai</p>
            <p className="mt-1 text-gray-400">Phone: +91 9667048566</p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="hover:text-white transition-colors">🔗 LinkedIn</Link>
              <Link href="#" className="hover:text-white transition-colors">🐦 Twitter</Link>
              <Link href="#" className="hover:text-white transition-colors">📘 Facebook</Link>
              <Link href="#" className="hover:text-white transition-colors">📷 Instagram</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold">Stay Updated</h3>
            <p className="mt-3 text-gray-400">Subscribe to our newsletter for the latest updates.</p>
            <div className="mt-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} SmartFund AI. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
