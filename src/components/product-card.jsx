import React from "react";
import img from "../assets/image-1460.png";
import img1 from "../assets/image-1508.png";
import img2 from "../assets/image-1512.png";

export const ProductCard = () => {
    return (
      <div className="category_block">
        <div className="product-card">
          <img className="product-image" src={img} alt="img" />
          <h4 className="product-card-title">Кресло Барселона</h4>
          <p className="product-card-price">$6738</p>
          <button className="product-card-button">В корзину</button>
        </div>
        <div className="product-card">
          <img className="product-image" src={img1} alt="img" />
          <h4 className="product-card-title">Кресло Барселона</h4>
          <p className="product-card-price">$6738</p>
          <button className="product-card-button">В корзину</button>
        </div>
        <div className="product-card">
          <img className="product-image" src={img2} alt="img" />
          <h4 className="product-card-title">Кресло Барселона</h4>
          <p className="product-card-price">$6738</p>
          <button className="product-card-button">В корзину</button>
        </div>
      </div>
    );
};