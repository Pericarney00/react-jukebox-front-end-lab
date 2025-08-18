import NowPlaying from "../NowPlaying/NowPlaying";

const TrackList = (props) => {
  console.log(props)
  console.log(props.tracks)
  return (
    <div>
      <h1>Track List</h1>
      <div className="card">
        {!props.tracks.length ? (
          <h2>No Tracks Yet!</h2>
        ) : (
          <ul className="card">
            {props.tracks.map((track) => (
              <li
                key={track._id}
                style={{ cursor: "pointer", color: "#646CFF" }}
                onClick={() => props.handleSelect(track)}
              >
                {track.title} by {track.artist}
               
              </li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={props.handleFormView}>
        {props.isFormOpen ? "Close Form" : "Add New Track"}
      </button>
    </div>
  );
};

export default TrackList;