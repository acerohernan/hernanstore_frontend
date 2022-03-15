import { Add, Remove } from "@material-ui/icons";
import React, { MouseEventHandler, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Announcement from "../components/announcement";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Newsletter from "../components/newsletter";
import { BASE_URL } from "../redux/config";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { IProduct } from "../redux/models/product";
import { addToCart, removeFromCart } from "../redux/reducers/cart";

import "../styles/views/product.scss";

function ProductScreen() {
  const [product, setProduct] = useState<IProduct>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { items } = useAppSelector((state) => state.cart);
  const isInCart = items.find((item) => item._id === product?._id);

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/api/products/find/${id}`);
      const product = await response.json();

      if (product.path) {
        setLoading(false);
        return setError(true);
      }

      setProduct(product);
      setLoading(false);
    } catch (e) {
      setError(true);
    }
  };

  const handleAddToCart: MouseEventHandler = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  const handleRemoveFromCart: MouseEventHandler = () => {
    if (product) {
      dispatch(removeFromCart(product));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProduct();
  }, []);

  if (loading) {
    return (
      <div className="app__product_screen">
        <Navbar />
        <Announcement />
        <Newsletter />
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="app__product_screen">
        <Navbar />
        <Announcement />
        <div className="app__product_screen-no_products">
          <img
            src="https://cdn.dribbble.com/users/992274/screenshots/7392790/media/95483df50a0a3324c4cf9ccb1094b825.jpg"
            alt="no-products"
            className="app__product_screen-no_products-img"
          />
          <p className="app__product_screen-no_products-text">
            Oh! Seems that the product that your search does not exists.
          </p>
          <button
            className="app__product_screen-top_button"
            onClick={() => navigate("/products")}
          >
            SEE PRODUCTS
          </button>
        </div>
        <Newsletter />
        <Footer />
      </div>
    );
  }

  return (
    <div className="app__product_screen">
      <Navbar />
      <Announcement />
      <div className="app__product_screen-wrapper">
        <div className="app__product_screen-img_container">
          <img
            alt="product-img"
            className="app__product_screen-img"
            src={product?.img}
          />
        </div>
        <div className="app__product_screen-info">
          <h1 className="app__product_screen-title">{product?.title}</h1>
          <p className="app__product_screen-description">{product?.desc}</p>
          <span className="app__product_screen-price">$ {product?.price}</span>
          <div className="app__product_screen-filter_container">
            <div className="app__product_screen-filter">
              <h1 className="app__product_screen-filter_title">Color</h1>
              {product?.color?.map((color, index) => (
                <div
                  className="app__product_screen-filter_color"
                  style={{ backgroundColor: color, border: "1px solid black" }}
                  key={index}
                />
              ))}
            </div>
            <div className="app__product_screen-filter">
              <h1 className="app__product_screen-filter_title">Size</h1>
              <select className="app__product_screen-filter_size">
                {product?.size?.map((s, index) => (
                  <option key={index}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="app__product_screen-add">
            {Boolean(isInCart) && (
              <>
                <div className="app__product_screen-add_amount_container">
                  <button
                    onClick={handleRemoveFromCart}
                    className="app__product_screen-add_amount_button"
                  >
                    <Remove />
                  </button>
                  <span className="app__product_screen-add_amount">
                    {isInCart?.quantity}
                  </span>
                  <button
                    onClick={handleAddToCart}
                    className="app__product_screen-add_amount_button"
                  >
                    <Add />
                  </button>
                </div>
                <button
                  className="app__product_screen-add_button"
                  onClick={() => navigate("/cart")}
                >
                  GO TO CART
                </button>
              </>
            )}
            {Boolean(!isInCart) && (
              <button
                className="app__product_screen-add_button"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
            )}
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductScreen;
