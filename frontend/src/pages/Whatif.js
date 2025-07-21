import React, { useState } from 'react';
import { MfCalc } from '../components/MfCalc';
import { StocksCalc } from '../components/StocksCalc';
import { FDCalc } from '../components/FDCalc';

export const Whatif = () => {
  return (
    <div style={{ marginTop: "30px", marginLeft: "200px", padding: "20px" }}> 
      <h1>What-If Analysis</h1>
      <p>Explore different financial scenarios and their potential outcomes.</p>
  
      <MfCalc />
      <StocksCalc />
      <FDCalc />

    </div>
  );
}
