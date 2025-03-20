"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function LoanApprovedPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-900 via-green-800 to-green-600 p-6">
      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-lg rounded-lg w-[90%] max-w-2xl mx-auto p-6 shadow-2xl border border-white/20"
      >
        <CardContent className="text-white text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 10 }}
          >
            <CheckCircle className="text-green-400 w-16 h-16 mx-auto" />
          </motion.div>

          <h2 className="text-3xl font-bold text-green-300 mt-4 drop-shadow-lg">🎉 Loan Approved!</h2>
          <p className="text-gray-200 mt-2 text-lg">Congratulations! Your loan has been successfully approved.</p>

          {/* Loan Details */}
          <div className="bg-gray-800 p-4 rounded-lg mt-6">
            <p className="text-gray-300">Loan Amount: <span className="font-bold text-green-300">₹50,000</span></p>
            <p className="text-gray-300">Transferred To: <span className="font-bold text-green-300">XXXX-5678</span></p>
            <p className="text-gray-300">EMI Starts: <span className="font-bold text-green-300">1st April 2025</span></p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-6 space-x-4">
            <Button onClick={() => router.push("/")} className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg shadow-md">
              Home page
            </Button>
            <Button onClick={() => alert("Downloading PDF...")} className="bg-gray-500 hover:bg-gray-600 px-6 py-2 rounded-lg shadow-md">
              Download Loan Agreement
            </Button>
          </div>
        </CardContent>
      </motion.div>
    </div>
  );
}
