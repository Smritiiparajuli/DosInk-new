import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Button } from "../ui/button";
import { DosinkLogo } from "../themes/DosinkLogo";
import { ThemeButton } from "../themes/ThemeProvider";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { LoginForm } from "../forms/LoginForm";

export const Header = () => {
  const [hamburger, setHamburger] = useState(true);

  const toggleNavbar = () => {
    setHamburger(!hamburger);
  };

  return (
    <>
      <nav className="flex items-center justify-between p-3 lg:px-20 lg:py-4 h-[70px] md:h-[100px]">
        <NavLink to="/" className="flex items-center">
          <DosinkLogo className="h-8 md:h-12 object-scale-down" />
        </NavLink>

        <div className="hidden md:items-center md:justify-around md:flex md:space-x-6 xl:space-x-15 uppercase font-bold text-primary">
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/our-work">Our Work</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>

        <div className="md:flex gap-2 hidden">
          <ThemeButton />
          <Dialog>
            <DialogTrigger asChild>
              <Button className="md:flex gap-2 cursor-pointer items-center px-6 py-2 hidden font-semibold">
                Login
                <LiaLongArrowAltRightSolid />
              </Button>
            </DialogTrigger>
            <DialogContent className="p-0">
              <LoginForm />
            </DialogContent>
          </Dialog>
        </div>

        <button className="flex items-center md:hidden" onClick={toggleNavbar}>
          <RxHamburgerMenu size={25} />
        </button>

        <div
          className={`fixed inset-0 flex flex-col justify-between z-500 bg-background md:hidden ${
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
                <DosinkLogo className="h-8 md:h-12 object-scale-down" />
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
                to="/our-work"
                className="m-3 block rounded-lg p-3 font-semibold hover:bg-secondary/90"
                onClick={toggleNavbar}
              >
                Our Work
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
