import { useEffect, useState } from "react";
import CartItem from "./CartItem";

export default function Cart(props: any) {
  const [cartItems, setCartItems] = useState<any>([]);
  const [total, setTotal] = useState(0);

  const getCartData = () => {
    const getItems: any = localStorage.getItem("Cart");
    const data = JSON.parse(getItems);
    setCartItems(data);
    const initialBalance = 0;
    const totalAmount = data.reduce((accumulator: any, currentValue: any) => {
      return accumulator + currentValue.price;
    }, initialBalance);
    setTotal(totalAmount);
  };

  useEffect(() => {
    getCartData();
  }, []);

  const removeProductHandler = (id: any) => {
    const filterCart = cartItems.filter((items: any) => id != items.id);
    localStorage.setItem("Cart", JSON.stringify(filterCart));
    getCartData();
  };

  const closeCartHandler = () => {
    props.onCloseCart(false);
  };

  return (
    <>
      <div className="backdrop"></div>
      <div className="cartBox border-left border-top">
        <button onClick={closeCartHandler} className="border-0 close">
          &times;
        </button>
        <h4>Cart</h4>
        {cartItems.length < 1 ? (
          <h6 className="text-center mt-5 pt-5">Your cart is empty!</h6>
        ) : (
          <>
            <div className="cartItemsOuter">
              {cartItems.map((data: any, i: number) => (
                <CartItem key={i} onRemove={removeProductHandler} data={data} />
              ))}
            </div>
            <div className="row justify-content-between pt-5">
              <div className="col-auto">Total</div>
              <div className="col-auto">${total.toFixed(2)}</div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
