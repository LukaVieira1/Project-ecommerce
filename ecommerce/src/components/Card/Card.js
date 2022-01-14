import "./Card.css";
import Star from "./star.png";

const Card = (props) => {
  const { title, description, price, shoeImg, currency } = props;
  return (
    <div className="card">
      <img className="card-star" src={Star} alt="shoe" />
      <div className="card-content">
        <img className="card-content-image" src={shoeImg} alt="shoe" />
        <h1 className="card-content-title"> {title} </h1>
        <p className="card-content-description">{description}</p>
        <p className="card-content-description">
          {currency} {price}
        </p>
      </div>
    </div>
  );
};

export default Card;
