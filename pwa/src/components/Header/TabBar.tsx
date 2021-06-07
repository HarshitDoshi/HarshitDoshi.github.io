import { NavLink } from "react-router-dom";

interface TabBarProps {
  navigationMenuState: boolean;
}

const TabBar = (props: TabBarProps) => {
  const { navigationMenuState } = props;
  return (
    <nav className={"md:mx-4 my-2 md:my-0 grid grid-cols-2 gap-y-4 gap-x-1 md:flex md:flex-row items-start md:items-center text-base justify-start md:justify-center w-2/3" + (navigationMenuState ? "md:flex" : " hidden")}>
      <NavLink exact to="/" activeClassName="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 px-2 py-1 rounded-full border border-gray-200 dark:border-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50 shadow-lg" className="hover:shadow-lg px-2 py-1 mx-2 border border-gray-50 dark:border-gray-900 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border hover:border-gray-200 dark:hover:border-gray-900 rounded-full font-bold">🏡 Home</NavLink>
      <NavLink to="/blog" activeClassName="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 px-2 py-1 rounded-full border border-gray-200 dark:border-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50 shadow-lg" className="hover:shadow-lg px-2 py-1 mx-2 border border-gray-50 dark:border-gray-900 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border hover:border-gray-200 dark:hover:border-gray-900 rounded-full font-bold">🧠 Blog</NavLink>
      <NavLink to="/projects" activeClassName="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 px-2 py-1 rounded-full border border-gray-200 dark:border-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50 shadow-lg" className="hover:shadow-lg px-2 py-1 mx-2 border border-gray-50 dark:border-gray-900 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border hover:border-gray-200 dark:hover:border-gray-900 rounded-full font-bold">💼 Projects</NavLink>
      <NavLink to="/contact" activeClassName="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 px-2 py-1 rounded-full border border-gray-200 dark:border-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50 shadow-lg" className="hover:shadow-lg px-2 py-1 mx-2 border border-gray-50 dark:border-gray-900 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border hover:border-gray-200 dark:hover:border-gray-900 rounded-full font-bold">📧 Contact</NavLink>
    </nav>
  )
}

export default TabBar;
