import React, {useState} from 'react';
import { subMenusList } from '../Constants';
import {CiSearch } from "react-icons/ci";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Search = () => {
    const [searchInput, setSearchInput] = useState("");
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = (e) => {
      const inputValue = e.target.value.toLowerCase();
      e.preventDefault();
      setSearchInput(inputValue);
      // Filter sub-menus based on the search input
    const results = subMenusList.reduce((acc, menu) => {
      const mainRoute = menu.name.toLowerCase();

      // Filter children of the menu based on the search input
      const content = menu.children.filter((child) => {
        const childContent = child.title.toLowerCase();
        return childContent.includes(inputValue);
      });

      if (content.length > 0) {
        acc.push({ content, mainRoute });
      }

      return acc;
    }, []);

    setSearchResults(results);
    };
    // const filteredContent = subMenusList.filter(menu => {
    //     const content = menu.title.toLowerCase();
    //     return content.includes(searchInput.toLowerCase());
    // });

   const selectOption = (name) => {
     setSearchInput(name);
     setIsSearchBarOpen(false)
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
        value={searchInput}
        onClick={() => setIsSearchBarOpen(true)} />
        </div>
        {(searchInput && isSearchBarOpen) &&  (
            <div className='bg-[#fff] text-black absolute w-[264px] max-h-[300px] overflow-y-auto pl-10 pb-5'>
            {searchResults.length > 0 ? (
            searchResults.map((menu, i) =>
              menu.content.map((child, j) => (
                <div key={`${i}-${j}`}>
                  <NavLink to={`${menu.mainRoute}/${child.name}`}>
                    <h3 className="pb-5 pt-5" onClick={() => selectOption(child.title)}>
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