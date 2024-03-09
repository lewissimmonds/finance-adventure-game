import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/images/background.jpg";
import AdventureRequestFont from "../assets/fonts/AdventureRequest-j8W9.ttf";
import AllerDisplayStdRgFont from "../assets/fonts/AllerDisplay_Std_Rg.ttf";

const AboutPage = () => {
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
          <h1 style={styles.header}>About</h1>
        </div>
        <div style={styles.descriptionBox}>
          <p style={styles.description}>
            Embark on a captivating quest to become a savvy investor with our
            game, which starts with the basics of investing and gradually
            introduces you to more complex financial concepts. Whether you're a
            novice curious about stocks or an intermediate learner eager to
            explore bonds and commodities, this game is your interactive guide
            to the financial markets. As you play, you'll tackle real-world
            scenarios that teach you to navigate market trends and understand
            the importance of a diversified portfolio. Learn to manage risks and
            seize opportunities as you build and expand your virtual investment
            portfolio. By progressing through the game's levels, you'll gain
            valuable knowledge that goes beyond just gameplay. You'll emerge
            with a clearer understanding of how to make informed investment
            decisions and a solid foundation for your real-life financial
            journey. Get ready to grow your capital and your confidence in the
            world of investing.
          </p>
        </div>
        <div>
          <Link to="/" style={styles.button}>
            BACK
          </Link>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    textAlign: "center",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
  },
  headerBox: {
    position: "relative",
    backgroundColor: "green",
    padding: "20px",
    borderRadius: "10px",
    display: "inline-block",
    marginTop: "100px",
    zIndex: 2,
    marginLeft: "1000px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  },
  descriptionBox: {
    position: "relative",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "30%",
    backgroundColor: "#00B300",
    padding: "10px",
    paddingTop: "20px",
    borderRadius: "10px",
    zIndex: 1,
    marginTop: "-15px",
    marginLeft: "500px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
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
    marginTop: "100px", // Adjust as necessary for spacing from the description
    width: "30%",
    textShadow: "2px 2px 4px #000000",
    marginLeft: "1000px", // Adjust as necessary for centering
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add this line
  },
  link: {
    color: "white",
    textDecoration: "none",
    backgroundColor: "blue",
    padding: "10px 20px",
    borderRadius: "5px",
  },
};

export default AboutPage;
