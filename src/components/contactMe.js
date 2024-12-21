import './contactMe.css'
import React, { useState } from "react";
import emailjs from "emailjs-com";


const ContactMe = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_jcz7dy3", // Replace with your EmailJS Service ID
        "template_qaojnzo", // Replace with your EmailJS Template ID
        {
          from_email: formData.email,
          message: formData.message,
        },
        "btJXJX_IzeNOUjUM5" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          setFormData({ email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@mail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Leave a message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
        {isSent && <p>Thank you for reaching out! I will get back to you soon.</p>}
      </div>
    </div>
  );
};

export default ContactMe;
