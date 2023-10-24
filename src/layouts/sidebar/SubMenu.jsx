import { useState } from "react";
import { motion } from "framer-motion";
import { BiCaretDown } from "react-icons/bi";
import { NavLink, useLocation } from "react-router-dom";

const SubMenu = ({ data }) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const childrenCount = data.children?.length || 0;
  return (
    <>
      <li
        className={`link ${pathname.includes(data.name) && "text-white-600"}`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <p className="flex-1 capitalize pl-2 font-bold">{data.title}</p>
        <BiCaretDown size={23} />
      </li>

      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex h-0 flex-col text-[15px] font-normal overflow-hidden text-black bg-[#EAEDED] hover:text-[#8800ff]"
        style={{
          fontFamily: "Poppins, sans-serif",
        }}
      >
        {data.children?.map((child, i) => (
          <li
            key={i}
            className={`text-black hover:text-[#8800ff] mt-2 pl-3 ${
              i < childrenCount  ? "border-b  border-[#8800ff] rounded-lg" : ""
            }`}
          >
            <NavLink
              to={`${data.name}/${child.route}`}
              className={`link  capitalize  visited:bg-[#EAEDED]`} // Add a bottom border to the last submenu link with the specified color
            >
              {child.title}
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;
