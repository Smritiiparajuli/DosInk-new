import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaLine,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="flex px-4 py-6 bg-secondary flex-col md:items-center md:flex-row md:justify-between">
        <span className="text-sm text-primary block sm:text-center">
          © 2025{" "}
          <Link to="https://dosink.com/">
            DosInk Marketing Tech. Co., Ltd.{" "}
          </Link>{" "}
          All Rights Reserved.
        </span>

        <div className="flex mt-4 justify-start sm:justify-center md:mt-0 space-x-5 items-center">
          <FaFacebook className="text-gray-500 hover:text-primary hover:cursor-pointer" />
          <FaInstagram className="text-gray-500 hover:text-primary hover:cursor-pointer" />
          <FaYoutube className="text-gray-500 hover:text-primary hover:cursor-pointer" />
          <FaWhatsapp className="text-gray-500 hover:text-primary hover:cursor-pointer" />
          <FaLine className="text-gray-500 hover:text-primary hover:cursor-pointer" />
        </div>
      </div>
    </>
  );
};
