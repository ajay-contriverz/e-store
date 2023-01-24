import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Card(props: any) {
  const [data] = useState(props.data);
  const [inWishlist, setInWishlist] = useState(false);

  const addToCart = () => {
    props.onAddToCart(data);
  };

  const addWishListHandler = () => {
    setInWishlist((prevState) => !prevState);
    let addItem = [];
    addItem.push(data);
    addItem = addItem.concat(
      JSON.parse(localStorage.getItem("Wishlist") || "[]")
    );
    localStorage.setItem("Wishlist", JSON.stringify(addItem));
    props.onWishlist(true);
  };

  const removeWishListHandler = () => {
    setInWishlist((prevState) => !prevState);
    const getWishlistItems: any = localStorage.getItem("Wishlist");
    const objWishlistItems = JSON.parse(getWishlistItems);
    if (objWishlistItems != null) {
      if (objWishlistItems.length > 0) {
        const removedItem: any = objWishlistItems.filter(
          (val: any) => val.id != data.id
        );
        localStorage.setItem("Wishlist", JSON.stringify(removedItem));
        props.onWishlist(true);
      }
    }
  };

  const activeWishlistItems = () => {
    const wishlistItems: any = localStorage.getItem("Wishlist");
    const objectWishlistItem = JSON.parse(wishlistItems);
    if (objectWishlistItem != null) {
      if (objectWishlistItem.length > 0) {
        const findItemInWishlist = objectWishlistItem.find(
          (val: any) => val.id == data.id
        );
        if (findItemInWishlist) setInWishlist(true);
      }
    }
  };

  useEffect(() => {
    activeWishlistItems();
  }, []);
  return (
    <>
      <div className="card h-100 p-3 position-relative">
        {inWishlist ? (
          <button
            onClick={removeWishListHandler}
            className="wishlistIcon border-0 bg-transparent"
          >
            <img
              src={"./images/filled.svg"}
              alt="Remove from wishlist"
              title="Remove from wishlist"
            />
          </button>
        ) : (
          <button
            onClick={addWishListHandler}
            className="wishlistIcon border-0 bg-transparent"
          >
            <img
              src={"./images/empty.svg"}
              alt="Add to wishlist"
              title="Add to wishlist"
            />
          </button>
        )}

        <img className="w-100" height={200} src={data.image} alt={data.title} />
        <h6 title={data.title} className="mt-4">
          <Link className="text-dark" to={"dg"}>
            {data.title.slice(0, 35)}
            {data.title.length > 35 ? "..." : ""}
          </Link>
        </h6>
        <div className="row align-items-center">
          <div className="col-md-7">
            <h3 className="text-success">${data.price}</h3>
          </div>
          <div className="col-md-5 text-right">
            <span className="text-primary">{data.category}</span>
          </div>
        </div>

        <p>
          Ratings: {data.rating.rate} ({data.rating.count})
        </p>
        <div className="row">
          <div className="col-6">
            <button
              onClick={() => addToCart()}
              className="btn btn-success btn-block"
            >
              Add To Cart
            </button>
          </div>
          <div className="col-6">
            <Link
              to={`product/${data.id}`}
              className="btn btn-primary btn-block"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
