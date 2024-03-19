import React from "react";

const ScoreBoard = (props) => {
  return (
    <div className="container-fluid d-flex justify-content-around p-3">
      <div>Current Score:{props.currentScore}</div>
      <div>Best Score:{props.bestScore}</div>
    </div>
  );
};

export default ScoreBoard;
