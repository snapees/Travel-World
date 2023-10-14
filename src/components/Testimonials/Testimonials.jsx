import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 200,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infintite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod
          placeat quae sequi dicta aliquam eum dolorum quisquam ipsa architecto
          eaque velit, amet, voluptatem quam rerum! Ab soluta aperiam
          repellendus maxime officia? Sapiente, maxime exercitationem odio
          maiores deleniti doloribus dicta!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
          <div className="">
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Client</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod
          placeat quae sequi dicta aliquam eum dolorum quisquam ipsa architecto
          eaque velit, amet, voluptatem quam rerum! Ab soluta aperiam
          repellendus maxime officia? Sapiente, maxime exercitationem odio
          maiores deleniti doloribus dicta!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
          <div className="">
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Client</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod
          placeat quae sequi dicta aliquam eum dolorum quisquam ipsa architecto
          eaque velit, amet, voluptatem quam rerum! Ab soluta aperiam
          repellendus maxime officia? Sapiente, maxime exercitationem odio
          maiores deleniti doloribus dicta!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
          <div className="">
            <h6 className="mb-0 mt-3">John Smith</h6>
            <p>Client</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod
          placeat quae sequi dicta aliquam eum dolorum quisquam ipsa architecto
          eaque velit, amet, voluptatem quam rerum! Ab soluta aperiam
          repellendus maxime officia? Sapiente, maxime exercitationem odio
          maiores deleniti doloribus dicta!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
          <div className="">
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Client</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};
export default Testimonials;
