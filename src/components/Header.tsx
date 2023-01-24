import React, { useState, useEffect } from "react";
import Cart from "./Cart";

import { Link } from "react-router-dom";

function Header() {
  const [showCart, setShowCart] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  const getCartData = () => {
    const getItems: any = localStorage.getItem("Cart");
    const data = JSON.parse(getItems);
    setCartTotal(data.length);
  };

  useEffect(() => {
    getCartData();
    if (showCart) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });

  const colseCartBox = (close: any) => {
    setShowCart(close);
  };

  return (
    <>
      {showCart && <Cart onCloseCart={colseCartBox} />}
      <header className="navbar navbar-expand-lg navbar-light bg-light d-block">
        <nav className="row justify-content-between align-items-center">
          <div className="col">
            <Link to={"/"} className="navbar-brand">
              <img width={100} src={"./images/e-store.png"} alt="e-store" />
              {/* <h1>
                <span className="text-primary">E-</span>
                <span className="text-success">Store</span>
              </h1> */}
            </Link>
          </div>
          <div className="col">
            <ul className="navbar-nav flex-row justify-content-end align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to={"products"}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"categories"}>
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"wishlist"}>
                  Wishlist
                </Link>
              </li>
              {/* <li className="nav-item ml-5">
                <button className="btn btn-sm btn-primary mr-2">Search</button>
              </li> */}
              <li className="nav-item ml-3">
                <button
                  onClick={() => setShowCart(true)}
                  className="btn btn-sm btn-success"
                >
                  Cart {cartTotal > 0 && `(${cartTotal})`}
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
