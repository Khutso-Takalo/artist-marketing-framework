import { useState } from 'react';

const tracks = [
  { title: 'Sample Song', src: 'https://your-supabase-url/storage/v1/object/public/media/uploads/sample.mp3' }
];

export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  return (
    <div>
      <h3>Now Playing: {currentTrack.title}</h3>
      <audio controls src={currentTrack.src} autoPlay />
      <div>
        {tracks.map((track, index) => (
          <button key={index} onClick={() => setCurrentTrack(track)}>
            {track.title}
          </button>
        ))}
      </div>
    </div>
  );
}
