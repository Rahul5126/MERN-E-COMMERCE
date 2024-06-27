import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import banner_1 from '../Assets/banner_1.webp';
import banner_2 from '../Assets/banner_2.webp';
import banner_3 from '../Assets/banner_3.webp';
import banner_4 from '../Assets/banner_4.webp';

import './Banner.css';

const images = [banner_1, banner_2, banner_3, banner_4];

const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,     
        autoplaySpeed: 3000,
      };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-image">
            <img src={image} alt={`slide-${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Banner