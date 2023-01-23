import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card(props: any) {
  const [data] = useState(props.data);

  const addToCart = () => {
    props.onAddToCart(data);
  };

  return (
    <>
      <div className="card h-100 p-3">
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
