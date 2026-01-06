import React, { useState } from "react";
import { easy, medium, hard } from "../../data.json";

const randomIndex = Math.floor(Math.random() * hard.length);

const TextArea = (props) => {
  const [testStarted, setTestStarted] = useState(false);
  const [test, setTest] = useState(hard[randomIndex].text);

  function handleChange() {}

  function handleClick() {
    console.log('Got clicked')
    setTestStarted(true);
    setTest(() => {
      if (props.selectedLevel === "easy") {
        return easy[randomIndex].text;
      } else if (props.selectedLevel === "medium") {
        return medium[randomIndex].text;
      } else if (props.selectedLevel === "hard") {
        return hard[randomIndex].text;
      }
    });
  }

  return (
    <div className="text-area">
      <div className={testStarted ? "hidden" : null}>
        <button onClick={handleClick}>Start Typing Test</button>
        <p>Or click the text and start typing</p>
      </div>

      <p className="reference-text">{test}</p>
      <textarea onChange={handleChange} type="text" value={test} />
    </div>
  );
};

export default TextArea;
