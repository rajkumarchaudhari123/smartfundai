import React from "react";
import { Card, CardContent } from "@/components/ui/card";

// InfoCard component with TypeScript props
interface InfoCardProps {
  title: string;
  description: string;
  points?: string[];
  color: string;
  icon: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, points, color, icon }) => {
  return (
    <Card className={`mt-6 bg-gray-900 text-white shadow-md shadow-${color}-500/30 rounded-lg`}>
      <CardContent className="p-6">
        <h2 className={`text-2xl font-semibold text-${color}-400 flex items-center`}>
          <span className="mr-2">{icon}</span> {title}
        </h2>
        <p className="text-gray-400 mt-2">{description}</p>
        {points && (
          <ul className="list-disc list-inside text-gray-400 mt-3 space-y-2">
            {points.map((point, index) => (
              <li key={index}>✅ {point}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl bg-gray-950 shadow-xl shadow-blue-500/30 rounded-2xl p-8">
        <h1 className="text-4xl font-extrabold text-blue-400 text-center mb-6 drop-shadow-lg">
          About <span className="text-blue-500">SmartFund AI</span>
        </h1>
        <p className="text-gray-300 text-lg text-center leading-relaxed">
          SmartFund AI is an <strong>AI-powered financial platform</strong> that helps users{" "}
          <strong>optimize investments, minimize risks, and make smart financial decisions</strong>{" "}
          using <strong>cutting-edge AI algorithms</strong>.
        </p>

        {/* Vision */}
        <InfoCard
          title="🚀 Our Vision"
          description="We aim to revolutionize the financial sector with AI-powered insights and predictive analytics, making investment strategies seamless and efficient."
          color="purple"
          icon="🚀"
        />

        {/* Loan System */}
        <InfoCard
          title="💰 How Our Loan System Works?"
          description="SmartFund AI provides AI-powered loans based on your credit score & transaction history."
          points={[
            "Instant approval with AI-based assessment",
            "Low-interest rates for eligible users",
            "Minimal documentation for a hassle-free process",
            "Quick disbursal within 24 hours",
          ]}
          color="yellow"
          icon="💰"
        />

        {/* Why Choose Us */}
        <InfoCard
          title="💡 Why Choose Us?"
          description="We provide advanced AI-driven financial analysis and secure financial transactions."
          points={[
            "Advanced AI-driven financial analysis",
            "Real-time investment insights for smarter decisions",
            "Secure & transparent financial transactions",
            "Personalized AI recommendations tailored to you",
          ]}
          color="cyan"
          icon="💡"
        />

        {/* Meet Our Team */}
        <InfoCard
          title="👥 Meet Our Team"
          description="Our expert team consists of AI specialists, financial analysts, and software engineers, all working together to bring next-gen financial solutions."
          color="green"
          icon="👥"
        />
      </div>
    </div>
  );
}
