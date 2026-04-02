"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  Star,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Clock,
  TrendingUp,
  Award,
  Rocket
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
      color: "from-blue-500 to-blue-600",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      title: "Business Loans",
      description: "Fuel your business growth with flexible financing",
      icon: "📈",
      stats: "5K+ Businesses",
      color: "from-purple-500 to-purple-600",
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      title: "Instant Approval",
      description: "AI-powered approval in under 10 minutes",
      icon: "⚡",
      stats: "99% Accuracy",
      color: "from-green-500 to-green-600",
      gradient: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      title: "Secure Platform",
      description: "Bank-grade security for your peace of mind",
      icon: "🔒",
      stats: "256-bit Encryption",
      color: "from-orange-500 to-orange-600",
      gradient: "bg-gradient-to-br from-orange-500 to-orange-600"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Approval in under 10 minutes"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "100% Secure",
      description: "Bank-grade encryption"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Best Rates",
      description: "Competitive interest rates"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round the clock assistance"
    }
  ];

  const stats = [
    { value: "50K+", label: "Loans Approved", icon: "✅", delay: 0 },
    { value: "₹100Cr+", label: "Amount Disbursed", icon: "💰", delay: 0.1 },
    { value: "98%", label: "Customer Satisfaction", icon: "⭐", delay: 0.2 },
    { value: "24/7", label: "Customer Support", icon: "🕐", delay: 0.3 }
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
    },
    {
      name: "Amit Kumar",
      role: "Startup Founder",
      content: "SmartFund AI helped my business grow exponentially. Truly transformative!",
      rating: 5,
      image: "/testimonial3.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={index}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.1, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-70`} />
              </motion.div>
            )
          ))}
        </AnimatePresence>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6"
              >
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-white text-sm">AI-Powered Lending Platform</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-xl md:text-2xl text-gray-200 mb-8"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/apply"
                  className="group relative overflow-hidden bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-2xl flex items-center justify-center"
                >
                  <span className="relative z-10">Apply Now</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
                <Link
                  href="/learn-more"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all text-center border border-white/30"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide 
                  ? "w-12 h-2 bg-white rounded-full" 
                  : "w-2 h-2 bg-white/50 rounded-full hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 right-8 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Features Bar */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl mb-4 inline-block"
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: stat.delay, type: "spring" }}
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4"
            >
              <Rocket className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-semibold">Our Services</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Financial Solutions for
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Every Need</span>
            </h2>
            <p className="text-xl text-gray-600">
              We offer a range of financial solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full -mr-16 -mt-16" />
                <div className={`w-16 h-16 ${service.gradient} rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600">{service.stats}</span>
                  <ChevronRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 animate-pulse" />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-500 rounded-full opacity-20 animate-pulse" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/slider7.jpg"
                    alt="About Us"
                    width={600}
                    height={400}
                    className="rounded-2xl transform group-hover:scale-110 transition duration-500"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  SmartFund AI?
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
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
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-110 transition">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-200">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold mt-8 hover:shadow-xl transition-all group"
              >
                Learn more about us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-100 rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
              <span className="text-yellow-600 text-sm font-semibold">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Customers Say
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Don&apos;t just take our word for it - hear from our happy customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
                    <div className="absolute inset-0.5 bg-white rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have already transformed their financial future
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 group"
            >
              Apply for a Loan Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
          </motion.div>
        </div>
      </section>

 
    </div>
  );
}