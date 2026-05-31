import "./Search.css";

const Search = ({ searchText, setSearchText }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search an album or song of your choice"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <button type="button">🔍</button>
    </div>
  );
};

export default Search;