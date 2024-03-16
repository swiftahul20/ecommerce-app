import React, { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import {
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  CloseOutlined,
} from "@mui/icons-material";

const Navbar = () => {
  return (
    <nav className="mx-6 h-[60px] max-w-screen-xl px-6 py-2.5">
      <div className="flex items-center justify-between lg:px-5">
        <div className="flex flex-1 items-center">
          <span className="cursor-pointer text-sm"> EN </span>
          <div className="ml-6 border border-slate-300 px-2 py-1">
            <input className="mr-2 focus:outline-none" />
            <SearchOutlined style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="flex-1">
          <div className="text-center font-bold"> LOGO. </div>
        </div>
        <div className="flex-1">
          <div className="">
            <div className="cursor-pointer text-sm">
              <div className="flex justify-end gap-6">
                <div>REGISTER </div>
                <div>SIGN IN </div>
                <div>
                  {" "}
                  <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined color="action" />
                  </Badge>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    // <nav className="mx-auto bg-slate-200 px-3 py-2.5">
    //   <div className=" flex h-full justify-between">
    //     <div>
    //       <MenuOutlined />
    //     </div>
    //     <div className="font-bold"> LOGO. </div>
    //     <div>
    //       <Badge badgeContent={4} color="primary">
    //         <ShoppingCartOutlined color="action" />
    //       </Badge>{" "}
    //     </div>
    //     {/* <div className="flex-1">
    //       <div className="text-center font-bold"> LOGO. </div>
    //     </div>
    //     <div className="flex-1">
    //       <div className="flex justify-end">
    //         <Badge badgeContent={2} color="primary">
    //           <ShoppingCartOutlined color="action" />
    //         </Badge>{" "}
    //       </div>
    //     </div> */}
    //   </div>
    // </nav>
  );
};

export default Navbar;
