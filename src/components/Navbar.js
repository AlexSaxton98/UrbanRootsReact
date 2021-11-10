import { NavLink } from "react-router-dom";
import "./Navbar.css";
import basketIcon from "../assets/basket-small.png";

import { useHistory } from "react-router-dom";

import logo from "../assets/URLogo_finished.png"



function NavBar({ user, setUser }) {
  const history = useHistory()
  const isLoggedIn = user.token



  const handleLogOut = () => {
    setUser({})
    history.push("/home")
  }



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

                to="/Questions"
                activeClassName="active"
                className="nav-links"
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
