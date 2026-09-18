import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="shadow sticky z-50 top-0 backdrop-blur-2xl">
            <nav className="bg-[#0F172A] border-gray-700 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center text-3xl font-bold text-white"
                    >
                        🎓 爪
                    </Link>

                

                 
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                            {/* Home */}
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive
                                                ? "text-orange-500"
                                                : "text-gray-200"
                                        } border-b border-gray-700 hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                                   }
                                >
                                    Home
                                </NavLink>
                            </li>

                            {/* About */}
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                   isActive
                                            ? "text-orange-500"
                                                : "text-gray-200"
                                        } border-b border-gray-700 hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                            {/* Contact */}
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                     `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive
                                                ? "text-orange-500"
                              : "text-gray-200"
                                        } border-b border-gray-700 hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>

                            {/* Resume */}
                            <li>
                                <NavLink
                            to="/resume"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                  isActive
                                                ? "text-orange-500"
                                                : "text-gray-200"
                             } border-b border-gray-700 hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                                    }
                                >
                                    Resume
                                </NavLink>
                            </li>

                            {/* Skills */}
                <li>
                     <NavLink
                         to="/skills"
                                    className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${
                                     isActive
                                                ? "text-orange-500"
                                         : "text-gray-200"
                                        } border-b border-gray-700 hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                                 }
                                >
                                    Skills
                                </NavLink>
                 </li>

                           
                     

            </ul>
         </div>
         </div>
            </nav>
        </header>
    );
}

export default Header;