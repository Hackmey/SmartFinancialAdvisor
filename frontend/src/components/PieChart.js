// RiskBasedPieChart.js
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const RISK_DISTRIBUTIONS = {
    High: [
      { name: "Stocks", value: 70 },
      { name: "Mutual Funds", value: 20 },
      { name: "Fixed Deposits", value: 10 },
    ],
    Medium: [
      { name: "Stocks", value: 40 },
      { name: "Mutual Funds", value: 40 },
      { name: "Fixed Deposits", value: 20 },
    ],
    Low: [
      { name: "Stocks", value: 10 },
      { name: "Mutual Funds", value: 40 },
      { name: "Fixed Deposits", value: 50 },
    ],
};

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

export default function RiskBasedPieChart({ riskProfile = "Medium" }) {
  const data = RISK_DISTRIBUTIONS[riskProfile] || RISK_DISTRIBUTIONS.Medium;

  return (
    <div
        style={{
        width: "170%", 
        height: "400px",

        padding: "5px",
        border: "1px solid #e2e8f0",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
        backgroundColor: "#ffffff",
        transition: "box-shadow 0.3s ease-in-out",
        }}
    >
        <h2
        style={{
            textAlign: "center",
            marginBottom: "5px",
            fontSize: "1.5rem",
            color: "#1e293b",
            fontWeight: "600",
            
        }}
        >
        Portfolio Allocation - {riskProfile} Risk
        </h2>
        <ResponsiveContainer width="100%" height="85%" marginTop="50px">
        <PieChart>
            <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={120}
            dataKey="value"
            >
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
        </PieChart>
        </ResponsiveContainer>
    </div>
    );
}
