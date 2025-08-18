const NowPlaying = (props) => {
  if (!props.selected) {
    return (
      <div>
        <h1>No Details</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>{props.selected.title}</h1>
      <h2>By: {props.selected.artist}</h2>
      <div>
        <button onClick={() => props.handleFormView(props.selected)}>
          Edit Track
        </button>
        <button onClick={() => props.handleDeletedTrack(props.selected._id)}>
          Delete Track
        </button>
      </div>
    </div>
  );
}

export default NowPlaying