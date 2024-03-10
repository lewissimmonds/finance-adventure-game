import React, { useState, useEffect } from "react";
import QuestionBox from "../components/QuestionBox";
import ScenarioBox from "../components/ScenarioBox";
import data from "../scenarios.json";
import { InflationCalc, DevelopingGraph, Investing, NatTool } from "./scripts";
import CanvasJSReact from "@canvasjs/react-charts";
import AdventureRequestFont from "../assets/fonts/AdventureRequest-j8W9.ttf";
import { useNavigate } from "react-router-dom";

import "./style.css";

const TestPage = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [divs, setDivs] = useState(data);
  const [currentDivIndex, setCurrentDivIndex] = useState(0);

  const handleNextClick = () => {
    if (currentDivIndex < divs.length - 1) {
      setCurrentDivIndex(currentDivIndex + 1);
    } else {
      console.log("End of scenarios reached");
      // Assuming the completion of all scenarios signifies the player moving to level 2
      localStorage.setItem("level", "2"); // Update the level in localStorage
      navigate("/hub"); // Navigate the player to the hub

      // Optionally, navigate the player to a new page or show a completion message
      // navigate('/completion-page') or set a state to show a completion message
    }
  };

  const handleBackClick = () => {
    if (currentDivIndex > 0) {
      setCurrentDivIndex(currentDivIndex - 1);
    }
  };

  const currentDiv = divs[currentDivIndex];

  const styles = {
    container: {
      fontFamily: "'AllerDisplayStdRg', sans-serif",
      padding: "20px",
      backgroundColor: "#F0EAD6",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
    questionScenarioContainer: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderRadius: "15px",
      padding: "20px",
      maxWidth: "800px", // Max width for better readability on wider screens
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
    },
    question: {
      color: "#003300",
      fontFamily: "'AdventureRequest', cursive",
      fontSize: "24px",
      margin: "20px 0",
    },
    scenario: {
      fontSize: "18px",
      margin: "10px 0",
    },
    answers: {
      backgroundColor: "#8c7853",
      color: "#FFFFFF",
      padding: "10px 15px",
      margin: "10px",
      width: "200px", // Uniform size for answer boxes
      borderRadius: "10px",
      cursor: "pointer",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    graph: {
      width: "60vw",
      margin: "20px auto",
      border: "1px solid #ddd",
      borderRadius: "10px",
      overflow: "hidden",
    },
  };

  return (
    <div style={styles.container}>
      {currentDivIndex !== 0 && (
        <div
          style={{
            ...styles.answers,
            width: "fit-content",
            marginBottom: "20px",
          }}
          onClick={handleBackClick}
        >
          Back
        </div>
      )}

      <div style={styles.questionScenarioContainer}>
        {currentDiv.type === "question" && (
          <>
            <h1 style={styles.question}>{currentDiv.question}</h1>
            <p style={styles.scenario}>{currentDiv.scenario}</p>
            <h3 style={{ fontFamily: "'AdventureRequest', cursive" }}>
              Answers
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {currentDiv.answers.map((answer, index) => (
                <div
                  key={index}
                  style={styles.answers}
                  onClick={handleNextClick}
                >
                  {answer}
                </div>
              ))}
            </div>
          </>
        )}

        {currentDiv.type === "answer" && (
          <>
            <h1 style={styles.question}>{currentDiv.explanation[0]}</h1>
            {currentDiv.explanation.slice(1).map((exp, index) => (
              <p key={index} style={styles.scenario}>
                {exp}
              </p>
            ))}
            <div
              style={{
                ...styles.answers,
                width: "fit-content",
                marginTop: "20px",
              }}
              onClick={handleNextClick}
            >
              Next
            </div>
          </>
        )}
      </div>

      {currentDiv.script === true && (
        <div>
          {currentDiv.name === "inflationScript" && <InflationCalc />}
          {currentDiv.name === "natTool" && <NatTool />}
        </div>
      )}
      {currentDiv.graph === true && (
        <div style={styles.graph}>
          {currentDiv.name === "developingGraph" && <DevelopingGraph />}
          {currentDiv.name === "investingGraph" && <Investing />}
        </div>
      )}
      {currentDiv.image === true && currentDiv.name === "assetReturns" && (
        <div style={{ ...styles.graph, padding: "20px" }}>
          <img
            src="https://github.com/lewissimmonds/finance-adventure-game/blob/ant-test/frontend/src/Blackrock_asset_returns.png?raw=true"
            alt="Asset Returns"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
};

export default TestPage;
