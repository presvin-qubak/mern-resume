import React, { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import axios from "axios";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      console.log(response.data);

      toast.success("Message sent successfully! 🚀");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {

      console.error(error);

      toast.error("Failed to send message ❌");

    }
  };

  return (

    <section id="contact" className="contact">

      <motion.h2
        initial={{
          opacity: 0,
          y: -40
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.8
        }}
        viewport={{
          once: true
        }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1
        }}
        transition={{
          delay: 0.3
        }}
        viewport={{
          once: true
        }}
      >
        Let's build something amazing together.
      </motion.p>

      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{
          opacity: 0,
          y: 80
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.8
        }}
        viewport={{
          once: true
        }}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <motion.button
          type="submit"
          whileHover={{
            scale: 1.05
          }}
          whileTap={{
            scale: 0.95
          }}
        >
          Send Message
        </motion.button>

      </motion.form>

    </section>

  );
};

export default Contact;