import "./MusicPlayer.css";

const MusicPlayer = ({ song, album, isPlaying, setIsPlaying }) => {
  if (!song) return null;

  return (
    <div className="music-player">
      <div className="music-info">
        <img src={song.image || album?.image} alt={song.title} />
        <div>
          <h4>{song.title}</h4>
          <p>{album?.title}</p>
        </div>
      </div>

      <div className="player-center">
        <button
          className="play-btn"
          onClick={() => setIsPlaying((prev) => !prev)}
        >
          {isPlaying ? "⏸" : "▶"}
        </button>

        <div className="progress-row">
          <span>0:38</span>
          <div className="progress-bar">
            <div className={isPlaying ? "progress-fill play" : "progress-fill"} />
          </div>
          <span>3:38</span>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;