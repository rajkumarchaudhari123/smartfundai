import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen p-6 flex flex-col items-center"> 
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-400 mb-6 drop-shadow-lg">Our Loan Services</h1>
        <p className="text-gray-300 mb-10">
          AI-powered loan solutions to simplify and accelerate your financial journey.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <Card className="bg-gray-900 text-white shadow-md shadow-purple-500/30 rounded-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-purple-400">🚀 AI-Based Loan Approval</h2>
              <p className="text-gray-400 mt-2">Get instant loan approvals with our advanced AI-driven verification process.</p>
            </CardContent>
          </Card>

          {/* Service 2 */}
          <Card className="bg-gray-900 text-white shadow-md shadow-yellow-500/30 rounded-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-yellow-400">💰 Personalized Loan Offers</h2>
              <p className="text-gray-400 mt-2">AI analyzes your profile to provide customized loan options with the best interest rates.</p>
            </CardContent>
          </Card>

          {/* Service 3 */}
          <Card className="bg-gray-900 text-white shadow-md shadow-cyan-500/30 rounded-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-cyan-400">📊 Credit Score Analysis</h2>
              <p className="text-gray-400 mt-2">AI evaluates your credit score and suggests ways to improve loan eligibility.</p>
            </CardContent>
          </Card>

          {/* Service 4 */}
          <Card className="bg-gray-900 text-white shadow-md shadow-green-500/30 rounded-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-green-400">🏢 Business Loan Assistance</h2>
              <p className="text-gray-400 mt-2">AI-driven solutions to help businesses secure funding with ease.</p>
            </CardContent>
          </Card>

          {/* Service 5 */}
          <Card className="bg-gray-900 text-white shadow-md shadow-red-500/30 rounded-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-red-400">📉 Debt Management</h2>
              <p className="text-gray-400 mt-2">AI-driven insights to help you manage and repay your loans effectively.</p>
            </CardContent>
          </Card>

          {/* Service 6 */}
          <Card className="bg-gray-900 text-white shadow-md shadow-blue-500/30 rounded-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-blue-400">🛡 Loan Fraud Detection</h2>
              <p className="text-gray-400 mt-2">Advanced AI algorithms ensure secure and fraud-free loan processing.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}