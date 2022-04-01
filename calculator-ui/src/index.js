import React from 'react';
import { createRoot } from 'react-dom/client';
import { CalculatorApp } from './CalculatorApp';
import './index.css';

const root = createRoot(document.getElementById("root"));
root.render(<CalculatorApp />)