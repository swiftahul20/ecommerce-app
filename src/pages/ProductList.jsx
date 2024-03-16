import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const ProductList = () => {
  var data = {
    colors: ["White", "Black", "Red", "Blue", "Yellow", "Green"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  };
  return (
    <>
      <Announcement />
      <Navbar />
      <div className="m-5 text-3xl"> Dresses </div>
      <div className="m-5 flex justify-between">
        <div>
          {" "}
          <span className="font-semibold"> Filter Products: </span>{" "}
          <select className="mr-5 p-2.5">
            <option disabled selected>
              {" "}
              Color{" "}
            </option>
            {data.colors.map((opt, i) => (
              <option key={i}> {opt}</option>
            ))}
          </select>
          <select className="mr-5 p-2.5">
            <option disabled selected>
              {" "}
              Color{" "}
            </option>
            {data.sizes.map((opt, i) => (
              <option key={i}> {opt}</option>
            ))}
          </select>
        </div>
        <div>
          {" "}
          <span className="font-semibold"> Sort Products: </span>{" "}
          <select className="mr-5 p-2.5">
            <option selected> Newest </option>
            <option> Price (asc) </option>
            <option> Price (desc) </option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductList;
