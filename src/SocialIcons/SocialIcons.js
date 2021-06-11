import React from "react";
import "./SocialIcons.css";
import { motion } from "framer-motion";

const SocialIcons = ({ position }) => {
  return (
    <ul className="social-icons" style={position}>
      <motion.li
        whileHover={{
          scale: 1.05,
        }}
      >
        <img
          src={require("../assets/icons/facebook.svg")}
          alt="Facebook icon"
        />
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.05,
        }}
      >
        <img src={require("../assets/icons/twitter.svg")} alt="Twitter icon" />
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.05,
        }}
      >
        <img
          src={require("../assets/icons/linkedin.svg")}
          alt="LinkedIn icon"
        />
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.05,
        }}
      >
        <img src={require("../assets/icons/vimeo.svg")} alt="Vimeo icon" />
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.05,
        }}
      >
        <img
          src={require("../assets/icons/pinterest.svg")}
          alt="Pinterest icon"
        />
      </motion.li>
    </ul>
  );
};

export default SocialIcons;
