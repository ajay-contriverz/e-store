import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Cart from "../components/Cart";

export default function Products() {
  const [products, setProducts] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error: Something went wrong!");
    }
  };

  const addToCartHander = (cartItem: any) => {
    let addItem = [];
    addItem.push(cartItem);
    addItem = addItem.concat(JSON.parse(localStorage.getItem("Cart") || "[]"));
    localStorage.setItem("Cart", JSON.stringify(addItem));
    setShowCart(true);
  };

  const colseCartBox = (close: any) => {
    setShowCart(close);
  };

  useEffect(() => {
    if (showCart) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });

  return (
    <>
      {showCart && <Cart onCloseCart={colseCartBox} />}
      <section className="productList py-5">
        <div className="container">
          <h2 className="text-center mb-5">
            <span className="text-primary">All</span>{" "}
            <span className="text-success">Products</span>
          </h2>
          <div className="row rowGap">
            {isLoading ? (
              <div className="col-md-12">
                <h5 className="text-center">Loading...</h5>
              </div>
            ) : (
              products.map((item: any) => (
                <div key={item.id} className="col-md-4">
                  <Card onAddToCart={addToCartHander} data={item} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
