import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import wheatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customImg from "../assets/images/customization.png";

const serviceData = [
  {
    imgUrl: wheatherImg,
    title: "Weather Forecast",
    desc: "Get the weather forecast for your location",
  },
  {
    imgUrl: guideImg,
    title: "User Guide",
    desc: "Learn how to use this app and get started with it.",
  },
  {
    imgUrl: customImg,
    title: "Customize Your Weather App",
    desc: "Create a customized version of our weather application using our API.",
  },
];

const ServiceList = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col key={index} lg="3">
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
