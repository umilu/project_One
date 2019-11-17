import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <>
      <div className="logo">Rejsy</div>
      <button>
        <span className="hamburger__box">
          <span className="hamburger__inner"></span>
        </span>
      </button>
    </>
  );
}

export default Header;
