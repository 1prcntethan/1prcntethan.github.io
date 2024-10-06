import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
  {/*main css*/}
  <link rel="stylesheet" href="navbar.css" />
  <link rel="stylesheet" href="index.css" />
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>calisthenics site</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap"
    rel="stylesheet"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet"
  />
  <div className="navbar">
    <div className="navbar-logo">
      <Link to="/">
        <svg
          className="logo"
          viewBox="0 0 772 747"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M427.099 267.995C434.795 267.915 442.021 271.691 446.351 278.053L463.293 302.947C466.652 307.882 467.96 313.93 466.942 319.812L459.219 364.408C458.401 369.129 456.129 373.476 452.721 376.844L420.526 408.654C416.279 412.85 410.567 415.23 404.598 415.291L374.488 415.602C366.792 415.682 359.566 411.907 355.236 405.544L338.294 380.65C334.935 375.715 333.627 369.667 334.646 363.785L342.369 319.19C343.186 314.469 345.458 310.121 348.866 306.753L381.061 274.943C385.308 270.748 391.02 268.367 396.989 268.306L427.099 267.995Z"
            fill="#F3F3F3"
          />
          <path
            d="M531.561 228.914C536.054 238.209 533.803 249.359 526.055 256.183L523.285 258.623C519.222 262.202 514.026 264.232 508.612 264.357L477.984 265.061C474.563 265.14 471.168 264.454 468.046 263.055L440.091 250.522C435.149 248.307 431.148 244.419 428.792 239.544L427.185 236.22C422.693 226.925 424.944 215.775 432.691 208.952L435.461 206.512C439.525 202.933 444.721 200.902 450.135 200.778L480.763 200.073C484.183 199.995 487.578 200.68 490.7 202.08L518.656 214.612C523.597 216.828 527.598 220.715 529.955 225.591L531.561 228.914Z"
            fill="#F3F3F3"
          />
          <path
            d="M749.176 117.261C769.59 117.588 779.49 142.37 764.92 156.672L762.32 159.225C760.541 160.971 758.49 162.416 756.247 163.504L635.725 221.972C634.736 222.452 633.715 222.86 632.668 223.193L505.034 263.858C502.659 264.615 500.176 264.98 497.684 264.94L494.041 264.882C473.627 264.556 463.727 239.773 478.297 225.471L480.897 222.919C482.676 221.173 484.727 219.727 486.97 218.639L607.492 160.171C608.481 159.692 609.502 159.284 610.549 158.95L738.183 118.285C740.558 117.529 743.041 117.163 745.533 117.203L749.176 117.261Z"
            fill="#F3F3F3"
          />
          <path
            d="M492.643 663.869C487.642 678.51 467.73 680.456 459.989 667.06V667.06C458.939 665.241 458.214 663.253 457.848 661.186L442.257 573.116C442.049 571.94 441.932 570.75 441.909 569.557L440.158 480.135C440.116 478.035 440.443 475.945 441.122 473.957V473.957C446.123 459.316 466.035 457.371 473.775 470.767V470.767C474.826 472.585 475.551 474.573 475.917 476.641L491.508 564.711C491.716 565.886 491.832 567.076 491.856 568.27L493.607 657.692C493.648 659.791 493.322 661.882 492.643 663.869V663.869Z"
            fill="#F3F3F3"
          />
          <path
            d="M86.74 492.45C71.345 490.782 65.0868 471.755 76.4859 461.274V461.274C78.0286 459.855 79.807 458.717 81.741 457.91L164.488 423.373C165.587 422.914 166.721 422.541 167.877 422.258L254.97 400.934C257.006 400.435 259.113 400.296 261.196 400.522V400.522C276.591 402.19 282.85 421.217 271.451 431.698V431.698C269.908 433.117 268.13 434.255 266.195 435.062L183.448 469.599C182.349 470.058 181.216 470.431 180.059 470.714L92.9661 492.038C90.9305 492.537 88.8235 492.676 86.74 492.45V492.45Z"
            fill="#F3F3F3"
          />
          <path
            d="M627.599 2.93528C646.137 -5.50736 665.689 12.5355 658.76 31.6904L657.359 35.5658C656.506 37.9222 655.274 40.1235 653.712 42.0827L570.045 146.994C569.356 147.858 568.605 148.672 567.799 149.428L469.935 241.238C468.107 242.953 466.012 244.357 463.731 245.396L459.981 247.104C441.443 255.546 421.891 237.504 428.819 218.349L430.221 214.473C431.074 212.117 432.305 209.916 433.868 207.956L517.535 103.045C518.224 102.181 518.974 101.367 519.781 100.611L617.645 8.80079C619.473 7.0863 621.568 5.682 623.849 4.64339L627.599 2.93528Z"
            fill="#F3F3F3"
          />
          <ellipse
            cx="350.568"
            cy="479.702"
            rx="31.8609"
            ry="38.996"
            transform="rotate(14.4199 350.568 479.702)"
            fill="#F3F3F3"
          />
          <path
            d="M343.023 314.431C351.941 303.183 370.014 308.462 371.477 322.741L379.916 405.12C381.073 416.419 370.417 425.293 359.513 422.109L299.623 404.616C288.719 401.432 284.514 388.217 291.572 379.317L343.023 314.431Z"
            fill="#F3F3F3"
          />
          <path
            d="M430.038 340.38C438.957 329.133 457.029 334.411 458.492 348.69L466.931 431.069C468.089 442.369 457.432 451.242 446.528 448.058L386.638 430.565C375.735 427.381 371.529 414.166 378.587 405.266L430.038 340.38Z"
            fill="#F3F3F3"
          />
          <path
            d="M383.135 326.094C392.053 314.847 410.126 320.125 411.589 334.404L420.028 416.783C421.185 428.083 410.529 436.956 399.625 433.772L339.735 416.279C328.831 413.095 324.626 399.88 331.683 390.98L383.135 326.094Z"
            fill="#F3F3F3"
          />
          <circle cx="485.5" cy="718.5" r="28.5" fill="#B66DA3" />
          <circle cx="28.5" cy="497.5" r="28.5" fill="#BBCA88" />
        </svg>
        </Link>
    </div>
    <div className="navbar-item-list">
      <div className="navbar-items">
        <Link to="/tutorials" id="nav-item">tutorials</Link>
      </div>
      <div className="navbar-items">
        <a id="nav-item" href="training.html">
          training
        </a>
      </div>
      <div className="navbar-items">
        <a id="nav-item" href="terminology.html">
          terminology
        </a>
      </div>
      <div className="navbar-items">
        <a id="nav-item" href="#">
          skill tree
        </a>
      </div>
    </div>
  </div>
  {/*navbar code ^^*/}
  <div className="hero">
    <div className="hero-image-column-1"></div>
    <div className="hero-image-column-2"></div>
    <div className="hero-text">
      <div className="hero-title">Welcome to Wings.</div>
      <p className="hero-caption">
        Find all the calisthenics information you need in one place! Begin your
        calisthenics journey and achieve the skill of your dreams!
      </p>
    </div>
  </div>
  {/*hero code ^^*/}
  <div className="divider-line" />
  <div className="container">
    <div className="block-1-left"></div>
    <div className="block-1-text">
      <div className="block-1-text-title">What exactly is calisthenics?</div>
      <br />
      Calisthenics is a term used to describe a large variety of exercises, but
      the one thing they have in common is that all of them involve creating{" "}
      <strong>
        <i>resistance through body weight</i>
      </strong>
      . Whether you discovered calisthenics through seeing it at your local
      park, or saw a video on social media, it’s important you don’t rush the
      process. Despite how easy influencers make skills like the full planche
      look, in reality, it can take{" "}
      <strong>
        <i>a couple years</i>
      </strong>{" "}
      to accumulate the strength it takes to achieve that. Additionally, factors
      like height as weight can provide a significant handicap or advantage to
      learning certain skills.
      <br />
      <br />
      If you are starting calisthenics from <strong>ZERO</strong>, expect to be
      doing basic exercises for at least{" "}
      <strong>
        <i>6-12 months</i>
      </strong>
      . Depending on your starting fitness level, you may be able to move on to
      skill progressions faster, but basics are the single most important thing
      to master when you want to achieve high difficulty skills. The journey to
      your dream skill may last many years, but by following the right path,{" "}
      <strong>
        <i>no skill is impossible</i>
      </strong>
      .
    </div>
    <div className="block-1-right"></div>
  </div>
  <footer>
    <div className="footer-container">
      <div className="footer-section">
        <p>Quick Links</p>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="tutorials.html">Skills/Tutorials</a>
          </li>
          <li>
            <a href="#">Training Guides</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <p>Contact Us</p>
        <p className="footer-text">
          Email:{" "}
          <a id="footer-email" className="link-text" href="#">
            example123@gmail.com
          </a>
        </p>
        <div className="social-media">
          <p className="footer-text">Instagram:</p>
          <a className="center-svg" href="#">
            <svg
              className="insta-svg"
              viewBox="0 0 2272 2272"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={2272} height={2272} rx={674} fill="#919191" />
              <rect
                x={171}
                y={184}
                width={1930}
                height={1930}
                rx={597}
                fill="#333333"
              />
              <circle cx={1136} cy={1149} r={598} fill="#919191" />
              <circle cx="1756.5" cy="577.5" r="118.5" fill="#919191" />
              <circle cx={1136} cy={1149} r={420} fill="#333333" />
            </svg>
          </a>
        </div>
      </div>
      <div className="footer-section">
        <p>Newsletter</p>
        <form action="#">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-section">
        <p>Resources</p>
        <ul>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <p>Recommended Equipment</p>
        <ul>
          <li>
            <a href="#">Resistance Bands</a>
          </li>
          <li>
            <a href="#">Parallettes</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2024 yappatron. All rights reserved.</p>
      <a href="/privacy-policy">Privacy Policy</a> |{" "}
      <a href="/terms-of-service">Terms of Service</a>
    </div>
  </footer>
</>



    );
};

export default Home;