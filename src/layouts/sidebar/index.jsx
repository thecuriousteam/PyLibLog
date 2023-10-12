import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
// import {CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation, useRoutes } from "react-router-dom";
import { subMenusList } from "../../Constants";
import Search from "../../Components/Search";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "24rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };
  // subMenusList.map(menu => {
  //   console.log(menu);
  // })
  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        // sidebar color code (#E0E0E0)
        className="border-r border-[#BFC9CA] shadow-lg bg-[#EAEDED] text-black  text-[16px] shadow-xl z-[999] max-w-[19rem] w-[19rem] overflow-hidden md:relative fixed h-screen"
        style={{ fontFamily: "Poppins, sans-serif", fontWeight: "light" }}
      >
        <div className="flex-col pt-5 pl-5 pr-5 gap-2.5 font-medium border-b h-[150px] border-slate-300  bg-[#8800ff]">
          {/* <img
            src="https://img.icons8.com/color/512/firebase.png"
            width={45}
            alt=""
          /> */}
          <Link to="/">
            <h1
              className="text-[22px] text-white whitespace-pre text-center pb-5"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: "light" }}
            >
              PyLibLog
            </h1>
          </Link>
          <Search />
        </div>
        <div className="my-3"></div>
        <div className="flex flex-col  h-full">
          <div className="flex justify-center items-center mt-3">
            <Link to="/play-ground">
              <button className="px-5 py-1 bg-[#8800ff] rounded  text-white  text-[16px]">
                Python PlayGround
              </button>
            </Link>
          </div>
          <div className="my-2"></div>
          <ul
            className="whitespace-pre  text-[16px] py-1 flex flex-col gap-1 font-light overflow-x-hidden scrollbar-thin scrollbar-track-[#ccc] scrollbar-thumb-yellow-500 md:h-[68%] h-[70%]  "
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {(open || isTabletMid) && (
              <div className="py-5 border-slate-300 text-[16px]  ">
                {/* <small className="pl-3 text-slate-500 inline-block mb-2">
                  Product categories
                </small> */}
                {subMenusList?.map((data, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-1 text-[16px] pl-2 pr-2 hover:bg-[#8800ff] hover:text-white border border-[#BFC9CA] p-1"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "light",
                    }}
                  >
                    <SubMenu data={data} />
                  </div>
                ))}
              </div>
            )}
          </ul>
          {open && (
            <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
              <div className="flex border-y border-slate-300 p-4 items-center justify-between">
                <div>
                  <p>PyLibLog</p>
                  <small>From The Curious Community</small>
                </div>
                {/* <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                  Upgrade
                </p> */}
              </div>
            </div>
          )}
        </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          {/* <IoIosArrowBack size={25} /> */}
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
