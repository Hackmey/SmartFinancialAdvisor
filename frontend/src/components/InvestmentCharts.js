// InvestmentCharts.jsx
import React from 'react';
import './InvestmentCharts.css';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend, LabelList
} from 'recharts';


const marketData = {
  stocks: [
    { symbol: "ABC", name: "ABC Bank Ltd", growth_pct_yoy: 10.5 },
    { symbol: "XYZ", name: "XYZ FinServ", growth_pct_yoy: 15.2 }
  ],
  mutual_funds: [
    { code: "MF_EQ_EQTY", name: "FinTech Equity Opportunities", return_pct_3y_cagr: 14.8 },
    { code: "MF_BAL_MOD", name: "Balanced Growth Fund", return_pct_3y_cagr: 9.2 }
  ],
  fixed_deposits: [
    { bank: "SafeBank", tenure_months: 12, rate_pct: 6.0 },
    { bank: "SafeBank", tenure_months: 36, rate_pct: 7.1 }
  ]
};

const InvestmentCharts = () => (
  <div className="investment-charts">
    {/* Stock Chart */}
    <h2>Stock YoY Growth</h2>
    <div className="chart-wrapper">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={marketData.stocks}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis unit="%" />
          <Tooltip />
          <Legend />
          <Bar dataKey="growth_pct_yoy" fill="#8884d8" name="YoY Growth (%)" />
        </BarChart>
      </ResponsiveContainer>
    </div>

    {/* Mutual Fund Chart */}
    <h2>Mutual Fund 3‑Year CAGR</h2>
    <div className="chart-wrapper">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={marketData.mutual_funds}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis unit="%" />
          <Tooltip />
          <Legend />
          <Bar dataKey="return_pct_3y_cagr" fill="#82ca9d" name="3Y CAGR (%)" />
        </BarChart>
      </ResponsiveContainer>
    </div>

    {/* Fixed Deposit Chart */}
    <h2>Fixed Deposit Rates by Tenure</h2>
    <div className="chart-wrapper">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={marketData.fixed_deposits}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="tenure_months"
            label={{ value: 'Tenure (months)', position: 'insideBottom', offset: -5 }}
          />
          <YAxis unit="%" />
          <Tooltip />
          <Legend />
          <Bar dataKey="rate_pct" fill="#ffc658" name="FD Rate (%)">   <LabelList dataKey="bank" position="top" />
          </Bar>

          
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default InvestmentCharts;
