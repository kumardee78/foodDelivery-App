import React, { useContext, useEffect, useState } from "react";
import { food_Delivery_contex } from "../App";
import { useNavigate } from "react-router-dom";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { motion } from "framer-motion";
import { auth } from "../firebase";
import { toast } from "react-toastify";

function Carts() {
  const { cart, setCart, total } = useContext(food_Delivery_contex);

  const initialCart = [];
  const navigate = useNavigate();

  function removeFromCart(e, index) {
    const newCart = cart.filter((item) => {
      return item._id !== index;
    });
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.success("Remove item successfully");
  }

  function ResetCart() {
    setCart(initialCart);
    localStorage.setItem("cart", JSON.stringify(initialCart));
    toast.success("All items Removed successfully")
  }

  function handlePayment(){
    if(auth.currentUser)(
      navigate("/checkoutpage")
    )
    else{
      toast.warn("Please Sign up / log in to proceed to checkout.")
    }
  }

  useEffect(() => {
    if (cart.length > 0) localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const storeCartItem = JSON.parse(localStorage.getItem("cart"));
    if (storeCartItem) setCart(storeCartItem);
  }, []);

  return (
    <div className="pt-6 pb-20">
      {cart.length > 0 ? (
        <>
          <div className="bg-red-500 rounded-lg md:w-[40rem] w-[18rem] mx-auto text-center md:px-6 px-3 md:py-8 py-3">
            {cart.map((cartItem) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="my-6 px-2 py-2 bg-white rounded-md relative"
                  key={cartItem._id}
                > 
                  <p className="md:text-3xl font-bold font-[forte] text-red-600 absolute md:right-6 right-2 md:top-6">{cartItem.quantity}X</p>
                  <div className=" flex items-center md:py-4 md:px-6">
                    <div>
                      <img
                        src={cartItem.image}
                        alt=""
                        className="md:w-[10rem] w-[6rem] rounded-[100%]"
                      />
                    </div>
                    <div className="text-start font-[600] md:ml-10 ml-6">
                      <p className="font-semibold md:text-xl text-base pb-2">
                        {cartItem.name}
                      </p>
                      <p className="flex items-center gap-1 text-gray-500">
                        <CiDeliveryTruck />
                        <span>Free Delivery</span>
                      </p>
                      <p className="flex items-center gap-1 text-gray-500">
                        <IoIosTimer />
                        <span>15-30 mins</span>
                      </p>
                      <p className="flex items-center font-bold pt-2">
                        <FaIndianRupeeSign className="text-sm" />
                        {cartItem.price}
                      </p>
                    </div>
                    <MdDeleteForever
                      className="text-4xl absolute right-0 md:right-6 bottom-3 text-blue-500"
                      onClick={(e) => {
                        removeFromCart(e, cartItem._id);
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="md:flex justify-between block text-center"
            >
              <p className="">
                <p className="text-white font-bold text-xl mb-2">
                  Note To Chief:
                </p>
                <textarea
                  name=""
                  id=""
                  cols="32"
                  rows="5"
                  className="rounded-md pl-2"
                  placeholder="Any special requests for our chief?"
                ></textarea>
              </p>
              <p className="">
                <p className="text-white font-bold text-xl mb-2">
                  Note To Delivery Team:
                </p>
                <textarea
                  name=""
                  id=""
                  cols="32"
                  rows="5"
                  className="rounded-md pl-2"
                  placeholder="Any special instructions for the delivery team? "
                ></textarea>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="flex items-center bg-white mx-2 md:mx-0 px-6 py-2 rounded-md md:mt-6 mt-3"
            >
              <img src="download.gif" alt="" />
              <h2 className="text-2xl font-bold flex">
                <span>Total:</span>
                <span className=" flex items-center pl-2">
                  <FaIndianRupeeSign />
                  <span>{total}</span>
                </span>
              </h2>
            </motion.div>
          </div>
          <div className="flex justify-evenly md:mt-12 mt-4">
            <button
              className=" border-2 border-red-500 px-4 py-2 text-xl rounded-md"
              onClick={ResetCart}
            >
              Reset
            </button>
            <button
              className="bg-red-500 text-white text-xl px-2 rounded-md"
              onClick={() => handlePayment()}
            >
              Proceed To Payment
            </button>
          </div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="bg-red-500 rounded-lg md:w-[25rem] w-[18rem] mx-auto text-center px-6 py-8">
            <h3 className="text-2xl font-semibold text-white pb-6">
              Your Cart Is Empty
            </h3>
            <div className="w-[98%] md:h-[23rem] h-[18rem] mx-auto bg-white flex items-center justify-center">
              <img src="image_processing20201106-11709-18misc6.gif" alt="" />
            </div>
          </div>
          <p className="text-center mt-6">
            <button
              className="bg-red-500 rounded py-2 px-4 text-white"
              onClick={() => navigate("/")}
            >
              Go To Home
            </button>
          </p>
        </motion.div>
      )}
      ;
    </div>
  );
}

export default Carts;
