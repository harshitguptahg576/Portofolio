import React from "react";
import './Contact.scss'
import Title from "../Title";
import Map from "../Map";
import ContactForm from "./ContactForm";

const Contactme = () => {

  return (
    <>
      <div className="contact-me my-5">
        <Title title="Contact Me" subTitle="Lets Keep In Touch !" />

        <Map />
        {/* Social Icons */}
      <div className="icons-container my-5">
        <ul>
          <li>
            <a href="" target="_blank">
              <i className="fa fa-codepen"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/harshitguptahg576" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/harshitofficial" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://facebook.com/harshitguptahg57" target="_blank">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/royal_boy_harshit" target="_blank">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>


        {/* Contact Details */}
        <div className="contact-detail container">
          <div className="contact-type">Phone Number: <span>+91 9058072827</span></div>
          <div className="contact-type">Address: <span>Ram Nagar Colony, Hathras, India</span></div>
          <div className="contact-type">Email: <span>harshitguptahg576@gmail.com</span></div>
        </div>
      </div>

      {/* Contact Form */}
        <ContactForm />
    </>
  );
};

export default Contactme;
