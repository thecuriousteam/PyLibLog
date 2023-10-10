import { useState } from "react";
import { motion } from "framer-motion";
import { BsCheck } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";

const SubMenu = ({ data }) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
    <li
        className={`link ${pathname.includes(data.name) && "text-white-600"}`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        {/* <data.icon size={23} className="min-w-max" /> */}
        <p className="flex-1 capitalize">{data.title}</p>
        <BsCheck size={23}
        
        />
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
        className="flex h-0 flex-col pl-14 text-[0.8rem] font-normal overflow-hidden"
      >


{data.children?.map((child,i) => (
    <li key={i}>
    {/* className="hover:text-blue-600 hover:font-medium" */}
    
    <NavLink
      to={`${data.name}/${child.route}`}
      className="link !bg-transparent capitalize"
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
