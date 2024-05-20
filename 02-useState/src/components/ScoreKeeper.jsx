// src/components/ScoreKeeper.jsx

import { useState } from "react";

function ScoreKeeper() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <p>Score: {score}</p>
      <button
        onClick={() => {
          setScore(prevScore=>prevScore+5)
        }}
      >
        Increase by 5
      </button>
      <button
        onClick={() => {
          setScore(prevScore=>prevScore>0?prevScore-5:prevScore)
          // prevented to be not negative values
        }}
      >
        Decrease by 5
      </button>
    </div>
  );
}

export default ScoreKeeper;
