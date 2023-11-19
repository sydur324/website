import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './Banner.css'
import SearchBar from "../../../Utilis/SearchBar/SearchBar";

const Banner = () => {

    var settings = {
        dots: true,
        Array: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };



    return (
        <div className="">
            <div className="banner-dots">
                <Slider  {...settings} className="overflow-hidden">
                    <div className="banner py-16">
                        <div className="flex justify-center items-center flex-col text-white relative z-10">
                            <div className="text-center flex justify-center items-center flex-col">
                                <p>Welcome to</p>
                                <h2 className="text-3xl font-bold py-2 ">Westren Education Group</h2>
                                <p className="w-[55%] leading-6 text-[#ffffffb7] py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ducimus
                                    quasi incidunt est, minus delectus quos nobis nulla in doloremque
                                    esse necessitatibus illum ab facilis at illo? Vero, atque beatae.
                                </p>
                            </div>

                            <div className="w-full">
                                <SearchBar></SearchBar>
                            </div>

                            <div>
                                <p className="text-[#fff] hover:text-[#F46957] duration-300 cursor-pointer">Advaced Search..</p>
                            </div>

                        </div>
                    </div>

                    <div className="banner2 py-16">
                        <div className="flex justify-center items-center flex-col text-white relative z-10">
                            <div className="text-center flex justify-center items-center flex-col">
                                <p>For your</p>
                                <h2 className="text-3xl font-bold py-2 ">Find Best Journals</h2>
                                <p className="w-[55%] leading-6 text-[#ffffffb7] py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ducimus
                                    quasi incidunt est, minus delectus quos nobis nulla in doloremque
                                    esse necessitatibus illum ab facilis at illo? Vero, atque beatae.
                                </p>
                            </div>

                            <div className="w-full">
                                <SearchBar></SearchBar>
                            </div>

                            <div>
                                <p className="text-[#fff] hover:text-[#F46957] duration-300 cursor-pointer">Advaced Search..</p>
                            </div>

                        </div>
                    </div>

                </Slider>
            </div>
        </div>

    );
};
export default Banner;