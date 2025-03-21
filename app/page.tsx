"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [index, setIndex] = useState(0);
  const images = ["/slider6.jpg", "/slider7.jpg", "/slider4.jpg", "/slider5.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col items-center flex-wrap justify-center min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      {/* Full-Width Slider Section */}
      <div className="relative w-full h-[60vh] md:h-screen overflow-hidden">
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
              alt="SmartFund AI Loan Services"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center py-20 px-6 max-w-5xl">
        <div className="md:w-1/2 md:pr-8">
          <h1 className="text-5xl font-bold">Welcome to SmartFund AI</h1>
          <p className="mt-4 text-lg text-gray-300">
            SmartFund AI revolutionizes the loan industry by leveraging cutting-edge artificial intelligence to provide seamless and fast financial assistance.
          </p>
          <Link href="/get-started" className="mt-6 inline-block bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 transition-all">
            Apply for a Loan
          </Link>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <Image src="/slider8.jpg" alt="Welcome to SmartFund AI" width={500} height={500} className="rounded-lg shadow-lg" />
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-5xl">
        <h2 className="text-4xl font-semibold text-center">Our Services</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          {[{ title: "Personal Loans", desc: "Quick and easy personal loans with flexible repayment options.", img: "/slider1.jpg" },
            { title: "Business Loans", desc: "Expand your business with hassle-free loans at low interest rates.", img: "/slider2.jpg" },
            { title: "Instant Approval", desc: "AI-powered loan approval in minutes.", img: "/slider5.jpg" },
            { title: "Secure Transactions", desc: "Your data and transactions are protected.", img: "/slider3.jpg" },
          ].map((service, idx) => (
            <div key={idx} className="flex items-center bg-gray-800 p-6 rounded-lg shadow-lg">
              <Image src={service.img} alt={service.title} width={100} height={100} className="rounded-lg mr-4" />
              <div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-gray-300">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 max-w-5xl">
        <h2 className="text-4xl font-semibold text-center">What Our Customers Say</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          {["testimonial1.jpg", "testimonial2.jpg"].map((img, idx) => (
            <div key={idx} className="p-6 border rounded-lg shadow-lg bg-gray-800 text-center flex flex-col items-center">
              <div className="w-40 h-40 overflow-hidden rounded-full">
                <Image
                  src={`/${img}`}
                  alt="Customer Testimonial"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-gray-300 italic mt-4">
  {"SmartFund AI made the loan process super easy! Highly recommended."}
</p>

            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row items-center bg-gray-900 p-8 rounded-lg shadow-lg">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/slider7.jpg"
              alt="About SmartFund AI"
              width={400}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-blue-400 font-semibold">SmartFund AI</span> is dedicated to providing 
              <span className="text-green-400"> innovative financial solutions</span> using artificial intelligence. 
              Our goal is to <span className="text-yellow-400">simplify</span> and speed up loan approvals while ensuring 
              <span className="text-red-400">security and transparency</span>.
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section className="py-16 px-6 max-w-5xl">
        <h2 className="text-4xl font-semibold text-center">Terms & Conditions</h2>
        <p className="mt-4 text-gray-300 text-center">
          By using SmartFund AI, you agree to our terms and policies regarding loans, repayment, and data security. Please read our full terms before applying.
        </p>
      </section>
    </div>
  );
}
