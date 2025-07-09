import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Tracks() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTracks = async () => {
      const { data, error } = await supabase
        .storage
        .from('media')
        .list('uploads', { limit: 100 });

      if (error) {
        console.error('Error fetching tracks:', error);
        setLoading(false);
        return;
      }

      console.log('Fetched files:', data);  // Debugging
      const filteredFiles = data.filter(
        (file) => file.name !== 'PLACEHOLDER' && !file.name.startsWith('.')
      );
      console.log('Filtered files:', filteredFiles);  // Debugging

      const tracksWithUrls = await Promise.all(
        filteredFiles.map(async (file) => {
          const { data: signedUrl, error: urlError } = await supabase
            .storage
            .from('media')
            .createSignedUrl(`uploads/${file.name}`, 60 * 60);

          if (urlError) {
            console.error(`Error creating signed URL for ${file.name}:`, urlError);
            return null;
          }

          return { name: file.name, url: signedUrl.signedUrl };
        })
      );

      setTracks(tracksWithUrls.filter(Boolean));
      setLoading(false);
    };

    fetchTracks();
  }, []);

  if (loading) return <p>Loading tracks...</p>;

  return (
    <div>
      <h2>Uploaded Tracks</h2>
      {tracks.length === 0 ? (
        <p>No tracks uploaded yet.</p>
      ) : (
        tracks.map(({ name, url }, idx) => (
          <div key={idx} style={{ marginBottom: '1rem' }}>
            <p>{name}</p>
            <audio controls src={url}></audio>
          </div>
        ))
      )}
    </div>
  );
}
