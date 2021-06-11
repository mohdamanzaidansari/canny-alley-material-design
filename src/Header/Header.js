import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = (
    <AnimatePresence>
      <motion.ul
        initial={{ x: "-5rem" }}
        animate={{ x: 0 }}
        exit={{ x: "-5rem" }}
        className="menu"
      >
        <li className="">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="">
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
        <li className="">
          <NavLink to="/">What We Offers</NavLink>
        </li>
      </motion.ul>
    </AnimatePresence>
  );
  return (
    <header className="header">
      <div className="menu-icon">
        <motion.img
          whileHover={{
            scale: 1.2,
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          src={require(isMenuOpen
            ? "../assets/icons/close.svg"
            : "../assets/icons/menu.svg")}
          alt="Humbergur Menu"
          className="menu-svg"
        />

        {isMenuOpen && menu}
      </div>
      <div className="logo">
        <img
          src={require("../assets/imgs/Capture-logo.jpg")}
          alt="Logo"
          className="logo-img"
        />
      </div>
    </header>
  );
};

export default Header;
