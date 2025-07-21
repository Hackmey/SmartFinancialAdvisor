import React, { useState } from 'react';
import { Slider, Stack, Typography } from '@mui/material';
import './Calc.css';

export const MfCalc = () => {
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [investAmount, setInvestAmount] = useState(5000);
  const [years, setYears] = useState(10);

  const monthlyRate = expectedReturn / 12 / 100;
  const months = years * 12;
  const totalInvested = investAmount * 12 * years;


  const futureValue =
    investAmount *
    (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));

  return (
    <div className="modern-calculator">
      <Typography variant="h6" className="calculator-title" gutterBottom>
        Mutual Fund Return Calculator
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


      <div className="calculator-results">
        <Typography variant="body1" className="result-label">
          Total Investment: ₹{investAmount * 12 * years}
        </Typography>
        <Typography variant="body1" className="result-value">
          Expected Final Value (approx): ₹{futureValue.toFixed(0)}
        </Typography>
        <Typography variant="body1" className="result-value">
            Expected Profit (approx): ₹{(futureValue - totalInvested).toFixed(0)}
        </Typography>
      </div>
    </div>
  );
};
