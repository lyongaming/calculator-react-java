// import React, { useState } from 'react';

import { Display } from "./components/Display/Display";
import { ButtonPanel } from "./components/ButtonPanel/ButtonPanel";

import "./CalculatorApp.css";

export const CalculatorApp = () => {

  return (
      <section>
          <div className="calculator">
            <Display />
            <ButtonPanel />
          </div>
      </section>
  )
}
