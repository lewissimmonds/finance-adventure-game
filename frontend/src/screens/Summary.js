import React from "react";
import { useNavigate } from "react-router-dom";
import {NatTool } from "./scripts";

const SummaryPage = () => {
  const navigate = useNavigate(); // Hook to navigate between routes

  const styles = {
    container: {
      fontFamily: "'Arial', sans-serif",
      padding: "40px",
      backgroundColor: "#f0f0f0",
      color: "#333",
      lineHeight: "1.6",
    },
    section: {
      backgroundColor: "#ffffff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      margin: "20px 0",
    },
    header: {
      fontSize: "30px",
      textAlign: "center",
      color: "green",
      margin: "0 0 20px 0",
    },
    subHeader: {
      fontSize: "20px",
      color: "green",
      marginBottom: "10px",
    },
    list: {
      paddingLeft: "20px",
    },
    listItem: {
      marginBottom: "10px",
    },
    note: {
      fontStyle: "italic",
    },
    button: {
      display: "block",
      width: "200px",
      padding: "10px",
      margin: "20px auto",
      fontSize: "16px",
      color: "#fff",
      backgroundColor: "green",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  const handleBackToHub = () => {
    navigate("/hub"); // Route back to the hub page
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Investment Summary</h1>
      <div style={styles.section}>
        <h2 style={styles.subHeader}>Key Principles</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Aim for returns that outpace inflation to preserve capital value.
          </li>
          <li style={styles.listItem}>
            Explore a variety of financial assets, including those in
            high-performing and emerging markets.
          </li>
          <li style={styles.listItem}>
            Leverage the power of compounding for long-term wealth accumulation.
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subHeader}>Investment Strategies</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Consider the potential of emerging market bank stocks over
            traditional deposit accounts.
          </li>
          <li style={styles.listItem}>
            Seek funds managed by firms with proven track records of success.
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subHeader}>Behavioral Insights</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Maintain discipline and avoid making decisions based on emotions.
          </li>
          <li style={styles.listItem}>
            Resist the urge to follow the herd; research before investing.
          </li>
          <li style={styles.listItem}>
            Diversify investments to spread risk across different assets.
          </li>
        </ul>
        <p style={styles.note}>
          Note: Always consult with a financial advisor before making investment
          decisions.
        </p>
        </div>
        <div style={styles.section}>
        <h2 style={styles.subHeader}>Future capital calculator tool</h2>
        <NatTool/>
      </div>
      <button onClick={handleBackToHub} style={styles.button}>
        Back to Hub
      </button>
    </div>
  );
};

export default SummaryPage;
