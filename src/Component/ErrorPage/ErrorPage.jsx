import Lottie from "lottie-react";
import errorPage from "../../../src/errorPage (2).json";

const ErrorPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-red-500 text-center mt-7">
        OOOOPPPPPSSSS!!!!!!!!!
      </h1>
      <div className="flex justify-center">
        <Lottie
          className="w-[400px] h-[400px]"
          animationData={errorPage}
        ></Lottie>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-semibold">Back to the</h1>{" "}
        <button className="btn btn-sm btn-secondary ml-5">Home</button>
      </div>
    </div>
  );
};

export default ErrorPage;
