import React from "react";
import "../styles/Navigation.css";
import { NavLink } from "react-router-dom";

const pages = [
  { name: "home", path: "/", exact: true },
  { name: "cruises", path: "/cruises" },
  { name: "ships", path: "/ships" },
  { name: "sale", path: "/sale" },
  { name: "contact", path: "/contact" }
];

function Navigation() {
  const menu = pages.map(({ name, path, exact }) => {
    return (
      <li key={name}>
        <NavLink exact={exact ? true : false} to={path}>
          {name}
        </NavLink>
      </li>
    );
  });

  return (
    <nav className="navigation">
      <ul className="navigation__list">{menu}</ul>
    </nav>
  );
}

export default Navigation;
