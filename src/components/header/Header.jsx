import { Link,useNavigate } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import { motion } from "framer-motion";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

function Header() {
  const navigate = useNavigate()

  const logout = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch((err) => alert(err.message));
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="sticky z-10 top-0 flex justify-between items-center md:px-10 px-2 py-2 bg-white border-b"
      >
        <h1 className="md:text-4xl text-2xl line-through font-bold text-blue-600 font-['forte'] ">
          <Link to="/">
            <img src="food-delivery logo.png" alt="" className="md:w-[8rem] w-[5rem]"/>
          </Link>
        </h1>

        <ul className="hidden md:flex items-center gap-16">
          <li>
            <Link
              to="/"
              className="text-2xl font-semibold hover:text-[red] pb-[2px] border-b-[2px] border-white text-black"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/review"
              className="text-2xl font-semibold hover:text-[red] pb-[2px] border-b-[2px] border-white text-black"
            >
              Review
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text-2xl font-semibold hover:text-[red] pb-[2px] border-b-[2px] border-white text-black"
            >
              Cart
            </Link>
          </li>
        </ul>
        <HamburgerMenu />
        <nav className="flex md:text-base text-sm items-center md:gap-6 gap-1">
          {auth.currentUser ? (
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-orange-500 text-white md:py-2 py-1 md:px-2 px-1 rounded hover:scale-105"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/signin"
                className="bg-red-500 hover:bg-orange-500 text-white md:py-2 py-1 md:px-2 px-1 rounded hover:scale-105"
              >
                Sign up
              </Link>
              <Link
                to="/login"
                className="bg-red-500 hover:bg-orange-500 text-white md:py-2 py-1 md:px-2 px-1 rounded hover:scale-105"
              >
                Login
              </Link>
            </>
          )}
        </nav>
      </motion.header>
    </>
  );
}

export default Header;
