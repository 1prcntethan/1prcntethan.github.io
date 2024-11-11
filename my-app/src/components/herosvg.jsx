import React from "react";
import { Link } from "react-router-dom";
import "./herosvg.css";

export default function HeroSvg(skill) {
  if (skill.identifier === "planche-lean") {
    return (
      <div className="hero-svg-container">
        <svg
          className="hero-svg"
          viewBox="0 0 727 321"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="275" cy="282" r="24" fill="#BBCA88" />
          <path
            d="M272.932 234.168C272.86 250.235 256.755 261.279 241.741 255.557L240.937 255.251C237.429 253.914 234.301 251.738 231.827 248.913L184.98 195.428C183.784 194.062 182.754 192.56 181.911 190.953L148.899 127.981C147.156 124.656 146.253 120.954 146.27 117.199L146.274 116.338C146.346 100.271 162.451 89.2276 177.464 94.9496L178.268 95.2561C181.777 96.5933 184.905 98.7692 187.379 101.594L234.226 155.079C235.421 156.444 236.452 157.947 237.294 159.554L270.307 222.526C272.05 225.851 272.953 229.553 272.936 233.308L272.932 234.168Z"
            fill="#7B7A7A"
          />
          <path
            d="M344.155 94.6476C347.351 103.732 344.549 113.846 337.133 119.99L312.752 140.192C308.45 143.757 302.998 145.633 297.413 145.472L231.667 143.573C227.948 143.466 224.311 142.458 221.068 140.636L163.72 108.426C158.849 105.691 155.14 101.275 153.287 96.0051L142.78 66.1357C139.584 57.0511 142.387 46.9376 149.802 40.7933L174.183 20.5912C178.485 17.0267 183.938 15.1499 189.522 15.3112L255.268 17.2102C258.987 17.3176 262.624 18.3254 265.868 20.1471L323.215 52.3568C328.086 55.0927 331.795 59.508 333.649 64.7782L344.155 94.6476Z"
            fill="#F3F3F3"
          />
          <path
            d="M467.176 122.798C469.673 129.695 468.731 137.369 464.639 143.457L454.363 158.748C451.006 163.743 445.825 167.223 439.931 168.442L412.156 174.185C407.216 175.207 402.077 174.576 397.531 172.389L371.971 160.098C366.547 157.489 362.362 152.859 360.313 147.2L354.041 129.877C351.544 122.981 352.486 115.306 356.578 109.218L366.854 93.928C370.211 88.9327 375.392 85.4523 381.286 84.2336L409.061 78.4906C414.001 77.4691 419.14 78.1 423.686 80.2863L449.246 92.5781C454.67 95.1864 458.855 99.8169 460.904 105.476L467.176 122.798Z"
            fill="#F3F3F3"
          />
          <path
            d="M721.273 244.92C733.487 259.064 724.628 281.099 706.022 282.851L684.15 284.911C681.18 285.191 678.183 284.89 675.328 284.025L535.063 241.553C533.767 241.161 532.508 240.655 531.301 240.041L400.674 173.597C398.015 172.244 395.644 170.387 393.694 168.129L379.335 151.503C367.121 137.358 375.98 115.323 394.586 113.571L416.458 111.511C419.428 111.232 422.425 111.532 425.28 112.397L565.545 154.869C566.841 155.261 568.1 155.768 569.307 156.382L699.934 222.825C702.593 224.178 704.964 226.035 706.914 228.293L721.273 244.92Z"
            fill="#F3F3F3"
          />
          <circle cx="338.5" cy="292.5" r="28.5" fill="#B66DA3" />
          <path
            d="M111.935 62.6492C117.16 86.9467 96.6643 111.961 66.1575 118.521C35.6507 125.081 6.68469 110.702 1.46005 86.4045C-3.76459 62.107 16.7306 37.0923 47.2374 30.5325C77.7442 23.9726 106.71 38.3518 111.935 62.6492Z"
            fill="#F3F3F3"
          />
          <rect
            x="136.36"
            y="31.5083"
            width="131"
            height="97"
            rx="21"
            transform="rotate(8.48778 136.36 31.5083)"
            fill="#F3F3F3"
          />
          <rect
            x="141.379"
            y="-2.11938"
            width="131"
            height="97"
            rx="21"
            transform="rotate(8.48778 141.379 -2.11938)"
            fill="#F3F3F3"
          />
          <path
            d="M253.798 148.25C251.853 161.951 238.338 170.845 224.985 167.211L223.632 166.843C219.366 165.681 215.525 163.315 212.569 160.027L177.514 121.036C175.971 119.32 174.695 117.381 173.729 115.284L151.786 67.6637C149.936 63.6481 149.283 59.1842 149.904 54.8067L150.101 53.4185C152.045 39.7176 165.561 30.8234 178.913 34.4577L180.266 34.8259C184.532 35.9871 188.373 38.3534 191.329 41.6413L226.384 80.6324C227.928 82.3489 229.204 84.288 230.17 86.3845L252.112 134.005C253.962 138.021 254.616 142.484 253.995 146.862L253.798 148.25Z"
            fill="#AAAAAA"
          />
          <path
            d="M323.951 239.178C324.499 255.236 308.833 266.893 293.609 261.755L292.794 261.48C289.236 260.279 286.027 258.225 283.445 255.499L234.569 203.862C233.321 202.544 232.234 201.083 231.329 199.509L195.91 137.859C194.04 134.603 192.995 130.939 192.866 127.186L192.837 126.326C192.289 110.268 207.955 98.611 223.179 103.749L223.994 104.024C227.552 105.225 230.761 107.279 233.343 110.006L282.219 161.642C283.467 162.96 284.554 164.421 285.459 165.995L320.878 227.645C322.748 230.901 323.793 234.565 323.921 238.318L323.951 239.178Z"
            fill="#AAAAAA"
          />
        </svg>
      </div>
    );
  } else if (skill.identifier === "push-up") {
    return (
      <div className="hero-svg-container">
        <svg
          className="hero-svg"
          viewBox="0 0 743 281"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="165" cy="240" r="24" fill="#BBCA88" />
          <path
            d="M203.804 209.363C191.108 219.211 172.485 213.338 167.735 197.989L167.48 197.167C166.37 193.58 166.155 189.775 166.854 186.086L180.089 116.229C180.427 114.445 180.975 112.708 181.721 111.054L210.953 46.2406C212.497 42.8178 214.855 39.8249 217.822 37.5235L218.502 36.9961C231.198 27.1483 249.821 33.0211 254.571 48.3701L254.826 49.1921C255.936 52.7792 256.151 56.5835 255.452 60.2728L242.217 130.13C241.879 131.914 241.331 133.651 240.585 135.305L211.353 200.118C209.809 203.541 207.451 206.534 204.484 208.835L203.804 209.363Z"
            fill="#7B7A7A"
          />
          <path
            d="M339.839 65.7774C344.34 74.2908 343.061 84.7072 336.634 91.8788L315.501 115.458C311.773 119.619 306.657 122.28 301.11 122.944L235.803 130.77C232.11 131.213 228.364 130.753 224.887 129.43L163.413 106.037C158.192 104.05 153.872 100.231 151.261 95.292L136.46 67.3005C131.959 58.7871 133.238 48.3707 139.665 41.1992L160.798 17.6198C164.526 13.4594 169.642 10.7983 175.189 10.1336L240.495 2.30772C244.189 1.86509 247.935 2.32504 251.412 3.6481L312.885 27.0406C318.107 29.0276 322.427 32.8471 325.038 37.786L339.839 65.7774Z"
            fill="#F3F3F3"
          />
          <path
            d="M467.176 85.0266C469.673 91.9235 468.731 99.5977 464.639 105.686L454.363 120.976C451.006 125.971 445.825 129.452 439.931 130.67L412.156 136.414C407.216 137.435 402.077 136.804 397.531 134.618L371.971 122.326C366.547 119.718 362.362 115.087 360.313 109.428L354.041 92.1059C351.544 85.209 352.486 77.5348 356.578 71.4469L366.854 56.1564C370.211 51.1611 375.392 47.6807 381.286 46.462L409.061 40.7189C414.001 39.6975 419.14 40.3284 423.686 42.5147L449.246 54.8065C454.67 57.4148 458.855 62.0453 460.904 67.7044L467.176 85.0266Z"
            fill="#F3F3F3"
          />
          <path
            d="M734.11 151.084C748.658 162.816 743.882 186.08 725.889 191.132L704.739 197.07C701.866 197.877 698.865 198.117 695.901 197.777L550.301 181.077C548.955 180.923 547.626 180.65 546.329 180.262L405.924 138.253C403.066 137.398 400.401 135.995 398.079 134.122L380.978 120.332C366.431 108.6 371.206 85.336 389.199 80.2842L410.349 74.3457C413.222 73.5392 416.224 73.2993 419.188 73.6392L564.787 90.3389C566.133 90.4932 567.462 90.766 568.759 91.1542L709.164 133.163C712.022 134.018 714.687 135.421 717.009 137.294L734.11 151.084Z"
            fill="#F3F3F3"
          />
          <circle cx="214.5" cy="252.5" r="28.5" fill="#B66DA3" />
          <ellipse
            cx="56.6975"
            cy="68.872"
            rx="56.5"
            ry="45"
            transform="rotate(-12.1354 56.6975 68.872)"
            fill="#F3F3F3"
          />
          <rect x="125" y="34" width="131" height="97" rx="21" fill="#F3F3F3" />
          <rect x="125" width="131" height="97" rx="21" fill="#F3F3F3" />
          <path
            d="M288.412 25.5556C300.474 32.3372 303.861 48.1582 295.631 59.2832L294.797 60.4103C292.167 63.9648 288.569 66.686 284.433 68.2482L235.382 86.7732C233.222 87.5888 230.953 88.0746 228.648 88.2144L176.312 91.3895C171.899 91.6573 167.502 90.6473 163.648 88.4805L162.426 87.7934C150.363 81.0118 146.977 65.1908 155.207 54.0659L156.041 52.9387C158.67 49.3842 162.269 46.663 166.405 45.1008L215.456 26.5758C217.615 25.7602 219.885 25.2744 222.189 25.1346L274.525 21.9595C278.939 21.6917 283.336 22.7017 287.19 24.8685L288.412 25.5556Z"
            fill="#AAAAAA"
          />
          <path
            d="M245.804 209.363C233.108 219.211 214.485 213.338 209.735 197.989L209.48 197.167C208.37 193.58 208.155 189.775 208.854 186.086L222.089 116.229C222.427 114.445 222.975 112.708 223.721 111.054L252.953 46.2406C254.497 42.8178 256.855 39.8249 259.822 37.5235L260.502 36.9961C273.198 27.1483 291.821 33.0211 296.571 48.3701L296.826 49.1921C297.936 52.7792 298.151 56.5835 297.452 60.2728L284.217 130.13C283.879 131.914 283.331 133.651 282.585 135.305L253.353 200.118C251.809 203.541 249.451 206.534 246.484 208.835L245.804 209.363Z"
            fill="#AAAAAA"
          />
        </svg>
      </div>
    );
  }
}
