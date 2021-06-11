import React from "react";
import "./CTAButton.css";
import { motion } from "framer-motion";

const CTAButton = ({ children }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      className="btn cta-main"
    >
      {children}
    </motion.button>
  );
};

export default CTAButton;
