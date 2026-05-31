import "./SearchResults.css";

const SearchResults = ({ data, searchText }) => {
  return (
    <div className="search-result-wrapper">
      <div className="search-result-box">
        {data.length === 0 ? (
          <p className="no-result">No result found for "{searchText}"</p>
        ) : (
          data.slice(0, 8).map((item) => (
            <div className="search-result-item" key={`${item.type}-${item.id}`}>
              <img src={item.image} alt={item.title} />

              <div className="search-info">
                <h4>{item.title}</h4>
                <p>
                  {item.songs?.length
                    ? `${item.songs.length} Songs`
                    : item.artists?.join(", ") || item.genre?.label || "QTify"}
                </p>
              </div>

              <span className="search-count">
                {item.type === "song"
                  ? `${item.likes} Likes`
                  : `${item.follows} Follows`}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResults;