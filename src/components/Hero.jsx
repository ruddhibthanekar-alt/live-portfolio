import profile from "../assets/photo.jpg";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>
          Hi, I'm <span>Ruddhi Thanekar</span>
        </h1>

        <h2>Frontend Developer</h2>

        <p>
          I build responsive, modern and user-friendly web applications
          using React, JavaScript and modern frontend technologies.
        </p>

        <div className="buttons">
          <a href="#projects">
            <button>View Projects</button>
          </a>

          <a href="/mainresume.pdf" download>
            <button className="outline">
              <FaDownload /> Download Resume
            </button>
          </a>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/ruddhibthanekar-alt"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ruddhi-thanekar-12068b19a/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="profile-card">
        <img src={profile} alt="Ruddhi Thanekar" />
      </div>
    </section>
  );
}

export default Hero;