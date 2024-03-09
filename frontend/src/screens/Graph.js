// import React from "react";
import React, { useState, useEffect } from 'react';
import QuestionBox from "../components/QuestionBox";
import ScenarioBox from "../components/ScenarioBox";
import data from '../graphdata.json';
import CanvasJSReact from '@canvasjs/react-charts';
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const GraphPage = () => {
    const [chartData, setChartData] = useState(null);
  
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
            dataPoints: data.india,
          },
          {
            type: 'spline',
            name: 'US',
            showInLegend: true,
            dataPoints: data.us,
          },
        ],
      });
    }, []);
  
    return (
      <div>
        <QuestionBox questionText="Investing in developing countries is more interesting" />
        {chartData && <CanvasJSChart options={chartData} />}
      </div>
    );
  };


export default GraphPage;