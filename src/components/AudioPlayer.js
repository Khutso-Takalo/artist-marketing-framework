import { useEffect, useRef, useState } from 'react';
import './AudioPlayer.css';

export default function AudioPlayer({ track, tracks = [], onSelectTrack }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [shuffled, setShuffled] = useState(false);
  const [trackList, setTrackList] = useState(tracks);

  useEffect(() => {
    if (shuffled) {
      const shuffledTracks = [...tracks].sort(() => Math.random() - 0.5);
      setTrackList(shuffledTracks);
    } else {
      setTrackList(tracks);
    }
  }, [shuffled, tracks]);

  useEffect(() => {
    if (audioRef.current && track) {
      audioRef.current.pause();
      audioRef.current.load();

      const tryPlay = async () => {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          console.warn('Play request was blocked:', err.message);
          setIsPlaying(false);
        }
      };

      tryPlay();
    }
  }, [track]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Play blocked:', err.message);
        setIsPlaying(false);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
  };

  const handleSeek = (e) => {
    if (!audioRef.current) return;
    const newTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  const handleNext = () => {
    if (!trackList.length || !track) return;
    const currentIndex = trackList.findIndex((t) => t.id === track.id);
    const nextIndex = (currentIndex + 1) % trackList.length;
    const nextTrack = trackList[nextIndex];
    onSelectTrack(nextTrack);

    // Optional: Try autoplay next track only if allowed
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.warn('Autoplay blocked:', err.message);
          setIsPlaying(false);
        });
      }
    }, 300); // slight delay to ensure next track loads
  };

  const handlePrev = () => {
    if (!trackList.length || !track) return;
    const currentIndex = trackList.findIndex((t) => t.id === track.id);
    const prevIndex = (currentIndex - 1 + trackList.length) % trackList.length;
    onSelectTrack(trackList[prevIndex]);
  };

  const toggleShuffle = () => {
    setShuffled(!shuffled);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  if (!track) return null;

  return (
    <div className="audio-player">
      <div className="track-info">
        <p>🎵 {track.title}</p>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className="progress-bar"
        />
      </div>

      <div className="controls-wrapper">
        <div className="controls">
          <button onClick={handlePrev} aria-label="Previous Track">⏮️</button>
          <button onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <button onClick={handleNext} aria-label="Next Track">⏭️</button>
        </div>
        <div className="extras">
          <label style={{ marginRight: '0.5rem' }}>🔊</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
          <button onClick={toggleShuffle} className="shuffle-button">
            🔀 {shuffled ? 'On' : 'Off'}
          </button>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={track.src}
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNext}
      />
    </div>
  );
}
