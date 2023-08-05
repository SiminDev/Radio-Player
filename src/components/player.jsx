import "../styles/player.scss";

//import components
import Display from "./display";
import List from "./list";
import Control from "./control";

const Player = () => {
  return (
    <div className="container">
      <Display />
      <Control />
      <List />
    </div>
  );
};
export default Player;
