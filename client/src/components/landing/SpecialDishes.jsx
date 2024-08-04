import React from "react";
import dish1 from "../../assets/img/landingImg/dish-1 1.png";
import mask from "../../assets/img/landingImg/dish-2 2.png"
import dish2 from "../../assets/img/landingImg/dish-3 1.png";
import dish3 from "../../assets/img/landingImg/dish-5.png";
import dish4 from "../../assets/img/landingImg/dish-4.png";
import Button from "./Button";
import img2 from "../../assets/img/landingImg/Group2.png"
import img3 from "../../assets/img/landingImg/Group3.png"
import img4 from "../../assets/img/landingImg/Group4.png"
import img5 from "../../assets/img/landingImg/Group5.png"
// import img6 from "../../assets/img/landingImg/Vector.png"
// import img8 from "../../assets/img/landingImg/Group (2).png"
import img9 from "../../assets/img/landingImg/Group (3).png"
import img10 from "../../assets/img/landingImg/Group (4).png"
import img11 from "../../assets/img/landingImg/Group (5).png"
import img12 from "../../assets/img/landingImg/Group (9).png"




const dishes = [
  {
    name: "Lampsh with rice",
    price: "$12",
    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    image: dish1,
  },
  {
    name: "Fish and Veggie",
    price: "$15",
    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    image: dish2,
  },
  {
    name: "Tofu Chili",
    price: "$10",
    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    image: dish3,
  },
  {
    name: "Egg and Cucumber",
    price: "$8",
    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    image: dish4,
  },
];

const SpecialDishes = () => (
  <div className="flex flex-col justify-center items-center mt-[5vw] bg-gray-100 py-[4vw] relative">

    <div className="flex flex-col justify-center items-center mx-[7vw] gap-[2vw] py-[5vw] relative">
      <img src={img2} className="h-[15vw] mt-[-2vw] ml-[45vw] absolute" />
      <img src={img3} className="h-[10vw] mt-[95vw] ml-[0vw] absolute" />
      <img src={img4} className="h-[10vw] mt-[95vw] ml-[0vw] absolute" />
      <img src={img5} className="h-[15vw] mt-[-4vw] mr-[48vw] absolute " />

      {/* <img src={img8} className="h-[15vw] mt-[100vw] ml-[45vw] absolute" /> */}
      <img src={img9} className="h-[10vw] mt-[80vw] ml-[75vw] absolute" />
      <img src={img10} className="h-[6vw] mt-[85vw] ml-[55vw] absolute" />
      <img src={img10} className="h-[12vw] mt-[95vw] ml-[-100vw] absolute" />
      <img src={img11} className="h-[7vw] mt-[80vw] ml-[-45vw] absolute" />
      <div className="text-red-800 text-[5vw] md:text-[4vw] font-semibold z-[10]">
        Our Special Dishes
      </div>
      <div className="w-[50vw] md:w-[35vw] text-center text-[2vw] md:text-[1vw]">
        Lorem ipsum dolor, sit amet consectetNihil, vitae fugit nobis voluptatum
        eaque eum facilis ipsa odio praesentium, velit consectetur..
      </div>
    </div>

    <div className="flex flex-row flex-wrap justify-center items-center gap-[20vw] md:gap-[2vw] mt-[12vw] relative">
      {dishes.map((item, index) => (
        <div className="flex flex-col items-center justify-center relative border-white bg-transparent hover:bg-white border-[2px] rounded-tl-[4vw] rounded-tr-md rounded-bl-md rounded-br-[4vw] px-[1.5vw] py-[2vw] gap-[2vw] shadow-inner">
          <div className="relative">
            <img src={item.image} className=" w-[60vw] md:h-[14vw] md:w-[14vw] mt-[-20vw] md:mt-[-10vw] " />
            <div className="bg-black rounded-full text-white p-[1vw] text-[2vw] md:text-[1vw] absolute mt-[-14vw] ml-[10vw] shadow-2xl">
              {item.price}
            </div>
          </div>

          <div className="text-[6vw] md:text-[1.5vw] font-medium ">{item.name}</div>
          <div className=" w-[35vw] md:w-[15vw] text-[2vw] md:text-[1vw] text-center">
            {item.description}
          </div>
        </div>
      ))}
    </div>


    <div className="flex flex-col md:flex-row-reverse  my-[13vw] justify-between relative mx-[7vw] ">
      <img src={img5} className="h-[15vw] mt-[3vw] mr-[22vw] absolute " />
      <img src={img12} className="h-[20vw] mt-[30vw] mr-[-9vw] absolute " />

      <div className=" md:w-[40%] w-[100%] flex flex-col gap-[5vw] md:gap-[3vw] py-[10vw] px-[3vw] ">
        <div className="text-[8vw] text-center  md:text-[4vw] md:leading-[5vw] text-red-800 font-semibold md:w-[35vw] z-[10]">Welcome to  best Restraunts</div>
        <div className="mt-[1vw] text-[3vw] md:text-[1vw] md:w-[75%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          aliquid ex pariatur, veritatis doloremque repudiandae sed ipsa
          molestias ea omnis magn
        </div>
        <img src={mask} className=" md:w-[60%] z-10 md:hidden flex" />
        <div className="flex flex-col md:flex-row gap-[5vw] md:gap-[1vw] md:justify-start md:items-start justify-center items-center">
          <Button className="bg-black text-[6vw] md:text-[1.25vw]" name="Menu" />
          <Button className="bg-red-700 text-[6vw] md:text-[1.25vw]" name="Book a table" />
        </div>
      </div>

      <img src={mask} className="h-[45vw] md:w-[60%] z-10 hidden md:flex" />

    </div>


  </div>
);

export default SpecialDishes;
