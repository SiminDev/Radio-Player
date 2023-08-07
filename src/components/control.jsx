//import icons
import NextIcon from "../icons/RightCircle.svg";
import PrevIcon from "../icons/LeftCircle.svg";
import PlayIcon from "../icons/Play.svg";
import PauseIcon from "../icons/Pause.svg";

const ControlButton = ({ src, onClick }) => {
  return (
    <button className="control_btn" onClick={onClick}>
      <img className="control_icon" src={src} />
    </button>
  );
};

const Control = ({
  isPlaying,
  togglePlayPause = (f) => f,
  handleNext = (f) => f,
  handlePrevious = (f) => f,
}) => {
  return (
    <div className="control_row">
      <ControlButton src={PrevIcon} onClick={handlePrevious} />
      <ControlButton
        src={isPlaying ? PauseIcon : PlayIcon}
        onClick={togglePlayPause}
      />
      <ControlButton src={NextIcon} onClick={handleNext} />
    </div>
  );
};

export default Control;
