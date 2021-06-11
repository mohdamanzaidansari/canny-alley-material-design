import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Hero.css";
import CTAButton from "../CTAButton/CTAButton";
import SocialIcons from "../SocialIcons/SocialIcons";
import HeroLeftInnerBox from "../HeroLeftInnerBox/HeroLeftInnerBox";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <HeroLeftInnerBox />
      </div>
      <div className="hero-right">
        <h1 className="main-heading">Canny Alley</h1>
        <p className="main-para">
          We help busnisess thrive by providing latest tech support
        </p>
        <Link to="/contact-us" style={{ textDecoration: "inherit" }}>
          <CTAButton>Get Support</CTAButton>
        </Link>
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          className="btn cta-secondary"
        >
          Know More
        </motion.button>

        <SocialIcons position={{ bottom: 0, right: 0 }} />
      </div>
    </section>
  );
};

export default Hero;
