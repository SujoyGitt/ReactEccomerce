import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart , Menu,Close } from "@material-ui/icons";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";
import { useCartContext } from "../../Context/Cart_context";
import { useState } from "react";
const Navbar = () => {
  const { loginWithRedirect,logout,isAuthenticated,user} = useAuth0();
  
  let {total_item} = useCartContext();
  let [menuIcon, setmenuIcon] = useState(false);
  return (
    <>
      <Menu className="mobile-nav-icon" onClick={() => setmenuIcon(true)} />
      <div
        className={
          menuIcon
            ? "navbar activenav d-flex justify-content-center align-items-center"
            : "navbar d-flex justify-content-center align-items-center"
        }
      >
        {/* two button for open and close fo menu  start*/}
        <div className="mobile-navber-btn">
          <Close
            className="mobile-nav-icon close-outline"
            onClick={() => setmenuIcon(false)}
          />
        </div>
        {/* two button for open and close fo menu end*/}
        <ul className="navbar-list mt-2">
          <li>
            <NavLink
              to="/"
              className="nav-link home-link"
              onClick={() => setmenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="nav-link home-link"
              onClick={() => setmenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="nav-link home-link"
              onClick={() => setmenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="nav-link home-link"
              onClick={() => setmenuIcon(false)}
            >
              Contact
            </NavLink>
          </li>
          {isAuthenticated && <li className="text-danger fw-bold">{user.name}</li>}

          {isAuthenticated ? <li className="loginbtn">
          <button className="py-1 px-2" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button></li> : <li className="loginbtn">
          <button className="py-1 px-2" onClick={() => loginWithRedirect()}>Log In</button>
          </li>}

          <li>
            <NavLink
              to="/cart"
              className="nav-link home-link"
              onClick={() => setmenuIcon(false)}
            >
              <ShoppingCart className="cart-trolly" />
              <span className="carttotal">{total_item}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
