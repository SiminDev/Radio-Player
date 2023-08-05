const List = ({ radios }) => {
  return (
    <div className="play_list">
      {radios.map((radio, index) => (
        <a className="playlist_item" key={radio.id}>
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
