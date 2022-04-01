import React from 'react'

import { validInput } from '../helpers/regexHelper';

export const Display = ({ value, changeValue }) => {

  const handleChange = e => {
    const newValue = e.target.value; 
    if (validInput(newValue)) {
      changeValue(newValue);
    }
  } 

  return (
    <input id="calculator__display" type="text" value={value} onChange={handleChange} />
  )
}
