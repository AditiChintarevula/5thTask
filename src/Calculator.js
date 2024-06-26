import React, { useState } from 'react';
import './Calculator.css';
import Button from './Button';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      resetInput();
    } else {
      setInput(input + value);
    }
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  const resetInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <h1 className="title">EasiCalc</h1>
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="keypad">
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '=', '/', 'C'].map((item) => (
          <Button key={item} value={item} onClick={() => handleClick(item)} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
