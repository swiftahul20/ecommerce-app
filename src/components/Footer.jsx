import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Pinterest,
  Place,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import { footerlinks } from "./lib/data";

const socials = [
  {
    id: 1,
    name: "Instagram",
    color: "#E4405F",
    icon: <Instagram />,
  },
  {
    id: 2,
    name: "Facebook",
    color: "#316FF6",
    icon: <Facebook />,
  },
  {
    id: 3,
    name: "Twitter",
    color: "#55ACEE",
    icon: <Twitter />,
  },
  {
    id: 4,
    name: "Pinterest",
    color: "#E60023",
    icon: <Pinterest />,
  },
];

const Footer = () => {
  return (
    <div className="flex">
      <div className="flex flex-1 flex-col gap-5 p-5">
        <div className="text-3xl font-semibold"> LOGO. </div>
        <div>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ultrices semper dui, in suscipit magna dapibus id. Nam vitae diam
          arcu. Nunc accumsan ligula sed consectetur iaculis. Sed quis commodo
          quam.{" "}
        </div>
        <div className="flex gap-2">
          {socials.map((social) => (
            <div
              key={social.id}
              className={`h-10 w-10 rounded-full bg-[${social.color}] flex cursor-pointer items-center justify-center text-white`}
            >
              {social.icon}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-5 p-5">
          <div className="text-3xl font-semibold"> Useful Links </div>
          <ul className="flex flex-wrap">
            {footerlinks.map((link) => (
              <li className="mb-2 w-1/2" key={link.id}>
                {" "}
                {link.title}{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-5 p-5">
          <div className="text-3xl font-semibold"> Contact Us </div>
          <div className="flex flex-col gap-3">
            <span>
              <Place className="mr-2" /> 73644 Klocko Dam Suite 001, Corwinfort,
              Vermont{" "}
            </span>
            <span>
              <Phone className="mr-2" /> +1.248.799.1968{" "}
            </span>
            <span>
              <Mail className="mr-2" /> keanu.mallory@logo.com{" "}
            </span>
            <span>
              <img src="https://i.ibb.co/Qfvn4z6/payment.png"></img>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
