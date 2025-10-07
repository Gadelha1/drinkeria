import React, { forwardRef } from 'react';
import { Carousel } from "antd";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DrinksCarousel = forwardRef(({ children, ...props }, ref) => {
  return (
    <Carousel
      ref={ref}
      arrows
      dots
      infinite={false}
      slidesToShow={1}
      slidesToScroll={1}
      style={{ width: "100%" }}
      {...props}
    >
      {children}
    </Carousel>
  );
});

export default DrinksCarousel;