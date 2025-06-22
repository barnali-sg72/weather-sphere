// src/pages/ErrorPage.jsx
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import App, { AppContext } from "../App";
import { WeatherContext } from "./Main";
import { use } from "react";

function ErrorPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const errorMessage = location.state?.message || "Something went wrong.";
  const context = useContext(WeatherContext);
  const handleGoBack = () => {
    context.setCity(""); // Reset city in context if needed
    navigate("/"); // or navigate(-1) to go to previous page
  };
  useEffect(() => {
    context.setCity(""); // Reset city in context when error page is loaded
  }, []);

  return (
    <section className="top-padding error-page">
      <div className="p-5 error-container flex flex-column align-items-center justify-content-center">
        <h3>An Error Occured</h3>
        <p className="text-white">{errorMessage}</p>
        <button onClick={handleGoBack} className="error-button btn btn-primary">
          Go Back
        </button>
      </div>
    </section>
  );
}

export default ErrorPage;
