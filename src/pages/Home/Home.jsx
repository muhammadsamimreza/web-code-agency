import React from "react";
import Container from "../../components/Container/Container";
import { ArrowRight } from "lucide-react";
import bannerImg from "../../assets/banner.png";

const Home = () => {
  return (
    <Container>
      <div className="hero min-h-[calc(100vh-70px)]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImg}
            className="max-w-sm rounded-lg shadow-2xl flex-1"
          />
          <div className="">
            <h1 className="text-5xl font-bold">Creative Web Design <br /> For Businesses</h1>
            <p className="py-6 sm:w-3/4 w-full">Unlock your design skills to create beautiful websites and apps with a poweful and easy-to-use tool.</p>
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

export default Home;
