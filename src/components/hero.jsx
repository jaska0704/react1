import React from "react";
import img from "../assets/hero-img.png"

export const Hero = () => {
    return (
      <div className="hero">
        <div className="hero-block1">
          <img className="hero-image" src={img} alt="hero-image" />
        </div>
        <div className="hero-block2">
          <h1 className="hero-block2-title">Новая коллекция</h1>
          <p className="hero-block2-item">
            Наши новые поставки мебели в скандинавском стиле приятно вас удивят
          </p>
          <button className="hero-block2-button">Смотреть</button>
        </div>
      </div>
    );
}