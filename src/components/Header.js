import React from "react";

import { Link } from "gatsby";

const Header = () => {
  return (
    <nav id="navbar" className="bg-white shadow dark:bg-gray-800 sticky lg:top-0 xl:top-0 2xl:top-0 z-50 opacity-50 betterhover:hover:opacity-100 duration-200">
        <div className="container flex items-center justify-end p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <Link to={"/"} className="border-b-2 transition-colors duration-200 transform mx-1.5 sm:mx-6 border-transparent betterhover:hover:text-gray-800  dark:betterhover:hover:text-gray-200 betterhover:hover:border-blue-500" activeClassName="text-gray-800 dark:text-gray-200 border-blue-500">Home</Link>
            <Link to={"/projects/"} className="border-b-2 transition-colors duration-200 transform mx-1.5 sm:mx-6 border-transparent betterhover:hover:text-gray-800  dark:betterhover:hover:text-gray-200 betterhover:hover:border-blue-500" activeClassName="text-gray-800 dark:text-gray-200 border-blue-500">Projects</Link>
            <Link to={"/mentions/"} className="border-b-2 transition-colors duration-200 transform mx-1.5 sm:mx-6 border-transparent betterhover:hover:text-gray-800  dark:betterhover:hover:text-gray-200 betterhover:hover:border-blue-500" activeClassName="text-gray-800 dark:text-gray-200 border-blue-500">Media Mentions</Link>
            <Link to={"/blog/"} className="border-b-2 transition-colors duration-200 transform mx-1.5 sm:mx-6 border-transparent betterhover:hover:text-gray-800  dark:betterhover:hover:text-gray-200 betterhover:hover:border-blue-500" activeClassName="text-gray-800 dark:text-gray-200 border-blue-500">Blog</Link>
        </div>
    </nav>
  );
};

export default Header;
