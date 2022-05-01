import React from "react";
import "./Review.css";
import { Carousel } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <>
      <div className=" pb-10  bg-indigo-600 pt-20">
        <h1 className="pb-2 text-4xl text-center font-extrabold text-white">
          WHAT OUR CUSTOMERS SAYS
        </h1>
        <div className=" w-36 h-1 bg-white mx-auto" />
      </div>
      <Carousel className="pb-20 bg-indigo-600" fade>
        <Carousel.Item>
          <div className="w-full p-4 text-gray-800 bg-indigo-600 shadow-md">
            <div className="mb-2">
              <p className="mb-2 text-center text-gray-100">
                " They are trusted. I like there services "
              </p>
              <div className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full ">
                  <img
                    src="https://cdn.pixabay.com/photo/2014/12/30/09/18/pirates-of-the-caribbean-583725_960_720.jpg"
                    alt="img"
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <h5 className="font-bold text-indigo-100">Johny Deep</h5>

                <p className="flex items-center text-sm text-gray-100">
                  <FaStar className="text-base text-yellow-500 pr-1" />
                  <span>5/5</span>
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="w-full p-4 text-gray-800 bg-indigo-600 shadow-md">
            <div className="mb-2">
              <p className="mb-2 text-center text-gray-100">
                " They are so friendly. I'm so happy to be a customer of Tech
                Layer "
              </p>
              <div className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full ">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/11/21/08/25/iron-man-3829039_960_720.png"
                    alt="img"
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <h5 className="font-bold text-indigo-100">Robert Stark</h5>

                <p className="flex items-center text-sm text-gray-100">
                  <FaStar className="text-base text-yellow-500 pr-1" />
                  <span>4.5/5</span>
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="w-full p-4 text-gray-800 bg-indigo-600 shadow-md">
            <div className="mb-2">
              <p className="mb-2 text-center text-gray-100">
                " I will be return soon to deal another product "
              </p>
              <div className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full ">
                  <img
                    src="https://cdn.pixabay.com/photo/2022/01/19/09/26/elon-musk-6949267_960_720.png"
                    alt="img"
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <h5 className="font-bold text-indigo-100">Elon Musk</h5>

                <p className="flex items-center text-sm text-gray-100">
                  <FaStar className="text-base text-yellow-500 pr-1" />
                  <span>4/5</span>
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="w-full p-4 text-gray-800 bg-indigo-600 shadow-md">
            <div className="mb-2">
              <p className="mb-2 text-center text-gray-100">
                " I will recommend my friend because their service is very Good.
                "
              </p>
              <div className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full ">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/08/21/16/03/henry-cavill-2665842_960_720.jpg"
                    alt="img"
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <h5 className="font-bold text-indigo-100">Carl Kent</h5>
                <p className="flex items-center text-sm text-gray-100">
                  <FaStar className="text-base text-yellow-500 pr-1" />
                  <span>4.9/5</span>
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="w-full p-4 text-gray-800 bg-indigo-600 shadow-md">
            <div className="mb-2">
              <p className="mb-2 text-center text-gray-100">
                " All the Products is genuine and Professional "
              </p>
              <div className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full ">
                  <img
                    src="https://cdn.pixabay.com/photo/2021/06/01/16/15/batman-6302138_960_720.png"
                    alt="img"
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <h5 className="font-bold text-indigo-100">Bruce Wayn</h5>
                <p className="flex items-center text-sm text-gray-100">
                  <FaStar className="text-base text-yellow-500 pr-1" />
                  <span>5/5</span>
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Review;
