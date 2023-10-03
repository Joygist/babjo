import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import slick-carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme styles
import heroImg01 from "../../assets/images/hero-img01.png"
import heroImg02 from "../../assets/images/hero-img02.png"
import heroImg03 from "../../assets/images/hero-img03.png"

const Hpage = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        slidesToShow: 1, // Set slidesToShow to 1 to display one image at a time
        slidesToScroll: 1,
    };

    const slideStyle = {
        height: '100vh', // Set slide height to full viewport height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <Slider {...settings}>
            <div style={slideStyle}>
                <img src={heroImg01} alt="" className="w-full h-full object-cover" />
            </div>

            <div style={slideStyle}>
                <img src={heroImg02} alt="" className="w-full h-full object-cover" />
            </div>

            <div style={slideStyle}>
                <img src={heroImg03} alt="" className="w-full h-full object-cover" />
            </div>
        </Slider>
    );
};

export default Hpage;
