import React from "react";
import img1 from "../../assets/img/landingImg/image 20.png"
import img2 from "../../assets/img/landingImg/image 21.png"
import img3 from "../../assets/img/landingImg/image 22.png"
import img4 from "../../assets/img/landingImg/image 23.png"
import img5 from "../../assets/img/landingImg/image 24.png"
import img6 from "../../assets/img/landingImg/image 25.png"

const categories = [
  { name: "Breakfast", icon:img6, color:"yellow"  },
  { name: "Vegan", icon: img1 ,color:"black"},
  { name: "Meat", icon: img2 ,color:"pink"},
  { name: "Dessert", icon: img3 ,color:"red"},
  { name: "Lunch", icon: img4 ,color:"blue"},
  { name: "Chocolate", icon: img5,color:"green" },
];

const Categories = () => (
  <div className="flex flex-col gap-[4vw] mx-[3vw] md:mx-[7vw]">
    <div className="flex flex-row justify-between items-center">
      <div className="text-[6vw] md:text-[3vw] font-semibold">Categories</div>
      <button className="bg-cyan-100 px-[3vw] md:px-[1.75vw] h-fit w-fit py-[1.5vw] md:py-[0.75vw] rounded-2xl text-gray-800 font-medium">
        View All Categories
      </button>
    </div>

    <div className="flex flex-row flex-wrap gap-[10vw] md:gap-[2vw] justify-center items-center">
      {categories.map((item,index)=>(
         <div key={index} className={`flex flex-col border-white border p-[6vw] md:p-[3vw] w-fit gap-[2vw] items-center rounded-[4vw] md:rounded-[2vw] justify-center gradient-${item.color}`}
         >
         <img src={item.icon} className="md:w-[6vw] md:h-[6vw] h-[25vw]"/>
         <div className="font-medium">
           {item.name}
         </div>
       </div>
      ))}
     
    </div>
  </div>
);

export default Categories;
