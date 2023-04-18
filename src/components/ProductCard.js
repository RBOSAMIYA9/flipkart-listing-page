import React from "react";

function ProductCard({
  thumbnailUrl,
  brandName,
  title,
  description,
  price,
  rating,
}) {
  return (
    <div className="product-card">
      <img src={thumbnailUrl} className="product-img" />
      <p>{brandName} </p>
      <p>{title} </p>
      <p>{description} </p>
      <p>{price} </p>
      <p>{rating} </p>
    </div>
  );
}

export default ProductCard;
