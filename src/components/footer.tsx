import React from "react";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import "../styles/components/footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="app__footer">
      <div className="app__footer-left">
        <h1 className="app__footer-logo">HERNAN.</h1>
        <p className="app__footer-description">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="app__footer-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="app__footer-social_icon"
          >
            <Facebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="app__footer-social_icon"
          >
            <Instagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="app__footer-social_icon"
          >
            <Twitter />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noreferrer"
            className="app__footer-social_icon"
          >
            <Pinterest />
          </a>
        </div>
      </div>
      <div className="app__footer-center">
        <h1 className="app__footer-title">Useful Links</h1>
        <ul className="app__footer-list">
          <Link className="app__footer-list_item" to="/">
            Home
          </Link>
          <Link className="app__footer-list_item" to="/cart">
            Cart
          </Link>
          <Link className="app__footer-list_item" to="/products">
            Man Fashion
          </Link>
          <Link className="app__footer-list_item" to="/products">
            Woman Fashion
          </Link>
          <Link className="app__footer-list_item" to="/products">
            Accessories
          </Link>
          <Link className="app__footer-list_item" to="/products">
            Hats
          </Link>
          <Link className="app__footer-list_item" to="/cart">
            Wishlist
          </Link>
          <Link className="app__footer-list_item" to="/products">
            Terms
          </Link>
        </ul>
      </div>
      <div className="app__footer-right">
        <h1 className="app__footer-titile">Contact</h1>
        <div className="app__footer-contact_item">
          <Room style={{ marginRight: "10px" }} /> Calle Beta C-39, San Borja,
          Lima, Perú
        </div>
        <div className="app__footer-contact_item">
          <Phone style={{ marginRight: "10px" }} /> +51 999113934
        </div>
        <div className="app__footer-contact_item">
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          contacto.acero.hernan@gmail.com
        </div>
        <img
          className="app__footer-payment_img"
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt="payment"
        />
      </div>
    </div>
  );
}

export default Footer;
