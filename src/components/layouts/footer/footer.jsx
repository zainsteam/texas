import style from "./footer.module.scss";
import logo from "../../../assets/Compressed/logo-min.webp";
import Copyright from "../copyright/copyright";
import doordash from "../../../assets/Compressed/Doordash-min.webp";
import UberEat from "../../../assets/Compressed/Uber_Eats-min.webp";
import Grubhub from "../../../assets/Compressed/Grubhub-min.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={`${style["footer"]}`}>
        <div className={`${style["main"]}`}>
          <div className={`${style["links"]}`}>
            <img src={logo} alt="" />
            <p>
              <i className="fa-solid fa-location-dot"></i> 17124 East Freeway,
              Channelview <br />
              Tx 77530 Houston, Texas 77530
            </p>
            <a href="mailto:tex4cafe@gmail.com">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="black"
              >
                <path
                  d="M14.75 14.75H3.5C2.125 14.75 1 13.625 1 12.25V3.5C1 2.125 2.125 1 3.5 1H14.75C16.125 1 17.25 2.125 17.25 3.5V12.25C17.25 13.625 16.125 14.75 14.75 14.75Z"
                  stroke="#EFEFEF"
                  strokeWidth="1.3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M1 6L9.125 11L17.25 6"
                  stroke="#EFEFEF"
                  strokeWidth="1.3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>{" "}
              tx4cafe@gmail.com
            </a>
            <a href="tel:8326942440">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="16"
                viewBox="0 0 18 16"
                fill="black"
              >
                {" "}
                <path
                  d="M14.2587 10.9467V12.9467C14.2595 13.1324 14.2215 13.3162 14.1471 13.4863C14.0727 13.6564 13.9636 13.8091 13.8268 13.9346C13.69 14.0602 13.5285 14.1557 13.3526 14.2152C13.1767 14.2747 12.9903 14.2968 12.8054 14.2801C10.754 14.0572 8.78341 13.3562 7.05208 12.2334C5.4413 11.2098 4.07564 9.84418 3.05208 8.2334C1.9254 6.4942 1.22424 4.51406 1.00541 2.4534C0.988751 2.26904 1.01066 2.08324 1.06974 1.90781C1.12883 1.73239 1.22379 1.57119 1.34859 1.43448C1.47339 1.29777 1.62528 1.18854 1.79461 1.11375C1.96393 1.03895 2.14697 1.00024 2.33208 1.00006H4.33208C4.65562 0.99688 4.96927 1.11145 5.21459 1.32242C5.4599 1.53339 5.62013 1.82636 5.66541 2.14673C5.74983 2.78678 5.90638 3.41522 6.13208 4.02006C6.22177 4.25868 6.24119 4.51801 6.18802 4.76732C6.13485 5.01663 6.01132 5.24547 5.83208 5.42673L4.98541 6.2734C5.93445 7.94243 7.31638 9.32436 8.98541 10.2734L9.83208 9.42673C10.0133 9.24749 10.2422 9.12396 10.4915 9.07079C10.7408 9.01762 11.0001 9.03704 11.2387 9.12673C11.8436 9.35243 12.472 9.50898 13.1121 9.5934C13.4359 9.63909 13.7317 9.8022 13.9431 10.0517C14.1545 10.3013 14.2669 10.6198 14.2587 10.9467Z"
                  stroke="#EFEFEF"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </svg>{" "}
              (832) 694-2440
            </a>
            <div className={`${style["footer_links"]}`}>
              <a
                target="_blank"
                href="https://www.facebook.com/TexasForeverRestaurant/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="23"
                  viewBox="0 0 11 23"
                  fill="none"
                >
                  <path
                    d="M6.90132 22.2431V11.1203H9.97172L10.3786 7.28725H6.90132L6.90654 5.3688C6.90654 4.3691 7.00153 3.83343 8.43739 3.83343H10.3569V0H7.28605C3.59749 0 2.29921 1.85942 2.29921 4.98637V7.28769H0V11.1207H2.29921V22.2431H6.90132Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
              <a href="" target="_blank">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/texasforeverrestaurant/?igshid=b8r2lc07yqud"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M16.6495 6.84396C17.327 6.84396 17.8762 6.29476 17.8762 5.61729C17.8762 4.93982 17.327 4.39062 16.6495 4.39062C15.972 4.39062 15.4229 4.93982 15.4229 5.61729C15.4229 6.29476 15.972 6.84396 16.6495 6.84396Z"
                    fill="white"
                  ></path>
                  <path
                    d="M11.1925 5.82422C10.1543 5.82422 9.13944 6.13207 8.27622 6.70885C7.41301 7.28563 6.74022 8.10543 6.34293 9.06458C5.94563 10.0237 5.84168 11.0792 6.04422 12.0974C6.24676 13.1156 6.74669 14.0509 7.48079 14.785C8.21489 15.5191 9.15019 16.019 10.1684 16.2216C11.1867 16.4241 12.2421 16.3202 13.2012 15.9229C14.1604 15.5256 14.9802 14.8528 15.5569 13.9896C16.1337 13.1264 16.4416 12.1115 16.4416 11.0733C16.4416 9.68118 15.8886 8.34605 14.9042 7.36165C13.9198 6.37725 12.5846 5.82422 11.1925 5.82422ZM11.1925 14.4807C10.5186 14.4807 9.85976 14.2809 9.29942 13.9065C8.73907 13.5321 8.30234 12.9999 8.04444 12.3773C7.78654 11.7547 7.71906 11.0696 7.85054 10.4086C7.98201 9.74761 8.30654 9.14046 8.78307 8.66393C9.25961 8.18739 9.86675 7.86287 10.5277 7.73139C11.1887 7.59992 11.8738 7.6674 12.4964 7.9253C13.1191 8.18319 13.6512 8.61993 14.0256 9.18028C14.4 9.74062 14.5999 10.3994 14.5999 11.0733C14.5999 11.977 14.2409 12.8437 13.6019 13.4827C12.9629 14.1217 12.0962 14.4807 11.1925 14.4807Z"
                    fill="white"
                  ></path>
                  <path
                    d="M11.1929 2.69327C13.9223 2.69327 14.246 2.70349 15.3236 2.7529C15.9717 2.76059 16.6137 2.87959 17.2215 3.10471C17.6625 3.27482 18.0629 3.53536 18.3971 3.86957C18.7313 4.20378 18.9919 4.60426 19.162 5.04523C19.3871 5.65305 19.5061 6.29503 19.5138 6.94316C19.5632 8.02075 19.5734 8.34445 19.5734 11.0746C19.5734 13.8048 19.5632 14.1268 19.5138 15.2044C19.5061 15.8525 19.3871 16.4945 19.162 17.1023C18.9919 17.5433 18.7313 17.9438 18.3971 18.278C18.0629 18.6122 17.6625 18.8728 17.2215 19.0429C16.6137 19.268 15.9717 19.387 15.3236 19.3947C14.246 19.4441 13.9223 19.4543 11.1929 19.4543C8.46359 19.4543 8.13989 19.4441 7.0623 19.3947C6.41417 19.387 5.77219 19.268 5.16437 19.0429C4.7234 18.8728 4.32292 18.6122 3.98871 18.278C3.6545 17.9438 3.39396 17.5433 3.22385 17.1023C2.99873 16.4945 2.87973 15.8525 2.87204 15.2044C2.82263 14.1268 2.81241 13.8031 2.81241 11.0738C2.81241 8.34445 2.82263 8.02075 2.87204 6.94316C2.87973 6.29503 2.99873 5.65305 3.22385 5.04523C3.39396 4.60426 3.6545 4.20378 3.98871 3.86957C4.32292 3.53536 4.7234 3.27482 5.16437 3.10471C5.77219 2.87959 6.41417 2.76059 7.0623 2.7529C8.13989 2.70349 8.46359 2.69327 11.1929 2.69327ZM11.1929 0.851562C8.41674 0.851562 8.06833 0.863488 6.97796 0.912896C6.13018 0.930015 5.29143 1.09074 4.49737 1.38823C3.81821 1.65085 3.20141 2.05248 2.68652 2.56738C2.17162 3.08227 1.76999 3.69907 1.50737 4.37823C1.20978 5.17256 1.04906 6.0116 1.03204 6.85967C0.982629 7.95004 0.970703 8.29675 0.970703 11.0738C0.970703 13.8508 0.982629 14.1984 1.03204 15.2887C1.04916 16.1365 1.20988 16.9753 1.50737 17.7693C1.76999 18.4485 2.17162 19.0653 2.68652 19.5802C3.20141 20.0951 3.81821 20.4967 4.49737 20.7593C5.2917 21.0569 6.13074 21.2177 6.97881 21.2347C8.06919 21.2841 8.41674 21.296 11.1929 21.296C13.9691 21.296 14.3175 21.2841 15.4079 21.2347C16.256 21.2177 17.095 21.0569 17.8893 20.7593C18.5685 20.4967 19.1853 20.0951 19.7002 19.5802C20.2151 19.0653 20.6167 18.4485 20.8793 17.7693C21.1766 16.975 21.3371 16.1359 21.3538 15.2879C21.4032 14.1975 21.4151 13.8508 21.4151 11.0738C21.4151 8.29675 21.4032 7.94919 21.3538 6.85882C21.3367 6.01104 21.176 5.17229 20.8785 4.37823C20.6159 3.69907 20.2142 3.08227 19.6993 2.56738C19.1844 2.05248 18.5676 1.65085 17.8885 1.38823C17.0941 1.09093 16.2551 0.930498 15.407 0.913748C14.3167 0.862637 13.97 0.851562 11.1929 0.851562Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.google.com/search?q=texas+forever+channelview&oq=texas+forever+channelview&aqs=chrome..69i57j0l3.8087j0j7&sourceid=chrome&ie=UTF-8"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill-opacity="0"
                    fill="#dddddd"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
                  </g>
                  <g
                    fill="#822e1b"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <path
                      d="M15.36,256c-8.48309,0 -15.36,-6.87691 -15.36,-15.36v-225.28c0,-8.48309 6.87691,-15.36 15.36,-15.36h225.28c8.48309,0 15.36,6.87691 15.36,15.36v225.28c0,8.48309 -6.87691,15.36 -15.36,15.36z"
                      id="shape"
                    ></path>
                  </g>
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M25.99609,48c-12.68359,0 -23.00391,-10.31641 -23.00391,-23c0,-12.68359 10.32031,-23 23.00391,-23c5.74609,0 11.24609,2.12891 15.49219,5.99609l0.77344,0.70703l-7.58594,7.58594l-0.70312,-0.60156c-2.22656,-1.90625 -5.05859,-2.95703 -7.97656,-2.95703c-6.76562,0 -12.27344,5.50391 -12.27344,12.26953c0,6.76563 5.50781,12.26953 12.27344,12.26953c4.87891,0 8.73438,-2.49219 10.55078,-6.73828h-11.55078v-10.35547l22.55078,0.03125l0.16797,0.79297c1.17578,5.58203 0.23438,13.79297 -4.53125,19.66797c-3.94531,4.86328 -9.72656,7.33203 -17.1875,7.33203z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className={`${style["home"]}`}>
            <h1>Home</h1>
            <ul>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/category">Drinks</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
            </ul>
          </div>
          <div className={`${style["timing"]}`}>
            <h1>Timings</h1>
            <ul>
              <li>
                {" "}
                <b> Open</b> : Monday- Friday
              </li>
              <li>
                {" "}
                <b> From</b> : 5 a.m - 2 p.m
              </li>
              <li>
                {" "}
                <b> Closed</b> : Saturday & Sunday
              </li>
            </ul>
          </div>
          <div className={`${style["partners"]}`}>
            <h1>Our Delivery Partner</h1>
            <div className={`${style["partner_img"]}`}>
              {/* <a href="https://www.ubereats.com/store/texas-forever-bar-%26-grill/zEZwM-AiQduogUo5itgQig">
                <img src={UberEat} alt="" />
              </a>
              <a href="https://www.grubhub.com/restaurant/texas-forever-bar--grill-17124-b-east-fwy-channelview/1711751">
                <img src={Grubhub} alt="" />
              </a> */}
              <a
                href="https://www.doordash.com/store/texas-forever-bar---grill-channelview-803299/1132667/en-US?preview=1"
                target="_blank"
              >
                <img src={doordash} alt="" />
              </a>
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </>
  );
};

export default Footer;
