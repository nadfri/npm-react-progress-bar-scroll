import { useState } from "react";
import "./App.css";
import { ProgressBar } from "@nadfri/react-scroll-progress-bar";

function App() {

  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [height, setHeight] = useState("");
  const [position, setPosition] = useState("");



  return <div className="App">
    <ProgressBar color1={color1} color2={color2} height={height} position={position}/>
  </div>;
}

export default App;
