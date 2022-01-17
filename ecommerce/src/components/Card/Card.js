import "./Card.css";
import { useState, useEffect } from "react";
import client from "../../providers/client";
import star from "./assets/star.svg";
import unStar from "./assets/unstar.svg";

const Card = (props) => {
  const { title, description, price, shoeImg, currency, shoeId } = props;
  const [like, setLike] = useState(null);
  const [button, setButton] = useState(false);

  useEffect(() => {
    const request = async () => {
      const username = process.env.REACT_APP_USERNAME;
      const { data, error } = await client
        .from("liked_shoe")
        .select("*")
        .eq("user_name", username)
        .eq("shoe_id", shoeId);
      error ? alert(error) : data[0] ? setLike(data[0]) : setLike(null);
    };
    request();
  }, [button, shoeId]);

  const clickLike = async () => {
    const username = process.env.REACT_APP_USERNAME;
    const { data, error } = await client.from("liked_shoe").upsert({
      ...(like?.id && { id: like.id }),
      shoe_id: shoeId,
      user_name: username,
      is_liked: like?.is_liked ? !like.is_liked : true,
    });
    error ? alert(error) : data[0] ? setLike(data[0]) : setLike(null);
    setButton(!button);
  };

  return (
    <div className="card">
      <button onClick={clickLike} className="card-star">
        <img src={like && like.is_liked ? star : unStar} alt="shoe" />
      </button>
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
