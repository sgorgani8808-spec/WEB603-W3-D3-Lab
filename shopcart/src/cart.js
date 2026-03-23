import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Cart({ products }) {
  const cartItems = products.filter((product) => product.value > 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart Items</h2>

      {cartItems.length === 0 ? (
        <>
          <p className="empty-cart-text">There are {totalItems} items in your cart.</p>

          <Link to="/">
            <Button variant="success" className="continue-btn">
              Continue Shop
            </Button>
          </Link>
        </>
      ) : (
        <>
          {cartItems.map((product) => (
            <div className="cart-row" key={product.id}>
              <img
                src={product.image}
                alt={product.desc}
                className="cart-image"
              />

              <div className="cart-info">
                <p className="cart-name">{product.desc}</p>
                <p className="cart-qty">Quantity: {product.value}</p>
              </div>
            </div>
          ))}

          <Link to="/signin">
            <Button variant="primary" className="checkout-btn">
              Check Out
            </Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;