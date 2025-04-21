import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Button } from "../ui/button";
import { DosinkLogo } from "../themes/DosinkLogo";
import { ThemeButton } from "../themes/ThemeProvider";

export const Header = () => {
  const [hamburger, setHamburger] = useState(true);

  const toggleNavbar = () => {
    setHamburger(!hamburger);
  };

  return (
    <>
      <nav className="flex items-center justify-between p-3 lg:px-20 lg:py-4 h-[146px]">
        <NavLink to="/" className="flex items-center">
          {/* <img
            src="/images/dosink-logo-light.png"
            alt="dosink-logo"
            className="max-h-12 object-scale-down"
          /> */}
          <DosinkLogo className="max-h-12 object-scale-down" />
        </NavLink>

        <div className="hidden gap-14 md:flex uppercase font-bold hover:text-burntorange">
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>

        <div className="md:flex gap-2 hidden">
          <ThemeButton />
          <NavLink to="/login">
            <Button className="md:flex gap-2 cursor-pointer items-center px-6 py-2 hidden font-semibold">
              Login
              <LiaLongArrowAltRightSolid />
            </Button>
          </NavLink>
        </div>

        <button className="flex items-center md:hidden" onClick={toggleNavbar}>
          <RxHamburgerMenu size={25} />
        </button>

        <div
          className={`fixed inset-0 flex flex-col justify-between z-50 bg-background md:hidden ${
            hamburger ? "hidden" : ""
          }`}
        >
          <div>
            <div className="flex items-center justify-between p-3">
              <NavLink
                to="/"
                className="flex items-center"
                onClick={toggleNavbar}
              >
                <DosinkLogo className="max-h-8 object-scale-down" />
              </NavLink>

              <button
                className="flex items-center md:hidden"
                onClick={toggleNavbar}
              >
                <IoClose size={25} />
              </button>
            </div>

            <div className="mt-6">
              <NavLink
                to="/services"
                className="m-3 block rounded-lg p-3 font-semibold hover:bg-secondary/90"
                onClick={toggleNavbar}
              >
                Services
              </NavLink>
              <NavLink
                to="/team"
                className="m-3 block rounded-lg p-3 font-semibold hover:bg-secondary/90"
                onClick={toggleNavbar}
              >
                Team
              </NavLink>{" "}
              <NavLink
                to="/contact"
                className="m-3 block rounded-lg p-3 font-semibold hover:bg-secondary/90"
                onClick={toggleNavbar}
              >
                Contact Us
              </NavLink>
            </div>
          </div>

          <div className="p-3">
            <div className="h-[1px] bg-gray-400"></div>

            <div className="mt-6 flex">
              <NavLink to="/login" onClick={toggleNavbar}>
                <Button className="flex gap-2 cursor-pointer items-center px-12 py-6 text-md font-semibold">
                  Login
                  <LiaLongArrowAltRightSolid />
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
