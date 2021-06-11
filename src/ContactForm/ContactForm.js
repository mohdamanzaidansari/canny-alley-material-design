import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./ContactForm.css";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [form, setForm] = useState({});

  const handleChange = (param, event) => {
    setForm({ ...form, [param]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let templateParams = {
      from_name: form.name,
      from_email: form.email,
      to_name: "mohdamanzaidansari@gmail.com",
      message: form.message,
    };

    emailjs
      .send(
        "contact_service+1",
        "template_xc8wlrk",
        templateParams,
        "user_ROmV6LJFdVEep7aAPEg6K"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          alert("Due to some error Email was not Sent");
          console.log(error);
        }
      );
  };

  return (
    <>
      <form action="" className="form-container">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={(event) => handleChange("name", event)}
          placeholder="Your name.."
        />

        <input
          type="email"
          name="name"
          value={form.Email}
          onChange={(event) => handleChange("email", event)}
          placeholder="Your Email..."
        />

        <textarea
          name="message"
          value={form.message}
          onChange={(event) => handleChange("message", event)}
          placeholder="Let us know about your project to be 
        supported......."
        ></textarea>
      </form>{" "}
      <motion.input
        whileHover={{
          scale: 1.05,
        }}
        onClick={handleSubmit}
        type="submit"
        value="Send Email"
      />
    </>
  );
};

export default ContactForm;
