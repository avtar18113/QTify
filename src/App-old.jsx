import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import Section from "./components/Sections/Section";
import SearchResults from "./components/Search/SearchResults";
import FAQ from "./components/FAQ/FAQ";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import {
  fetchTopAlbums,
  fetchNewAlbums,
  fetchSongs,
  fetchGenres,
} from "./api/api";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const top = await fetchTopAlbums();
    const newer = await fetchNewAlbums();
    const songData = await fetchSongs();
    const genreData = await fetchGenres();

    setTopAlbums(top);
    setNewAlbums(newer);
    setSongs(songData);
    setGenres(genreData.data);
  };

  const allSearchData = [
    ...topAlbums.map((item) => ({ ...item, type: "album" })),
    ...newAlbums.map((item) => ({ ...item, type: "album" })),
    ...songs.map((item) => ({ ...item, type: "song" })),
  ];

  const filteredSearchData = allSearchData.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <NavBar searchText={searchText} setSearchText={setSearchText} />

      {searchText.trim() && (
        <SearchResults data={filteredSearchData} searchText={searchText} />
      )}

      <HeroSection />

      <Section title="Top Albums" data={topAlbums} type="album" />
      <Section title="New Albums" data={newAlbums} type="album" />

      <Section
        title="Songs"
        data={songs}
        type="song"
        genres={genres}
        showTabs={true}
        showToggle={false}
      />
      <FAQ />
<MusicPlayer />
    </>
  );
}

export default App;