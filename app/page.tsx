"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  Star,
  ChevronRight
} from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Smart Loans, Powered by AI",
      subtitle: "Get instant loan approvals with our advanced AI technology",
      image: "/slider6.jpg",
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "Fast & Secure Processing",
      subtitle: "Your financial future starts here with 100% secure transactions",
      image: "/slider7.jpg",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Grow Your Business",
      subtitle: "Flexible business loans tailored to your needs",
      image: "/slider4.jpg",
      color: "from-green-600 to-teal-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const services = [
    {
      title: "Personal Loans",
      description: "Quick personal loans with minimal documentation",
      icon: "💰",
      stats: "10K+ Loans",
      color: "bg-blue-500"
    },
    {
      title: "Business Loans",
      description: "Fuel your business growth with flexible financing",
      icon: "📈",
      stats: "5K+ Businesses",
      color: "bg-purple-500"
    },
    {
      title: "Instant Approval",
      description: "AI-powered approval in under 10 minutes",
      icon: "⚡",
      stats: "99% Accuracy",
      color: "bg-green-500"
    },
    {
      title: "Secure Platform",
      description: "Bank-grade security for your peace of mind",
      icon: "🔒",
      stats: "256-bit Encryption",
      color: "bg-orange-500"
    }
  ];

  const stats = [
    { value: "50K+", label: "Loans Approved", icon: "✅" },
    { value: "₹100Cr+", label: "Amount Disbursed", icon: "💰" },
    { value: "98%", label: "Customer Satisfaction", icon: "⭐" },
    { value: "24/7", label: "Customer Support", icon: "🕐" }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Small Business Owner",
      content: "The loan process was incredibly smooth. Got approval within hours!",
      rating: 5,
      image: "/testimonial1.jpg"
    },
    {
      name: "Priya Patel",
      role: "Freelancer",
      content: "Best interest rates and amazing customer support. Highly recommended!",
      rating: 5,
      image: "/testimonial2.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slider */}
      <section className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                {slides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/apply"
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition flex items-center justify-center"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
                </Link>
                <Link
                  href="/learn-more"
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold backdrop-blur-sm transition text-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? "w-8 bg-white" 
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600">
              We offer a range of financial solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center text-2xl mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="flex items-center text-sm text-blue-600">
                  <span>{service.stats}</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/10 rounded-full" />
                <Image
                  src="/slider7.jpg"
                  alt="About Us"
                  width={600}
                  height={400}
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose SmartFund AI?
              </h2>
              <p className="text-gray-600 mb-6">
                We combine cutting-edge AI technology with personalized service to provide 
                the best loan experience possible. Our platform makes borrowing simple, 
                fast, and secure.
              </p>

              <div className="space-y-4">
                {[
                  "AI-powered instant approvals",
                  "Competitive interest rates",
                  "No hidden fees",
                  "24/7 customer support"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center text-blue-600 font-semibold mt-8 hover:text-blue-700"
              >
                Learn more about us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600">
              Don&apos;t just take our word for it - hear from our happy customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have already transformed their financial future
          </p>
          <Link
            href="/apply"
            className="inline-flex bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Apply for a Loan Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 text-center text-sm text-gray-600">
          <p>
            By using our services, you agree to our{" "}
            <Link href="/terms" className="text-blue-600 hover:underline">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}