import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../utils/data";

import "../styles/components/categories.scss";

interface ItemProps {
  id: number;
  img: string;
  title: string;
}

const CategoryItem = ({ img, title }: ItemProps) => {
  return (
    <div className="app__category-item">
      <img src={img} className="app__category-item_img" alt="category" />
      <div className="app__category-item_info">
        <h1 className="app__category-item_title">{title}</h1>
        <Link className="app__category-item_button" to="/products">
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

function Categories() {
  return (
    <div className="app__categories">
      {categories.map((item) => (
        <CategoryItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Categories;
