export default function Navbar({ onChangeTheme, isLight }) {
  return (
    <nav className="header">
      <div>
        <a href="#home">
          <i class="fa-solid fa-code logo-text"></i>
        </a>
      </div>
      <div>
        <ul className="nav-links">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#about">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">Contact</a>
          </li>
          <button className="btn">Download cv</button>
          <button onClick={onChangeTheme} className="toggle-theme">
            <i className={`fa-regular fa-sun ${isLight ? "active" : ""}`}></i>
            <i className={`fa-solid fa-moon ${isLight ? "" : "active"}`}></i>
          </button>
        </ul>
      </div>
      <div className="menu">
        <i class="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
}
