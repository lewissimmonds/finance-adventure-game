import React, { useEffect, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';


export const InflationCalc= () => {
  useEffect(() => {
    // JavaScript code to be executed
    const form = document.getElementById('inflationForm');
    const resultDiv = document.getElementById('result');

    const calculateSum = () => {
      // Get values of input fields
      const capital = parseFloat(form.capital.value);
      const years = parseFloat(form.years.value);
      const inflation = parseFloat(form.inflation.value);

      // Check if input values are valid numbers
      if (isNaN(capital) || isNaN(years) || isNaN(inflation)) {
        resultDiv.textContent = 'Please enter valid numbers.';
        return;
      }

      // Calculate the sum of the numbers
      const bottom= 1+inflation/100;
      const bottomYear=Math.pow(bottom,years);
      const sum = capital / bottomYear;
      const roundsum = sum.toFixed(2);

      // Display the result
      resultDiv.textContent = `Loss is ${roundsum}.`;
    };

    // Add event listeners to input fields
    form.capital.addEventListener('input', calculateSum);
    form.years.addEventListener('input', calculateSum);
    form.inflation.addEventListener('input', calculateSum);
  }, []); // Empty dependency array to run effect only once

  // HTML content to be rendered
  const htmlContent = `
    <div>
      <form id="inflationForm">
        <label>Capital:</label><br>
        <input type="number" name="capital" id="capital"><br>
        <label>Inflation (in %):</label><br>
        <input type="number" name="inflation" id="inflation"><br>
        <label>Years:</label><br>
        <input type="number" name="years" id="years"><br>
      </form>
      <div id="result"></div>
    </div>
  `;

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export const DevelopingGraph=()=>{
  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const [chartData, setChartData] = useState(null);
  const [jsonData, setJsonData] = useState({
      "india": [
        {"label": "2022", "y": 6.70},
        {"label": "2021", "y": 5.13},
        {"label": "2020", "y": 6.62},
        {"label": "2019", "y": 3.73}
      ],
      "us": [
        {"label": "2022", "y": 8.00},
        {"label": "2021", "y": 4.70},
        {"label": "2020", "y": 1.23},
        {"label": "2019", "y": 1.81}
      ]
  });  
  
    useEffect(() => {
      setChartData({
        animationEnabled: true,
        title: {
          text: 'Inflation rates overtime',
        },
        axisY: {
          title: 'Inflation rates',
        },
        toolTip: {
          shared: true,
        },
        data: [
          {
            type: 'spline',
            name: 'India',
            showInLegend: true,
            dataPoints: jsonData.india,
          },
          {
            type: 'spline',
            name: 'US',
            showInLegend: true,
            dataPoints: jsonData.us,
          },
        ],
      });
    }, [jsonData]);
    /* const htmlContent = `
      <div>
        {chartData && <CanvasJSChart options={chartData} />}
      </div>
    `; */
    return (
      <div >
        {chartData && <CanvasJSChart options={chartData} />}
      </div>
    );
}