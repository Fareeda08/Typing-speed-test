import React, { useState } from "react";

const Navbar = (props) => {
  const levels = ["easy", "medium", "hard"];
  const modes = ["Timed (60s)", "Passage"];

  const [difficulty, setDifficulty] = useState("hard");
  const [modeLevel, setModeLevel] = useState(modes[0]);
  
  return (
    <nav>
      <ul className="performance-metrics">
        <li>
          WPM:<span>0</span>
        </li>
        <li>
          Accuracy: <span>100%</span>
        </li>
        <li>
          {" "}
          Time: <span>0:60</span>
        </li>
      </ul>

      <ul className="difficulty-level">
        <li>Difficulty:</li>
        {levels.map((level, id) => {
          return (
            <li
              key={id}
              onClick={() => {
                return setDifficulty(level), props.levelSelected(level);
              }}
              className={`levels ${level} ${
                difficulty === level ? "selected" : null
              }`}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </li>
          );
        })}
      </ul>

      <ul className="test-mode">
        <li>Mode:</li>
        {modes.map((mode, id) => {
          return (
            <li
              key={id}
              onClick={() => setModeLevel(mode)}
              className={`modes ${mode} ${
                modeLevel === mode ? "selected" : null
              }`}
            >
              {mode}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
