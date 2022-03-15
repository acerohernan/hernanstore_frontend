import React, { MouseEventHandler, useState } from "react";
import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";

import "../styles/components/products.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { IProduct } from "../redux/models/product";
import { addToCart } from "../redux/reducers/cart";

const Product = ({
  _id,
  title,
  desc,
  img,
  size,
  color,
  price,
  categories,
}: IProduct) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAddToCart: MouseEventHandler = () => {
    dispatch(
      addToCart({
        _id,
        title,
        desc,
        size,
        color,
        price,
        categories,
        img,
      })
    );

    navigate(`/products/${_id}`);
  };

  return (
    <div className="app__product">
      <div className="app__product-circle" />
      <img src={img} alt="product-img" className="app__product-img" />
      <div className="app__product-info">
        <button className="app__product-icon" onClick={handleAddToCart}>
          <ShoppingCartOutlined />
        </button>
        <Link className="app__product-icon" to={`/products/${_id}`}>
          <SearchOutlined />
        </Link>
      </div>
    </div>
  );
};

interface ProductsProps {
  products: IProduct[];
}

function Products({ products }: ProductsProps) {
  const { status } = useAppSelector((state) => state.product);

  if (status === "getProducts_loading") {
    return <></>;
  }

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {products.map((item) => (
        <Product key={item._id} {...item} />
      ))}
    </div>
  );
}

export default Products;
