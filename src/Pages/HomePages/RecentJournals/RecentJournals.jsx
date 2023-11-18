import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "../../../Utilis/JournalCard/Card";


const RecentJournals = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [jounrals, setJounrals] = useState([])
    useEffect(() => {
        fetch('jounrals.json')
            .then(res => res.json())
            .then(data => {
                setJounrals(data)
            })
    }, [])

    const recent = jounrals.filter((jounral) => jounral.category === 'recently')
    return (
        <div className="xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 py-12">
            <div className="lg:flex items-center lg:gap-0 gap-6 lg:justify-between justify-center lg:text-left text-center">
                <div>
                    <p className="text-[#1B577F] font-medium text-sm  py-2">Journals</p>
                    <h2 className="text-2xl font-bold">Our Recent Journals</h2>
                    <p className="py-2 text-[#626161]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Fuga deleniti, <br></br>exercitationem hic nam laborum atque quidem
                        animi deserunt quisquam nulla.
                    </p>
                </div>
                <div>
                    <button className="bg-[#1B577F] px-6 py-2 text-white hover:bg-[#262626] duration-300 cursor-pointer">Browes our journals</button>
                </div>
            </div>


            <div className="py-8 card-dots">
                <Slider   {...settings}>
                    {
                        recent.map((jounral, index) => <Card key={jounral.index} jounral={jounral} >

                        </Card>)
                    }


                </Slider>
            </div>
        </div>
    );
};
export default RecentJournals;