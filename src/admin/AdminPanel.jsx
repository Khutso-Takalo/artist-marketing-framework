import { useState } from 'react';
import { useAuth } from './AuthContext';

export default function AdminPanel({ onUpload }) {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const { logout } = useAuth();

  const handleUpload = () => {
    if (!file || !title) return alert('Both title and file are required');

    const newTrack = {
      id: Date.now(),
      title,
      src: URL.createObjectURL(file),
    };

    onUpload(newTrack);
    alert('Track uploaded successfully');
    setTitle('');
    setFile(null);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Admin Upload Panel</h2>
      <button onClick={logout}>Logout</button>
      <br /><br />
      <input
        type="text"
        placeholder="Track Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="file"
        accept="audio/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
