import { useState, useEffect } from "react";
import "./App.css";
import { ProgressBar } from "@nadfri/react-scroll-progress-bar";

function App() {
  const [color1, setColor1] = useState("#808080");
  const [color2, setColor2] = useState("#ffd700");
  const [height, setHeight] = useState("4px");
  const [position, setPosition] = useState("fixed");

  useEffect(() => {
    setTimeout(
      () =>
        window.scrollTo({
          top: 200,
        }),
      500
    );
  }, []);

  return (
    <div className="App">
      <ProgressBar color1={color1} color2={color2} height={height} position={position} />

      <h3 style={{ position: "fixed" }}>BODY</h3>
      <h3>APP with position</h3>

      <form>
        <label style={{ backgroundColor: color1 }}>
          Color1
          <input
            type="color"
            onChange={(e) => setColor1(e.target.value)}
            value={color1}
          />
        </label>
        <label style={{ backgroundColor: color2 }}>
          Color2
          <input
            type="color"
            onChange={(e) => setColor2(e.target.value)}
            value={color2}
          />
        </label>
        <label>
          Height
          <input
            type="range"
            min="1"
            max="15"
            defaultValue={4}
            onChange={(e) => setHeight(e.target.value + "px")}
          />{" "}
          {height}
        </label>
        <label>
          Position
          <select onChange={(e) => setPosition(e.target.value)} value={position}>
            <option value="fixed">fixed</option>
            <option value="absolute">absolute</option>
            <option value="relative">relative</option>
            <option value="static">static</option>
            <option value="sticky">sticky</option>
          </select>
        </label>
      </form>
    </div>
  );
}
export default App;
