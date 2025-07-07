export default function Tracks({ tracks, onSelectTrack, currentTrack }) {
  return (
    <div className="tracks-container">
      <h2>Latest Tracks & Mixtapes</h2>
      <p>Click a track to play it:</p>

      {tracks.length === 0 ? (
        <p>No tracks uploaded yet.</p>
      ) : (
        <ul className="tracks-list">
          {tracks.map((track) => (
            <li key={track.id}>
              <button
                onClick={() => onSelectTrack(track)}
                className={`track-button ${currentTrack?.id === track.id ? 'active' : ''}`}
              >
                {track.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
