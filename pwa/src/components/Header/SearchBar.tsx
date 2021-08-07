import { useState } from "react";
import { VscSearch } from "react-icons/vsc";

interface SearchBarProps {
  searchBarState: boolean;
  searchBarStateController: Function;
  searchAction: Function;
  searchPlaceHolder: string;
}

const SearchBar = (props: SearchBarProps) => {
  const { searchBarState, searchAction, searchBarStateController, searchPlaceHolder } = props;
  console.log(searchBarState);
  const [searchPhrase, setSearchPhrase] = useState({ query: '' });

  const handleSearchInputOnClick = (e: React.MouseEvent<HTMLInputElement> | React.KeyboardEvent<HTMLButtonElement>) => {
    searchBarStateController(true);
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let event = e.target as HTMLInputElement;
    const name = event.name;
    const value = event.value;
    setSearchPhrase({ ...searchPhrase, [name]: value });
  }
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (searchPhrase.query) {
      searchAction();
    }
  };
  return (
    <div className={"h-full flex flex-row justify-end justify-items-stretch justify-self-stretch items-stretch"}>
      <input onChange={handleChange} onClick={handleSearchInputOnClick} value={searchPhrase.query} type="text" name="search_phrase" id="search_phrase" autoComplete="search_phrase" placeholder={searchPlaceHolder} className="w-11/12 mx-2 shadow-lg hover:shadow-lg focus:shadow-lg items-center text-material-grey-9 dark:text-material-grey-0 bg-material-grey-0 dark:bg-material-grey-9 py-2 px-2 border-2 border-material-grey-2 dark:border-material-grey-7 hover:bg-material-grey-0 dark:hover:bg-material-grey-8 focus:bg-material-grey-0 hover:border-blue-300 focus:border-blue-600 dark:focus:bg-material-grey-8 hover:text-material-grey-9 dark:hover:text-material-grey-0 dark:focus:border-material-grey-7 focus:outline-none rounded-lg text-base font-mono"></input>
      <button onClick={handleSubmit} aria-label="Search" className="mx-0 shadow-lg hover:shadow-lg flex flex-row justify-center items-center text-material-grey-9 dark:text-material-grey-0 bg-material-grey-0 dark:bg-material-grey-9 border-2 border-material-grey-2 dark:border-material-grey-7 py-2 px-2 focus:outline-none hover:border-blue-300 focus:border-blue-600 hover:bg-material-grey-0 dark:hover:bg-material-grey-8 rounded-lg text-base">
        <div className="flex flex-row justify-center items-baseline align-baseline">
          <VscSearch className="h-6 w-6 mx-1" />
        </div>
      </button>
    </div>
  )
}

export default SearchBar
