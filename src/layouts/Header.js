import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  const {hamburgerActive} = props;

  return (
    <>
      <Link className="logo" to="/">
        Rejsy
      </Link>
      <button onClick={props.handleClick} className={hamburgerActive ? 'hamburger hamburger--active' : 'hamburger'}>
        <span className="hamburger__box">
          <span className="hamburger__inner"></span>
        </span>
      </button>
    </>
  );
}

export default Header;
