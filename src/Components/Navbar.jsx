import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAtom } from "jotai";
import sidebarAtom from "../atoms/sidebar-atom";

const Navbar = () => {
  const [sidebar, setSidebar] = useAtom(sidebarAtom);
  // Navbar links
  let links = [
    { name: "Docs", link: "/" },
    { name: "Libraries", link: "/" },
    { name: "Blog", link: "/" },
  ];

  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <nav class="bg-indigo-500 flex items-center py-3 px-4 justify-between w-full z-10 ">
        <div className="text-3xl flex items-center text-white cursor-pointer md:hidden" onClick={() => setSidebar(!sidebar)}>
          <ion-icon name={`${isOpen ? "close" : "menu"}-outline`}></ion-icon>
        </div>
        {/* <div className="bg-indigo-500 logo w-full md:w-1/5 lg:w-1/4 text-center py-4"> */}
        <span className="text-white text-xl font-bold">PyLibLog</span>
        {/* </div> */}

        <div
          className="menu-btn text-3xl flex items-center text-white cursor-pointer md:hidden"
          onClick={() => setisOpen(!isOpen)}
        >
          <ion-icon name={`${isOpen ? "close" : "menu"}-outline`}></ion-icon>
        </div>

        <div
          className={`nav-menu  w-full my-1 md:my-4  md:w-4/5 lg:w-3/4 md:flex justify-end transition-all duration-500 ease-in absolute md:static z-[-1]  md:z-auto  ${
            isOpen ? "top-[55px]" : " top-[-150px]"
          }`}
        >
          <ul className="nav-list md:flex w-full lg:w-3/5 justify-evenly  text-center md:bg-transparent bg-white pr-6">
            {links.map((val) => {
              return (
                <li className="navlink text-lg w-full py-3 md:py-0">
                  <a
                    href={val.link}
                    className="md:text-white text-indigo-500  hover:font-bold "
                  >
                    {val.name}
                  </a>
                </li>
              );
            })}
            <button className="bg-indigo-500 w-full hidden md:block px-2 border-2 border-white rounded text-white hover:bg-white hover:text-indigo-700 duration-500 ">
              Get Started
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
