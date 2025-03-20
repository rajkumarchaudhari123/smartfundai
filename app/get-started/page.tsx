"use client";
import React from "react";
import Link from "next/link";

export default function GetStarted() {
  return (
    <div className="bg-[#0b0f19] text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl font-bold">Unlock AI-Powered Investment Opportunities</h1>
        <p className="mt-4 text-lg">Join SmartFund AI and let our AI analyze, predict, and grow your wealth.</p>
        <Link href="/signup" className="mt-6 inline-block bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700">
          Create Your Account
        </Link>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold">How It Works</h2>
        <div className="mt-6 grid md:grid-cols-4 gap-6">
          {[
            "Sign Up and Set Goals",
            "AI Analyzes Market Trends",
            "Get Personalized Recommendations",
            "Track & Grow Investments",
          ].map((step, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md bg-gray-800">
              <h3 className="text-xl font-semibold">Step {index + 1}</h3>
              <p className="mt-2">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white text-black text-center">
        <h2 className="text-3xl font-semibold">Why Choose SmartFund AI?</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {["AI-Powered Insights", "Secure & Private", "24/7 Support"].map((feature, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{feature}</h3>
              <p className="mt-2">Detailed information about {feature}.</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Investment Tools Preview */}
      <section className="py-16 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold">AI Investment Tools</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {["Market Analyzer", "Risk Assessment Tool", "Custom Portfolio"].map((tool, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md bg-gray-800">
              <h3 className="text-xl font-semibold">{tool}</h3>
              <p className="mt-2">Advanced AI-driven {tool} for smart investments.</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ & Support */}
      <section className="py-16 px-6 bg-white text-black text-center">
        <h2 className="text-3xl font-semibold">Need Help?</h2>
        <p className="mt-4">Check our FAQs or contact our support team.</p>
        <Link href="/contact" className="mt-6 inline-block bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700">
          Contact Support
        </Link>
      </section>

      {/* Final CTA */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <h2 className="text-2xl font-bold">Start Your AI-Powered Investment Journey Today!</h2>
        <Link href="/signup" className="mt-6 inline-block bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700">
          Get Started Now
        </Link>
        <p className="mt-4">© {new Date().getFullYear()} SmartFund AI. All Rights Reserved.</p>
      </footer>
    </div>
  );
}