import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ item, type = "album" }) => {
  const navigate = useNavigate();

  const chipText =
    type === "song" ? `${item.likes} Likes` : `${item.follows} Follows`;

  const handleClick = () => {
    if (type === "album") {
      navigate(`/album/${item.slug}`, { state: { album: item } });
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-img-box">
        <img src={item.image} alt={item.title} />
        <div className="card-chip">{chipText}</div>
      </div>

      <h3>{item.title}</h3>
    </div>
  );
};

export default Card;