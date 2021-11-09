import { NavLink } from "react-router-dom";
import "./Navbar.css";
import basketIcon from "../assets/basket-small.png";
import logo from "../assets/URLogo_finished.png"

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} alt="" className="nav_logo_img"/>
          </NavLink>

          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"

              >
                Home
              </NavLink>
            </li>
          
            
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"

              >
                Login
              </NavLink>
              </li>
              <li className="nav-item">
              </li>
              <li className="nav-item">
              <NavLink
                exact
                to="/Questions"
                activeClassName="active"
                className="nav-links"
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
              >
                <img className="basketIconSmall" src={basketIcon} alt="basket" />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;