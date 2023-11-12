import { useEffect, useState } from "react";
import "./hero.css";
import image from "../../assests/img/header-img.svg";

function Hero({ name, description }) {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDelete] = useState(false);
  const titles = [
    "Front-End Developer.",
    "Web Designer.",
    "Web Developer.",
    "UI/UX Designer.",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  function tick() {
    let i = loopNum % titles.length;
    let fullText = titles[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDelete(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDelete(false);
      setLoopNum(loopNum + 1);
      setDelta(400);
    }
  }

  return (
    <div className="top-section">
      <div className="hero">
        <h2 className="tag">Hi, my name is</h2>
        <h1 className="name">{name}</h1>
        <h1 className="title">I'm a {text}</h1>

        <p className="description">
          {description}{" "}
          <a className="hero-link" href="#home">
            Moringa.
          </a>
        </p>
        <div>
          <button className="btn">Hire Me</button>
        </div>
      </div>
      <div className="image-side">
        <img src={image} alt="hero-image" />
      </div>
    </div>
  );
}

export default Hero;
