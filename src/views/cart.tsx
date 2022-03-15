import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";
import "../styles/views/cart.scss";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Announcement from "../components/announcement";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToCart, removeFromCart } from "../redux/reducers/cart";
import { IProductCart } from "../redux/models/product";
import { useCartSubtotal } from "../hooks/useCartSubtotal";
import StripeCheckout from "react-stripe-checkout";

const KEY = process.env.REACT_APP_STRIPE_KEY || "";

function CartScreen() {
  const [stripeToken, setStripeToken] = useState(null);

  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const subtotal = useCartSubtotal();
  const handleAddItem = (item: IProductCart) => () => {
    dispatch(addToCart(item));
  };

  const handleRemoveItem = (item: IProductCart) => () => {
    dispatch(removeFromCart(item));
  };

  const onToken = (token: any) => {
    setStripeToken(token);
  };

  return (
    <div className="app__cart">
      <Navbar />
      <Announcement />
      <div className="app__cart-wrapper">
        <h1 className="app__cart-title">YOUR BAG</h1>
        <div className="app__cart-top">
          <button
            className="app__cart-top_button"
            onClick={() => navigate("/products")}
          >
            CONTINUE SHOPPING
          </button>
          <div className="app__cart-top_texts">
            <span className="app__cart-top_text">
              Shopping Bag({items.length})
            </span>
            {/* <span className="app__cart-top_text">Your Wishlist (0)</span> */}
          </div>
          {items.length >= 1 ? (
            <StripeCheckout
              name="Hernan Store"
              image="https://icon-library.com/images/shop-icon-png/shop-icon-png-6.jpg"
              billingAddress
              shippingAddress
              description={`Your total is $${subtotal}`}
              amount={subtotal * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <button className="app__cart-top_button">CHECKOUT NOW</button>
            </StripeCheckout>
          ) : (
            <button
              className="app__cart-top_button"
              onClick={() => navigate("/products")}
            >
              CONTINUE SHOPPING
            </button>
          )}
        </div>
        <div className="app__cart-bottom">
          {items.length === 0 && (
            <div className="app__cart-no_products">
              <img
                src="https://img.freepik.com/free-vector/ecommerce-checkout-laptop-concept-illustration_114360-8233.jpg?t=st=1647283194~exp=1647283794~hmac=d1f1d5567cd33d5cf11c43f01620271173ae2be98f723a3b2bcce8c1ef73c2ef&w=1380"
                alt="no-products"
                className="app__cart-no_products-img"
              />
              <p className="app__cart-no_products-text">
                Oh! Seems that your cart is empty... <br />
                Continue shopping choosing a product!
              </p>
              <button
                className="app__cart-top_button"
                onClick={() => navigate("/products")}
              >
                CONTINUE SHOPPING
              </button>
            </div>
          )}
          {items.length >= 1 && (
            <div className="app__cart-info">
              {items.map((item) => (
                <div className="app__cart-product" key={item._id}>
                  <img
                    className="app__cart-product_image"
                    src={item.img}
                    alt="product"
                  />
                  <div className="app__cart-product_detail">
                    <span>
                      <b>Product:</b> {item.title.toLocaleUpperCase()}
                    </span>
                    <span>
                      <b>ID:</b> {item._id}
                    </span>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <b>Color:</b>
                      <div
                        className="app__cart-product_color"
                        style={{
                          backgroundColor: item.color[0],
                          border: "1px solid black",
                          marginLeft: "5px",
                        }}
                      />
                    </span>
                    <span>
                      <b>Size:</b> {item.size[0]}
                    </span>
                  </div>
                  <div className="app__cart-product_price">
                    <div className="app__cart-product_price_amount_container">
                      <button
                        onClick={handleRemoveItem(item)}
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                      >
                        <Remove />
                      </button>
                      <div className="app__cart-product_price_amount">
                        {item.quantity}
                      </div>
                      <button
                        onClick={handleAddItem(item)}
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                      >
                        <Add />
                      </button>
                    </div>
                    <div className="app__cart-product_price_span">
                      $ {Number(item.price) * item.quantity}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="app__cart-separator" />
          {items.length >= 1 && (
            <div className="app__cart-summary">
              <h1 className="app__cart-summary_title">ORDER SUMMARY</h1>
              <div className="app__cart-summary_item">
                <span className="app__cart-summary_item_text">Subtotal</span>
                <span className="app__cart-summary_item_price">
                  $ {subtotal}
                </span>
              </div>
              <div className="app__cart-summary_item">
                <span className="app__cart-summary_item_text">
                  Estimated Shipping
                </span>
                <span className="app__cart-summary_item_price">$ 5.90</span>
              </div>
              <div className="app__cart-summary_item">
                <span className="app__cart-summary_item_text">
                  Shipping Discount
                </span>
                <span className="app__cart-summary_item_price">$ -5.90</span>
              </div>
              <div className="app__cart-summary_item-total">
                <span className="app__cart-summary_item_text">Total</span>
                <span className="app__cart-summary_item_price">
                  $ {subtotal}
                </span>
              </div>
              <StripeCheckout
                name="Hernan Store"
                image="https://icon-library.com/images/shop-icon-png/shop-icon-png-6.jpg"
                billingAddress
                shippingAddress
                description={`Your total is $${subtotal}`}
                amount={subtotal * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <button className="app__cart-summary_button">
                  CHECKOUT NOW
                </button>
              </StripeCheckout>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartScreen;
