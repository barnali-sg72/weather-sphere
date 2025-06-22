import logo from "../assets/images/icons/logo.png";

export default function Footer() {
  return (
    <footer className="d-flex flex-column pb-5">
      <p className="top-border " />
      <div className="footer-content d-flex align-items-center justify-content-center">
        <img src={logo} alt="logo" width="300"></img>
        <p className="flex-grow-1 text-center mb-0">
          @Copyright World Sphere Inc.
        </p>
      </div>
    </footer>
  );
}
