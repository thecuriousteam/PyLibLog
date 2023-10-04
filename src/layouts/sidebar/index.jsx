import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { subMenusList } from "../../Constants";
import Search from "../../Components/Search";

const Sidebar = () => {
  const isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

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

  const stylesidebar = {
    position: "sticky",
    top: "0",
    "maxHeight": "100vh",
    bottom: "0",
  };

  return (
    <div style={stylesidebar}>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${open ? "block" : "hidden"
          }`}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className="bg-[#212121] text-white shadow-xl z-[999] max-w-[19rem] w-[19rem] 
            overflow-hidden md:relative fixed h-screen"
      >
        <div className="flex-col pt-5 pl-5 pr-5 gap-2.5 font-medium border-b h-[150px] border-slate-300 bg-[#29b6f6]">
          <h1 className="text-[22px] text-white whitespace-pre text-center pb-5">LEARN PYTHON</h1>
          <Search />
        </div>

        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-[#ccc] scrollbar-thumb-yellow-500 md:h-[68%] h-[70%]">
            {(open || isTabletMid) && (
              <div className="py-5 border-slate-300">
                {subMenusList?.map((data, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <SubMenu data={data} />
                  </div>
                ))}
              </div>
            )}
          </ul>
          {open && (
            <div className="flex-1 text-sm z-50 max-h-48 my-auto whitespace-pre w-full font-medium" >
              <div className="flex border-y border-slate-300 p-4-0.3rem items-center justify-between ">
                <div>
                  <p>Clear History</p>
                  <small>No-cost $0/month</small>
                </div>
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
        ></motion.div>
      </motion.div>
      <div className="m-3 md:hidden " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
