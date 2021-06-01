import { useState } from 'react';
import { Link } from "react-router-dom";
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
    <header className="text-green-600 body-font shadow-lg border-b-2 border-gray-800 bg-gray-900">
      <div className="flex flex-wrap px-4 flex-row md:flex-row items-center justify-between">
        <div className="flex flex-wrap flex-row md:flex-row items-center justify-between">
          <a href="google.com" className="flex title-font font-medium items-center text-gray-200">
            <img src={logo} className="object-contain w-24 filter invert" alt="A logo for Harshit Doshi with the digits 0 and 1 seperated from the letters H, P and D using a vertical black bar."></img>
          </a>
          <nav class="md:mx-4 flex flex-wrap items-center text-base justify-center">
            <Link to="/"><div class="mx-2 hover:text-gray-400">Home</div></Link>
            <Link to="/blog"><a class="mx-2 hover:text-gray-400">Blog</a></Link>
            <Link to="/about"><a class="mx-2 hover:text-gray-400">About</a></Link>
            <Link to="/contact"><a class="mx-2 hover:text-gray-400">Contact</a></Link>
          </nav>
        </div>
        <div className="flex flex-row justify-center items-center">
          <input onChange={handleChange} value={searchPhrase.search_phrase} type="text" name="search_phrase" id="search_phrase" autoComplete="search_phrase" placeholder="Enter keyword..." className="mx-2 shadow items-center text-gray-100 bg-gray-900 py-1 px-2 border border-blue-600 hover:bg-gray-900 focus:bg-gray-900 hover:text-gray-200 rounded text-base font-mono"></input>
          <button onClick={handleSubmit} className="shadow flex flex-row items-center text-white bg-blue-600 border border-blue-600 py-1 px-4 focus:outline-none hover:bg-blue-800 rounded text-base">Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;