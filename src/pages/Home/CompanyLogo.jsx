import React from "react";
import HeadingSection from "../../components/HeadingSection/HeadingSection";
import { FaApple, FaGoogle, FaAmazon, FaMicrosoft, FaFacebook } from "react-icons/fa";

import Container from "../../components/Container/Container";

const CompanyLogo = () => {
   const companies = [
  {
    name: "Apple",
    icon: FaApple
  },
  {
    name: "Google",
    icon: FaGoogle
  },
  {
    name: "Amazon",
    icon: FaAmazon
  },
  {
    name: "Microsoft",
    icon: FaMicrosoft
  },
  {
    name: "Facebook",
    icon: FaFacebook
  }
];


  return (
    <Container>
      <div className="py-10">
        <HeadingSection
          heading="Componey We've Worked With"
          subHeading="Our Trusted Partner"
          description="We've partnered some most of innovatives and leadings companies to bring the best solutions to you "
        ></HeadingSection>
        <div className="mt-5 py-10 border-t border-b border-gray-300">
           <div className="flex justify-between gap-">
               {
                companies.map((logo, index)=>(

                    <div key={index} >
                        <logo.icon className="text-blue-600 text-4xl"></logo.icon>
                    </div>
                )
                )
               }
               
           </div>
        </div>
      </div>
    </Container>
  );
};

export default CompanyLogo;
