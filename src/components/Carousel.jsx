import React from 'react';
import Slider from 'react-slick';
import CarouselItem from './CarouselItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/carousel.css';

const Carousel = () => {
  const settings = {
    arrows: true,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {[1, 2, 3].map((item) => <CarouselItem key={item} />)}
    </Slider>
  );
};

export default Carousel;
