import "./App.css";
import "./css/queries.css";
import "./css/weather.css";
import "font-awesome/css/font-awesome.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState, createContext, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

export const AppContext = createContext(null);

function App() {
  const [appclass, setAppclass] = useState("App-dark");
  const [theme, setTheme] = useState("dark");
  const [selectedMenu, setSelectedMenu] = useState("HOME");
  const navigate = useNavigate();
  const cityRef = useRef("");
  const location = useLocation();
  const pathnameRef = useRef(location.pathname);

  useEffect(() => {
    const header = document.getElementsByClassName("App-header")[0];

    const handleScroll = () => {
      const scrolled = window.pageYOffset > 0;

      if (location.pathname === "/home") {
        if (scrolled) {
          header.classList.add("bg-colored");
        } else {
          header.classList.remove("bg-colored");
        }
      } else {
        header.classList.add("bg-colored");
      }
    };

    // Run once on mount and when pathname changes
    handleScroll();

    // Add listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount or pathname change
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname.includes("today")) {
      setSelectedMenu("TODAY");
    } else if (pathname.includes("hourly")) {
      setSelectedMenu("HOURLY");
    } else if (pathname.includes("daily")) {
      setSelectedMenu("DAILY");
    } else if (pathname.includes("cities")) {
      setSelectedMenu("WORLD CITIES");
    } else {
      setSelectedMenu("HOME");
    }
  }, [location.pathname]);

  const handleMenuClick = (e, menu, path) => {
    e.preventDefault();
    setSelectedMenu(menu);
    navigate(path);
  };

  const handleSearchClick = () => {
    let cityValue = cityRef.current.value;
    if (cityValue !== "" && cityValue !== null && cityValue !== undefined) {
      navigate("/weather/today/" + cityValue);
      cityRef.current.value = "";
      setSelectedMenu("TODAY");
    }
  };

  const appContextValue = {
    selectedMenu: selectedMenu,
    setSelectedMenu: setSelectedMenu,
    handleMenuClick: handleMenuClick,
    handleSearchClick: handleSearchClick,
    cityRef: cityRef,
    appclass: appclass,
    setAppclass: setAppclass,
    theme: theme,
    setTheme: setTheme,
  };
  return (
    <AppContext.Provider value={appContextValue}>
      <ScrollToTop>
        <div className={`App container-fluid  ${appclass}`}>
          <Header />
          <Main />
          <Footer />
        </div>
      </ScrollToTop>
    </AppContext.Provider>
  );
}

export default App;
