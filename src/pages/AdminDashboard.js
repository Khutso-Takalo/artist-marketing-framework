import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
      } else {
        setUser(session.user);
      }
      setLoading(false);
    };
    checkSession();
  }, [navigate]);

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }
    if (file.size > 50 * 1024 * 1024) {
      alert('File too large! Max 50MB allowed.');
      return;
    }
    setUploading(true);
    const { error } = await supabase.storage.from('media').upload(`uploads/${file.name}`, file);
    setUploading(false);
    if (error) {
      alert('Upload failed: ' + error.message);
    } else {
      alert('Upload successful!');
      setFile(null);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Welcome, Admin</h2>
      <p>Signed in as: {user?.email}</p>
      <h3>Upload Music, Videos or Photos</h3>
      <input
        type="file"
        accept="audio/*,video/*,image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
}
