const Display = ({ currentRadio, audioRef }) => {
  return (
    <div className="display_container">
      <audio src={currentRadio.url} ref={audioRef} />
      <figure className="cover">
        <img src={currentRadio.cover} />
      </figure>
      <div className="radio_info">
        <p className="name">{currentRadio.name}</p>
        <p className="frequency">{currentRadio.frequency}</p>
      </div>
    </div>
  );
};
export default Display;
