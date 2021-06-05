import { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { MenuAlt4Icon, FingerPrintIcon, XIcon } from '@heroicons/react/solid'
// import logo from "../assets/logos/Logo_Horizontal.svg";

const Header = () => {
  const [navigationMenuState, setNavigationMenuState] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState({ search_phrase: '' });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSearchPhrase({ ...searchPhrase, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchPhrase.search_phrase) {
      // coreOperation(searchPhrase.search_phrase);
      setSearchPhrase({ search_phrase: '' });
    }
  };
  return (
    <header className="sticky top-0 z-50 text-gray-900 dark:text-gray-50 body-font shadow-lg border-b-2 border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 dark:shadow-none">
      <div className="flex flex-wrap my-2 flex-col  md:flex-row items-start md:items-center justify-between">
        <div className="flex flex-wrap flex-col md:flex-row items-center md:items-center justify-between w-full">
          <div className="flex flex-row justify-between items-center w-full">
            <button onClick={() => {
              setNavigationMenuState(!navigationMenuState);
            }} className="mx-4">
              {
                navigationMenuState
                  ? <XIcon className="md:hidden h-8 w-8 text-gray-900 dark:text-gray-50" />
                  : <MenuAlt4Icon className="md:hidden h-8 w-8 text-gray-900 dark:text-gray-50" />
              }
            </button>
            <div>
              <Link to="/" className="flex title-font font-black text-2xl font-mono items-center text-gray-900 dark:text-gray-50 p-2 border-2 border-gray-100 dark:border-gray-800 rounded-md shadow">
                Harshit Doshi
              </Link>
            </div>
            <button onClick={() => {
              console.log("Portal");
            }} className="mx-4"><FingerPrintIcon className="md:hidden h-8 w-8 text-gray-900 dark:text-gray-50" /></button>
          </div>
          {/* <nav className={"md:mx-4 my-2 md:my-0 flex flex-wrap flex-col md:flex-row items-start md:items-center text-base justify-start md:justify-center w-2/3" + (navigationMenuState ? "md:flex" : " hidden")}> */}
          <nav className={"md:mx-4 my-2 md:my-0 grid grid-cols-3 gap-y-1 gap-x-1 md:flex md:flex-row items-start md:items-center text-base justify-start md:justify-center w-2/3" + (navigationMenuState ? "md:flex" : " hidden")}>
            <NavLink exact to="/" activeClassName="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 px-2 py-1 rounded-full border border-gray-200 dark:border-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50 shadow-lg" className="hover:shadow-lg px-2 py-1 mx-2 border border-gray-50 dark:border-gray-900 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border hover:border-gray-200 dark:hover:border-gray-900 rounded-full font-bold">🏡 Home</NavLink>
            <NavLink to="/blog" activeClassName="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 px-2 py-1 rounded-full border border-gray-200 dark:border-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50 shadow-lg" className="hover:shadow-lg px-2 py-1 mx-2 border border-gray-50 dark:border-gray-900 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border hover:border-gray-200 dark:hover:border-gray-900 rounded-full font-bold">🧠 Blog</NavLink>
            <NavLink to="/work" activeClassName="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 px-2 py-1 rounded-full border border-gray-200 dark:border-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50 shadow-lg" className="hover:shadow-lg px-2 py-1 mx-2 border border-gray-50 dark:border-gray-900 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border hover:border-gray-200 dark:hover:border-gray-900 rounded-full font-bold">💼 Projects</NavLink>
          </nav>
        </div>
        <div className={"w-full flex flex-row justify-center items-center mt-2" + (navigationMenuState ? "" : " hidden")}>
          <input onChange={handleChange} value={searchPhrase.search_phrase} type="text" name="search_phrase" id="search_phrase" autoComplete="search_phrase" placeholder="Enter keyword..." className="w-2/3 mx-2 hover:shadow-lg focus:shadow-lg items-center text-gray-900 dark:text-gray-50 bg-gray-50 dark:bg-gray-900 py-1 px-2 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 focus:bg-gray-50 dark:focus:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50 focus:border-gray-200 dark:focus:border-gray-700 focus:outline-none rounded-full text-base font-mono"></input>
          <button onClick={handleSubmit} className="w-1/3 mx-2 hover:shadow-lg flex flex-row items-center text-gray-900 dark:text-gray-50 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 py-1 px-4 focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full text-base">🔎 Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;