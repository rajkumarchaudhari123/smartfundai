"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    bankDetails: "",
    otp: "",
  });

  const [step, setStep] = useState(1);
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    "✅ PhonePe Connected Successfully!",
    "✅ Google Pay Linked!",
    "✅ Paytm Bank Account Verified!",
    "🔄 Fetching Bank Account Details...",
    "✅ Bank Details Verified!",
    "✅ Loan Eligibility Confirmed!",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step === 1) setStep(2);
    else if (step === 2) {
      setStep(3);
      setTimeout(showNextMessage, 1000);
    }
  };

  const showNextMessage = () => {
    if (messageIndex < messages.length) {
      setMessageIndex((prev) => prev + 1);
      setTimeout(showNextMessage, 1500);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#002D72] to-[#0077B6]">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            {step === 1
              ? "Enter Bank Details"
              : step === 2
              ? "Verify OTP"
              : "Verifying Bank Account..."}
          </h2>

          {step === 1 && (
            <>
              <input
                type="text"
                name="bankDetails"
                placeholder="Enter Bank Account Details"
                value={formData.bankDetails}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md mb-3 focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleNext}
                className="w-full bg-[#0056A8] text-white py-3 rounded-md hover:bg-[#004080] transition"
              >
                Verify Bank
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <input
                type="text"
                name="otp"
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md mb-3 focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleNext}
                className="w-full bg-[#0056A8] text-white py-3 rounded-md hover:bg-[#004080] transition"
              >
                Submit OTP
              </button>
            </>
          )}

          {step === 3 && (
            <div className="text-center text-green-600 font-semibold">
              {messages.slice(0, messageIndex).map((msg, index) => (
                <p key={index} className="mb-2">{msg}</p>
              ))}
              {messageIndex === messages.length && (
                <button
                  onClick={() => router.push("/dashboard")}
                  className="mt-4 bg-[#0077B6] text-white py-3 px-6 rounded-md hover:bg-[#0056A8] transition"
                >
                  Go to Dashboard
                </button>
              )}
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gray-100 p-6">
          <Image
            src="/signup2.png"
            alt="AI Loan"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <p className="mt-4 text-center text-gray-700">
            AI-powered loan approval. Get hassle-free financing with SmartFund AI.
          </p>
        </div>
      </div>
    </div>
  );
}
