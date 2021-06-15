import { useState } from 'react';
import { Link } from "react-router-dom";
import { HiSearch, HiOutlineFingerPrint, HiOutlineX } from "react-icons/hi";
import SearchBar from './SearchBar';
import TextLogo from './TextLogo';

const Header = () => {
  const [searchBarState, setSearchBarState] = useState(false);
  return (
    <header className="w-full fixed top-0 z-50 text-gray-900 dark:text-gray-50 body-font shadow-lg border-b-2 border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 dark:shadow-none">
      <div className="flex flex-wrap my-2 flex-col  md:flex-row items-start md:items-center justify-between">
        <div className="flex flex-wrap flex-col md:flex-row items-center md:items-center justify-between w-full">
          <div className="flex flex-row justify-between items-center w-full">
            <Link to="/sign-in" className="mx-4"><HiOutlineFingerPrint className="md:hidden h-8 w-8 text-gray-900 dark:text-gray-50" /></Link>
            <TextLogo logoTitle="Harshit Doshi" />
            <button onClick={() => {
              setSearchBarState(!searchBarState);
            }} className="mx-4">
              {
                searchBarState
                  ? <HiOutlineX className="md:hidden h-8 w-8 text-gray-900 dark:text-gray-50" />
                  : <HiSearch className="md:hidden h-8 w-8 text-gray-900 dark:text-gray-50" />
              }
            </button>
          </div>
        </div>
        <SearchBar searchBarState={searchBarState} />
      </div>
    </header >
  );
};

export default Header;