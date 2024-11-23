import React from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const ProductCard = ({
  name,
  price,
  image,
  description,
  features,
  isFavourite,
  isExpanded,
  onToggleFavourite,
  onToggleExpand,
}) => {
  return (
    <div className={`card ${isFavourite ? "favourited" : ""}`}>
      <div className="card-layout">
        <img src={image} alt={name} className="card-img" />
        <div>
          <div className="card-top">
            <h2>{name}</h2>
            <div onClick={onToggleFavourite}>
              {isFavourite ? <GoHeartFill size={20} /> : <GoHeart size={20} />}
            </div>
          </div>
          <p className="description">{description}</p>
          <p className="card-price">{price}</p>
          <hr />
          <div className="card-btn">
            <button className="btn" onClick={onToggleExpand}>
              Features
              {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
            </button>
          </div>

          {isExpanded && (
            <div className="popup-overlay">
              <div className="popup">
                <button className="close-popup" onClick={onToggleExpand}>
                  Close
                </button>
                <h3>Features</h3>
                <ul>
                  {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
