import React from "react";
import { useNavigate } from "react-router-dom";

const stories = [
  { id: 1, title: "Level 1", name: "Title of Story Here" },
  { id: 2, title: "Level 2", name: "Title of Story Here" },
  { id: 3, title: "Level 3", name: "Title of Story Here" },
  { id: 4, title: "Level 4", name: "Title of Story Here" },
  { id: 5, title: "Level 5", name: "Title of Story Here" },
];

const Hub = () => {
  const navigate = useNavigate();
  const level = 5; // Dummy level for demonstration

  return (
    <div>
      <div style={styles.levelContainer}>
        <span>Level: {level}</span>
      </div>
      <div style={styles.rowContainer}>
        {" "}
        {/* Top Row Container */}
        {stories.slice(0, 3).map((story) => (
          <button
            key={story.id}
            style={{
              ...styles.storyButton,
              background: level >= story.id ? "#4CAF50" : "#f44336",
              opacity: level >= story.id ? "1" : "0.5",
            }}
            onClick={() => {
              if (level >= story.id) navigate(`/story/${story.id}`);
            }}
            disabled={level < story.id}
          >
            <div>{story.title}</div>
            <div>{story.name}</div>
          </button>
        ))}
      </div>
      <div style={styles.rowContainer}>
        {" "}
        {/* Bottom Row Container */}
        {stories.slice(3).map(
          (
            story // Automatically includes the rest of the stories
          ) => (
            <button
              key={story.id}
              style={{
                ...styles.storyButton,
                background: level >= story.id ? "#4CAF50" : "#f44336",
                opacity: level >= story.id ? "1" : "0.5",
              }}
              onClick={() => {
                if (level >= story.id) navigate(`/story/${story.id}`);
              }}
              disabled={level < story.id}
            >
              <div>{story.title}</div>
              <div>{story.name}</div>
            </button>
          )
        )}
      </div>
    </div>
  );
};

// Define styles object
const styles = {
  levelContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "20px",
  },
  rowContainer: {
    display: "flex",
    justifyContent: "center", // Center the buttons within each row
    margin: "10px 0", // Add some vertical spacing between rows
  },
  storyButton: {
    width: "10%", // Adjust based on your design needs
    padding: "50px",
    margin: "100px",
    display: "flex",
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
