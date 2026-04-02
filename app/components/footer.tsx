"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  Sparkles, 
  Cpu, 
  Zap, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Send,
  Rocket,
  Brain,
  TrendingUp,
  Shield,
  Award,
  Clock
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [stats, setStats] = useState({ users: 0, transactions: 0, accuracy: 0 });
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string; duration: string }>>([]);

  // Generate particles only on client side to avoid hydration mismatch
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          delay: `${Math.random() * 5}s`,
          duration: `${5 + Math.random() * 5}s`,
        });
      }
      setParticles(newParticles);
    };
    
    generateParticles();
  }, []);

  // Animated stats
  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        users: Math.floor(Math.random() * 90000) + 10000,
        transactions: Math.floor(Math.random() * 9000000) + 1000000,
        accuracy: Math.floor(Math.random() * 5) + 95,
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: "Home", href: "/", icon: <Sparkles size={16} /> },
    { name: "About", href: "/about", icon: <Brain size={16} /> },
    { name: "Services", href: "/services", icon: <Zap size={16} /> },
    { name: "Dashboard", href: "/dashboard", icon: <TrendingUp size={16} /> },
    { name: "Security", href: "/security", icon: <Shield size={16} /> },
    { name: "Contact", href: "/contact", icon: <Mail size={16} /> },
  ];

  const features = [
    { icon: <Brain />, label: "AI-Powered", value: "Advanced ML" },
    { icon: <Shield />, label: "Secure", value: "Bank-Level" },
    { icon: <TrendingUp />, label: "Growth", value: `${stats.accuracy}% Accuracy` },
    { icon: <Clock />, label: "24/7", value: "Real-time" },
  ];

  const socialLinks = [
    { icon: <Linkedin />, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: <Twitter />, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: <Facebook />, href: "#", label: "Facebook", color: "hover:bg-blue-700" },
    { icon: <Instagram />, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
  ];

  return (
    <footer className="relative bg-gray-900 text-gray-300 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-[128px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[128px] animate-pulse delay-1000" />
      
      {/* Floating particles - only render on client */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
            >
              {/* Icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
                {feature.icon}
              </div>
              
              {/* Content */}
              <div className="ml-6">
                <p className="text-sm text-gray-400">{feature.label}</p>
                <p className="text-xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                  {feature.value}
                </p>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-cyan-400/10 group-hover:via-purple-400/10 group-hover:to-pink-400/10 rounded-2xl transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Company Info - Large Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-75 group-hover:opacity-100 blur-lg transition-opacity animate-pulse" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-x">
                SmartFund AI
              </span>
            </Link>

            <p className="text-gray-400 leading-relaxed">
              Revolutionizing financial intelligence with cutting-edge AI technology. 
              Experience the future of investment optimization and smart savings.
            </p>

            {/* Live Stats */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h4 className="text-sm font-semibold text-cyan-400 mb-4 flex items-center">
                <Cpu className="w-4 h-4 mr-2 animate-pulse" />
                LIVE NETWORK STATS
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Active Users</span>
                  <span className="text-white font-mono">{stats.users.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Transactions</span>
                  <span className="text-white font-mono">{stats.transactions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">AI Accuracy</span>
                  <span className="text-cyan-400 font-mono">{stats.accuracy}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-semibold mb-6 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-cyan-400" />
              Quick Access
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className={`transition-transform duration-300 ${hoveredLink === link.name ? 'translate-x-1 text-cyan-400' : ''}`}>
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ${hoveredLink === link.name ? 'translate-x-1' : ''}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-lg font-semibold mb-6 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-cyan-400" />
              Connect With Us
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-cyan-400/20 transition-all">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:contact@smartfund.ai" className="text-white hover:text-cyan-400 transition">
                    contact@smartfund.ai
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-cyan-400/20 transition-all">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+919667048566" className="text-white hover:text-cyan-400 transition">
                    +91 96670 48566
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-cyan-400/20 transition-all">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">AI Tower, Silicon Valley, CA</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="group relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-75 blur-lg transition-all" />
                  <div className={`relative w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-white ${social.color} transition-all duration-300 group-hover:scale-110`}>
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-lg font-semibold mb-6 flex items-center">
              <Send className="w-5 h-5 mr-2 text-cyan-400" />
              AI Updates
            </h3>
            
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <p className="text-gray-400 mb-4">
                Subscribe to our AI newsletter for cutting-edge insights and updates.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    required
                  />
                  <Mail className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
                </div>
                
                <button
                  type="submit"
                  className="relative w-full group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-80 group-hover:opacity-100 transition-opacity rounded-xl" />
                  <div className="relative px-4 py-3 flex items-center justify-center space-x-2">
                    <span className="text-white font-semibold">Subscribe</span>
                    <Send className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </form>

              {/* Success message */}
              {subscribed && (
                <div className="mt-3 p-2 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 text-sm text-center animate-pulse">
                    ✨ Successfully subscribed to AI updates!
                  </p>
                </div>
              )}

              {/* Trust badges */}
              <div className="flex items-center justify-center space-x-4 mt-4">
                <Award className="w-8 h-8 text-cyan-400/50" />
                <Shield className="w-8 h-8 text-purple-400/50" />
                <Brain className="w-8 h-8 text-pink-400/50" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SmartFund AI. 
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text ml-2">
                Pioneering Financial Intelligence
              </span>
            </p>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition">Privacy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition">Terms</Link>
              <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition">Cookies</Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-cyan-400 transition">Sitemap</Link>
            </div>

            {/* Live indicator */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
                <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full" />
              </div>
              <span className="text-xs text-gray-400">AI Network Live</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add these styles */}
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </footer>
  );
}