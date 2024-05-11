import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.css";

function Footer() {
  return (
    <footer>
      <div className="socialIcons">
        <a href="">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
      <div className="footerNav">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footerBottom">
        <p>
          Copyright &copy; 2024 by <strong>QORB</strong>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
