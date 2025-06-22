import { useContext } from "react";
import logo from "../assets/images/icons/logo.png";
import Nav from "./Nav";
import { AppContext } from "../App";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const context = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <header className="App-header justify-content-between align-items-center">
      <div
        className="logo d-flex align-items-center justify-content-center"
        onClick={() => navigate("/")}
      >
        <img
          src={logo}
          alt="logo"
          loading="lazy"
          className="float-start ms-1 flex-shrink-1"
        ></img>
      </div>

      <Nav />

      <form
        onSubmit={context.handleSearchClick}
        className="search d-flex align-items-center justify-content-center"
      >
        <input
          type="text"
          name="city"
          id="city"
          className="form-control"
          placeholder="Search City"
          ref={context.cityRef}
        ></input>

        <button type="submit" className="btn btn-light float-start">
          <FaSearch />
        </button>
      </form>
    </header>
  );
}
