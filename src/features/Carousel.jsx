import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

import Slider from "react-slick";

function Carousel() {
  var settings = {
    dots: false,
    infinite: true,
    focusOnSelect: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="carousel-container">
          <img className="carousel-img" src="/images/flier-1.png" alt="" />
        </div>
        <div className="carousel-container">
          <img className="carousel-img" src="/images/flier-2.png" alt="" />
        </div>
        <div className="carousel-container">
          <img className="carousel-img" src="/images/flier-3.png" alt="" />
        </div>
        <div className="carousel-container">
          <img className="carousel-img" src="/images/flier-4.png" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
