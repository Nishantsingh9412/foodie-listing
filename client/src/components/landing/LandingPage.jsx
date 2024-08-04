import React from "react";
import Header from "./Header";
import Categories from "./Categories";
import SpecialDishes from "./SpecialDishes";
import Chef from "./Chef";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import Hero from "./Hero";
import curve from "../../assets/img/landingImg/ellipse.png";
import curve1 from "../../assets/img/landingImg/Ellipse1.png";
import curve2 from "../../assets/img/landingImg/Ellipse2.png";
import circleFood from "../../assets/img/landingImg/Group1.png"
import WebsiteList from "../dashboard/components/subComponents/WebsiteList";
import WebsiteListCards from "./WebsiteListCards";

const App = () => (
    <div>
        <div>
            <img src={curve} className="h-[50vw] md:h-[30vw] absolute" />
            <img src={curve1} className=" h-[45vw] md:h-[25vw] absolute" />
            <img src={curve2} className=" h-[55vw] md:h-[30vw] absolute" />
            <img src={circleFood} className="h-[6vw] mt-[15vw] ml-[8vw] absolute hidden md:flex" />
        </div>

        <div className="overflow-hidden ">
            {/* <Header /> */}

            <Hero />
            <WebsiteListCards />
            <Categories />
            <SpecialDishes />
            <Chef />
            <Testimonials />
            <Newsletter />
            <Footer />
        </div>
    </div>
);

export default App;
