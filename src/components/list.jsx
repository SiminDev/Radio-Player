const List = ({ radios, onSelectedRadio }) => {
  return (
    <div className="play_list">
      {radios.map((radio, index) => (
        <a
          className="playlist_item"
          key={radio.id}
          onClick={() => onSelectedRadio(radio, index)}
        >
          <figure className="cover">
            <img src={radio.cover} />
          </figure>
          <div className="info">
            <p className="name">{radio.name}</p>
            <p className="frequency">{radio.frequency} FM</p>
          </div>
        </a>
      ))}
    </div>
  );
};
export default List;
