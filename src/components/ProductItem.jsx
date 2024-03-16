import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";

const icons = [
  {
    icon: <ShoppingCartOutlined />,
  },
  {
    icon: <SearchOutlined />,
  },
  {
    icon: <FavoriteBorderOutlined />,
  },
];

const ProductItem = ({ item }) => {
  return (
    <div className="group relative m-1.5 flex h-[350px] min-w-[280px] flex-1 items-center justify-center bg-[#f5fbfd]">
      <img className="h-[75%]" src={item.img}></img>
      <div className="absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center hover:transition-all hover:delay-150 hover:ease-in group-hover:bg-black/20">
        <div className="group-hoer:delay-150 absolute top-[40%] z-20 hidden h-[200px] w-[200px] rounded-[50%] group-hover:flex group-hover:transition-all">
          {icons.map((icon, i) => (
            <div
              key={i}
              className="z-[3] m-2.5 flex h-10 w-10 cursor-pointer flex-row items-center justify-center rounded-full bg-white delay-100 ease-in-out hover:scale-110 hover:bg-[#e9f5f5] hover:transition"
            >
              {icon.icon}
            </div>
          ))}
          {/* <div className="m-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-white hover:scale-110 hover:bg-[#e9f5f5]">
            <ShoppingCartOutlined />
          </div>
          <div className="m-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-white hover:scale-110 hover:bg-[#e9f5f5]">
            <SearchOutlined />
          </div>
          <div className="m-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-white hover:scale-110 hover:bg-[#e9f5f5]">
            <FavoriteBorderOutlined />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
