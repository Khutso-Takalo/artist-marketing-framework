import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tracks from './pages/Tracks';
import Content from './pages/Content';
import Bio from './pages/Bio';
import Bookings from './pages/Bookings';
import NotFound from './pages/NotFound';
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tracks" element={<Tracks />} />
            <Route path="/content" element={<Content />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
