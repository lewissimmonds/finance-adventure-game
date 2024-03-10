import React from "react";
import { Link } from "react-router-dom";
// Import the font file
import AdventureRequestFont from "../assets/fonts/AdventureRequest-j8W9.ttf";

const IndexPage = () => {
  return (
    <>
      <style>
        {`
          @font-face {
            font-family: 'AdventureRequest-j8W9';
            src: url(${AdventureRequestFont}) format('truetype');
          }
          
        `}
      </style>
      <div style={styles.container}>
        <div style={styles.headerBox}>
          <h1 style={styles.header}>Quest for Capital!</h1>
        </div>
        <div>
          <Link to="/hub" style={styles.button}>
            Start Game
          </Link>
        </div>
      </div>
    </>
  );
};

// Define styles object
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
  },
  header: {
    color: "yellow",
    fontSize: "4em",
    fontFamily: "AdventureRequest-j8W9",
    margin: 0,
    textShadow: "2px 2px 4px #000000",
  },
  button: {
    display: "inline-block", // Add this line
    padding: "20px 40px",
    fontSize: "1.5em",
    color: "white",
    backgroundColor: "green",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
    marginTop: "200px", // Increase this value to add more space between the header and the button
  }
};

export default IndexPage;
