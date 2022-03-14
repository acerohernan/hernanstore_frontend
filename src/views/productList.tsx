import React, { useEffect } from "react";
import Announcement from "../components/announcement";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Newsletter from "../components/newsletter";
import Products from "../components/products";
import { useAppDispatch } from "../redux/hooks";
import { getProducts } from "../redux/reducers/product";
import "../styles/views/productList.scss";

function ProductListScreen() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProducts());
  }, []);

  return (
    <div className="app__product_list">
      <Navbar />
      <Announcement />
      <h1 className="app__product_list-title">Dresses</h1>
      <div className="app__product_list-filter_container">
        <div className="app__product_list-filter">
          <span className="app__product_list-filter_text">
            Filter Products:
          </span>
          <select className="app__product_list-filter_select">
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select className="app__product_list-filter_select" defaultValue="XS">
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="app__product_list-filter">
          <span className="app__product_list-filter_text">Sort Products:</span>
          <select
            className="app__product_list-filter_select"
            defaultValue="Newest"
          >
            <option>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductListScreen;
