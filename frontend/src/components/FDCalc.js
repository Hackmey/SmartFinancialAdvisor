import React, { useState } from 'react';
import { Slider, Stack, Typography } from '@mui/material';
import './Calc.css';

export const FDCalc = () => {
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [investAmount, setInvestAmount] = useState(5000);
  const [years, setYears] = useState(10);

  const totalInvestment = investAmount * 12 * years;

  // Monthly SIP-style FD growth
  const r = expectedReturn / 100 / 12;
  const n = years * 12;
  const finalValue = investAmount * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const profit = finalValue - totalInvestment;

  return (
    <div className="modern-calculator">
      <Typography variant="h6" className="calculator-title" gutterBottom>
        Fixed Deposit Return Calculator
      </Typography>

      <Stack spacing={2} direction="row" alignItems="center" className="input-row">
        <Typography className="input-label">Expected Return (%)</Typography>
        <Slider
          value={expectedReturn}
          onChange={(e, newValue) => setExpectedReturn(newValue)}
          aria-label="Expected Return"
          valueLabelDisplay="auto"
          step={0.5}
          min={1}
          max={25}
          sx={{ flexGrow: 1 }}
        />
        <Typography className="input-value">{expectedReturn}%</Typography>
      </Stack>

      <Stack spacing={2} direction="row" alignItems="center" className="input-row">
        <Typography className="input-label">Invested Monthly (₹)</Typography>
        <Slider
          value={investAmount}
          onChange={(e, newValue) => setInvestAmount(newValue)}
          aria-label="Invest Amount"
          valueLabelDisplay="auto"
          step={500}
          min={1000}
          max={50000}
          sx={{ flexGrow: 1 }}
        />
        <Typography className="input-value">₹{investAmount}</Typography>
      </Stack>

      <Stack spacing={2} direction="row" alignItems="center" className="input-row">
        <Typography className="input-label">Investment Years</Typography>
        <Slider
          value={years}
          onChange={(e, newValue) => setYears(newValue)}
          aria-label="Investment Years"
          valueLabelDisplay="auto"
          step={1}
          min={1}
          max={40}
          sx={{ flexGrow: 1 }}
        />
        <Typography className="input-value">{years} yrs</Typography>
      </Stack>

      {/* Result Display */}
      <div className="calculator-results">
        <Typography variant="body1" className="result-label">
          Total Investment: ₹{totalInvestment.toLocaleString()}
        </Typography>
        <Typography variant="body1" className="result-value">
          Expected Final Value (approx): ₹{finalValue.toFixed(0).toLocaleString()}
        </Typography>
        <Typography variant="body1" className="result-value">
          Expected Profit (approx): ₹{profit.toFixed(0).toLocaleString()}
        </Typography>
      </div>
    </div>
  );
};
