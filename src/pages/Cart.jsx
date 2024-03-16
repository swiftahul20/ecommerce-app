import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Cart = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <div className="p-5">
        <div className="flex justify-center text-3xl font-light">
          {" "}
          Your Bag{" "}
        </div>
        <div className="my-4 flex items-center justify-between">
          <button className="cursor-pointer border-2 border-black bg-white p-2.5 font-semibold">
            {" "}
            Continue Shopping
          </button>
          <div className="flex gap-4">
            <span className="cursor-pointer underline"> Shopping Bag (2)</span>
            <span className="cursor-pointer underline"> Your Wishlist (0)</span>
          </div>
          <button className="cursor-pointer bg-black p-2.5 font-semibold text-white">
            Checkout Now
          </button>
        </div>
        <div className="flex flex-row">
          <div className="flex-1">
            <div className="my-5 flex justify-between">
              <div className="flex-1">
                <div className="flex justify-between">
                  <img
                    className="w-[150px]"
                    src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png"
                  ></img>
                  <div className="flex flex-col gap-3.5 px-5">
                    <span>
                      <b> Product: </b> Woman's Raincoat{" "}
                    </span>
                    <span>
                      <b> ID: </b> 12312312321
                    </span>
                    <div className="max-h-5 w-5 flex-1 rounded-full bg-black"></div>
                    <span>
                      <b> Size: </b> 42
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center">
                <div className="mb-5 flex items-center gap-2">
                  <Add />
                  <span className="text-2xl"> 1 </span>
                  <Remove />
                </div>
                <div className="text-3xl font-extralight"> $ 100 </div>
              </div>
            </div>
            <hr></hr>
            <div className="my-5 flex justify-between">
              <div className="flex-1">
                <div className="flex justify-between">
                  <img
                    className="w-[150px]"
                    src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"
                  ></img>
                  <div className="just flex flex-col gap-3.5 px-5">
                    <span>
                      <b> Producst: </b> Vintage Guitar Shirt{" "}
                    </span>
                    <span>
                      <b> ID: </b> 4324353423
                    </span>
                    <div className="max-h-5 w-5 flex-1 rounded-full bg-black"></div>
                    <span>
                      <b> Size: </b> XL
                    </span>
                  </div>
                </div>
                <div></div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center">
                <div className="mb-5 flex items-center gap-2">
                  <Add />
                  <span className="text-2xl"> 2 </span>
                  <Remove />
                </div>
                <div className="text-3xl font-extralight"> $ 300 </div>
              </div>
            </div>
          </div>
          <div className="border-1 h-[50vh] w-[70vh] grow-0 rounded-md border-2 p-5">
            <div className="mb-4 text-3xl font-extralight"> Order Summary </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <span> Subtotal: </span>
                <span> $ 400 </span>
              </div>
              <div className="flex justify-between">
                <span> Estimated Shipping: </span>
                <span> $ 250 </span>
              </div>
              <div className="flex justify-between">
                <span> Shipping Discound: </span>
                <span> $ -150 </span>
              </div>
              <div className="flex justify-between text-2xl font-semibold">
                <span> Total: </span>
                <span> $ 600 </span>
              </div>
            </div>
            <button className="my-4 w-full bg-black p-2.5 font-semibold text-white">
              {" "}
              Checkout Now{" "}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
