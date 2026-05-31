import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import { fetchAlbumBySlug } from "../../api/api";
import "./AlbumDetails.css";

const AlbumDetails = () => {
  const { slug } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [album, setAlbum] = useState(state?.album || null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    loadAlbum();
  }, [slug]);

  const loadAlbum = async () => {
    try {
      const data = await fetchAlbumBySlug(slug);
      setAlbum(data);
      setCurrentSong(data.songs?.[0] || null);
    } catch (error) {
      console.error(error);
    }
  };

  if (!album) {
    return <div className="album-loading">Loading...</div>;
  }

  const totalSongs = album.songs?.length || 0;

  return (
    <>
      <NavBar />

      <main className="album-page">
        <button className="back-btn" onClick={() => navigate("/")}>
          ←
        </button>

        <section className="album-hero">
          <img src={album.image} alt={album.title} className="album-cover" />

          <div className="album-info">
            <h1>{album.title}</h1>
            <p>{album.description || "Best songs collection on QTify"}</p>

            <p className="album-meta">
              {totalSongs} songs • 3 hr 45 min • {album.follows} Follows
            </p>

            <div className="album-actions">
              <button
                className="shuffle-btn"
                onClick={() => {
                  setCurrentSong(album.songs?.[0]);
                  setIsPlaying(true);
                }}
              >
                🔀 Shuffle
              </button>

              <button className="library-btn">🎧 Add to library</button>
            </div>
          </div>
        </section>

        <section className="song-table">
          <div className="song-header">
            <span>Title</span>
            <span>Artist</span>
            <span>Duration</span>
          </div>

          {album.songs?.map((song) => (
            <div
              className={`song-row ${
                currentSong?.id === song.id ? "active-song" : ""
              }`}
              key={song.id}
              onClick={() => {
                setCurrentSong(song);
                setIsPlaying(true);
              }}
            >
              <div className="song-title">
                <img src={song.image} alt={song.title} />
                <span>{song.title}</span>
              </div>

              <span>{song.artists?.join(", ") || "Artist name"}</span>
              <span>{song.durationInMs ? "3:38" : "1:59"}</span>
            </div>
          ))}
        </section>
      </main>

      <MusicPlayer
        song={currentSong}
        album={album}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </>
  );
};

export default AlbumDetails;