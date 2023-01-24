import React, { useState, useEffect } from "react";
import Cart from "../components/Cart";
import Card from "../components/Card";

export default function Wishlist() {
  const [products, setProducts] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [wishClicked, setWishClicked] = useState(false);

  const colseCartBox = (close: any) => {
    setShowCart(close);
  };

  const wishlistItems = () => {
    setIsLoading(true);
    const getItems: any = localStorage.getItem("Wishlist");
    const objectItems = JSON.parse(getItems);
    setProducts(objectItems);
    setIsLoading(false);
  };

  const addToCartHander = (cartItem: any) => {
    let addItem = [];
    addItem.push(cartItem);
    addItem = addItem.concat(JSON.parse(localStorage.getItem("Cart") || "[]"));
    localStorage.setItem("Cart", JSON.stringify(addItem));
    setShowCart(true);
  };

  useEffect(() => {
    if (showCart) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showCart]);

  const wishlistCliked = (val: any) => {
    setWishClicked(val);
  };

  useEffect(() => {
    wishlistItems();
  }, [wishClicked]);

  return (
    <>
      {showCart && <Cart onCloseCart={colseCartBox} />}
      <section className="productList py-5">
        <div className="container">
          <h2 className="text-center mb-5">
            <span className="text-primary">All</span>{" "}
            <span className="text-success">Wishlist</span>
          </h2>
          <div className="row rowGap">
            {isLoading ? (
              <div className="col-md-12">
                <h5 className="text-center">Loading...</h5>
              </div>
            ) : products === null ? (
              <div className="col-md-12">
                <h4 className="text-center">Your wishlist is empty!</h4>
              </div>
            ) : (
              products.map((item: any) => (
                <div key={item.id} className="col-md-4">
                  <Card
                    onWishlist={wishlistCliked}
                    onAddToCart={addToCartHander}
                    data={item}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
