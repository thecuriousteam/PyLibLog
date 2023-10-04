import React, {useState} from 'react';
import { subMenusList } from '../Constants';
import {CiSearch } from "react-icons/ci";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Search = () => {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
    };
    const filteredContent = subMenusList.filter(menu => {
        const content = menu.title.toLowerCase();
        return content.includes(searchInput.toLowerCase());
    })
  return (
    <>
        <div className="relative">
        <CiSearch size={'22px'} className="text-[#fff] absolute left-2 top-2" />
        <input
        className="text-[#fff] bg-[#212121] pl-10 rounded-sm w-full outline-none pt-2 pb-2 pr-2"
        type="search"
        placeholder="Search..."
        onChange={handleChange}
        value={searchInput} />
        </div>
        {searchInput && (
            <div className='bg-[#fff] text-black absolute w-[264px] h-auto pl-10 pb-5'>
            {filteredContent.map((menu,i) => (
              menu.children.map(child => (
                <div key = {i}>
                <NavLink to = {`${menu.name}/${child.name}`}>
                <h3 className='pb-5 pt-5'>{menu.name}</h3> 
                </NavLink>
                </div>
              ))
            
            ))}
            </div>
        )}
   </>
   
  )
}

export default Search