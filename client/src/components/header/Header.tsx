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

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-200 uppercase font-bold ${
      isActive ? "text-[#CC5500]" : "text-primary"
    } hover:text-[#E56717]`;

  return (
    <>
      <nav className="flex items-center justify-between p-3 lg:px-20 lg:py-4 h-[70px] md:h-[100px] fixed top-0 left-0 right-0 z-50 bg-background">
        <NavLink to="/" className="flex items-center">
          <DosinkLogo className="h-8 md:h-12 object-scale-down" />
        </NavLink>

        <div className="hidden md:items-center md:justify-around md:flex md:space-x-6 xl:space-x-15 uppercase font-bold text-primary">
          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/work" className={linkClass}>
            Work
          </NavLink>
          <NavLink to="/expertise" className={linkClass}>
            Expertise
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>

        <div className="md:flex gap-2 hidden">
          <ThemeButton />

          <a
            href="https://loyaltyfrontend-bf6a154a1b45.herokuapp.com/"
            target="_blank"
          >
            <Button
              className="md:flex gap-2 cursor-pointer items-center px-6 py-2 hidden font-semibold rounded-full"
              size={"lg"}
            >
              Get a demo
              <LiaLongArrowAltRightSolid />
            </Button>
          </a>
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
                to="/work"
                className="m-3 block rounded-lg p-3 font-semibold hover:bg-secondary/90"
                onClick={toggleNavbar}
              >
                Work
              </NavLink>
              <NavLink
                to="/expertise"
                className="m-3 block rounded-lg p-3 font-semibold hover:bg-secondary/90"
                onClick={toggleNavbar}
              >
                Expertise
              </NavLink>
              <NavLink
                to="/contact"
                className="m-3 block rounded-lg p-3 font-semibold hover:bg-secondary/90"
                onClick={toggleNavbar}
              >
                Contact
              </NavLink>
            </div>
          </div>

          <div className="p-3">
            <div className="h-[1px] bg-gray-400"></div>

            <div className="mt-6 flex">
              <a
                href="https://loyaltyfrontend-bf6a154a1b45.herokuapp.com/"
                target="_blank"
              >
                <Button
                  className="flex gap-2 cursor-pointer items-center px-12 py-6 text-md font-semibold"
                  onClick={toggleNavbar}
                >
                  Get a demo
                  <LiaLongArrowAltRightSolid />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Add padding to the body content to prevent overlap with fixed navbar */}
      <div className="pt-[70px] md:pt-[100px]"></div>
    </>
  );
};
