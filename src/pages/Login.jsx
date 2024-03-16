import React from "react";
import BgImage from "../assets/image/bgImage.avif";
import Input from "../components/Input";

const Login = () => {
  const bgStyle = {
    background: `url(${BgImage}) center`,
  };
  return (
    <div
      className="flex h-screen w-screen items-center justify-center bg-white/50 bg-center"
      style={bgStyle}
    >
      <div className="w-1/4 bg-white p-5">
        <div className="text-2xl font-light"> Sign In </div>
        <form className="my-4 flex flex-col gap-y-2.5">
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
        </form>
        <button className="block w-[40%] border-none bg-teal-400 px-5 py-2.5 text-white">
          {" "}
          Sign In{" "}
        </button>
        <div className="mt-4 flex cursor-pointer justify-between gap-2 text-xs underline">
          <a> Forgot your password?</a>
          <a> Create an account </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
