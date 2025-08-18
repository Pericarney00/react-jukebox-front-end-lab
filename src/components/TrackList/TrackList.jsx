import NowPlaying from "../NowPlaying/NowPlaying";

const TrackList = (props) => {
  console.log(`TrackList Props:`,props)
  console.log(`Tracks Props:`, props.tracks)
    console.log(`TrackId Props:`, props.selected);

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
              >
                {track.title} by {track.artist}
                <div>
                  <button onClick={() => props.handleSelect(track)}>
                    Play
                  </button>
                  <button onClick={() => props.handleFormView(track)}>
                    Edit Track
                  </button>
                  <button onClick={() => props.handleDeleteTrack(track._id)}>
                    Delete Track
                  </button>
                </div>
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