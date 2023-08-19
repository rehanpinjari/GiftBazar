import React from "react";
import "/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Components/Product/ProductCard.css";
import { Link } from 'react-router-dom';


const ProductCard = (props) => {
  const { image, cardType, title, description, price, buyNow } = props; // Destructure props
  return (
    <div className="card_container">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className="card-type">{cardType}</h6>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="card_cta">
            <p className="card_price">{price}</p>
            <Link to="/comingsoon">
            <button onClick={buyNow} className="btn btn-primary card-btn">
              Buy now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;