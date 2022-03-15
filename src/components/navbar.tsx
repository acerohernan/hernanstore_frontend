import React, { MouseEventHandler } from "react";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import LogoutIcon from "@mui/icons-material/Logout";
import { Badge } from "@material-ui/core";

import "../styles/components/navbar.scss";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { userLogout } from "../redux/reducers/user";

function Navbar() {
  const { items } = useAppSelector((state) => state.cart);
  const { isLogin, username } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const handleLogout: MouseEventHandler = () => {
    dispatch(userLogout());
  };

  return (
    <div className="app__navbar">
      <div className="app__navbar-wrapper">
        <div className="app__navbar-left">
          <span className="app__navbar-language">EN</span>
          <div className="app__navbar-search">
            <input
              type="text"
              className="app__navbar-input"
              placeholder="Search"
            />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="app__navbar-center">
          <Link to="/">
            <h1 className="app__navbar-logo">HERNAN.</h1>
          </Link>
        </div>
        <div className="app__navbar-rigth">
          {!isLogin && (
            <>
              <Link className="app__navbar-menu_item" to="/signup">
                SIGN UP
              </Link>
              <Link className="app__navbar-menu_item" to="/login">
                LOGIN
              </Link>
            </>
          )}

          {isLogin && (
            <>
              <span className="app__navbar-menu_item">Hi, {username}</span>
              <button className="app__navbar-menu_item" onClick={handleLogout}>
                <LogoutIcon />
              </button>
            </>
          )}
          <Link className="app__navbar-menu_item" to="/cart">
            <Badge badgeContent={items.length} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
