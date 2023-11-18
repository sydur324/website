import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import './Banner.css'

const Banner = () => {

    var settings = {
        dots: true,
        Array:false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [sliders,setSliders] = useState([])
    useEffect(() =>{
        fetch('banner.json')
        .then(res => res.json())
        .then(data =>{
            setSliders(data)
        })
    },[])

    return (
        <div className="my-12 overflow-hidden">
            <div className="bg-[#E5E5E5] xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 py-12 banner-dots">
                <Slider  {...settings}>
                    {
                        sliders.map((slider,index) =><div key={slider.index}>
                                <div className="flex flex-wrap gap-4">
                                     <div className="lg:w-1/4"><img src={slider.image} alt="" /></div>
                                     <div className="lg:w-2/4">
                                            <h2 className="text-xl font-medium py-2 text-[#115680]">{slider.title}</h2>
                                            <h2 className="text-lg">{slider.author.name}</h2>
                                            <p className="text-sm text-[#535353] ">{slider.author.position}</p>
                                            <p className="py-3">{slider.description}</p>
                                            <button className="px-4 py-2 bg-[#115680] text-white hover:bg-[#081839] duration-300 cursor-pointer">Read More</button>
                                     </div>
                                </div>
                        </div>)
                    }
                    
                    
                </Slider>
            </div>
        </div>
    );
};
export default Banner;