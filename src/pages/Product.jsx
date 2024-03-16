import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { Button } from "../components/Button";

const Product = () => {
  var data = {
    colors: ["White", "Black", "Red", "Blue", "Yellow", "Green"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    hexs: [
      {
        id: 1,
        name: "Light Blue",
        hex: "#ADD8E6",
      },
      {
        id: 2,
        name: "Light Green",
        hex: "#008000",
      },
      {
        id: 3,
        name: "Light Yellow",
        hex: "#FFFF00",
      },
    ],
  };
  return (
    <>
      <Announcement />
      <Navbar />
      <div className="flex p-12">
        <div className="flex-1">
          <img
            className="h-[90vh] w-full object-cover"
            src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png"
          ></img>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="text-3xl font-extralight"> Woman's Jacket</div>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sunt
            a, saepe reprehenderit optio expedita velit quaerat sapiente fugit
            excepturi nulla, unde soluta, facere odit natus asperiores?
            Provident, minima rerum?
          </p>
          <span className="text-[40px] font-extralight"> $ 20 </span>
          <div className="flex w-1/2 justify-between">
            <div className="flex items-center gap-2">
              <label className="text-sm font-extralight"> Color: </label>
              {data.hexs.map((item, i) => (
                <span
                  key={i}
                  className={`h-5 w-5 rounded-full bg-[${item.hex}] cursor-pointer text-transparent`}
                >
                  aaa
                </span>
              ))}
            </div>
            <div>
              <label className="text-sm font-extralight"> Size: </label>
              <select className="p-1.5">
                <option disabled selected>
                  {" "}
                  Size{" "}
                </option>
                {data.sizes.map((opt, i) => (
                  <option key={i}> {opt}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex w-1/2 items-center justify-between">
            <div className="flex items-center gap-1 font-semibold">
              <button>
                {" "}
                <Remove />{" "}
              </button>
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-xl border-2 text-xs">
                {" "}
                1{" "}
              </span>
              <button>
                {" "}
                <Add />{" "}
              </button>
            </div>
            <Button label="Add To Cart" color="teal" size="md" />
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Product;
