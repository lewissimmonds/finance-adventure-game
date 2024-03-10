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
        {"label": "2017", "y": 3.33},
        {"label": "2018", "y": 3.94},
        {"label": "2019", "y": 3.73},
        {"label": "2020", "y": 6.62},
        {"label": "2021", "y": 5.13},
        {"label": "2022", "y": 6.70}
        
      ],
      "us": [
        {"label": "2017", "y": 2.13},
        {"label": "2018", "y": 2.44},
        {"label": "2019", "y": 1.81},
        {"label": "2020", "y": 1.23},
        {"label": "2021", "y": 4.70},
        {"label": "2022", "y": 8.00}
      ],
      "eu": [
        {"label": "2018", "y": 1.43},
        {"label": "2018", "y": 1.74},
        {"label": "2019", "y": 1.63},
        {"label": "2020", "y": 0.48},
        {"label": "2021", "y": 2.55},
        {"label": "2022", "y": 8.83}
      ]
  });  
  
    useEffect(() => {
      setChartData({
        animationEnabled: true,
        title: {
          text: 'Gains overtime',
        },
        axisY: {
          title: 'Gains rates',
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
          {
            type: 'spline',
            name: 'EU',
            showInLegend: true,
            dataPoints: jsonData.eu,
          }
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
};

export const Investing=()=>{
  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const [chartData, setChartData] = useState(null);
  const [jsonData, setJsonData] = useState({
      "Investing": [
        {"label": "5", "y": 200},
        {"label": "10", "y": 400},
        {"label": "15", "y": 800},
        {"label": "20", "y": 1600}        
      ]
  });  
  
    useEffect(() => {
      setChartData({
        animationEnabled: true,
        title: {
          text: 'Investing revenue overtime with compounding',
        },
        axisY: {
          title: 'Benefits',
        },
        toolTip: {
          shared: true,
        },
        data: [
          {
            type: 'splineArea',
            name: 'Investing',
            showInLegend: true,
            dataPoints: jsonData.Investing,
          }
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
};

export const NatTool=()=>{
  useEffect(() => {
    var capital, fd_rate ,total_interest ,fd_interest_growth_rate , withdraw_amount , fd_interest , time_period ;
    // JavaScript code to be executed
    const form = document.getElementById('natTool');
    const totalInt = document.getElementById('totalint');
    const totalcap = document.getElementById('totalcap');
    const aftertax = document.getElementById('aftertax');
    const effrate = document.getElementById('effrate');

    const calculateNat = () => {
      total_interest = 0;
  fd_interest = 0;

  fd_interest_growth_rate = parseFloat(form.investmentratev.value) ;
  withdraw_amount = parseFloat(form.withdrawalamountv.value) ;
  capital = parseFloat(form.capitalv.value) ;
  fd_rate = parseFloat(form.fdratev.value) ;
  time_period = parseFloat(form.timev.value) ;

  fd_interest =  ((capital * fd_rate) / 100) - withdraw_amount;
  

  for (var i = 1; i <= time_period; i++) {

    total_interest += (fd_interest * (Math.pow((1 + fd_interest_growth_rate / 100), i)));

    console.log(fd_interest * (Math.pow((1 + fd_interest_growth_rate / 100), i)));
  }

  var totalCapital= total_interest + capital;
  var totalAfterTax= (total_interest*0.9) + capital;
  var effectiveRate= (Math.exp(1 / time_period * Math.log(((total_interest + capital) / capital))) - 1) * 100;

      // Display the result
      totalcap.textContent = `Total interest (in lacs): ${Math.trunc(total_interest)}`
      totalInt.textContent=`Total capital (in lacs) at the end of ${time_period} years: ${totalCapital.toFixed(2) }`
      aftertax.textContent = `After tax: ${totalAfterTax.toFixed(2)}`
      effrate.textContent=`Effective interest rate (on initial capital): ${effectiveRate.toFixed(2)}`;
    };

    // Add event listeners to input fields
    form.capitalv.addEventListener('input', calculateNat);
    form.fdratev.addEventListener('input', calculateNat);
    form.investmentratev.addEventListener('input', calculateNat);
    form.withdrawalamountv.addEventListener('input', calculateNat);
    form.timev.addEventListener('input', calculateNat);
  }, []); // Empty dependency array to run effect only once

  // HTML content to be rendered
  const htmlContent = `
    <div>
      <form id="natTool">
        <label>Initial capital (in lacs):</label><br>
        <input type="number" name="capitalv" id="capitalv"><br>
        <label>FD interest rate (after tax):</label><br>
        <input type="number" name="fdratev" id="fdratev"><br>
        <label>Stock market investment compounding rate (annual):</label><br>
        <input type="number" name="investmentratev" id="investmentratev"><br>
        <label>FD interest withdraw amount (each year):</label><br>
        <input type="number" name="withdrawalamountv" id="withdrawalamountv"><br>
        <label>Time period (in years):</label><br>
        <input type="number" name="timev" id="timev"><br>
      </form>
      <div id="totalint"></div>
      <div id="totalcap"></div>
      <div id="aftertax"></div>
      <div id="effrate"></div>
    </div>
  `;

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};