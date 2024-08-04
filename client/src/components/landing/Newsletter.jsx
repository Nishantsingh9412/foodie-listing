import React from "react";

import Button from "./Button";
import bgImg from "../../assets/img/landingImg/bgImg.png";

const Newsletter = () => (
  <div className="my-[8vw] justify-center items-center flex">
    <div
      className=" h-[40vw] md:h-[30vw] w-[90vw] md:w-[80vw] gap-[4vw]  flex justify-center items-center rounded-[3vw] flex-col "
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[70vw] md:w-[40vw] text-white text-[4vw] md:text-[2.5vw] text-center font-semibold">
        Get or Promo Code by Subscribing to our Newsletter
      </div>
      <div className="relative">
        <input
          placeholder="Enter your mail"
          className="w-[70vw] md:w-[40vw] rounded-[1vw] py-[1.5vw] px-[1vw]"
        />
        <div className="absolute mt-[-8vw] ml-[47vw] md:mt-[-4vw] md:ml-[31vw]">
          <Button className="bg-red-800" name="Subscribe" />
        </div>
      </div>
    </div>
  </div>
);

export default Newsletter;
