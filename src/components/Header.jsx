import { useState, useEffect, useContext } from "react";
import "../Css/header.css";
import "../Css/desktop/header-d.css";
import '../Css/fonts.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { WebContext } from "./context/Context";
import { navLinks } from "../data/content";

function Header() {
  const { languaje, setLanguaje, windowWidth } = useContext(WebContext);

  const [menuToggle, setMenuToggle] = useState(false);
  const [scrollDisabled, setScrollDisabled] = useState(false);

  useEffect(() => {
    if (scrollDisabled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [scrollDisabled]);

  function handleClickMenuOn() {
    setMenuToggle(true);
    setScrollDisabled(true);
  }

  function handleClickMenuOff() {
    setMenuToggle(false);
    setScrollDisabled(false);
  }

  function handleLanChange() {
    setLanguaje((prev) => !prev);
  }

  return (
    <header className='header-style header-style-d'>
      {/* MENU BARS */}
      <div className="menu-btn-on">
        <button className="menu-icon" onClick={() => handleClickMenuOn()}>
          <FontAwesomeIcon icon={faBars} className="icon-bars" />
        </button>
      </div>
      {/* MENU TOGGLE */}
      <div className={`${menuToggle === true ? "menu-on" : "menu-off"} menu-d`}>
        {/* MENU CROSS */}
        <div className="btn-menu-off-continer">
          <button
            className="menu-icon icon-off"
            onClick={() => handleClickMenuOff()}
          >
            <FontAwesomeIcon icon={faXmark} className="icon-bars" />
          </button>
        </div>
        <nav className="navlinks-container navlinks-d">
          {navLinks.map((link, i) => (
            <li
              key={link.id}
              className={i !== navLinks.length - 1 ? "navlinks-style" : "n"}
            >
              <a href={link.adress} onClick={() => handleClickMenuOff()}>
                {languaje == true ? link.esLink : link.enLink}
              </a>
            </li>
          ))}
        </nav>
        <div className="languaje-switch lan-switch-d">
          <p>En</p>
          <input type="checkbox" onClick={() => handleLanChange()} />
          <p>Es</p>
        </div>
      </div>
      <div className="head-title head-title-d">
        <h1>Rodrigo Dev</h1>
      </div>
    </header>
  );
}

export default Header;
