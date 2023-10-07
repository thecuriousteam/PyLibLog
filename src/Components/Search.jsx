import React, {useState} from 'react';
import { subMenusList } from '../Constants';
import {CiSearch } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const Search = () => {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value.toLowerCase());

      // Filter sub-menus based on the search input
      const results = subMenusList.reduce((acc, menu) => {
        const mainRoute = menu.name;

        // Filter children of the menu based on the search input
        const content = menu.children.filter((child) => {
          const childContent = child.title.toLowerCase();
          return childContent.includes(searchInput);
        });
  
        if (content.length > 0) {
          acc.push({ content, mainRoute });
        }
  
        return acc;
      }, []);
  
      setSearchResults(results);
    };
  
   const selectOption = (name) => {
     setSearchInput(name);
   };

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
        {(searchInput) && (
        <div className="bg-[#fff] text-black absolute w-[264px] h-auto pl-10 pb-5">
          {searchResults.length > 0 ? (
            searchResults.map((menu, i) =>
              menu.content.map((child) => (
                <div key={i}>
                  <NavLink to={`${menu.mainRoute}/${child.name}`}>
                    <h3 className="pb-5 pt-5" onClick={() => selectOption(child.name)}>
                      {child.title}
                    </h3>
                  </NavLink>
                </div>
              ))
            )
          ) : (
            <div>
              <h2>No results found</h2>
            </div>
          )}
        </div>
      )}
   </>
   
  )
}

export default Search