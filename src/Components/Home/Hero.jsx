import "./hero.css";
import header_image from "../../assests/img/header-img.svg";
import { TypeAnimation } from "react-type-animation";

function Hero({ name, description }) {
  return (
    <div className="top-section">
      <div className="hero">
        <h2 className="tag">Hi, my name is</h2>
        <h1 className="name">{name}</h1>
        <h1 className="title">I'm a <TypeAnimation
              sequence={[
                "Full-Stack Dev.",
                2000,
                "Web Developer.",
                3000,
                "Web Designer.",
                4000,
                "UI/UX Designer.",
                5000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            /></h1>

        <p className="description">
          {description}{" "} <a className="hero-link" href="https://moringaschool.com/" target="blank">Moringa</a> and currently a student at
          <a className="hero-link" href="https://www.uonbi.ac.ke/" target="blank">
            {" "}University of Nairobi.
          </a>
        </p>
        <div>
          <button className="btn">Hire Me</button>
        </div>
      </div>
      <div className="image-side">
        <img src={header_image} alt="hero" />
      </div>
    </div>
  );
}

export default Hero;
