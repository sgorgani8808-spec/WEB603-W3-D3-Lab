import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import productsData from "./products";
import NavBar from "./navbar";
import DisplayProducts from "./displayProducts";
import Cart from "./cart";
import SignIn from "./signin";
import Checkout from "./checkout";

class App extends Component {
  state = {
    siteName: "Shop 2 React",
    products: productsData
  };

  handleAdd = (id) => {
    this.setState((prevState) => ({
      products: prevState.products.map((product) =>
        product.id === id
          ? { ...product, value: product.value + 1 }
          : product
      )
    }));
  };

  handleSubtract = (id) => {
    this.setState((prevState) => ({
      products: prevState.products.map((product) =>
        product.id === id && product.value > 0
          ? { ...product, value: product.value - 1 }
          : product
      )
    }));
  };

  render() {
    const { siteName, products } = this.state;
    const totalItems = products.reduce((sum, item) => sum + item.value, 0);

    return (
      <Router>
        <div className="app-shell">
          <div className="app-wrap">
            <NavBar title={siteName} totalItems={totalItems} />

            <Routes>
              <Route
                path="/"
                element={
                  <DisplayProducts
                    products={products}
                    handleAdd={this.handleAdd}
                    handleSubtract={this.handleSubtract}
                  />
                }
              />

              <Route path="/cart" element={<Cart products={products} />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;