import "../App.css";
import React, { useState } from "react";
import Heading from "./Heading";
import Navbar from "./Navbar";
import Textarea from "./TextArea";

function App() {
const [selectedLevel, setSelectedLevel] = useState("easy");


  function onLevelSelection(level) {
    console.log(level)
    
    setSelectedLevel(level)
}


  return (
    <>
      <Heading />
      <Navbar levelSelected={onLevelSelection} />
      <Textarea selectedLevel={selectedLevel} />
    </>
  );
}

export default App;
