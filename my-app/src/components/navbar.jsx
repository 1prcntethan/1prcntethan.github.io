import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
          <div className="navbar__logo">
            <Link to = "/">
              <svg className="navbar__logo--svg" viewBox="65 110 950 950" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M617.531 559.383C619.306 568.829 615.02 578.384 606.784 583.339L599.528 587.704C595.086 590.376 589.872 591.47 584.731 590.807L548.514 586.14C545.573 585.761 542.733 584.816 540.15 583.359L502.153 561.916C499.029 560.153 496.36 557.684 494.361 554.705L481.636 535.751C477.213 529.162 476.499 520.758 479.748 513.517L480.913 510.92C484.161 503.679 490.913 498.625 498.776 497.547L521.394 494.449C524.948 493.962 528.567 494.313 531.961 495.475L573.242 509.598C576.047 510.558 578.641 512.052 580.88 513.997L608.447 537.945C612.36 541.345 615.01 545.966 615.967 551.061L617.531 559.383Z" fill="#F3F3F3"/>
                <circle cx="534.868" cy="1005.3" r="28.5" transform="rotate(-7.24832 534.868 1005.3)" fill="#B66DA3"/>
                <path d="M452.071 745.71C474.528 756.357 481.896 787.845 468.528 816.041C455.16 844.237 426.118 858.462 403.661 847.815C381.205 837.168 373.837 805.68 387.205 777.484C400.573 749.289 429.615 735.063 452.071 745.71Z" fill="#F3F3F3"/>
                <path d="M596.653 465.575C619.11 476.222 628.586 503.263 617.819 525.973C607.051 548.683 580.118 558.462 557.661 547.815C535.205 537.168 525.729 510.127 536.496 487.417C547.263 464.707 574.196 454.928 596.653 465.575Z" fill="#F3F3F3"/>
                <path d="M549.23 960.942C541.184 970.79 526.376 971.491 517.435 962.448V962.448C514.508 959.488 512.508 955.739 511.679 951.66L502.741 907.665C502.273 905.361 502.161 902.998 502.41 900.659L507.148 856.017C507.587 851.877 509.224 847.956 511.858 844.732V844.732C519.904 834.884 534.712 834.183 543.654 843.226V843.226C546.58 846.186 548.58 849.935 549.409 854.014L558.347 898.009C558.815 900.314 558.927 902.677 558.679 905.015L553.94 949.658C553.501 953.797 551.864 957.718 549.23 960.942V960.942Z" fill="#AAAAAA"/>
                <path d="M520.953 581.758C527.848 582.025 534.26 585.375 538.418 590.883L560.508 620.144C564.162 624.983 565.756 631.07 564.945 637.079L558.933 681.611C558.213 686.941 555.648 691.851 551.684 695.486L518.563 725.855C514.094 729.953 508.187 732.121 502.128 731.886L465.492 730.465C458.596 730.197 452.185 726.848 448.027 721.34L425.937 692.079C422.283 687.239 420.688 681.153 421.5 675.144L427.512 630.612C428.232 625.281 430.797 620.372 434.761 616.737L467.881 586.368C472.351 582.269 478.258 580.102 484.317 580.337L520.953 581.758Z" fill="#F3F3F3"/>
                <path d="M428.023 624.862C436.941 613.615 455.014 618.893 456.477 633.173L464.916 715.551C466.073 726.851 455.417 735.725 444.513 732.54L384.623 715.048C373.719 711.863 369.514 698.648 376.572 689.748L428.023 624.862Z" fill="#F3F3F3"/>
                <path d="M458.234 587.924C467.164 576.837 485.039 582.058 486.598 596.209L495.443 676.497C496.692 687.839 486.007 696.806 475.053 693.607L415.541 676.225C404.587 673.026 400.408 659.717 407.566 650.83L458.234 587.924Z" fill="#F3F3F3"/>
                <path d="M457.878 693.462C445.353 699.841 431.28 688.128 435.278 674.654L459.746 592.191C463.014 581.174 476.487 577.093 485.32 584.444L537.5 627.872C546.333 635.223 544.767 649.212 534.526 654.427L457.878 693.462Z" fill="#F3F3F3"/>
                <path d="M534.895 658.304C546.346 650.571 561.555 660.012 559.706 673.706L547.963 760.639C546.41 772.134 533.524 778.209 523.669 772.091L462.714 734.253C452.859 728.136 452.585 713.892 462.198 707.4L534.895 658.304Z" fill="#F3F3F3"/>
                <path d="M488.543 644.031C498.471 633.664 515.972 640.603 516.098 654.957L516.825 737.764C516.924 749.122 505.487 756.964 494.928 752.777L436.928 729.78C426.369 725.594 423.413 712.045 431.269 703.841L488.543 644.031Z" fill="#F3F3F3"/>
                <path d="M482.404 529.244C484.557 543.588 499.288 552.382 512.936 547.471L528.817 541.757C532.79 540.327 536.293 537.831 538.942 534.543L593.58 466.709C594.928 465.036 596.034 463.182 596.868 461.202L630.651 380.918C632.288 377.026 632.823 372.759 632.196 368.583L629.69 351.892C627.537 337.548 612.806 328.754 599.158 333.665L583.277 339.38C579.303 340.809 575.8 343.305 573.152 346.594L518.514 414.427C517.166 416.1 516.059 417.954 515.226 419.934L481.443 500.218C479.805 504.11 479.271 508.378 479.898 512.553L482.404 529.244Z" fill="#F3F3F3"/>
                <path d="M561.585 564.681C563.63 579.215 578.582 588.141 592.346 583.044L608.301 577.137C612.212 575.689 615.656 573.205 618.264 569.95L673.942 500.459C675.261 498.814 676.347 496.994 677.17 495.053L711.917 413.067C713.545 409.227 714.098 405.017 713.516 400.887L711.145 384.04C709.1 369.505 694.148 360.58 680.384 365.676L664.429 371.583C660.518 373.031 657.074 375.516 654.466 378.771L598.787 448.261C597.469 449.907 596.383 451.726 595.56 453.668L560.812 535.653C559.185 539.493 558.632 543.704 559.213 547.834L561.585 564.681Z" fill="#F3F3F3"/>
                <path d="M757.75 164.965C759.341 146.693 739.953 134 723.842 142.767L716.932 146.528C714.223 148.002 711.839 150.006 709.92 152.42L640.554 239.704C639.677 240.808 638.903 241.99 638.243 243.235L585.991 341.723C584.545 344.447 583.663 347.434 583.395 350.506L582.713 358.344C581.121 376.617 600.51 389.31 616.62 380.542L623.53 376.781C626.239 375.307 628.624 373.303 630.542 370.889L699.908 283.605C700.785 282.502 701.559 281.32 702.22 280.074L754.472 181.586C755.917 178.862 756.8 175.875 757.067 172.803L757.75 164.965Z" fill="#F3F3F3"/>
                <path d="M802.936 179.898C801.256 162.046 780.701 152.896 766.312 163.596L760.144 168.183C757.574 170.094 755.431 172.522 753.853 175.31L701.725 267.407C700.998 268.693 700.396 270.045 699.928 271.446L666.383 371.816C665.368 374.854 664.998 378.071 665.298 381.26L666.018 388.912C667.697 406.765 688.253 415.915 702.642 405.215L708.81 400.628C711.38 398.716 713.523 396.289 715.101 393.501L767.228 301.403C767.956 300.118 768.558 298.766 769.026 297.365L802.571 196.995C803.586 193.957 803.955 190.74 803.656 187.551L802.936 179.898Z" fill="#F3F3F3"/>
                <path d="M543.544 859.246C534.931 868.844 520.111 869.486 510.7 860.668L509.481 859.527C506.052 856.313 503.689 852.127 502.711 847.53L493.224 802.942C492.692 800.441 492.58 797.869 492.894 795.331L498.49 750.09C499.067 745.426 501.059 741.05 504.198 737.553L505.313 736.31C513.926 726.711 528.747 726.069 538.158 734.887L539.376 736.029C542.805 739.242 545.168 743.429 546.146 748.026L555.633 792.614C556.165 795.115 556.277 797.687 555.963 800.224L550.367 845.466C549.79 850.13 547.798 854.505 544.659 858.003L543.544 859.246Z" fill="#AAAAAA"/>
                <path d="M372.941 571.966C383.1 562.944 398.825 564.648 406.816 575.636L407.681 576.826C410.325 580.462 411.846 584.793 412.055 589.285L414.403 639.787C414.513 642.156 414.256 644.528 413.641 646.819L400.532 695.646C399.366 699.989 396.953 703.894 393.591 706.879L392.492 707.856C382.333 716.879 366.608 715.175 358.617 704.186L357.752 702.997C355.108 699.361 353.587 695.029 353.379 690.538L351.031 640.036C350.92 637.666 351.177 635.294 351.792 633.004L364.902 584.176C366.067 579.834 368.48 575.929 371.842 572.943L372.941 571.966Z" fill="#7B7A7A"/>
                <path d="M396.869 595.457C384.527 594.53 375.131 584.002 375.609 571.634L375.679 569.805C375.866 564.958 377.581 560.294 380.578 556.481L406.538 523.448C408.211 521.319 410.246 519.503 412.55 518.082L448.312 496.031C452.44 493.485 457.268 492.31 462.105 492.673L463.931 492.81C476.273 493.737 485.669 504.265 485.191 516.633L485.121 518.462C484.934 523.309 483.219 527.973 480.222 531.787L454.262 564.819C452.589 566.948 450.554 568.764 448.25 570.185L412.488 592.236C408.36 594.782 403.532 595.957 398.695 595.594L396.869 595.457Z" fill="#7B7A7A"/>
                <circle cx="502" cy="483" r="24" fill="#BBCA88"/>
              </svg>
            </Link>
          </div>
          <div className="navbar__list">
            <div className="navbar__list--items navbar__list--pink">
              <Link to = "/tutorials" id="nav-item">tutorials</Link>
            </div>
            <div className="navbar__list--items navbar__list--green">
              <Link to = "/training" id="nav-item">training</Link>
            </div>
            <div className="navbar__list--items navbar__list--pink">
              <Link to = "/terminology" id="nav-item">terminology</Link>
            </div>
            <div className="navbar__list--items navbar__list--green">
              <Link to = "/skilltree" id="nav-item">skill tree</Link>
            </div>
            {/* <div className="navbar__list--items navbar__list--pink">
              <Link to = "/skillvis" id="nav-item">skillvis</Link>
            </div> */}
          </div>
        </div>
    )
}

export default Navbar;