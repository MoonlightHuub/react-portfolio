import { createContext, useState, useEffect } from "react";
import '../../Css/fonts.css'

export const WebContext = createContext();

export function ContextProvider(props) {
  {
    /* FALSE is English version, TRUE is Español */
  }
  const [languaje, setLanguaje] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [toggleAlert, setToggleAlert] = useState(false);

  function handleToggleAlertOn() {
    setToggleAlert(true);
    document.body.style.overflow = "hidden";
  }

  function handleToggleAlertOff() {
    setToggleAlert(false);
    document.body.style.overflow = "auto";
  }

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WebContext.Provider
      value={{
        languaje,
        windowWidth,
        setLanguaje,
        setToggleAlert,
        toggleAlert,
        handleToggleAlertOn,
        handleToggleAlertOff,
      }}
    >
      {props.children}
    </WebContext.Provider>
  );
}
