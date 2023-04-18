import React from "react";
import ProductCard from "./ProductCard";
import allProducts from "../data";

function ProductContainer() {
  console.log("allProducts", allProducts);
  return (
    <section className="product-container">
      {allProducts.map((product) => (
        <ProductCard
          thumbnailUrl={product.images[0]}
          brandName={product.brand}
          title={product.title}
          description={product.description}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </section>
  );
}

export default ProductContainer;
