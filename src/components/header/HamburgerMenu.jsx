import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineReviews } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function HamburgerMenu({ menu, setMenu }) {
  return (
    <>
      <ul className="flex md:hidden items-center md:gap-4 gap-2">
        <li>
          <Link to="/">
            <IoHomeSharp />
          </Link>
        </li>
        <li>
          <Link to="/review">
            <MdOutlineReviews />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <FaCartShopping />
          </Link>
        </li>
      </ul>
    </>
  );
}

export default HamburgerMenu;
