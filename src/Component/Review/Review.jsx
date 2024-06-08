import React from "react";
import useReview from "../Hooks/useReview";

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
      <div className="flex justify-center items-center">
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
      <div className="max-w-6xl mx-auto">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div>
                <img
                  className="w-48 h-[200px]"
                  src={review.coupleImage}
                  alt=""
                />
                <p>{review.marriageDate}</p>
                <p>{review.successStory}</p>
                <div className="rating">
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
