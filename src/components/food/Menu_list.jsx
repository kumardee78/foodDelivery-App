import React, { useContext, useRef } from "react";
import Food_Display from "./Food_Display";
import "../../style.css";
import { food_Delivery_contex } from "../../App";
import { FaSearch } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

function Menu_list({ category, setCategory }) {
  const { menu_list, food_list, foodList, setFoodList } =
    useContext(food_Delivery_contex);

  function filterFood(e) {
    const val = food_list.filter((item) => {
      if (
        item.name.toLowerCase().includes(e) ||
        item.category.toLowerCase().includes(e)
      ) {
        return true;
      } else return false;
    });
    setFoodList(val);
  }
  const scrollContainerRef = useRef(null);
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  return (
    <div className="py-6 md:px-16 px-6">
      <h1 className="text-2xl font-bold">What would you like to order</h1>
      <div className="flex items-center gap-2 py-4">
        <FaSearch />
        <input
          type="text"
          placeholder="find for Food"
          className="border w-[85%] px-2 md:py-4 py-3"
          // value={inputValue}
          onChange={(e) => filterFood(e.target.value)}
        />
      </div>
      <div
        data-aos="fade-up "
        className="flex items-center justify-center sm:w-[70%] md:w-[60%] w-full mx-auto"
      >
        <FaChevronCircleLeft
          onClick={scrollLeft}
          className=" text-3xl top-12 lg:left-36 md:left-24 left-8 mx-4"
        />
        <div className="menu_list py-6" ref={scrollContainerRef}>
          {menu_list.map((item, index) => {
            return (
              <div
                key={index}
                className="text-center mx-2"
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
              >
                <img
                  src={item.menu_image}
                  alt=""
                  className="cursor-pointer image"
                />
                <p className="">{item.menu_name}</p>
              </div>
            );
          })}
        </div>
        <FaChevronCircleRight
          onClick={scrollRight}
          className=" text-3xl top-12 lg:right-36 md:right-24 right-8 mx-4"
        />
      </div>

      <hr className="my-4 border border-black" id="popularFood" />
      <Food_Display
        category={category}
        setCategory={setCategory}
        foodList={foodList}
        setFoodList={setFoodList}
      />
    </div>
  );
}

export default Menu_list;
