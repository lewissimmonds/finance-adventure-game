import React from "react";
import { Link } from "react-router-dom";
// Import the font files
import AdventureRequestFont from "../assets/fonts/AdventureRequest-j8W9.ttf";
import AllerDisplayStdRgFont from "../assets/fonts/AllerDisplay_Std_Rg.ttf";

const IndexPage = () => {
  return (
    <>
      <style>
        {`
          @font-face {
            font-family: 'AdventureRequest-j8W9';
            src: url(${AdventureRequestFont}) format('truetype');
          }
          @font-face {
            font-family: 'AllerDisplayStdRg';
            src: url(${AllerDisplayStdRgFont}) format('truetype');
          }
        `}
      </style>
      <div style={styles.container}>
        <div style={styles.headerBox}>
          <h1 style={styles.header}>Quest for Capital!</h1>
        </div>
        <div style={styles.descriptionBox}>
          <p style={styles.description}>
            EMBARK ON AN EXCITING JOURNEY TO BUILD YOUR CAPITAL!
          </p>
        </div>
        <div>
          <Link to="/hub" style={styles.button}>
            START GAME
          </Link>
        </div>
      </div>
    </>
  );
};

// Updated styles object
const styles = {
  container: {
    position: "absolute", // Add this line
    top: 0, // Add this line
    left: 0, // Add this line
    width: "100%", // Add this line
    height: "100%", // Add this line
    textAlign: "center",
    backgroundColor: "lightgreen",
  },
  headerBox: {
    backgroundColor: "green",
    padding: "20px",
    borderRadius: "10px",
    display: "inline-block",
    marginTop: "100px",
    zIndex: 2, // Ensure the header is above the description box
  },
  descriptionBox: {
    position: "absolute", // Position absolutely to layer under the header
    top: "120px", // Adjust this value to overlap under the header box
    left: "50%",
    transform: "translateX(-50%)", // Center the description box
    width: "30%", // Adjust width as needed
    backgroundColor: "#f0f0f0", // Background color for the description box
    padding: "20px",
    borderRadius: "10px",
    zIndex: 1, // Lower z-index than headerBox to appear underneath
    marginTop: "100px", // Adjust as necessary for spacing from the header box
  },
  header: {
    color: "yellow",
    fontSize: "4em",
    fontFamily: "AdventureRequest-j8W9",
    margin: 0,
    textShadow: "2px 2px 4px #000000",
  },
  description: {
    fontFamily: "AllerDisplayStdRg",
    fontSize: "1.2em",
    color: "black",
  },
  button: {
    fontFamily: "AdventureRequest-j8W9",
    display: "inline-block",
    padding: "20px 40px",
    fontSize: "1.5em",
    color: "white",
    backgroundColor: "green",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
    marginTop: "250px", // Adjust as necessary for spacing from the description
    width: "30%",
  },
};

export default IndexPage;
