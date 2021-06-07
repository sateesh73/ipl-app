import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseMenu from "@material-ui/icons/Close";
import "./MainNav.css";
export const MainNav = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <div className="nav__container">
      <div className="nav__logo">
        <img className="logo" src="./IPL.png" alt="IPL Logo" />
        <Link className="hamberger" onClick={handleClick}>
          {click ? <MenuIcon /> : <CloseMenu />}
        </Link>
      </div>
      <div className="nav__links">
        <ul className={click ? "close__link" : "nav__link"}>
          <li className="link">
            <Link to="/" className="link__">
              Home
            </Link>
          </li>
          <li className="link">
            <Link to="/about" className="link__">
              About
            </Link>
          </li>
          <li className="link">
            <Link to="/contact" className="link__">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
