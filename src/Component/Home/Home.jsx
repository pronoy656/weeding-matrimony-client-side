import PremiumMember from "../PremiumMember/PremiumMember";
import Review from "../Review/Review";
import WorkSection from "../WorkSection/WorkSection";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import SuccessCounter from "../SuccessCounter/SuccessCounter";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto mt-9">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[500px] rounded-3xl"
              src="https://i.ibb.co/zn1rHQh/man-putting-ring-finger-woman.jpg"
              alt=""
            />
            <div className="absolute left-14 md:left-96 top-32 ">
              <div className="text-center">
                <h1 className="text-5xl font-bold">
                  Find <span className="text-pink-500">Your</span> Best
                </h1>
                <h1 className="text-5xl font-bold mt-3 text-pink-500">
                  Matching Soulmates
                </h1>
              </div>
              <div className="flex justify-center mt-5">
                <div className="form-control w-[300px]">
                  <input
                    type="text"
                    name="name"
                    placeholder="Search your Soulmates"
                    className="input input-bordered"
                  />
                </div>
                <button className="bg-pink-400 text-white btn -ml-8">
                  Search
                </button>
              </div>
              <div className="flex justify-center gap-x-14 mt-5">
                <button className="bg-pink-400 text-white btn -ml-8">
                  Get it started
                </button>
                <button className="bg-pink-400 text-white btn -ml-8">
                  Explore more
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[500px] rounded-3xl"
              src="https://i.ibb.co/BKsn7mb/sign-family-couple-female-closeup.jpg"
              alt=""
            />
            <div className="absolute left-14 md:left-64 top-32 ">
              <div className="text-center">
                <h1 className="text-5xl font-bold">
                  Bangladesh's leading
                  <span className="text-pink-500"> and most</span> reliable
                </h1>
                <h1 className="text-5xl font-bold mt-3 text-pink-500">
                  matrimony service
                </h1>
              </div>
              <div className="flex justify-center mt-5">
                <div className="form-control w-[300px]">
                  <input
                    type="text"
                    name="name"
                    placeholder="Search your Soulmates"
                    className="input input-bordered"
                  />
                </div>
                <button className="bg-pink-400 text-white btn -ml-8">
                  Search
                </button>
              </div>
              <div className="flex justify-center gap-x-14 mt-5">
                <button className="bg-pink-400 text-white btn -ml-8">
                  Get it started
                </button>
                <button className="bg-pink-400 text-white btn -ml-8">
                  Explore more
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[500px] rounded-3xl"
              src="https://i.ibb.co/fFmnSkt/couple-holding-hands-with-basket-flowers.jpg"
              alt=""
            />
            <div className="absolute left-14 md:left-64 top-32 ">
              <div className="text-center">
                <h1 className="text-5xl font-bold">
                  Bangladesh's leading
                  <span className="text-pink-500"> and most</span> reliable
                </h1>
                <h1 className="text-5xl font-bold mt-3 text-pink-500">
                  matrimony service
                </h1>
              </div>
              <div className="flex justify-center mt-5">
                <div className="form-control w-[300px]">
                  <input
                    type="text"
                    name="name"
                    placeholder="Search your Soulmates"
                    className="input input-bordered"
                  />
                </div>
                <button className="bg-pink-400 text-white btn -ml-8">
                  Search
                </button>
              </div>
              <div className="flex justify-center gap-x-14 mt-5">
                <button className="bg-pink-400 text-white btn -ml-8">
                  Get it started
                </button>
                <button className="bg-pink-400 text-white btn -ml-8">
                  Explore more
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <PremiumMember></PremiumMember>
      <WorkSection></WorkSection>
      <SuccessCounter></SuccessCounter>
      <Review></Review>
    </div>
  );
};

export default Home;
