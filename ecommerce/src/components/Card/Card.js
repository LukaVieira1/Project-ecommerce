import "./Card.css";
import Yellow from "./yellow.png";
import Brown from "./brown.png";
import Black from "./black.png";
import White from "./white.png";
import Star from "./star.png";

const images = { Yellow, Brown, Black, White };

const Card = (props) => {
  const { title, description, price, shoe } = props;
  return (
    <div className="card">
      <img className="card-star" src={Star} alt="shoe" />
      <div className="card-content">
        <img className="card-content-image" src={images[shoe]} alt="shoe" />
        <h1 className="card-content-title"> {title} </h1>
        <p className="card-content-description">{description}</p>
        <p className="card-content-description">{price}</p>
      </div>
    </div>
  );
};

export default Card;
