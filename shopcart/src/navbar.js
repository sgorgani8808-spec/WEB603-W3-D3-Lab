import React from "react";
import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar({ title, totalItems }) {
  return (
    <nav className="app-nav">
      <Link to="/" className="app-title-link">
        <h1 className="app-title">
          {title.split(" ").map((word, index) =>
            word === "2" ? (
              <span key={index} className="logo-circle">
                2
              </span>
            ) : (
              <React.Fragment key={index}>
                {index > 0 ? " " : ""}
                {word}
              </React.Fragment>
            )
          )}
        </h1>
      </Link>

      <Link to="/cart" className="cart-text cart-link">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>{totalItems} items</span>
      </Link>
    </nav>
  );
}

export default NavBar;