import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import smallMoneyPile from "../assets/images/small_money_pile.png";
import mediumMoneyPile from "../assets/images/medium_money_pile.png";
import smallMoneyAndNotes from "../assets/images/small_money_notes_pile.png";
import mediumMoneyAndNotes from "../assets/images/medium_money_notes_pile.png";
import largeMoneyAndNotes from "../assets/images/large_money_notes_pile.png";
import AllerDisplayStdRgFont from "../assets/fonts/AllerDisplay_Std_Rg.ttf";
import Avatar from "../assets/images/antoine_adventure_capitalist.png";
import SpeechBubble from "../assets/images/speech_bubble.png";

const Hub = () => {
  const navigate = useNavigate();
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isPageTransparent, setPageTransparent] = useState(false);
  const [dialogue, setDialogue] = useState([
    <>
      Bonjour! I'm Antoine, your guide <br /> to the world of investing. I'll be
      <br />
      helping you throughout your journey.
      <br />
      This is the hub where you can choose <br /> your adventure.
    </>,
    <>
      In the middle here are the levels <br />
      you can play. At the moment <br />
      you can only play the first level. <br />
      As you progress, you'll unlock more
      <br />
      levels.
    </>,
    <>
      In the top right you can see your <br />
      level. This level determines which <br />
      adventures you can play. Go ahead <br />
      and click on a level to get started.
    </>,
  ]);
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [dialogueCompleted, setDialogueCompleted] = useState(false);
  const [level, setLevel] = useState(1);
  const totalLevels = 10;

  const advanceDialogueOrMove = () => {
    if (currentDialogueIndex < dialogue.length - 1) {
      setCurrentDialogueIndex(currentDialogueIndex + 1);
    } else {
      setDialogueCompleted(true);
      setPageTransparent(false);
      localStorage.setItem("hasVisitedHub", "true");
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedHub");
    if (hasVisited) {
      setDialogueCompleted(true);
      setPageTransparent(false); // Ensure page is not transparent if visited
    } else {
      // First visit, start with the tutorial
      setPageTransparent(true); // Start with the page being transparent for the tutorial
    }

    const timer = setTimeout(() => {
      // Other initialization code if needed
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const getImageStyle = (index) => ({
    ...styles.storyButton,
    transform: hoverIndex === index ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.2s ease-in-out",
    pointerEvents: dialogueCompleted ? "auto" : "none", // Enable clicking after dialogue
  });

  return (
    <>
      <style>
        {`
        @font-face {
          font-family: 'AllerDisplayStdRg';
          src: url(${AllerDisplayStdRgFont}) format('truetype');
        }
      `}
      </style>
      <div style={styles.container}>
        <div
          style={{
            ...styles.contentWrapper,
            opacity: isPageTransparent ? 0.25 : 1,
            transition: "opacity 0.5s",
          }}
        >
          <button onClick={handleBack} style={styles.backButton}>
            Back
          </button>
          <div style={styles.levelIndicator}>
            Level {level}
            <div style={styles.xpBarContainer}>
              <div
                style={{
                  ...styles.xpBarFill,
                  width: `${(level / totalLevels) * 100}%`,
                }}
              ></div>
            </div>
          </div>
          <div style={styles.rowContainer}>
            {[smallMoneyPile, mediumMoneyPile, smallMoneyAndNotes].map(
              (src, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  style={styles.levelContainer}
                >
                  <div style={styles.levelLabel}>Level {index + 1}</div>
                  <img
                    src={src}
                    alt={`Level ${index + 1} Icon`}
                    style={getImageStyle(index)}
                    onClick={() => navigate(`/story/${index + 1}`)}
                  />
                </div>
              )
            )}
          </div>
          <div style={styles.rowContainer}>
            {[mediumMoneyAndNotes, largeMoneyAndNotes].map((src, index) => (
              <div
                key={index + 3}
                onMouseEnter={() => setHoverIndex(index + 3)}
                onMouseLeave={() => setHoverIndex(null)}
                style={styles.levelContainer}
              >
                <div style={styles.levelLabel}>Level {index + 4}</div>
                <img
                  src={src}
                  alt={`Level ${index + 4} Icon`}
                  style={getImageStyle(index + 3)}
                  onClick={() => navigate(`/story/${index + 4}`)}
                />
              </div>
            ))}
          </div>
        </div>
        {!dialogueCompleted && (
          <>
            <img
              src={Avatar}
              alt="Antoine Adventure Capitalist"
              style={styles.avatar}
            />
            <div onClick={advanceDialogueOrMove} style={{ cursor: "pointer" }}>
              <img
                src={SpeechBubble}
                alt="Speech Bubble"
                style={styles.speechBubble}
              />
              <div style={styles.speechText}>
                {dialogue[currentDialogueIndex]}
              </div>
            </div>
          </>
        )}
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
    backgroundColor: "lightgreen",
  },
  contentWrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  avatar: {
    bottom: "30px",
    left: "30px",
    width: "500px",
    borderRadius: "50%",
    objectFit: "cover",
    transition: "transform 1s ease-out",
    position: "absolute",
  },
  speechBubble: {
    bottom: "280px",
    left: "300px",
    width: "500px",
    objectFit: "cover",
    transition: "transform 1s ease-out",
    position: "absolute",
    transform: "scaleX(-1)",
  },
  speechText: {
    position: "absolute",
    top: "310px",
    left: "360px",
    fontFamily: "AllerDisplayStdRg",
    fontSize: "1.5em",
  },
  backButton: {
    fontFamily: "AllerDisplayStdRg",
    top: "30px",
    left: "30px",
    padding: "10px 20px",
    fontSize: "1em",
    color: "white",
    backgroundColor: "green",
    border: "none",
    borderRadius: "15px",
    cursor: "pointer",
    textDecoration: "none",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    textShadow: "2px 2px 4px #000000",
    width: "150px",
    height: "50px",
    position: "absolute",
    marginTop: "-60px",
  },
  rowContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "10px 0",
    marginTop: "100px",
  },
  levelContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px",
  },
  levelLabel: {
    marginBottom: "10px",
    fontWeight: "bold",
    fontSize: "25px",
    fontFamily: "AllerDisplayStdRg",
    color: "green",
  },
  storyButton: {
    marginLeft: "50px",
    marginRight: "50px",
    padding: "20px",
    width: "200px",
    height: "200px",
    objectFit: "contain",
    filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.5))",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  levelIndicator: {
    position: "absolute",
    right: "30px",
    textAlign: "right",
    fontFamily: "AllerDisplayStdRg",
    fontSize: "20px",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "10px",
    borderRadius: "10px",
    marginTop: "-50px",
  },
  xpBarContainer: {
    width: "200px",
    height: "20px",
    backgroundColor: "#ddd",
    borderRadius: "5px",
    marginTop: "5px",
    overflow: "hidden",
  },
  xpBarFill: {
    height: "100%",
    backgroundColor: "#4CAF50",
    borderRadius: "5px",
  },
};

export default Hub;
