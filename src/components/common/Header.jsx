import { useEffect, useRef, useState } from "react";

import logoImg from "../../assets/common/logo.png";
import { menulists } from "../../assets/data/data";
import { CustomNavLink, CustomLink, Badges } from "./CustomComponents";
import {
  IoCartOutline,
  IoHeartOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Close menu if click outside menu
  const closeMenuOutSide = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Handle scroll with animation
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  // Add window and document default behavior when clicking and scrolling
  useEffect(() => {
    document.addEventListener("mousedown", closeMenuOutSide);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", closeMenuOutSide);
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // Show black box in home page only
  const isHomePage = location.pathname === "/";

  return (
    <>
      <header
        className={
          isHomePage
            ? `header px-12 py-3 bg-white-100 relative z-20 ${
                isScrolled ? "scrolled" : ""
              }`
            : `header px-12 py-3 bg-white-100 relative z-20 ${
                isScrolled ? "scrolled" : ""
              }`
        }
      >
        {isHomePage && (
          <div
            className={`transition-colors duration-300 ${
              isScrolled ? "lg:bg-none" : "lg:bg-black"
            } lg:h-[88px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10`}
          ></div>
        )}
        <nav className="p-4 flex justify-between items-center relative">
          <div className="flex items-center gap-14">
            <div>
              <img src={logoImg} alt="Logo Image" className="h-7 bg-auto" />
            </div>
            <div className="hidden lg:flex items-center justify-between gap-4">
              {menulists.map((list) => (
                <li key={list.id} className="uppercase list-none">
                  <CustomNavLink href={list.path} className="py-4 px-2">
                    {list.link}
                  </CustomNavLink>
                </li>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8 icons">
            <div className="uppercase hidden lg:block text-inherit relative z-20">
              <CustomLink
                className={`${
                  isScrolled || isHomePage ? "text-white" : "text-primary"
                }`}
              >
                Login
              </CustomLink>
              <span
                className={`${
                  isScrolled || isHomePage ? "text-white" : "text-primary"
                }`}
              >
                /
              </span>
              <CustomLink
                className={`${
                  isScrolled || isHomePage ? "text-white" : "text-primary"
                }`}
              >
                Register
              </CustomLink>
            </div>
            <div
              className={`icon flex items-center justify-center gap-6 ${
                isScrolled || isHomePage ? "text-white" : "text-primary"
              }`}
            >
              <IoSearchOutline size={23} />

              <div className="relative z-20">
                <IoHeartOutline size={23} />
                <div className="absolute -top-2 -right-1.5">
                  <Badges color={isScrolled ? "hidden" : "bg-primary-green"}>
                    0
                  </Badges>
                </div>
              </div>

              <div className="relative z-20">
                <IoCartOutline size={23} />
                <div className="absolute -top-2 -right-1.5">
                  <Badges color={isScrolled ? "hidden" : "bg-primary-green"}>
                    0
                  </Badges>
                </div>
              </div>

              <button
                onClick={toggleMenu}
                className="lg:hidden w-10 h-10 flex justify-center items-center bg-black text-white focus:outline-none"
              >
                {isOpen ? (
                  <AiOutlineClose size={24} />
                ) : (
                  <AiOutlineMenu size={24} />
                )}
              </button>
            </div>
          </div>

          {/* Responsive menu if below 768px */}

          <div
            ref={menuRef}
            className={`lg:hidden w-full p-5 absolute right-0 top-full menu-container ${
              isOpen ? "open" : "close"
            }`}
          >
            {menulists.map((list) => (
              <li key={list.id} className="uppercase list-none">
                <CustomNavLink href={list.path}>{list.link}</CustomNavLink>
              </li>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
