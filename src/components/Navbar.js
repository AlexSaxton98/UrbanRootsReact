import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import basketIcon from "../assets/basket-small.png";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            UrbanRoots
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/test"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Test
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Test2"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Test2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                exact
                to="/Basket"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Basket
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                exact
                to="/Questions"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                FAQ's
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/basket"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <img className="basketIconSmall" src={basketIcon} alt="basket" />
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;