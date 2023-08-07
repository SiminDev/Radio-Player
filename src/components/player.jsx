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

  useEffect(() => {
    if (isPlaying) {
      let playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            audioRef.current.play();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        audioRef.current.pause();
      }
    } else {
      audioRef.current.pause();
    }
  });

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handlePrevious = () => {
    setIsPlaying(false);

    if (radioIndex === 0) {
      let lastRadioIndex = radioIndex.length - 1;
      setRadioIndex(lastRadioIndex);
      setCurrentRadio(radios[lastRadioIndex]);
    } else {
      setRadioIndex((prev) => prev - 1);
      setCurrentRadio(radios[radioIndex - 1]);
    }

    setTimeout(() => {
      setIsPlaying(true);
    }, 300);
  };

  const handleNext = () => {
    setIsPlaying(false);

    if (radioIndex > radioIndex.length - 1) {
      setRadioIndex(0);
      setCurrentRadio(radios[0]);
    } else {
      setRadioIndex((prev) => prev + 1);
      setCurrentRadio(radios[radioIndex + 1]);
    }

    setTimeout(() => {
      setIsPlaying(true);
    }, 300);
  };

  const onSelectedRadio = (radio, index) => {
    setIsPlaying(false);
    setRadioIndex(index);
    setCurrentRadio(radios[index]);
    audioRef.current.src = radio.src;
    setTimeout(() => {
      setIsPlaying(true);
    }, 300);
  };

  return (
    <div className="container">
      <Display {...{ currentRadio, audioRef }} />
      <Control
        {...{
          isPlaying,
          togglePlayPause,
          handleNext,
          handlePrevious,
        }}
      />
      <List
        {...{
          radios,
          onSelectedRadio,
        }}
      />
    </div>
  );
};
export default Player;
