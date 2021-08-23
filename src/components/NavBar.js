import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">
    <NavLink
    to="/"
    exact
    activeStyle={{
      background: "darkblue",
      color: "white",
    }}
  >
    Home
  </NavLink>
  <NavLink
    to="/movies"
    exact
    activeStyle={{
      background: "darkblue",
      color: "white",
    }}
  >
    Movies
  </NavLink>
  <NavLink
    to="/directors"
    exact
    activeStyle={{
      background: "darkblue",
      color: "white",
    }}
  >
    Directors
  </NavLink>
  <NavLink
    to="/actors"
    exact
    activeStyle={{
      background: "darkblue",
      color: "white",
    }}
  >
    Actors
  </NavLink>
  </div>;
}

export default NavBar;
