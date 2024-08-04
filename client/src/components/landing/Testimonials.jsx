import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img5 from "../../assets/img/landingImg/Group (10).png";
import person from "../../assets/img/landingImg/person-1.png";
// import Button from "./Button";

const testimonials = [
  {
    imagePath: person,
    name: "John Doe",
    description:
      "Testimonial from John Doe about product/serviceTestimonial from Michael Johnson about product/serviceTestimonial from Michael Johnson about product/service Testimonial from John Doe about product/serviceTestimonial from Michael Johnson about product/serviceTestimonial from Michael Johnson",
    designation: "CEO, Company A",
  },
  {
    imagePath: person,
    name: "Jane Smith",
    description:
      "Testimonial from Jane Smith about product/service Testimonial from Michael Johnson about product/service Testimonial from Michael Johnson about product/service",
    designation: "Marketing Manager, Company B",
  },
  {
    imagePath: person,
    name: "Michael Johnson",
    description:
      "Testimonial from Michael Johnson about product/service Testimonial from Michael Johnson about product/  Testimonial from Michael Johnson about product/serviceTestimonial from Michael Johnson about product/service",
    designation: "Customer, City C",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    cssEase: "linear",
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[5vw] bg-gray-100 py-[4vw] relative">
      <img src={img5} className="h-[55vw] mt-[20vw] ml-[-70vw] absolute " />
      <div className="flex flex-col justify-center items-center mx-[7vw] gap-[2vw]">
        <div className="text-red-800 text-[8vw] md:text-[4vw] font-semibold">
          Our Happy Customers
        </div>
        <div className=" md:w-[35vw] text-[3vw] md:text-[1vw] text-center">
          Lorem ipsum dolor, sit amet consectetNihil, vitae fugit nobis
          voluptatum eaque eum facilis ipsa odio praesentium, velit
          consectetur..
        </div>
      </div>

      <div
        className={` w-[70vw] h-[60vw] md:w-[40vw] md:h-[30vw] my-[1vw] justify-center items-center mt-[10vw] md:mt-[4vw]`}
      >
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col h-[52vw] md:h-[25vw] items-center justify-center mt-[5vw] rounded-tl-[8vw] rounded-tr-[2vw] rounded-bl-[2vw] bg-white rounded-br-[8vw] py-[2vw] shadow-inner"
            >
              <img
                src={item.imagePath}
                className="md:h-[7vw] md:w-[7vw] h-[20vw] w-[20vw] mt-[-6vw] md:mt-[-5vw] rounded-full mx-auto"
              />
              <div className="text-[2.1vw] md:text-[1vw] w-[60vw] md:w-[30vw] text-center mx-auto mt-[4vw] font-light">
                {item.description}
              </div>
              <div className="font-medium text-red-800 text-[5vw] md:text-[1.75vw] text-center flex flex-col mt-[2vw]">
                {item.name}
                <br />
                <span className="text-[2.5vw] md:text-[1vw] font-light text-black">
                  {item.designation}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
