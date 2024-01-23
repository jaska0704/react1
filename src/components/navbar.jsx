import React from "react";
import img from "../assets/user.svg";
import img1 from "../assets/hiret.svg";
import img2 from "../assets/cart.svg";

export const NavBar = () => {
    return (
      <div className="nav-bar">
        <div className="nav-block1">
          <h2 className="nav-log">Logo</h2>
          <input className="nav-input" type="search" name="search" id="search" placeholder="Поиск" />
        </div>
        <div className="nav-block2">
          <ul className="nav-list">
            <li className="nav-list-item">Коллекции</li>
            <li className="nav-list-item">Мебель</li>
            <li className="nav-list-item">Освещение</li>
            <li className="nav-list-item">Аксессуары</li>
            <li className="nav-list-item">Доставка</li>
          </ul>
        </div>
        <div className="nav-block3">
          <p className="nav-block3-title">Москва</p>
          <img className="nav-image" src={img} alt="icon" />
          <img className="nav-image" src={img1} alt="icon" />
          <img className="nav-image" src={img2} alt="icon" />
        </div>
      </div>
    );
}