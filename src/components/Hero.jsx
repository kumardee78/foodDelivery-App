import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <motion.div
        data-aos="fade-down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:flex items-center block bg-red-500 my-4 py-12 lg:py-24 lg:my-20 my-10 md:mx-10 lg:mx-12 xl:mx-16 mx-6 md:px-8 xl:px-20 rounded-xl"
      >
        <div className="md:grow md:px-0 lg:pl-10 px-6 ">
          <h1 className="lg:text-5xl xl:text-7xl  sm:text-4xl text-2xl font-bold text-white font-['Mv_Boli'] ">
            Are You Starving?
          </h1>
          <p className="text-white md:text-lg text-sm py-4 lg:py-6">
            Within a few clicks, find meals that are accessible near you
          </p>
          <a href="#popularFood" className="duation-200">
            <button className="bg-white text-sm sm:text-base border text-red-500 md:py-2 xl:py-3 py-1 md:px-4 px-2 hover:scale-105 hover:bg-transparent hover:text-white hover:border xl:mt-8">
              View Menu
            </button>
          </a>
        </div>
        <div data-aos= "zoom-in" className="border rounded-lg xl:w-[20rem] lg:w-[18rem] md:w-[15rem] w-[230px] mx-auto md:mt-0 mt-8">
          <video autoplay="autoplay" loop="loop" className="w-full">
            <source src="Preparing_Order_2.mp4" type="video/mp4 " />
          </video>
        </div>
      </motion.div>
    </>
  );
}
export default Hero;
