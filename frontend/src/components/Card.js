import React from 'react';
import { Card, CardContent, Typography, Box, Divider } from '@mui/material';

export const FinancialSummaryCard = ({ userData }) => {
    const { monthlyIncome = 0, monthlyExpense = 0, investmentHorizon = 0, riskAppetite } = userData || {};
    const savings = monthlyIncome - monthlyExpense;

    const getRiskAppetiteColor = (risk) => {
        switch (risk?.toLowerCase()) {
            case 'high': return '#ef4444';
            case 'medium': return '#f59e0b';
            case 'low': return '#10b981';
            default: return '#64748b';
        }
    };

    const financialItems = [
        { label: 'Monthly Income', value: `₹${monthlyIncome.toLocaleString()}`, color: '#1e293b' },
        { label: 'Monthly Expenses', value: `₹${monthlyExpense.toLocaleString()}`, color: '#1e293b' },
        { label: 'Investment Horizon', value: `${investmentHorizon} years`, color: '#1e293b' },
        { 
            label: 'Risk Appetite', 
            value: riskAppetite || 'Not Specified', 
            color: getRiskAppetiteColor(riskAppetite) 
        },
        { 
            label: 'Monthly Savings', 
            value: `₹${savings.toLocaleString()}`, 
            color: savings < 0 ? '#ef4444' : '#10b981' 
        }
    ];

    return (
        <Card sx={{
            borderRadius: 2,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            width: '100%',
            height: '100%',
            maxWidth: 500,
            marginLeft: '10px',
            marginRight: '120px',
        }}>
            <CardContent sx={{ p: 3 }}>
                <Typography 
                    variant="h6" 
                    sx={{
                        fontWeight: 600,
                        color: '#1e293b',
                        mb: 2,
                        fontFamily: "'Inter', sans-serif"
                    }}
                >
                    Financial Summary
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {financialItems.map((item, index) => (
                        <React.Fragment key={item.label}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="body1" sx={{ color: '#64748b' }}>
                                    {item.label}:
                                </Typography>
                                <Typography variant="body1" sx={{ fontWeight: 600, color: item.color }}>
                                    {item.value}
                                </Typography>
                            </Box>
                            {index < financialItems.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};