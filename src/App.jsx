import React from "react";
import { CategoryCard } from "./components/category";
import { ProductCard } from "./components/product-card";
import { NavBar } from "./components/navbar";
import { Hero } from "./components/hero";

function App() {
  return (
    <>
      <section className="category">
        <div className="container">
          <div className="header">
            <NavBar/>
          </div>
          <div className="hero-main">
            <Hero/>
          </div>
          <div className="main-category">
            <CategoryCard />
            <h3 className="product-title">Хиты продаж</h3>
            <ProductCard/>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
