import React from 'react'
import  { Component } from "react";
import Slider from "react-slick";
import FlightDetailCard from './flightdetailcard.jsx';

const flightdetailslider = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    }
  };

  return (
    <div className='px-3'>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <FlightDetailCard/>
          </div>
          <div>
            <FlightDetailCard/>
          </div>
          <div>
            <FlightDetailCard/>
          </div>
          <div>
            <FlightDetailCard/>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default flightdetailslider