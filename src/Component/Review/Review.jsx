import React from "react";
import useReview from "../Hooks/useReview";
import { GoDotFill } from "react-icons/go";

import Lottie from "lottie-react";
import underSesign from "../../../src/Animation - 1717833435833.json";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Review = () => {
  const [reviews] = useReview();
  return (
    <div>
      <div className="flex justify-center items-center mt-20 mb-8">
        <Lottie
          className="mr-5 h-24 font-extrabold"
          animationData={underSesign}
        ></Lottie>
        <h1 className="text-3xl font-semibold text-center">
          Our Valuable Client review
        </h1>
        <Lottie
          className="mr-5 h-24 font-extrabold"
          animationData={underSesign}
        ></Lottie>
      </div>
      <div className="max-w-6xl mx-auto bg-pink-100 p-8 relative mb-28">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div>
                <div className="flex justify-center">
                  <img
                    className="w-40 h-[150px] rounded-full"
                    src={review.coupleImage}
                    alt=""
                  />
                </div>
                <h1 className="text-center text-3xl font-semibold mt-3">
                  James Borrison
                </h1>

                <h1 className="text-center text-xl font-medium mt-2 opacity-60">
                  Gulshan,Dhaka
                </h1>
                <p className="text-center  text-xl font-medium mt-2">
                  {review.marriageDate}
                </p>
                <div className="rating flex justify-center mt-3">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <div className="flex justify-center">
                  <p className="text-center text-black mt-3 w-[350px]">
                    {review.successStory}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="ml-20 text-2xl absolute">
          <GoDotFill />
        </div> */}
      </div>
    </div>
  );
};

export default Review;
