import React, { useState, useEffect } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");

  useEffect(() => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("");
      return;
    }

    let res = 0;

    switch (operator) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        res = b !== 0 ? a / b : "❌ Cannot divide by 0";
        break;
      default:
        res = "";
    }

    setResult(res);
  }, [num1, num2, operator]);

  return (
    <div className="calculator-container">
      <h2 className="title"> Calculator</h2>

      <div className="calc-box">
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="input-box"
        />

        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          className="select-box"
        >
          <option value="+">➕ Add</option>
          <option value="-">➖ Subtract</option>
          <option value="*">✖ Multiply</option>
          <option value="/">➗ Divide</option>
        </select>

        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="input-box"
        />

        <div className="result-box">
          Result: <span>{result === "" ? "--" : result}</span>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
