import { useState } from 'react';
import AudioPlayer from '../components/AudioPlayer';

const tracksData = [
  { id: 1, title: 'Summer Vibes Vol. 1', src: '/tracks/summer-vibes-vol1.mp3' },
  { id: 2, title: 'Night Drive', src: '/tracks/night-drive.mp3' },
  { id: 3, title: 'Deep Chill', src: '/tracks/deep-chill.mp3' },
];

export default function Tracks() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  return (
    <div style={{ paddingBottom: '2rem', minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
      <h2>Latest Tracks & Mixtapes</h2>
      <p>Click a track to play it:</p>
      <ul>
        {tracksData.map((track) => (
          <li key={track.id} style={{ marginBottom: '1rem' }}>
            <button
              onClick={() => setSelectedTrack(track)}
              style={{
                cursor: 'pointer',
                background: selectedTrack?.id === track.id ? '#00bfff' : '#333',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: 'none',
                fontWeight: 'bold',
              }}
            >
              {track.title}
            </button>
          </li>
        ))}
      </ul>

      {selectedTrack && (
        <AudioPlayer
          track={selectedTrack}
          tracks={tracksData}
          onSelectTrack={setSelectedTrack}
        />
      )}
    </div>
  );
}
