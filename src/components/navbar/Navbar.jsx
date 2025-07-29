import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  GraduationCap,
  BookOpenText,
  Route,
  MessageCircleMore,
  LogIn,
  User,
  Shield,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY) {
      setShowNavbar(true); // scrolling up
    } else {
      setShowNavbar(false); // scrolling down
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="w-full">
      <nav
        className={`h-[60px] px-6 md:px-10 flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-transform duration-700
    ${showNavbar ? "translate-y-0" : "-translate-y-full"}
    bg-sky-800/30 text-orange-400 backdrop-blur-md shadow-md border-b border-orange-200/20`}
      >
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-wide flex items-center gap-2 ">
          {/* <GraduationCap className="w-7 h-7 text-white" /> */}
          <NavLink
            to="/"
            className="hover:scale-105 transition-transform duration-300"
          >
            JavaBuddy
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 font-semibold items-center">
          <li className="flex items-center gap-1 hover:scale-110 hover:text-yellow-300 transition duration-300">
            <BookOpenText className="w-5 h-5" />
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="flex items-center gap-1 hover:scale-110 hover:text-yellow-300 transition duration-300">
            <Route className="w-5 h-5" />
            <NavLink to="/roadmap">Roadmap</NavLink>
          </li>
          <li className="flex items-center gap-1 hover:scale-110 hover:text-yellow-300 transition duration-300">
            <MessageCircleMore className="w-5 h-5" />
            <NavLink to="/contact">Contact</NavLink>
          </li>

          {/* Dropdown for Admin/User */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 hover:scale-110 hover:text-yellow-300 transition duration-300"
            >
              <LogIn className="w-5 h-5" />
              <span>Login</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                <NavLink
                  to="/user/signin"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-700"
                  onClick={() => setDropdownOpen(false)}
                >
                  <User className="w-4 h-4 mr-2" />
                  User Login
                </NavLink>
                <NavLink
                  to="/admin/signin"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-700"
                  onClick={() => setDropdownOpen(false)}
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Admin Login
                </NavLink>
              </div>
            )}
          </li>
        </ul>

        {/* Hamburger icon for mobile */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-sky-700 text-orange-700 px-6 py-4 space-y-4 shadow-md">
          <NavLink
            to="/about"
            className="block text-gray-700 font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/roadmap"
            className="block text-gray-700 font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Roadmap
          </NavLink>
          <NavLink
            to="/contact"
            className="block text-gray-700 font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
          <div className="border-t pt-3">
            <NavLink
              to="/user/signin"
              className="block text-gray-700 font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              User Login
            </NavLink>
            <NavLink
              to="/admin/signin"
              className="block text-gray-700 font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Admin Login
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
