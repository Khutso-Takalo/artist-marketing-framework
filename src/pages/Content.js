// src/pages/Content.jsx
import './Content.css';

export default function Content() {
  const contentItems = [
    {
      id: 1,
      title: 'Studio Session: The Making of Summer Vibes',
      type: 'video',
      thumbnail: '/exclusive/session-thumb.jpg',
    },
    {
      id: 2,
      title: ' Behind The Decks – Live Event Snaps',
      type: 'gallery',
      thumbnail: '/exclusive/gallery-thumb.jpg',
    },
    {
      id: 3,
      title: '🔒 Secret Drop: VIP Mix #004',
      type: 'audio',
      thumbnail: '/exclusive/vip-mix-thumb.jpg',
    },
  ];

  return (
    <div className="content-page">
      <h2>Exclusive Content</h2>
      <p className="subtext">
        Members-only content — raw, real and unfiltered. Built for loyal listeners.
      </p>

      <div className="content-grid">
        {contentItems.map((item) => (
          <div className="content-card" key={item.id}>
            <img src={item.thumbnail} alt={item.title} className="content-thumb" />
            <h4>{item.title}</h4>
            <button className="view-button">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}
