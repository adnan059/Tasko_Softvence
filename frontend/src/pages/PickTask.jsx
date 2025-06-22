import React from "react";
import "../assets/styles/pickTask.css";
import { useState } from "react";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { Wheel } from "react-custom-roulette";

const data = [
  { option: "Friends" },
  { option: "Meditation" },
  { option: "Arts and Craft" },
  { option: "Nature" },
  { option: "Family" },
  { option: "Sport" },
];

const PickTask = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div className="pickTask">
      <h1>Spin Wheel</h1>

      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={["#3e3e3e", "#df3428"]}
        textColors={["#ffffff"]}
        onStopSpinning={() => setMustSpin(false)}
      />

      <p>Spin Wheel to pick your task</p>
      <button className="spinBtn" onClick={handleSpinClick}>
        Spin
        <SportsSoccerIcon sx={{ width: 20, height: 20 }} />
      </button>
    </div>
  );
};

export default PickTask;
