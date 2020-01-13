import React from "react";
import "../styles/Navigation.css";
import { NavLink } from "react-router-dom";

const pages = [
  { name: "start", path: "/", exact: true },
  { name: "rejsy", path: "/cruises" },
  { name: "statki", path: "/ships" },
  { name: "wyprzedaż", path: "/sale" },
  { name: "kontakt", path: "/contact" }
];

function Navigation(props) {
  const menu = pages.map(({ name, path, exact }) => {
    return (
      <li key={name}>
        <NavLink onClick={props.handleClick} exact={exact ? true : false} to={path}>
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
