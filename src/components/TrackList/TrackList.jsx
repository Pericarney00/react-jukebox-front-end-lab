
const TrackList = (props) => {
  console.log(props)
  console.log(props.tracks)
  return (
    <div>
      <h1>Pet List</h1>
      <div>
        {!props.tracks.length ? (
          <h2>No Pets Yet!</h2>
        ) : (
          <ul>
            {props.tracks.map((track) => (
              <li
                key={track._id}
                style={{ cursor: "pointer", color: "#646CFF" }}
                onClick={() => props.handleSelect(track)}
              >
                {track.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TrackList;