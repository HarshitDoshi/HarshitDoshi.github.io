import { NavLink } from "react-router-dom";
import { FaHome, FaBlog, FaBriefcase, FaEnvelope } from "react-icons/fa";

const FooterTabs = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center">
      <NavLink exact to="/" activeClassName="bg-gray-200 dark:bg-gray-700 text-color-primary p-2 rounded-lg w-1/4 shadow-inner" className="w-1/4 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-2 mx-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-inner">
        <div className="flex flex-col justify-center items-center mx-2">
          <FaHome className="h-8 w-8" />
          <h3 className="text-sm">Home</h3>
        </div>
      </NavLink>
      <NavLink to="/blog" activeClassName="bg-gray-200 dark:bg-gray-700 text-color-primary p-2 rounded-lg w-1/4 shadow-inner" className="w-1/4 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-2 mx-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-inner">
        <div className="flex flex-col justify-center items-center mx-2">
          <FaBlog className="h-8 w-8" />
          <h3 className="text-sm">Blog</h3>
        </div>
      </NavLink>
      <NavLink to="/projects" activeClassName="bg-gray-200 dark:bg-gray-700 text-color-primary p-2 rounded-lg w-1/4 shadow-inner" className="w-1/4 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-2 mx-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-inner">
        <div className="flex flex-col justify-center items-center mx-2">
          <FaBriefcase className="h-8 w-8" />
          <h3 className="text-sm">Projects</h3>
        </div>
      </NavLink>
      <NavLink to="/contact" activeClassName="bg-gray-200 dark:bg-gray-700 text-color-primary p-2 rounded-lg w-1/4 shadow-inner" className="w-1/4 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-2 mx-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-inner">
        <div className="flex flex-col justify-center items-center mx-2">
          <FaEnvelope className="h-8 w-8" />
          <h3 className="text-sm">Contact</h3>
        </div>
      </NavLink>
    </div>
  )
}

export default FooterTabs