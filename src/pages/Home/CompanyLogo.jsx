import React from "react";
import { useState } from "react";
import HeadingSection from "../../components/HeadingSection/HeadingSection";
import {
    FaApple,
    FaGoogle,
    FaAmazon,
    FaMicrosoft,
    FaFacebook,
} from "react-icons/fa";
import "../../App.css";
import Container from "../../components/Container/Container";


const CompanyLogo = () => {
  const [isPaused, setIsPaused] = useState(false);

  const companies = [
    { name: "Apple", icon: FaApple },
    { name: "Google", icon: FaGoogle },
    { name: "Amazon", icon: FaAmazon },
    { name: "Microsoft", icon: FaMicrosoft },
    { name: "Facebook", icon: FaFacebook },
  ];

  return (
    <div className="bg-gray-200">
      <Container>
        <div className="py-10">
          <HeadingSection
            heading="Company We've Worked With"
            subHeading="Our Trusted Partner"
            description="We've partnered with some of the most innovative and leading companies to bring the best solutions to you."
          />
          <div className="mt-5 py-10 border-t border-b border-gray-300 overflow-hidden">
            <div
              className={`md:w-max flex gap-20 mx-auto logo-scroll ${
                isPaused ? "paused" : ""
              }`}
            >
              {companies.map((logo, index) => (
                <div
                  key={index}
                  className="w-14 h-14 flex justify-center items-center rounded-full bg-gray-100 transition-transform duration-300 hover:scale-110"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <logo.icon className="text-blue-600 text-4xl" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};


export default CompanyLogo;
