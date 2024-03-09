import React from "react";
import { useNavigate } from "react-router-dom";
import smallMoneyPile from "../assets/images/small_money_pile.png";
import mediumMoneyPile from "../assets/images/medium_money_pile.png";
import smallMoneyAndNotes from "../assets/images/small_money_notes_pile.png";
import mediumMoneyAndNotes from "../assets/images/medium_money_notes_pile.png";
import largeMoneyAndNotes from "../assets/images/large_money_notes_pile.png";

const Hub = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.rowContainer}>
        {" "}
        {/* Top Row */}
        <img
          src={smallMoneyPile}
          alt="Small Money Pile"
          style={styles.storyButton}
          onClick={() => navigate(`/story/1`)}
        />
        <img
          src={mediumMoneyPile}
          alt="Medium Money Pile"
          style={styles.storyButton}
          onClick={() => navigate(`/story/2`)}
        />
        <img
          src={smallMoneyAndNotes}
          alt="Small Money and Notes Pile"
          style={styles.storyButton}
          onClick={() => navigate(`/story/3`)}
        />
      </div>
      <div style={styles.rowContainer}>
        {" "}
        {/* Bottom Row */}
        <img
          src={mediumMoneyAndNotes}
          alt="Medium Money and Notes Pile"
          style={styles.storyButton}
          onClick={() => navigate(`/story/4`)}
        />
        <img
          src={largeMoneyAndNotes}
          alt="Large Money and Notes Pile"
          style={styles.storyButton}
          onClick={() => navigate(`/story/5`)}
        />
      </div>
    </div>
  );
};

// Define styles object
const styles = {
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    textAlign: "center",
    backgroundColor: "lightgreen",
  },
  rowContainer: {
    display: "flex",
    justifyContent: "center", // Center the buttons within each row
    margin: "10px 0", // Add some vertical spacing between rows
  },
  storyButton: {
    width: "10%", // Adjust based on your design needs
    padding: "50px",
    display: "flex",
    marginTop: "100px",
    marginLeft: "50px",
    marginRight: "50px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Hub;
