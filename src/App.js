import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    const value = e.target.value;
    if (value === '=') {
      try {
        setResult(eval(display).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
      setResult('');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="display">
        <input type="text" value={display} readOnly />
        <div>{result}</div>
      </div>
      <div className="buttons">
        <button value="7" onClick={handleClick}>7</button>
        <button value="8" onClick={handleClick}>8</button>
        <button value="9" onClick={handleClick}>9</button>
        <button value="+" onClick={handleClick}>+</button>
        <button value="4" onClick={handleClick}>4</button>
        <button value="5" onClick={handleClick}>5</button>
        <button value="6" onClick={handleClick}>6</button>
        <button value="-" onClick={handleClick}>-</button>
        <button value="1" onClick={handleClick}>1</button>
        <button value="2" onClick={handleClick}>2</button>
        <button value="3" onClick={handleClick}>3</button>
        <button value="*" onClick={handleClick}>*</button>
        <button value="C" onClick={handleClick}>C</button>
        <button value="0" onClick={handleClick}>0</button>
        <button value="=" onClick={handleClick}>=</button>
        <button value="/" onClick={handleClick}>/</button>
      </div>
    </div>
  );
}

export default App;

