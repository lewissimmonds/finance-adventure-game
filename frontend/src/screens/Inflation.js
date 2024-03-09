import React, { useState, useEffect } from "react";
import QuestionBox from "../components/QuestionBox";
import ScenarioBox from "../components/ScenarioBox";
import data from "../scenarios.json";



const InflationCalc = () => {
    const [years, setYears] = useState('');
    const [inflation, setInflation] = useState('');
    const [capital, setCapital] = useState('');
    const [result, setResult] = useState('');
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'years') {
          setYears(value);
        } else if (name === 'inflation') {
          setInflation(value);
        }
        else if (name === 'capital') {
            setCapital(value);
          }
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const bottom= 1+inflation/100;
        console.log(bottom);
        const bottomYear=Math.pow(bottom,years);
        console.log(bottomYear);
        const sum = capital / bottomYear;
        setResult(sum.toFixed(2));
      };


return(
  <div>
    <form onSubmit={handleSubmit}>
    <label>Capital:</label><br></br>
    <input type="number" name="capital" value={capital} onChange={handleChange}></input><br></br>
    <label>Inflation (in %):</label><br></br>
    <input type="number" name="inflation" value={inflation} onChange={handleChange}></input><br></br>
    <label>Years:</label><br></br>
    <input type="number" name="years" value={years} onChange={handleChange}></input><br></br>
    <input type="submit" value="Calculate capital loss"></input>
    </form>
    {result !== '' && (
        <div>
          <h3>Result:</h3>
          <p>{result}</p>
        </div>
      )}
  </div>

);
};

export default InflationCalc;