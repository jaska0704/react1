import React from "react";
import img from "../assets/image-496.png"
import img1 from "../assets/image-1497.png"
import img2 from "../assets/image-1499.png"
import img3 from "../assets/image-1502.png"
import img4 from "../assets/image-1505.png"
import img5 from "../assets/image-1503.png"

export const CategoryCard = () => {
    return (
      <div className="category_block">
        <div>
          <img className="image" src={img} alt="img" />
          <h4>Столы</h4>
        </div>
        <div>
          <img className="image" src={img1} alt="img" />
          <h4>Диваны</h4>
        </div>
        <div>
          <img className="image" src={img2} alt="img" />
          <h4>Кровати</h4>
        </div>
        <div>
          <img className="image" src={img3} alt="img" />
          <h4>Освещение</h4>
        </div>
        <div>
          <img className="image" src={img4} alt="img" />
          <h4>Текстиль</h4>
        </div>
        <div>
          <img className="image" src={img5} alt="img" />
          <h4>Декорации</h4>
        </div>
      </div>
    );
}