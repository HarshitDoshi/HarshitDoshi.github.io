import { NavLink } from "react-router-dom";
import { GoHome, GoBook, GoBriefcase, GoMail } from "react-icons/go";

const FooterTabs = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center">
      <NavLink exact to="/" activeClassName="bg-gray-200 text-blue-600 p-2 rounded-lg" className="bg-gray-50 text-gray-800 dark:text-gray-100 p-2 rounded-lg">
        <div className="flex flex-col justify-center items-center mx-2">
          <GoHome className="h-8 w-8" />
          <h3 className="text-sm">Home</h3>
        </div>
      </NavLink>
      <NavLink to="/blog" activeClassName="bg-gray-200 text-blue-600 p-2 rounded-lg" className="bg-gray-50 text-gray-800 dark:text-gray-100 p-2 rounded-lg">
        <div className="flex flex-col justify-center items-center mx-2">
          <GoBook className="h-8 w-8" />
          <h3 className="text-sm">Blog</h3>
        </div>
      </NavLink>
      <NavLink to="/projects" activeClassName="bg-gray-200 text-blue-600 p-2 rounded-lg" className="bg-gray-50 text-gray-800 dark:text-gray-100 p-2 rounded-lg">
        <div className="flex flex-col justify-center items-center mx-2">
          <GoBriefcase className="h-8 w-8" />
          <h3 className="text-sm">Projects</h3>
        </div>
      </NavLink>
      <NavLink to="/contact" activeClassName="bg-gray-200 text-blue-600 p-2 rounded-lg" className="bg-gray-50 text-gray-800 dark:text-gray-100 p-2 rounded-lg">
        <div className="flex flex-col justify-center items-center mx-2">
          <GoMail className="h-8 w-8" />
          <h3 className="text-sm">Contact</h3>
        </div>
      </NavLink>
    </div>
  )
}

export default FooterTabs