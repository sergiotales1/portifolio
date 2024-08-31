import React from "react";

const SingleIcon = ({ title, img, desc }) => {
  return (
    <div className="py-2 xl:flex xl:flex-col xl:justify-center ">
      <div className="flex items-center justify-start gap-2 ">
        <div className="w-8 xl:w-16">
          <img src={img} alt={title} />
        </div>
        <h4 className="text-lg xl:text-xl">{desc}</h4>
      </div>
      <p className="text-xs xl:text-md ">{title}</p>
    </div>
  );
};

export default SingleIcon;
