import React from "react";
import { popularProducts } from "./lib/data";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <div className="flex flex-wrap justify-between p-5">
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
