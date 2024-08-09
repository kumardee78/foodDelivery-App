import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      toast.success(
        "Congratulations! You have successfully registered. Enjoy exploring our services."
      );
      setData({
        username: "",
        email: "",
        password: "",
      });
      console.log(userCredentials);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.warn("You're already registered");
      } else {
        toast.error(error.message);
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="md:flex items-center justify-around block gap-6 bg-orange-500 md:py-16 lg:px-28 md:px-12 px-6 "
    >
      <div data-aos="zoom-in" className="flex justify-center py-6 ">
        <FaArrowAltCircleLeft
          onClick={() => navigate("/")}
          className="text-5xl text-white"
        />
      </div>
      <div>
        <img
          src="425902f177e4186d5891593b9592fcf4.gif"
          alt=""
          className="lg:w-[35rem] md:w-[20rem] sm:w-[15rem] mx-auto rounded-xl"
          data-aos="zoom-in"
        />
      </div>
      <div className="py-6" data-aos="zoom-in">
        <div className="p-8 bg-white lg:w-[25rem] rounded-xl ">
          <h2 className="text-3xl font-bold">Register</h2>
          <form action="" className="pt-2" onSubmit={handleSubmit}>
            <p className="pb-2">
              <label htmlFor="">Name:</label>
              <br />
              <input
                type="text"
                name="username"
                value={data.name}
                onChange={handleChange}
                required
                className="border-2 mt-1 w-[100%] py-2 px-2"
              />
            </p>
            <p className="pb-2">
              <label htmlFor="">Email:</label>
              <br />
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
                className="border-2 mt-1 w-[100%] py-2 px-2"
              />
            </p>
            <p className="pb-2">
              <label htmlFor="">Password:</label>
              <br />
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
                className="border-2 mt-1 w-[100%] py-2 px-2"
              />
            </p>
            <p className="text-center py-2">
              <button
                type="submit"
                className="bg-blue-500 py-2 px-6 text-xl text-white font-semibold hover:scale-105"
              >
                Register
              </button>
            </p>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Signup;
