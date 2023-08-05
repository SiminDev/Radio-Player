//import icons
import NextIcon from "../icons/RightCircle.svg";
import PrevIcon from "../icons/LeftCircle.svg";
import PlayIcon from "../icons/Play.svg";
import PauseIcon from "../icons/Pause.svg";

const ControlButton = ({ src }) => {
  return (
    <button className="control_btn">
      <img className="control_icon" src={src} />
    </button>
  );
};

const Control = () => {
  return (
    <div className="control_row">
      <ControlButton src={PrevIcon} />
      <ControlButton src={PlayIcon} />
      <ControlButton src={NextIcon} />
    </div>
  );
};

export default Control;
