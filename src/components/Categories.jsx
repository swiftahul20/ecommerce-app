import React from "react";
import { categories } from "./lib/data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div className="mt-4 flex justify-between gap-3 p-5">
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </div>
  );
};

export default Categories;
