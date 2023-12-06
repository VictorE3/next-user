"use client";
import React from "react";

const ProductCard = () => {
  return (
    <div>
      <button onClick={() => console.log("Click")} className="btn btn-primary">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
