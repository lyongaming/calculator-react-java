import React, { useState } from 'react';

import { Display } from "./components/Display";
import { ButtonPanel } from "./components/ButtonPanel";

import "./CalculatorApp.css";

export const CalculatorApp = () => {

  const [value, setValue] = useState("");

  return (
      <section id="calculator">
          <Display value={ value } changeValue={ setValue } />
          <ButtonPanel />
      </section>
  )
}
