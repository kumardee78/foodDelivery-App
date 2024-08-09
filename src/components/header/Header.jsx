import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Header() {
  const [isLogedIn , setIsLogedIn] = useState(false);

  useEffect(() => {
    setIsLogedIn(localStorage.getItem('user'));
  },[isLogedIn]);


  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        data-aos="fade-down"
        className="sticky z-10 top-0 flex justify-between items-center md:px-16 px-2 py-6 bg-white"
      >
        <h1 className="md:text-4xl text-2xl line-through font-bold text-blue-600 font-['forte'] ">
          <Link to="/">
            <span className="font-bold text-red-600">Food</span>Cart
          </Link>
        </h1>

        <ul className="hidden md:flex items-center gap-4">
          <li>
            <Link
              to="/"
              className="text-[1.2rem] hover:text-[red] pb-[2px] border-b-[2px] border-white text-black"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/review"
              className="text-[1.2rem] hover:text-[red] pb-[2px] border-b-[2px] border-white text-black"
            >
              Review
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text-[1.2rem] hover:text-[red] pb-[2px] border-b-[2px] border-white text-black"
            >
              Cart
            </Link>
          </li>
        </ul>
        <HamburgerMenu />
        <ul className="flex md:text-base text-sm items-center md:gap-6 gap-1">
          <li className="hover:scale-105">
            <Link
              to="/signin"
              className="bg-red-500 hover:bg-orange-500 text-white md:py-2 py-1 md:px-2 px-1 rounded"
            >
              Sign up
            </Link>
          </li>
          <li className="hover:scale-105">
            <Link
              to={isLogedIn ? "/" : "/login"}
              
            >
              {isLogedIn ? <button className="bg-red-500 hover:bg-orange-500 text-white md:py-2 py-1 md:px-2 px-1 rounded" onClick={() => setIsLogedIn(localStorage.removeItem("user")  && false)}>Logout</button> : <button className="bg-red-500 hover:bg-orange-500 text-white md:py-2 py-1 md:px-2 px-1 rounded">Login</button>}
            </Link>
          </li>
        </ul>
      </motion.header>
    </>
  );
}

export default Header;
