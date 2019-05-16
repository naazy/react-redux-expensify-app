import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
        <img className='image' src='./wedding/images/banner.png'></img>
    <NavLink to="/" activeClassName="active" exact>
      Our wedding
    </NavLink>
    <NavLink to="/gifts" activeClassName="active" exact>
      Gifts
    </NavLink>
    <NavLink to="/help" activeClassName="active" exact>
      Rsvp
      </NavLink>
  </header>
);

export default Header;
