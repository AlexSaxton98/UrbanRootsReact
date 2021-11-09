import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import basketIcon from "../assets/basket-small.png";
import { useHistory } from "react-router-dom";

function NavBar({ user, setUser }) {
  const history = useHistory()
  const isLoggedIn = user.token

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleLogOut = () => {
    setUser({})
    history.push("/home")
  }
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
                to="/Questions"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                FAQs
              </NavLink>
            </li>
            {isLoggedIn ? 
            <li className="nav-item">
            <div className="nav-links" onClick={handleLogOut}>
            Log Out
            </div>
              
          </li>
            :
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Log In
              </NavLink>
            </li>
            }
          {isLoggedIn ? 
            <li className="nav-item">
              <NavLink
                exact
                to="/basket"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <img
                  className="basketIconSmall"
                  src={basketIcon}
                  alt="basket"
                />
              </NavLink>
            </li>
            : <li></li>
            }

          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
