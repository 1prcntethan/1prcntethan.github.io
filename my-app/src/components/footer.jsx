import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-section">
          <p>Quick Links</p>
          <ul>
            {/* <li>
              <a href="#">About Us</a>
            </li> */}
            <li>
              <Link to = "/">Home</Link>
            </li>
            <li>
              <Link to = "/tutorials">Skills/Tutorials</Link>
            </li>
            <li>
            <Link to = "/training">Training Guides</Link>
            </li>
            <li>
            <Link to = "/terminology">Terminology</Link>
            </li>
            <li>
            <Link to = "/howtouseguide">WINGS usage guide</Link>
            </li>
            <li>
            <Link to = "/about">About</Link>
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <p>Contact Us</p>
          <p class="footer-text">
            Email:{" "}
            <div id="footer-email">
              wings.sw.official@gmail.com
            </div>
          </p>
          <div class="social-media">
            <p class="footer-text">Instagram:</p>
            <a class="center-svg" href="https://www.instagram.com/wings.sw/">
              <svg
                class="insta-svg"
                viewBox="0 0 2272 2272"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="2272" height="2272" rx="674" fill="#919191" />
                <rect
                  x="171"
                  y="184"
                  width="1930"
                  height="1930"
                  rx="597"
                  fill="#333333"
                />
                <circle cx="1136" cy="1149" r="598" fill="#919191" />
                <circle cx="1756.5" cy="577.5" r="118.5" fill="#919191" />
                <circle cx="1136" cy="1149" r="420" fill="#333333" />
              </svg>
            </a>
            
          </div>
          @wings.sw
        </div>


        <div class="footer-section">
          <p>Feedback</p>
          <ul>
            <li>
              <a href="https://forms.gle/ChdE8Mq3YNWXCfTa6">Report an Issue/Submit Feedback</a>
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <p>Recommended Equipment</p>
          <ul>
            <li>
              <a>Resistance Bands</a>
            </li>
            <li>
              <a>Parallettes</a>
            </li>
          </ul>
        </div>
        
      </div>

      <div class="footer-bottom">
        <p>&copy; 2025 WINGS. All rights reserved.</p>
        {/* <a href="/privacy-policy">Privacy Policy</a> |{" "}
        <a href="/terms-of-service">Terms of Service</a> */}
      </div>
    </footer>
  );
};

export default Footer;
