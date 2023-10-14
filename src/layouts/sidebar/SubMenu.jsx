import { useState } from "react";
import { motion } from "framer-motion";
import { BsCheck } from "react-icons/bs";
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
        {/* <data.icon size={23} className="min-w-max" /> */}
        <p className="flex-1 capitalize">{data.title}</p>
        <BsCheck size={23} />
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
        className="flex h-0 flex-col text-[15px] font-normal overflow-hidden text-black bg-[#EAEDED] hover:text-[#8800ff] "
        style={{
          fontFamily: "Poppins, sans-serif",
        }}
      >
        {data.children?.map((child, i) => (
          <li key={i}>
            {/* className="hover:text-blue-600 hover:font-medium" */}

            <NavLink
              to={`${data.name}/${child.route}`}
              className={`link !bg-transparent capitalize ${
                i < childrenCount - 1 ? "border-b  border-[#8800ff] -mx-1" : ""
              } `} // Add a bottom border to the last submenu link with the specified color
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
