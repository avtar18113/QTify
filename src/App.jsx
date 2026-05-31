import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AlbumDetails from "./pages/AlbumDetails/AlbumDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/album/:slug" element={<AlbumDetails />} />
    </Routes>
  );
}

export default App;