import React, { useEffect, useState } from "react";
import InvestmentCharts from "../components/InvestmentCharts"; 
import RiskBasedPieChart from "../components/PieChart";
import { FinancialSummaryCard } from "../components/Card";
import { Grid } from '@mui/material';


export default function Profile() {

  const portfolios = {
    high: {
      name: 'High Risk Portfolio',
      allocations: [
        { name: 'Stocks', percentage: 70, color: '#ff6b6b' },
        { name: 'Mutual Funds', percentage: 20, color: '#4ecdc4' },
        { name: 'Fixed Deposits', percentage: 10, color: '#45b7d1' }
      ]
    },
    medium: {
      name: 'Medium Risk Portfolio',
      allocations: [
        { name: 'Stocks', percentage: 40, color: '#ff6b6b' },
        { name: 'Mutual Funds', percentage: 40, color: '#4ecdc4' },
        { name: 'Fixed Deposits', percentage: 20, color: '#45b7d1' }
      ]
    },
    low: {
      name: 'Low Risk Portfolio',
      allocations: [
        { name: 'Stocks', percentage: 10, color: '#ff6b6b' },
        { name: 'Mutual Funds', percentage: 40, color: '#4ecdc4' },
        { name: 'Fixed Deposits', percentage: 50, color: '#45b7d1' }
      ]
    }
  };

  const userData = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : {};
  const riskProfile = userData.riskAppetite || "Medium";

  


  return (
    <>
      <div className="profile-header" style={{ marginTop: "30px", marginLeft: "200px", padding: "20px" }}>
        <h1>Hey, {userData.name}</h1>
        <p>Manage your financial profile and investment preferences.</p>  
      </div>

      <Grid container spacing={3} marginLeft={"200px"} style={{ padding: "20px" }}>
        <Grid item xs={12} md={6}>
          <FinancialSummaryCard userData={userData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <RiskBasedPieChart riskProfile={riskProfile} />
        </Grid>
      </Grid>
      <InvestmentCharts />
    </>
  );
}
