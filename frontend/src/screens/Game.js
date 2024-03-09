import React from "react";
import QuestionBox from "../components/QuestionBox";
import ScenarioBox from "../components/ScenarioBox";
import data from "../scenarios.json";

const GamePage = () => (
  <div>
    <h1>Game Page</h1>
    <ScenarioBox scenarioText="Here's a scenario for you to consider..." />
    <QuestionBox questionText="What would you do in this scenario?" />
  </div>
);

export default GamePage;
