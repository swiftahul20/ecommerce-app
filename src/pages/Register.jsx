import React from "react";
import BgImage from "../assets/image/bgImage.avif";
import Input from "../components/Input";

const Register = () => {
  const bgStyle = {
    // background: `url(${BgImage}) center`,
    background: `url(${BgImage}) center`,
  };
  return (
    <div
      className="flex h-screen w-screen items-center justify-center bg-white/50 bg-center"
      style={bgStyle}
    >
      <div className="w-[40%] bg-white p-5">
        <div className="text-2xl font-light"> Create An Account </div>
        <form className="flex flex-wrap gap-x-2.5 gap-y-5">
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Username" />
          <span className="my-2 text-sm">
            {" "}
            By creating an accoung, I consent ...{" "}
          </span>
        </form>
        <button className="w-[40%] border-none bg-teal-400 px-5 py-2.5 text-white">
          {" "}
          Create{" "}
        </button>
      </div>
    </div>
  );
};

export default Register;
