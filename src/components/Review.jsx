import React, { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 1,
    comment: "",
  });
  const rating = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: "", rating: 1, comment: "" });
  };

  return (
    <div className="text-center py-8">
      <h2 data-aos="zoom-in" className="text-center text-2xl font-bold">
        Reviews
      </h2>
      <form data-aos="zoom-in" onSubmit={handleSubmit} className="my-4">
        <div className="py-6">
          <input
            type="text"
            name="name"
            value={newReview.name}
            onChange={handleInputChange}
            placeholder="Your name"
            required
            className="border py-1 px-2 md:w-[15rem] w-[12rem]"
          />
          <select
            name="rating"
            value={newReview.rating}
            onChange={handleInputChange}
            className="border md:mx-6 ml-2 py-1"
          >
            {rating.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div>
          <textarea
            id=""
            cols="30"
            rows="3"
            name="comment"
            value={newReview.comment}
            onChange={handleInputChange}
            placeholder="Your review"
            required
            className="border px-4 md:w-[25rem] w-[15rem]"
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-xl bg-blue-400 py-2 px-6 rounded-md text-white"
        >
          Add
        </button>
      </form>

      <div className="py-6">
        {reviews.map((review, index) => (
          <>
            <div
              data-aos="fade-down"
              key={index}
              className=" md:w-1/2 w-[95%] py-2 border mx-auto inset shadow-lg rounded-md my-4"
            >
              <div className="flex items-center gap-2">
                <IoPersonCircle className="text-6xl w-[20%]" />
                <p className="text-start flex justify-between w-[80%] ">
                  <h3 className="text-xl font-bold">{review.name}</h3>
                  <p className="flex items-center mr-8">
                    {review.rating}
                    <FaStar className="inline text-yellow-500 ml-1" />
                  </p>
                </p>
              </div>
              <p className="text-start w-[80%] mx-auto mb-2 text-xl font-semibold">
                {review.comment}
              </p>
              <hr className="" />
            </div>
          </>
        ))}
      </div>
      <div >
        <div
          className=" md:w-1/2 w-[95%] py-2 border mx-auto inset shadow-lg rounded-md my-4"
        >
          <div className="flex items-center gap-2">
            <IoPersonCircle className="text-6xl w-[20%]" />
            <p className="text-start flex justify-between w-[80%] ">
              <h3 className="text-xl font-bold">Kushal</h3>
              <p className="flex items-center mr-8">
                4.5
                <FaStar className="inline text-yellow-500 ml-1" />
              </p>
            </p>
          </div>
          <p className="text-start w-[80%] mx-auto mb-2 text-xl font-semibold">Good!</p>
          <hr className="" />
        </div>
        <div
          className=" md:w-1/2 w-[95%] py-2 border mx-auto inset shadow-lg rounded-md my-4"
        >
          <div className="flex items-center gap-2">
            <IoPersonCircle className="text-6xl w-[20%]" />
            <p className="text-start flex justify-between w-[80%] ">
              <h3 className="text-xl font-bold">Kushal</h3>
              <p className="flex items-center mr-8">
                3.8
                <FaStar className="inline text-yellow-500 ml-1" />
              </p>
            </p>
          </div>
          <p className="text-start w-[80%] mx-auto mb-2 text-xl font-semibold">normal, not bad not good  </p>
          <hr className="" />
        </div>
        <div
          className=" md:w-1/2 w-[95%] py-2 border mx-auto inset shadow-lg rounded-md my-4"
        >
          <div className="flex items-center gap-2">
            <IoPersonCircle className="text-6xl w-[20%]" />
            <p className="text-start flex justify-between w-[80%] ">
              <h3 className="text-xl font-bold">Kushal</h3>
              <p className="flex items-center mr-8">
                4.5
                <FaStar className="inline text-yellow-500 ml-1" />
              </p>
            </p>
          </div>
          <p className="text-start w-[80%] mx-auto mb-2 text-xl font-semibold"></p>
          <hr className="" />
        </div>
        <div
          className=" md:w-1/2 w-[95%] py-2 border mx-auto inset shadow-lg rounded-md my-4"
        >
          <div className="flex items-center gap-2">
            <IoPersonCircle className="text-6xl w-[20%]" />
            <p className="text-start flex justify-between w-[80%] ">
              <h3 className="text-xl font-bold">Kushal</h3>
              <p className="flex items-center mr-8">
                2
                <FaStar className="inline text-yellow-500 ml-1" />
              </p>
            </p>
          </div>
          <p className="text-start w-[80%] mx-auto mb-2 text-xl font-semibold"> very bad it is worst from all the food that i have tasted </p>
          <hr className="" />
        </div>
      </div>
    </div>
  );
};

export default Review;
