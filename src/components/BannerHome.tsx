import React from "react";
import { Link } from "react-router-dom";

export default function BannerHome() {
  return (
    <>
      <section className="bannerSection text-white d-flex align-items-center text-center">
        <div className="container">
          <h2>The next generation of E-Store</h2>
          <p className="mb-5">
            A website that allows people to buy and sell physical goods, <br />
            services, and digital products over the internet rather than at a
            brick-and-mortar location.
          </p>
          <Link className="btn btn-success" to={"products"}>
            View All Products
          </Link>
        </div>
      </section>
    </>
  );
}
