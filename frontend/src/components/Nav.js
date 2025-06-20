import { useContext, useEffect, useState, useTransition } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

export default function Nav() {
  //const navigate = useNavigate();
  const [navStyle, setNavStyle] = useState({});
  const [navClass, setNavClass] = useState("");
  const context = useContext(AppContext);

  useEffect(() => {
    /* if (context.theme === "light") {
      if (context.selectedMenu === "HOME") {
        setNavStyle({ color: "#ffffff" });
      } else {
        setNavStyle({ color: "#374071" });
      }
    } else {
      setNavStyle({ color: "#ffffff" });
    }*/
    if (context.theme === "light") {
      setNavClass("navbar-light");
    } else {
      setNavClass("navbar-dark");
    }
  }, [context.theme, context.selectedMenu]);

  return (
    <nav className={`navbar navbar-expand-lg  ${navClass}`}>
      <button
        className="custom-toggler navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNav"
        role="navigation"
      >
        <ul className="navbar-nav d-flex">
          <li className="nav-item">
            <a
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              className={
                context.selectedMenu === "HOME" ? "nav-link active" : "nav-link"
              }
              aria-current="page"
              onClick={(e) => context.handleMenuClick(e, "HOME", "/home")}
            >
              HOME
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              className={
                context.selectedMenu === "TODAY"
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={(e) =>
                context.handleMenuClick(e, "TODAY", "/weather/today/current")
              }
            >
              TODAY
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              className={
                context.selectedMenu === "HOURLY"
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={(e) =>
                context.handleMenuClick(e, "HOURLY", "/weather/hourly/current")
              }
            >
              HOURLY
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              className={
                context.selectedMenu === "DAILY"
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={(e) =>
                context.handleMenuClick(e, "DAILY", "/weather/daily/current")
              }
            >
              DAILY
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              className={
                context.selectedMenu === "WORLD CITIES"
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={(e) =>
                context.handleMenuClick(e, "WORLD CITIES", "/cities")
              }
            >
              WORLD CITIES
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
