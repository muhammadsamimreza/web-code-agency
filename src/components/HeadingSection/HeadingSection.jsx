import React from "react";

const HeadingSection = ({heading, subHeading, description}) => {
  return (
    <div className="">
      <div className="space-y-2 text-center">
        <p className="uppercase font-semibold text-blue-500">{subHeading}</p>
        <h1 className="text-3xl font-bold">
         {heading}
        </h1>
         {
            description && <p className="text-gray-400">{description}</p>
         }
      </div>
    </div>
  );
};

export default HeadingSection;
