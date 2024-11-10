import React from "react";
import "./Loader.css";
import img1 from "../assets/loader/img1-lossy.png";
import img2 from "../assets/loader/img2-lossy.png";
import img3 from "../assets/loader/img3-lossy.png";

const Loader = () => {
  return (
    <>
      {/* <div className="blast-dot"></div> */}
      <div className="loader-main">
        <svg
          viewBox="0 0 1280 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <!-- <rect width="1280" height="720" fill="white"/> --> */}

          {/* <path class="outer_ring" d="M842 360C842 471.562 751.562 562 640 562C528.438 562 438 471.562 438 360C438 248.438 528.438 158 640 158C751.562 158 842 248.438 842 360ZM440.239 360C440.239 470.325 529.675 559.761 640 559.761C750.325 559.761 839.761 470.325 839.761 360C839.761 249.675 750.325 160.239 640 160.239C529.675 160.239 440.239 249.675 440.239 360Z" fill="white"/> */}
          <circle
            className="third_circle1"
            cx="639.69"
            cy="360.219"
            r="201.127"
            transform="rotate(0 0 0)"
            stroke="url(#img3)"
            strokeWidth="4"
          />

          <defs>
            <pattern
              id="img1"
              patternUnits="userSpaceOnUse"
              width="100"
              height="100"
            >
              <image
                href={img1}
                x="0"
                y="0"
                width="80"
                height="100"
              />
            </pattern>
            <pattern
              id="img12"
              patternUnits="userSpaceOnUse"
              width="100"
              height="100"
            >
              <image
                href={img1}
                x="0"
                y="-12"
                width="180"
                height="122"
              />
            </pattern>
            <pattern
              id="img2"
              patternUnits="userSpaceOnUse"
              width="130"
              height="100"
            >
              <image
                href={img1}
                x="60"
                y="-13"
                width="60"
                height="120"
              />
            </pattern>
            <pattern
              id="img3"
              patternUnits="userSpaceOnUse"
              width="130"
              height="100"
            >
              <image
                href={img2}
                x="-37"
                y="-1"
                width="220"
                height="220"
              />
            </pattern>
            <pattern
              id="img3"
              patternUnits="userSpaceOnUse"
              width="130"
              height="100"
            >
              <image
                href={img2}
                x="-37"
                y="-1"
                width="220"
                height="220"
              />
            </pattern>
            <pattern
              id="img4"
              patternUnits="userSpaceOnUse"
              width="130"
              height="100"
            >
              <image
                href={img3}
                x="-37"
                y="-1"
                width="220"
                height="220"
              />
            </pattern>
            <pattern
              id="img5"
              patternUnits="userSpaceOnUse"
              width="130"
              height="100"
            >
              <image
                href={img3}
                x="0"
                y="-13"
                width="220"
                height="220"
              />
            </pattern>
          </defs>

          <rect
            className="centre"
            x="583.734"
            y="303.734"
            width="111.828"
            height="111.828"
            stroke="url(#img3)"
            strokeWidth="1.4682"
          />
          <rect
            className="centre2"
            x="583.734"
            y="303.734"
            width="111.828"
            height="111.828"
            transform="rotate(-45 0 0)"
            stroke="url(#img3)"
            strokeWidth="1.4682"
          />
          {/* <!-- <rect className="centre" x="561.038" y="360.112" width="111.828" height="111.828" stroke="white" strokeWidth="1.4682"/> --> */}
          <circle
            className="centre"
            cx="640.257"
            cy="360.257"
            r="84.911"
            stroke="url(#img3)"
            strokeWidth="2.6917"
          />
          <circle
            className="centre"
            cx="639.506"
            cy="359.506"
            r="79.6499"
            stroke="url(#img3)"
            strokeWidth="1.7129"
          />
          <circle
            className="centre"
            cx="640.224"
            cy="360.224"
            r="75.49"
            stroke="url(#img3)"
            strokeWidth="1.4682"
          />

          <circle
            className="third_circle"
            cx="639.69"
            cy="363.219"
            r="121.127"
            transform="rotate(0 0 0)"
            stroke="url(#img3)"
            strokeWidth="1.4682"
          />
          <circle
            className="third_circle"
            cx="596.016"
            cy="474.937"
            r="15.0491"
            transform="rotate(0 0 0)"
            strokeWidth="3"
            stroke="url(#img12)"
          />
          <circle
            className="third_circle"
            cx="722.903"
            cy="450.151"
            r="15.0491"
            transform="rotate(0 0 0)"
            strokeWidth="3"
            stroke="url(#img1)"
          />
          <circle
            className="third_circle"
            cx="749.972"
            cy="311.84"
            r="15.0491"
            transform="rotate(0 0 0)"
            strokeWidth="3"
            stroke="url(#img12)"
          />
          <circle
            className="third_circle"
            cx="606.871"
            cy="246.71"
            r="15.0491"
            transform="rotate(0 0 0)"
            strokeWidth="3"
            stroke="url(#img2)"
          />
          <circle
            className="third_circle"
            cx="521.22"
            cy="354.945"
            r="15.0491"
            transform="rotate(0 0 0)"
            strokeWidth="3"
            stroke="url(#img1)"
          />
          <path
            className="second_circle"
            d="M805.694 420.092C772.325 511.783 670.944 559.062 579.253 525.693C487.562 492.325 440.283 390.944 473.652 299.253C507.021 207.562 608.401 160.282 700.092 193.651C791.783 227.02 839.063 328.401 805.694 420.092ZM475.416 299.895C442.402 390.611 489.179 490.915 579.895 523.929C670.612 556.943 770.916 510.166 803.93 419.45C836.944 328.733 790.167 228.43 699.45 195.415C608.734 162.401 508.43 209.178 475.416 299.895Z"
            fill="url(#img3)"
          />
          <path
            className="second_circle"
            d="M644.119 188.744C642.685 189.778 640.899 190.2 639.153 189.916C637.408 189.633 635.847 188.668 634.813 187.233C633.78 185.799 633.358 184.012 633.642 182.267C633.925 180.522 634.89 178.961 636.325 177.927L640.222 183.336L644.119 188.744Z"
            fill="url(#img4)"
          />
          <path
            className="second_circle"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M646.257 175.584C642.767 175.017 639.194 175.86 636.325 177.927L644.12 188.744C645.554 187.711 647.341 187.289 649.086 187.573C650.831 187.856 652.392 188.821 653.426 190.256C654.46 191.69 654.881 193.477 654.598 195.222C654.314 196.967 653.349 198.528 651.915 199.562C654.784 197.495 656.714 194.372 657.281 190.882C657.848 187.391 657.005 183.819 654.937 180.95C652.87 178.081 649.748 176.15 646.257 175.584Z"
            fill="url(#img4)"
          />
          <path
            className="second_circle"
            d="M806.591 327.505C805.007 326.72 803.799 325.338 803.234 323.663C802.668 321.988 802.792 320.156 803.576 318.572C804.361 316.988 805.743 315.78 807.418 315.214C809.094 314.649 810.925 314.772 812.509 315.557L809.55 321.531L806.591 327.505Z"
            fill="url(#img4)"
          />
          <path
            className="second_circle"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M819.224 323.241C818.093 319.89 815.678 317.126 812.509 315.557L806.591 327.505C808.175 328.29 809.383 329.672 809.949 331.347C810.514 333.022 810.391 334.854 809.606 336.438C808.821 338.022 807.439 339.23 805.764 339.796C804.089 340.361 802.258 340.238 800.673 339.453C803.842 341.023 807.505 341.269 810.855 340.138C814.206 339.007 816.97 336.592 818.539 333.423C820.109 330.254 820.355 326.592 819.224 323.241Z"
            fill="url(#img4)"
          />
          <path
            className="second_circle"
            d="M525.901 485.241C527.568 484.651 529.4 484.747 530.996 485.509C532.592 486.271 533.82 487.635 534.409 489.302C534.999 490.968 534.903 492.801 534.141 494.397C533.379 495.993 532.015 497.22 530.348 497.81L528.125 491.525L525.901 485.241Z"
            fill="url(#img4)"
          />
          <path
            className="second_circle"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M520.157 497.274C523.349 498.797 527.014 498.99 530.348 497.81L525.9 485.241C524.234 485.83 522.401 485.734 520.805 484.972C519.209 484.211 517.982 482.846 517.392 481.18C516.802 479.513 516.898 477.68 517.66 476.084C518.422 474.489 519.786 473.261 521.453 472.671C518.119 473.851 515.391 476.306 513.867 479.497C512.344 482.689 512.151 486.355 513.331 489.688C514.51 493.022 516.966 495.75 520.157 497.274Z"
            fill="url(#img4)"
          />
          <path
            className="second_circle"
            d="M727.336 504.063C728.288 502.574 729.794 501.524 731.521 501.144C733.248 500.765 735.055 501.087 736.544 502.04C738.034 502.992 739.084 504.498 739.463 506.225C739.843 507.951 739.521 509.758 738.568 511.248L732.952 507.656L727.336 504.063Z"
            fill="url(#img5)"
          />
          <path
            className="second_circle"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M730.198 517.086C733.652 516.327 736.663 514.227 738.568 511.248L727.336 504.063C726.384 505.553 724.878 506.603 723.151 506.982C721.424 507.362 719.617 507.04 718.128 506.087C716.638 505.134 715.588 503.629 715.209 501.902C714.829 500.175 715.151 498.368 716.104 496.879C714.199 499.858 713.555 503.472 714.314 506.925C715.073 510.379 717.173 513.39 720.152 515.295C723.131 517.201 726.744 517.845 730.198 517.086Z"
            fill="url(#img5)"
          />
          <path
            className="second_circle"
            d="M479.124 299.04C479.393 300.788 478.956 302.57 477.91 303.996C476.865 305.422 475.295 306.374 473.548 306.642C471.8 306.911 470.017 306.474 468.592 305.429C467.166 304.383 466.214 302.814 465.946 301.066L472.535 300.053L479.124 299.04Z"
            fill="url(#img5)"
          />
          <path
            className="second_circle"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M468.373 291.154C466.282 294.005 465.409 297.571 465.946 301.066L479.124 299.04C478.856 297.293 479.292 295.51 480.338 294.084C481.384 292.658 482.953 291.707 484.701 291.438C486.448 291.169 488.231 291.606 489.657 292.652C491.082 293.697 492.034 295.267 492.303 297.014C491.766 293.519 489.862 290.381 487.01 288.289C484.159 286.197 480.594 285.324 477.098 285.862C473.603 286.399 470.465 288.303 468.373 291.154Z"
            fill="url(#img4)"
          />
        </svg>
      </div>
    </>
  );
};

export default Loader;
