import React, { useState } from 'react';
import { GoSearch } from "react-icons/go";

interface SearchBarProps {
  searchBarState: boolean;
}

const SearchBar = (props: SearchBarProps) => {
  const { searchBarState } = props;
  const [searchPhrase, setSearchPhrase] = useState({ search_phrase: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let event = e.target as HTMLInputElement;
    const name = event.name;
    const value = event.value;
    setSearchPhrase({ ...searchPhrase, [name]: value });
  }
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (searchPhrase.search_phrase) {
      setSearchPhrase({ search_phrase: '' });
    }
  };
  return (
    <div className={"w-full flex flex-row justify-center items-center mt-2" + (searchBarState ? "" : " hidden")}>
      <input onChange={handleChange} value={searchPhrase.search_phrase} type="text" name="search_phrase" id="search_phrase" autoComplete="search_phrase" placeholder="Enter keyword..." className="w-10/12 mx-2 hover:shadow-lg focus:shadow-lg items-center text-gray-900 dark:text-gray-50 bg-gray-50 dark:bg-gray-900 py-1 px-2 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 focus:bg-gray-50 dark:focus:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50 focus:border-gray-200 dark:focus:border-gray-700 focus:outline-none rounded-full text-base font-mono"></input>
      <button onClick={handleSubmit} className="w-2/12 mx-2 hover:shadow-lg flex flex-row justify-center items-center text-gray-900 dark:text-gray-50 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 py-2 px-2 focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full text-base"><GoSearch className="h-4 w-4" /></button>
    </div>
  )
}

export default SearchBar
