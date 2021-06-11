import React, { useState, useEffect, useRef } from "react";
import "./HeroLeftInnerBox.css";

import { Link } from "react-router-dom";

const HeroLeftInnerBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  let timerId = useRef(null);

  useEffect(() => {
    timerId = setTimeout(() => {
      carouselCotroller(1);
    }, 1500);
    return () => {
      clearTimeout(timerId);
    };
  }, [currentIndex]);

  const services = [
    "Cloud Computing",
    "E-Commerce",
    "ED-TecH",
    "Games Development",
    "Simulations",
    "UI/UX",
  ];

  const servicesImage = [
    "cloudcomputing.jpg",
    "ecommerce.jpg",
    "edutech.jpg",
    "gamedevelopment.jpg",
    "simulations.jpg",
    "uxuidesign.jpg",
  ];

  const servicesLength = services.length;

  const carouselCotroller = (control) => {
    let newIndex = currentIndex + control;
    if (newIndex < 0) {
      newIndex = servicesLength - 1;
    }
    if (newIndex === servicesLength) {
      newIndex = 0;
    }

    clearTimeout(timerId);

    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="hero-left">
        <div className="hero-left--inner-box">
          <ul className="hero-services">
            {services.map((service, index) => {
              return (
                <li
                  className={
                    index === currentIndex
                      ? "active-service"
                      : "inactive-service"
                  }
                  key={index}
                >
                  {service}
                </li>
              );
            })}
          </ul>
          <div className="hero-carousel">
            <img
              src={require(`../assets/imgs/${servicesImage[currentIndex]}`)}
              alt=""
              className="hero-carousel--img"
            />
          </div>
        </div>
        <div className="hero-carousel--controls">
          <img
            onClick={() => carouselCotroller(-1)}
            src={require("../assets/icons/Arrow.svg")}
            alt="Right Arrow"
            className="hero-carousel-arrow--left"
          />
          <div className="hero-carousel--link">
            <Link to="/">{services[currentIndex]}</Link>
          </div>

          <img
            onClick={() => carouselCotroller(1)}
            src={require("../assets/icons/Arrow.svg")}
            alt="Right Arrow"
            className="hero-carousel-arrow"
          />
        </div>
      </div>
    </>
  );
};

export default HeroLeftInnerBox;
