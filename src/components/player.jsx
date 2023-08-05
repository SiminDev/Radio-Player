import "../styles/player.scss";
import radios from "../data/radios.json";
import { useRef, useState, useEffect } from "react";

//import components
import Display from "./display";
import List from "./list";
import Control from "./control";

const Player = () => {
  const [radioIndex, setRadioIndex] = useState(0);
  const [currentRadio, setCurrentRadio] = useState(radios[radioIndex]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="container">
      <Display {...{ currentRadio, audioRef }} />
      <Control
        {...{
          isPlaying,
          togglePlayPause,
        }}
      />
      <List
        {...{
          radios,
        }}
      />
    </div>
  );
};
export default Player;
