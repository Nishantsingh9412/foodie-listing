import React from "react";
import chef from "../../assets/img/landingImg/chef 1.png";
import img5 from "../../assets/img/landingImg/Group (3).png";
import Button from "./Button";

const Chef = () => (
  <section className="py-8 bg-white relative">
    <img src={img5} className="h-[20vw] mt-[0vw] ml-[4vw] absolute " />
    <div className="flex flex-col md:flex-row  my-[2vw] justify-around relative mx-[7vw]">
      <div className=" md:w-[50%] flex flex-col gap-[5vw] md:gap-[3vw] py-[5vw] px-[3vw] ">
        <div className="text-[8vw] md:text-[4vw] leading-[5vw] text-center md:text-start font-semibold md:w-[35vw]">
          Our experts Chefs
        </div>
        <div className="mt-[1vw] text-[3vw] md:text-[1vw] md:w-[75%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          aliquid ex pariatur, veritatis doloremque repudiandae sed ipsa
          molestias ea omnis magn
        </div>
        <img src={chef} className=" md:h-[40vw] md:hidden flex z-10" />
        <div className="flex flex-col md:flex-row gap-[5vw] md:gap-[1vw] md:justify-start md:items-start justify-center items-center">
          <Button
            className="bg-black text-[6vw] md:text-[1.25vw] "
            name="Menu"
          />
          <Button
            className="bg-red-700  text-[6vw] md:text-[1.25vw]"
            name="Book a table"
          />
        </div>
      </div>
      <div className="items-center flex justify-center ">
        <img src={chef} className="h-[40vw] hidden md:flex z-10" />
      </div>
    </div>
  </section>
);

export default Chef;
