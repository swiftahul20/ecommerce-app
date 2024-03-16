import { Send } from "@mui/icons-material";
import React from "react";

const Newsletter = () => {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-4 bg-[#fcf5f5]">
      <div className="text-7xl"> Newsletter </div>
      <div className="text-2xl font-light">
        {" "}
        Get timely updates from your favorite products..{" "}
      </div>
      <div className="flex h-10 w-[50%] justify-between bg-white pl-4">
        <input
          className="w-5/6 focus-visible:outline-0"
          placeholder="Your email"
        ></input>
        <button className="w-1/6 flex-1 bg-teal-600 text-white">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
