"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, XCircle, Clock } from "lucide-react";

interface Transaction {
  date: string;
  type: string;
  amount: string;
  status: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [loanStatus, setLoanStatus] = useState<string>("Pending");
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showStep1, setShowStep1] = useState(false);

  useEffect(() => {
    setTransactions([
      { date: "15 Mar 2025", type: "UPI Payment", amount: "₹5,000", status: "Success" },
      { date: "10 Mar 2025", type: "Bank Transfer", amount: "₹12,000", status: "Success" },
      { date: "05 Mar 2025", type: "Loan EMI", amount: "₹3,000", status: "Paid" },
    ]);

    // 6 seconds ke baad welcome message hide & step 1 show
    setTimeout(() => {
      setShowWelcome(false);
      setShowStep1(true);
    }, 6000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      <h1 className="text-4xl font-extrabold text-center text-blue-400 drop-shadow-lg">SmartFund AI Dashboard</h1>

      {/* Welcome Message */}
      {showWelcome && (
       <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-900 to-yellow-500 text-white py-4 px-8 rounded-lg shadow-2xl border border-yellow-300 animate-bounce z-50">
       <span className="text-lg font-bold tracking-wide">🚀 Welcome User! 🚀</span>
     </div>
     
     
      
      )}

      {/* Step 1 Completed Message */}
      {showStep1 && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-3 px-6 rounded-md shadow-lg flex flex-col items-center">
          <p>🎉 Step 1 Completed! Congratulations! 🎉</p>
          <Button
            onClick={() => router.push("/next-step")}
            className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
          >
            Next Step →
          </Button>
        </div>
      )}

      {/* Loan Status */}
      <Card className="mt-6 bg-gray-950 text-white shadow-lg shadow-blue-500/50">
        <CardContent className="p-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-blue-400">Loan Application Status</h2>
            <p className="mt-2 text-gray-300">Your instant loan request is currently: </p>
            <div className="flex items-center mt-2 text-lg">
              {loanStatus === "Approved" ? (
                <CheckCircle className="text-green-500 mr-2" />
              ) : loanStatus === "Rejected" ? (
                <XCircle className="text-red-500 mr-2" />
              ) : (
                <Clock className="text-yellow-500 mr-2" />
              )}
              <span className="font-bold text-blue-300">{loanStatus}</span>
            </div>
          </div>
          <Button onClick={() => setLoanStatus("Approved")} className="bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/50">
            Approve Loan
          </Button>
        </CardContent>
      </Card>

      {/* Creditworthiness Score */}
      <Card className="mt-6 bg-gray-950 text-white shadow-lg shadow-purple-500/50">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-purple-400">Creditworthiness Score</h2>
          <Progress value={78} className="mt-4 bg-gray-800" />
          <p className="mt-2 text-sm text-gray-400">Based on your transaction history</p>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card className="mt-6 bg-gray-950 text-white shadow-lg shadow-cyan-500/50">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-cyan-400">Recent Transactions</h2>
          <Table className="mt-4 border border-gray-700 rounded-lg">
            <TableHeader>
              <TableRow className="bg-gray-800 text-gray-300">
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((tx, index) => (
                <TableRow key={index} className="hover:bg-gray-800 transition-all">
                  <TableCell>{tx.date}</TableCell>
                  <TableCell>{tx.type}</TableCell>
                  <TableCell>{tx.amount}</TableCell>
                  <TableCell className={tx.status === "Success" ? "text-green-400" : "text-yellow-400"}>
                    {tx.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
