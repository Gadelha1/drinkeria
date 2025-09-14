import React from 'react';
import { Carousel } from "antd";

const DrinksCarousel = ({children}) => {
    return (
      <Carousel
        arrows
        infinite={false}
        slidesToShow={1}
        slidesToScroll={1}
        style={{ width: "100%" }}
      >
        {children}
      </Carousel>
    );
}

export default DrinksCarousel;