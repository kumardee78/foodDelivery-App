import { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const loggedInUser = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if (loggedInUser) {
        localStorage.setItem("user", loggedInUser)
        toast.success("Successfully Logedin");
      }
      navigate("/");
    } catch (error) {
      toast.error(`${error.message}`);
    }
    setData({ email: "", password: "" });
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="md:flex items-center justify-around block gap-6 bg-orange-500 md:py-16 lg:px-28 md:px-12 px-6 "
    >
      <div className="flex justify-center py-6" data-aos="fade-down">
        <FaArrowAltCircleLeft
          onClick={() => navigate("/")}
          className="text-5xl text-white"
        />
      </div>
      <div data-aos="fade-down">
        <img
          src="image_processing20191001-28305-gdm0ip.gif"
          alt=""
          className="lg:w-[35rem] md:w-[20rem] sm:w-[15rem] mx-auto rounded-xl"
        />
      </div>
      <div className="py-6" data-aos="fade-down">
        <div className="p-8 bg-white lg:w-[25rem] rounded-xl ">
          <h2 className="text-3xl font-bold">Login</h2>
          <form action="" className="pt-4" onSubmit={handleSubmit}>
            <p className="pb-2">
              <label htmlFor="">Email:</label>
              <br />
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
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
                className="border-2 mt-1 w-[100%] py-2 px-2"
              />
            </p>
            <p className="text-center py-2">
              <button
                type="submit"
                className="bg-blue-500 py-2 px-6 text-xl text-white font-semibold hover:scale-105"
              >
                Login
              </button>
            </p>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Login;
