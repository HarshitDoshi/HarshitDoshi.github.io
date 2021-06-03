import { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logos/Logo_Horizontal.svg";

const Header = () => {
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
    <header className="text-gray-900 dark:text-gray-50 body-font shadow-lg border-b-2 border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 dark:shadow-none">
      <div className="flex flex-wrap px-4 py-2 flex-row md:flex-row items-center justify-between">
        <div className="flex flex-wrap flex-row md:flex-row items-center justify-between">
          <Link exact to="/" className="flex title-font font-black text-2xl font-mono items-center text-gray-900 dark:text-gray-50 p-2 border-2 border-gray-100 dark:border-gray-800 rounded-md shadow">
            Harshit Doshi
          </Link>
          <nav class="md:mx-4 flex flex-wrap items-center text-base justify-center">
            <NavLink exact to="/" activeClassName="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 px-2 py-1 rounded-full border border-gray-200 dark:border-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50 shadow-lg" className="hover:shadow-lg px-2 py-1 mx-2 border border-gray-50 dark:border-gray-900 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border hover:border-gray-200 dark:hover:border-gray-900 rounded-full font-bold">🏡 Home</NavLink>
            <NavLink to="/blog" activeClassName="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 px-2 py-1 rounded-full border border-gray-200 dark:border-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50 shadow-lg" className="hover:shadow-lg px-2 py-1 mx-2 border border-gray-50 dark:border-gray-900 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border hover:border-gray-200 dark:hover:border-gray-900 rounded-full font-bold">🧠 Blog</NavLink>
            <NavLink to="/about" activeClassName="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 px-2 py-1 rounded-full border border-gray-200 dark:border-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50 shadow-lg" className="hover:shadow-lg px-2 py-1 mx-2 border border-gray-50 dark:border-gray-900 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border hover:border-gray-200 dark:hover:border-gray-900 rounded-full font-bold">👨🏻‍💻 About</NavLink>
            <NavLink to="/contact" activeClassName="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 px-2 py-1 rounded-full border border-gray-200 dark:border-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50 shadow-lg" className="hover:shadow-lg px-2 py-1 mx-2 border border-gray-50 dark:border-gray-900 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border hover:border-gray-200 dark:hover:border-gray-900 rounded-full font-bold">📧 Contact</NavLink>
          </nav>
        </div>
        <div className="flex flex-row justify-center items-center">
          <input onChange={handleChange} value={searchPhrase.search_phrase} type="text" name="search_phrase" id="search_phrase" autoComplete="search_phrase" placeholder="Enter keyword..." className="mx-2 hover:shadow-lg focus:shadow-lg items-center text-gray-900 dark:text-gray-50 bg-gray-50 dark:bg-gray-900 py-1 px-2 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 focus:bg-gray-50 dark:focus:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50 focus:border-gray-200 dark:focus:border-gray-700 focus:outline-none rounded-full text-base font-mono"></input>
          <button onClick={handleSubmit} className="hover:shadow-lg flex flex-row items-center text-gray-900 dark:text-gray-50 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 py-1 px-4 focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full text-base">🔎 Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;