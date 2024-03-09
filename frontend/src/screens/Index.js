import React from "react";
import { Link } from "react-router-dom";
// Import the font files
import AdventureRequestFont from "../assets/fonts/AdventureRequest-j8W9.ttf";
import AllerDisplayStdRgFont from "../assets/fonts/AllerDisplay_Std_Rg.ttf";
import backgroundImage from "../assets/images/background.jpg";

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
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    textAlign: "center",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover", // Add this line to make the image fit the container
  },
  headerBox: {
    position: "relative", // Change this to 'relative'
    backgroundColor: "green",
    padding: "20px",
    borderRadius: "10px",
    display: "inline-block",
    marginTop: "100px",
    zIndex: 2, // Ensure the header is above the description box
    marginLeft: "1000px", // Adjust as necessary for centering
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add this line
  },
  descriptionBox: {
    position: "relative", // Change this to 'relative'
    top: "0", // Set this to '0'
    left: "50%",
    transform: "translateX(-50%)", // Center the description box
    width: "30%", // Adjust width as needed
    backgroundColor: "#00B300", // Background color for the description box
    padding: "10px",
    paddingTop: "20px", // Adjust as necessary for spacing from the header box
    borderRadius: "10px",
    zIndex: 1, // Lower z-index than headerBox to appear underneath
    marginTop: "-15px", // Adjust as necessary for spacing from the header box
    marginLeft: "500px", // Adjust as necessary for centering
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add this line
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
    color: "#FFDA29",
    textShadow: "2px 2px 4px #000000",
  },
  button: {
    fontFamily: "AllerDisplayStdRg",
    display: "inline-block",
    padding: "20px 40px",
    fontSize: "2em",
    color: "white",
    backgroundColor: "green",
    border: "none",
    borderRadius: "15px",
    cursor: "pointer",
    textDecoration: "none",
    marginTop: "200px", // Adjust as necessary for spacing from the description
    width: "30%",
    textShadow: "2px 2px 4px #000000",
    marginLeft: "1000px", // Adjust as necessary for centering
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add this line
  },
};

export default IndexPage;
