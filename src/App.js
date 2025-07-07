import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tracks from './pages/Tracks';
import Content from './pages/Content';
import Bio from './pages/Bio';
import Bookings from './pages/Bookings';
import NotFound from './pages/NotFound';
import AudioPlayer from './components/AudioPlayer';

import AdminLogin from './admin/AdminLogin';
import AdminPanel from './admin/AdminPanel';
import ProtectedRoute from './admin/ProtectedRoute';
import { AuthProvider } from './admin/AuthContext';

function App() {
  const defaultTracks = [
    { id: 1, title: 'Summer Vibes Vol. 1', src: '/tracks/summer-vibes-vol1.mp3' },
    { id: 2, title: 'Night Drive', src: '/tracks/night-drive.mp3' },
    { id: 3, title: 'Deep Chill', src: '/tracks/deep-chill.mp3' },
  ];

  const [tracks, setTracks] = useState(defaultTracks);
  const [currentTrack, setCurrentTrack] = useState(null);

  const handleUpload = (track) => {
    setTracks((prev) => [...prev, track]);
    if (!currentTrack) setCurrentTrack(track);
  };

  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/tracks"
                element={<Tracks tracks={tracks} onSelectTrack={setCurrentTrack} />}
              />
              <Route path="/content" element={<Content />} />
              <Route path="/bio" element={<Bio />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/login" element={<AdminLogin />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminPanel onUpload={handleUpload} />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>

            {currentTrack && (
              <AudioPlayer
                track={currentTrack}
                tracks={tracks}
                onSelectTrack={setCurrentTrack}
              />
            )}
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
