import { useState } from 'react';
import SearchBar from '../Header/SearchBar';

type DrawerProps = {
  drawerState: boolean;
}

const Drawer = (props: DrawerProps) => {
  const { drawerState } = props;
  const [searchBarState, setSearchBarState] = useState(false);
  return (
    <>
      <div className={!drawerState ? `hidden` : `fixed left-0 z-40 min-h-screen w-10/12 lg:w-1/12 shadow-lg dark:shadow-lg text-material-grey-9 dark:text-material-grey-5 border-r-2 border-material-grey-1 dark:border-material-grey-5 bg-material-grey-0 dark:bg-material-grey-9`}>
        <div className="pt-16 lg:pt-16">
          <div className="mx-2 lg:hidden flex flex-col justify-center items-center align-middle">
            <SearchBar searchBarState={searchBarState} searchBarStateController={setSearchBarState} searchAction={() => { console.log("Search Action Executed...") }} searchPlaceHolder="Search..." />
          </div>
        </div>
      </div>
    </>
  )
}

export default Drawer;
