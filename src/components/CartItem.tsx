import React from "react";

export default function CartItem(props: any) {
  const data = props.data;
  const removeHandler = () => {
    props.onRemove(data.id);
  };
  return (
    <>
      <div className="cartItem card p-2 mb-3">
        <div className="row">
          <div className="col-auto">
            <img width="50" height={50} src={data.image} alt={data.title} />
          </div>
          <div className="col">
            <h6 className="mb-1">
              {data.title.length > 40
                ? data.title.slice(0, 40) + "..."
                : data.title}
            </h6>
            <div className="row justify-content-between">
              <div className="col-auto">
                <p className="mb-0">${data.price}</p>
              </div>
              <div className="col-auto">
                <button
                  onClick={removeHandler}
                  title="Remove"
                  className="text-white border-0 bg-danger rounded"
                >
                  &times;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
