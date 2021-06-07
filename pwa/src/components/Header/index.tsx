import { useState } from 'react';
import { HiOutlineMenuAlt4, HiOutlineFingerPrint, HiOutlineX } from "react-icons/hi";
import SearchBar from './SearchBar';
import TabBar from './TabBar';
import TextLogo from './TextLogo';

const Header = () => {
  const [navigationMenuState, setNavigationMenuState] = useState(false);
  return (
    <header className="w-full fixed top-0 z-50 text-gray-900 dark:text-gray-50 body-font shadow-lg border-b-2 border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 dark:shadow-none">
      <div className="flex flex-wrap my-2 flex-col  md:flex-row items-start md:items-center justify-between">
        <div className="flex flex-wrap flex-col md:flex-row items-center md:items-center justify-between w-full">
          <div className="flex flex-row justify-between items-center w-full">
            <button onClick={() => {
              setNavigationMenuState(!navigationMenuState);
            }} className="mx-4">
              {
                navigationMenuState
                  ? <HiOutlineX className="md:hidden h-8 w-8 text-gray-900 dark:text-gray-50" />
                  : <HiOutlineMenuAlt4 className="md:hidden h-8 w-8 text-gray-900 dark:text-gray-50" />
              }
            </button>
            <TextLogo logoTitle="Harshit Doshi" />
            <button onClick={() => {
              console.log("Portal");
            }} className="mx-4"><HiOutlineFingerPrint className="md:hidden h-8 w-8 text-gray-900 dark:text-gray-50" /></button>
          </div>
          <TabBar navigationMenuState={navigationMenuState} />
        </div>
        <SearchBar navigationMenuState={navigationMenuState} />
      </div>
    </header >
  );
};

export default Header;