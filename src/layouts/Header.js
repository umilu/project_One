import React from "react";
import "../styles/Header.css";

function Header(props) {
  // const handleClick = e => {
  //   e.currentTarget.classList.toggle('hamburger--active');
  //   document.querySelector('.main__aside').classList.toggle('main__aside--active');
  // };

  return (
    <>
      <div className="logo">Rejsy</div>
      <button onClick={props.handleClick} className="hamburger">
        <span className="hamburger__box">
          <span className="hamburger__inner"></span>
        </span>
      </button>
    </>
  );
}

export default Header;
