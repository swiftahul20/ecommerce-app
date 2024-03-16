import React from "react";
import { Button } from "./Button";

const CategoryItem = ({ item }) => {
  return (
    <div className="relative h-[70vh] flex-1 gap-1">
      <img className="h-full w-full object-cover" src={item.img}></img>
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
        <div className="mb-5 text-4xl font-semibold text-white">
          {" "}
          {item.title}
        </div>
        <Button color="grey" size="md" label="Shop Now" />
      </div>
    </div>
  );
};

export default CategoryItem;
