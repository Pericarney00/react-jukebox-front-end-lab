const NowPlaying = (props) => {
  if (!props.selected ) {
    return (
      <div>
        <h1>No Details</h1>
      </div>
    )
  }

  return (
    <div className="card">
      <h2>Now Playing:</h2>
      <h3>Title:{props.selected.title}</h3>
      <h3>Artist: {props.selected.artist}</h3>
      <div>
        <button onClick={() => props.handleSelect(track)}>Play</button>
        <button onClick={() => props.handleFormView(props.selected)}>
          Edit Track
        </button>
        <button onClick={() => props.handleDeleteTrack(props.selected._id)}>
          Delete Track
        </button>
      </div>
    </div>
  );
}

export default NowPlaying