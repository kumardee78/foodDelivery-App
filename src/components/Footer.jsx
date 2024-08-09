import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className=" bg-black">
        <div className="lg:px-12 px-8 py-6 text-white md:flex justify-between">
          <div className="flex justify-between md:w-[60%]">
            <ul className="text-sm">
              <li className="text-lg">Company</li>
              <li className="pt-2 cursor-pointer text-[whiteSmoke]">About</li>
              <li className="pt-2 cursor-pointer text-[whiteSmoke]">Team</li>
              <li className="pt-2 cursor-pointer text-[whiteSmoke]">Careers</li>
              <li className="pt-2 cursor-pointer text-[whiteSmoke]">Blog</li>
            </ul>
            <ul className="text-sm">
              <li className="text-lg">Legal</li>
              <li className="pt-2 cursor-pointer text-[whiteSmoke]">Terms & Conditons</li>
              <li className="pt-2 cursor-pointer text-[whiteSmoke]">Refund & Cancellation</li>
              <li className="pt-2 cursor-pointer text-[whiteSmoke]">Privacy Policy</li>
              <li className="pt-2 cursor-pointer text-[whiteSmoke]">Cookies Policy</li>
            </ul>
          </div>
          <div className="md:pt-0 pt-4">
            <p className="text-lg">Follow us</p>
            <ul className="flex md:justify-between text-xl gap-6 items-center py-3">
              <li className="hover:text-[#273f43] duration-3000 ">
                <FaFacebook />
              </li>
              <li className="hover:text-[#273f43] duration-3000 ">
                <FaInstagram />
              </li>
              <li className="hover:text-[#273f43] duration-3000 ">
                <FaXTwitter />
              </li>
            </ul>
          </div>
        </div>
        <div className="text-white">
          <hr />
          <p className="text-center py-4 font-semibold">
            All rights reserved &copy; FoodCart
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
