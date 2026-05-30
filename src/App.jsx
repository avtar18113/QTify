import { useEffect, useState } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi";

const API_URL = "https://qtify-backend.labs.crio.do/albums/top";

function App() {
  const [albums, setAlbums] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchAlbums = async () => {
    try {
      const res = await axios.get(API_URL);
      setAlbums(res.data);
      setFilteredAlbums(res.data);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  useEffect(() => {
    const result = albums.filter((album) =>
      album.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredAlbums(result);
  }, [search, albums]);

  return (
    <div className="app">
      <Navbar search={search} setSearch={setSearch} />
      <Hero />
      <AlbumsSection albums={filteredAlbums} loading={loading} />
    </div>
  );
}

function Navbar({ search, setSearch }) {
  return (
    <header className="navbar">
      <div className="logo">Qtify</div>

      <div className="searchBox">
        <input
          type="text"
          placeholder="Search an album of your choice"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <FiSearch />
        </button>
      </div>

      <button className="feedbackBtn">Give Feedback</button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h2>Over thousands podcast episodes</h2>
      </div>

      <div className="heroIcon">
        🎧
      </div>
    </section>
  );
}

function AlbumsSection({ albums, loading }) {
  return (
    <section className="section">
      <div className="sectionHeader">
        <h2>Top Albums</h2>
        <button>Show all</button>
      </div>

      {loading ? (
        <p className="loading">Loading albums...</p>
      ) : albums.length === 0 ? (
        <p className="loading">No albums found.</p>
      ) : (
        <div className="albumGrid">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      )}
    </section>
  );
}

function AlbumCard({ album }) {
  return (
    <div className="albumCard">
      <div className="imageBox">
        <img src={album.image} alt={album.title} />
        <div className="follows">{album.follows} Follows</div>
      </div>

      <h3>{album.title}</h3>
    </div>
  );
}

export default App;