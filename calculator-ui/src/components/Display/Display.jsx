import React from 'react'

import "./Display.css";

export const Display = () => {

  return (
    <div className="calculator__display">
      <div className="theme__toggler"></div>
      <div className="expressions">1 + 2 * 3 - 4</div>
      <div className="result">
        <span>=</span>
        <span>3</span>
      </div>
    </div>
  )
}
