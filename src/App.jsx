import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Review from "./components/Review";
import Carts from "./components/Carts";
import CheckoutPage from "./components/CheckoutPage";
import Signin from "./components/Signup";
import Login from "./components/Login";
import Payment from "./components/Payment";
import { createContext, useEffect, useState } from "react";
import { food_list } from "./foodItems";
import { menu_list } from "./foodItems";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export const food_Delivery_contex = createContext(null);

function App() {
  const [foodList, setFoodList] = useState(food_list);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [addressForDelivery, setAddressForDelivery] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1400, // Animation duration
    });
  }, []);

  // let location = useLocation();
  useEffect(() => {
    AOS.refresh();
  }, []);

  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.price * item.quantity;
    });
    setTotal(sum);
  }, [cart]);

  function hanadleAddTocart(e, foodItem) {
    const newCart = [...cart, foodItem];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.success("Add item successfully");
  }

  function addQuantity(index) {
    let temp = [...foodList];
    temp[index - 1].quantity += 1;
    setFoodList(temp);
  }

  function removeQuantity(index) {
    if (foodList[index - 1].quantity > 1) {
      let temp = [...foodList];
      temp[index - 1].quantity -= 1;
      setFoodList(temp);
    }
  }

  useEffect(() => {
    setFoodList(food_list);
  }, []);

  console.log(addressForDelivery);

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} theme="dark" />
      <BrowserRouter>
        <food_Delivery_contex.Provider
          value={{
            food_list,
            menu_list,
            cart,
            setCart,
            hanadleAddTocart,
            foodList,
            setFoodList,
            total,
            setTotal,
            addQuantity,
            removeQuantity,
            addressForDelivery,
            setAddressForDelivery,
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/review" element={<Review />} />
            <Route path="/cart" element={<Carts />} />
            <Route path="/checkoutpage" element={<CheckoutPage />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </food_Delivery_contex.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
