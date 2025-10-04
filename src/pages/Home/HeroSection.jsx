import React, { useState } from "react";
import Container from "../../components/Container/Container";
import { ArrowRight, CirclePlay } from "lucide-react";
import bannerImg from "../../assets/banner.png";
const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const modalShow = () => {
    setShowModal(true);
  };
  const modalClose = () => {
    setShowModal(false);
  };
  return (
    <Container>
      <div className="hero min-h-[calc(100vh-70px)]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="relative group">
            <img
              src={bannerImg}
              className="max-w-sm rounded-lg shadow-2xl flex-1"
            />
            <button
              onClick={modalShow}
              className="absolute inset-0 flex justify-center items-center group-hover:opacity-75 transition z-0"
            >
              <CirclePlay className="text-white hover:text-blue-500 w-8 h-8 rounded-full"></CirclePlay>{" "}
            </button>
          </div>

          {showModal && (
            <div className="fixed inset-0 flex justify-center items-center  bg-black/40 z-50">
              <div className="bg-white p-2 max-w-xl w-full relative">
                <button
                  onClick={modalClose}
                  className="absolute top-2 right-2 flex justify-center items-center text-4xl text-red-500 hover:bg-white w-7 h-7 hover:rounded-full"
                >
                  {" "}
                  &times;{" "}
                </button>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/AmX0_5dKJqk?si=TPZZv-EpqL-5i5kP"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          )}

          <div className="">
            <h1 className="text-5xl font-bold">
              Creative Web Design <br /> For Businesses
            </h1>
            <p className="py-6 sm:w-3/4 w-full">
              Unlock your design skills to create beautiful websites and apps
              with a poweful and easy-to-use tool.
            </p>
            <div className="flex gap-2">
              <button className="btn btn-primary text-white  text-[18px] font-medium">
                Get Started <ArrowRight></ArrowRight>{" "}
              </button>
              <button className="btn btn-outline btn-primary text-[18px] font-medium">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
