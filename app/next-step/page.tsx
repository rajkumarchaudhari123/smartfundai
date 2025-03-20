"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function Page() {
  const router = useRouter();
  const [stepCompleted, setStepCompleted] = useState(false);
  const [loanAmount, setLoanAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loanAmount === "" || parseInt(loanAmount) < 1000) {
      alert("Please enter a valid loan amount (Minimum ₹1000)");
      return;
    }
    setStepCompleted(true);
    setTimeout(() => {
      router.push("/loan-approved");
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#001F3F] via-[#003366] to-[#0056A8] p-6 relative">
      {/* Blurred Glass Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-lg rounded-lg w-[90%] max-w-2xl mx-auto p-6 shadow-2xl border border-white/20"
      >
        <CardContent className="text-white">
          <h2 className="text-2xl font-bold text-center text-yellow-300 drop-shadow-lg">🔐 Biometric Verification</h2>
          <p className="text-gray-300 text-sm text-center mb-6">Enter details to proceed.</p>

          {!stepCompleted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input type="text" placeholder="Enter Aadhaar Number" className="bg-gray-900 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-500" />
              <Input type="text" placeholder="Enter PAN Number" className="bg-gray-900 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-500" />
              <Input type="text" placeholder="Enter Bank Details" className="bg-gray-900 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-500" />
              <Input 
                type="number" 
                placeholder="Enter Loan Amount (₹)" 
                className="bg-gray-900 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-500"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 py-3 rounded-lg text-black font-semibold shadow-md"
              >
                Submit
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-green-300 text-lg font-bold">✅ Step 2 is clear!</p>
              <p className="text-gray-300">You are ready for a loan of ₹{loanAmount}.</p>
              <motion.button
                onClick={() => router.push("/loan-approved")}
                whileHover={{ scale: 1.1 }}
                className="mt-5 bg-blue-500 hover:bg-blue-600 transition-all duration-300 py-3 px-6 rounded-lg text-white font-semibold shadow-md"
              >
                Next Step →
              </motion.button>
            </motion.div>
          )}
        </CardContent>
      </motion.div>
    </div>
  );
}
