import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <h2 className="title">Contact Me</h2>

      <div className="contact-links">
        <a href="mailto:ruddhibthanekar@gmail.com">
          <FaEnvelope />
          <span>ruddhibthanekar@gmail.com</span>
        </a>

        <a href="tel:+917738166566">
          <FaPhone />
          <span>+91 7738166566</span>
        </a>

        <p>
          <FaMapMarkerAlt />
          <span>Mumbai, India</span>
        </p>

        <a
          href="https://github.com/ruddhibthanekar-alt"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/ruddhi-thanekar-12068b19a/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;