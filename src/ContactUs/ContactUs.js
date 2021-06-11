import React from "react";
import "./ContactUs.css";
import ContactForm from "../ContactForm/ContactForm";
import SocialIcons from "../SocialIcons/SocialIcons";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <>
      <section className="email">
        <div className="email-left-box">
          <div className="email-heading">
            <img
              src={require("../assets/icons/document.svg")}
              alt="Write Email Icon"
            />
            <h1>
              Tell us about
              <br /> your requirements
            </h1>
          </div>

          <SocialIcons position={{ bottom: "0", marginBottom: "-4rem" }} />
        </div>
        <div className="email-right-box">
          <ContactForm />
        </div>
      </section>

      <section className="address">
        <div className="address-left-box">
          <div className="iframe">
            <iframe
              className="iframe"
              title="google map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.4022291141446!2d77.08093731548925!3d28.497543696927558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI5JzUxLjEiTiA3N8KwMDQnNTkuMyJF!5e0!3m2!1sen!2sin!4v1600076916251!5m2!1sen!2sin"
              width="600"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
        <div className="address-right-box">
          <div className="address-heading">
            <img
              src={require("../assets/icons/document.svg")}
              alt="Address Icon"
            />
            <h1>
              Or just visit us
              <br /> We are located in gurgaun{" "}
            </h1>
          </div>
          <p>
            1M, 2nd Floor,
            <br /> Plot -249 Phase IV, <br /> Udyog Vihar Sector 18, <br />
            Gurugram,Haryana 122001
            <br />
            Timing 10am to 5pm
          </p>
          <div className="get-directions">
            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/maps/nFtZAyKpTShZE7jY9"
            >
              Get Directions
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
