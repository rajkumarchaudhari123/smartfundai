import React from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is SmartFund AI?",
      answer: "SmartFund AI is an AI-driven loan approval system that provides quick and efficient financial solutions without traditional credit score dependency."
    },
    {
      question: "How does AI assess loan eligibility?",
      answer: "Our AI uses alternative data points such as income trends, spending habits, and employment history to determine loan eligibility."
    },
    {
      question: "Is SmartFund AI secure?",
      answer: "Yes, we use state-of-the-art encryption and security measures to protect user data and transactions."
    },
    {
      question: "What are the benefits of using AI for loans?",
      answer: "AI speeds up the loan approval process, reduces paperwork, and makes funding accessible to a wider audience."
    },
    {
      question: "Does SmartFund AI charge higher interest rates?",
      answer: "No, we offer competitive rates and flexible repayment options based on AI-driven risk assessment."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f19] to-[#1E3A8A] text-white flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-gold-500">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-black p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blue-400">{faq.question}</h2>
              <p className="mt-2 text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}