import React from "react";
import "../styles/Works.css";
import img from "../assets/banner.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
function Works() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(".moving-strip img", {
      x: -5800,
      duration: 80,
      repeat: -1,
      scrollTrigger: {
        trigger: ".moving-strip",
      },
    });
  });
  return (
    <div className="works-page">
      <div className="container"> </div>
      <div className="moving-strip">
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
      </div>
      <div className="works-with">
        <div className="heading">
          <p>Adtask AI works with :</p>
        </div>
        <div className="icons">
          <div className="icon1">
          <svg
            width="131"
            height="149"
            viewBox="0 0 131 149"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_444_19873)">
              <rect
                x="9.83203"
                y="21"
                width="112"
                height="107"
                rx="16"
                fill="#788199"
                fill-opacity="0.21"
              />
              <g opacity="0.2" filter="url(#filter0_f_444_19873)">
                <circle cx="65.832" cy="74" r="21" fill="#7687B5" />
              </g>
              <path
                d="M48.5 92.9938C46.5109 92.9938 44.6032 92.2036 43.1967 90.7971C41.7902 89.3905 41 87.4829 41 85.4938C41 83.5046 41.7902 81.597 43.1967 80.1905C44.6032 78.7839 46.5109 77.9938 48.5 77.9938C50.4891 77.9938 52.3968 78.7839 53.8033 80.1905C55.2098 81.597 56 83.5046 56 85.4938C56 87.4829 55.2098 89.3905 53.8033 90.7971C52.3968 92.2036 50.4891 92.9938 48.5 92.9938ZM84.995 81.7419L69.995 55.76C69.0004 54.0369 67.3621 52.7795 65.4405 52.2644C63.5188 51.7492 61.4712 52.0186 59.7481 53.0131C58.025 54.0077 56.7676 55.646 56.2525 57.5677C55.7374 59.4894 56.0067 61.5369 57.0013 63.26L72.0031 89.2419C73.0089 90.9427 74.645 92.1781 76.5562 92.6796C78.4675 93.1812 80.4994 92.9085 82.2107 91.9207C83.922 90.9329 85.1745 89.3099 85.6962 87.404C86.2179 85.4982 85.9647 83.4635 84.995 81.7419ZM55.0887 59.0825L43.9325 78.4025C45.2942 77.5246 46.8798 77.0572 48.5 77.0563C53.3 77.0413 57.1719 81.1025 56.9263 85.8969L62.9581 75.4475L56.1894 63.7288C55.3787 62.3199 54.9963 60.7053 55.0887 59.0825Z"
                fill="black"
              />
              <path
                d="M48.5 92.9938C46.5109 92.9938 44.6032 92.2036 43.1967 90.7971C41.7902 89.3905 41 87.4829 41 85.4938C41 83.5046 41.7902 81.597 43.1967 80.1905C44.6032 78.7839 46.5109 77.9938 48.5 77.9938C50.4891 77.9938 52.3968 78.7839 53.8033 80.1905C55.2098 81.597 56 83.5046 56 85.4938C56 87.4829 55.2098 89.3905 53.8033 90.7971C52.3968 92.2036 50.4891 92.9938 48.5 92.9938ZM84.995 81.7419L69.995 55.76C69.0004 54.0369 67.3621 52.7795 65.4405 52.2644C63.5188 51.7492 61.4712 52.0186 59.7481 53.0131C58.025 54.0077 56.7676 55.646 56.2525 57.5677C55.7374 59.4894 56.0067 61.5369 57.0013 63.26L72.0031 89.2419C73.0089 90.9427 74.645 92.1781 76.5562 92.6796C78.4675 93.1812 80.4994 92.9085 82.2107 91.9207C83.922 90.9329 85.1745 89.3099 85.6962 87.404C86.2179 85.4982 85.9647 83.4635 84.995 81.7419ZM55.0887 59.0825L43.9325 78.4025C45.2942 77.5246 46.8798 77.0572 48.5 77.0563C53.3 77.0413 57.1719 81.1025 56.9263 85.8969L62.9581 75.4475L56.1894 63.7288C55.3787 62.3199 54.9963 60.7053 55.0887 59.0825Z"
                fill="url(#paint0_radial_444_19873)"
              />
            </g>
            <rect
              x="10.332"
              y="21.5"
              width="111"
              height="106"
              rx="15.5"
              stroke="black"
            />
            <rect
              x="10.332"
              y="21.5"
              width="111"
              height="106"
              rx="15.5"
              stroke="url(#paint1_linear_444_19873)"
            />
            <defs>
              <filter
                id="filter0_f_444_19873"
                x="2.73203"
                y="10.9"
                width="126.2"
                height="126.2"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="21.05"
                  result="effect1_foregroundBlur_444_19873"
                />
              </filter>
              <radialGradient
                id="paint0_radial_444_19873"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(63.4812 72.5012) rotate(89.7079) scale(22.3294 24.4958)"
              >
                <stop stop-color="#C7D7FF" />
                <stop offset="1" stop-color="#788199" />
              </radialGradient>
              <linearGradient
                id="paint1_linear_444_19873"
                x1="121.832"
                y1="74.5"
                x2="9.83203"
                y2="74.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7687B5" />
                <stop offset="1" stop-color="#333B4F" />
              </linearGradient>
              <clipPath id="clip0_444_19873">
                <rect
                  x="9.83203"
                  y="21"
                  width="112"
                  height="107"
                  rx="16"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
          <p>Google Ads</p>
          </div>
          <div className="icon2">
          <svg
            width="131"
            height="149"
            viewBox="0 0 131 149"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_444_19887)">
              <rect
                x="9.83203"
                y="21"
                width="112"
                height="107"
                rx="16"
                fill="#788199"
                fill-opacity="0.21"
              />
              <g opacity="0.2" filter="url(#filter0_f_444_19887)">
                <circle cx="65.832" cy="74" r="21" fill="#7687B5" />
              </g>
              <path
                d="M77.4999 58.55C75.7914 56.5988 74.8496 54.0935 74.8499 51.5H67.1249V82.5C67.0666 84.178 66.3587 85.7677 65.1507 86.9337C63.9426 88.0998 62.3289 88.751 60.6499 88.75C57.0999 88.75 54.1499 85.85 54.1499 82.25C54.1499 77.95 58.2999 74.725 62.5749 76.05V68.15C53.9499 67 46.3999 73.7 46.3999 82.25C46.3999 90.575 53.2999 96.5 60.6249 96.5C68.4749 96.5 74.8499 90.125 74.8499 82.25V66.525C77.9824 68.7746 81.7433 69.9816 85.5999 69.975V62.25C85.5999 62.25 80.8999 62.475 77.4999 58.55Z"
                fill="url(#paint0_radial_444_19887)"
              />
            </g>
            <rect
              x="10.332"
              y="21.5"
              width="111"
              height="106"
              rx="15.5"
              stroke="black"
            />
            <rect
              x="10.332"
              y="21.5"
              width="111"
              height="106"
              rx="15.5"
              stroke="url(#paint1_linear_444_19887)"
            />
            <defs>
              <filter
                id="filter0_f_444_19887"
                x="2.73203"
                y="10.9"
                width="126.2"
                height="126.2"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="21.05"
                  result="effect1_foregroundBlur_444_19887"
                />
              </filter>
              <radialGradient
                id="paint0_radial_444_19887"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(65.9999 74) rotate(89.768) scale(24.5166 21.3565)"
              >
                <stop stop-color="#C7D7FF" />
                <stop offset="1" stop-color="#788199" />
              </radialGradient>
              <linearGradient
                id="paint1_linear_444_19887"
                x1="121.832"
                y1="74.5"
                x2="9.83203"
                y2="74.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7687B5" />
                <stop offset="1" stop-color="#333B4F" />
              </linearGradient>
              <clipPath id="clip0_444_19887">
                <rect
                  x="9.83203"
                  y="21"
                  width="112"
                  height="107"
                  rx="16"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
          <p>Tik Tok Ads</p>
          </div>
          <div className="icon3">
            <svg
              width="131"
              height="149"
              viewBox="0 0 131 149"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_444_19900)">
                <rect
                  x="9.83154"
                  y="21"
                  width="112"
                  height="107"
                  rx="16"
                  fill="#788199"
                  fill-opacity="0.21"
                />
                <g opacity="0.2" filter="url(#filter0_f_444_19900)">
                  <circle cx="65.8315" cy="74" r="21" fill="#7687B5" />
                </g>
                <path
                  d="M76.7749 57.3125C72.533 57.3125 69.217 60.5071 66.2149 64.5656C62.0899 59.3131 58.6409 57.3125 54.5137 57.3125C46.0987 57.3125 39.6499 68.2667 39.6499 79.8579C39.6499 87.111 43.1584 91.6875 49.0366 91.6875C53.267 91.6875 56.3103 89.6938 61.7209 80.236C61.7209 80.236 63.9759 76.2554 65.5251 73.5123C66.069 74.3892 66.6419 75.3349 67.2439 76.3494L69.7807 80.6165C74.7216 88.8848 77.4762 91.6875 82.4628 91.6875C88.192 91.6875 91.3774 87.0492 91.3774 79.6448C91.3774 67.5058 84.7843 57.3125 76.7749 57.3125ZM57.5937 77.6763C53.2097 84.5513 51.6926 86.0935 49.252 86.0935C46.738 86.0935 45.2439 83.8867 45.2439 79.9519C45.2439 71.5369 49.4399 62.9317 54.4426 62.9317C57.1514 62.9317 59.4155 64.4946 62.8828 69.4583C59.5897 74.5092 57.5937 77.6763 57.5937 77.6763ZM74.1509 76.8123L71.1145 71.75C70.3523 70.5051 69.5638 69.2765 68.7495 68.065C71.4834 63.846 73.7362 61.7423 76.4197 61.7423C81.9884 61.7423 86.4457 69.9465 86.4457 80.0206C86.4457 83.8615 85.1876 86.0913 82.582 86.0913C80.0841 86.0913 78.8924 84.4413 74.1487 76.81"
                  fill="black"
                />
                <path
                  d="M76.7749 57.3125C72.533 57.3125 69.217 60.5071 66.2149 64.5656C62.0899 59.3131 58.6409 57.3125 54.5137 57.3125C46.0987 57.3125 39.6499 68.2667 39.6499 79.8579C39.6499 87.111 43.1584 91.6875 49.0366 91.6875C53.267 91.6875 56.3103 89.6938 61.7209 80.236C61.7209 80.236 63.9759 76.2554 65.5251 73.5123C66.069 74.3892 66.6419 75.3349 67.2439 76.3494L69.7807 80.6165C74.7216 88.8848 77.4762 91.6875 82.4628 91.6875C88.192 91.6875 91.3774 87.0492 91.3774 79.6448C91.3774 67.5058 84.7843 57.3125 76.7749 57.3125ZM57.5937 77.6763C53.2097 84.5513 51.6926 86.0935 49.252 86.0935C46.738 86.0935 45.2439 83.8867 45.2439 79.9519C45.2439 71.5369 49.4399 62.9317 54.4426 62.9317C57.1514 62.9317 59.4155 64.4946 62.8828 69.4583C59.5897 74.5092 57.5937 77.6763 57.5937 77.6763ZM74.1509 76.8123L71.1145 71.75C70.3523 70.5051 69.5638 69.2765 68.7495 68.065C71.4834 63.846 73.7362 61.7423 76.4197 61.7423C81.9884 61.7423 86.4457 69.9465 86.4457 80.0206C86.4457 83.8615 85.1876 86.0913 82.582 86.0913C80.0841 86.0913 78.8924 84.4413 74.1487 76.81"
                  fill="url(#paint0_radial_444_19900)"
                />
              </g>
              <rect
                x="10.3315"
                y="21.5"
                width="111"
                height="106"
                rx="15.5"
                stroke="black"
              />
              <rect
                x="10.3315"
                y="21.5"
                width="111"
                height="106"
                rx="15.5"
                stroke="url(#paint1_linear_444_19900)"
              />
              <defs>
                <filter
                  id="filter0_f_444_19900"
                  x="2.73154"
                  y="10.9"
                  width="126.2"
                  height="126.2"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="21.05"
                    result="effect1_foregroundBlur_444_19900"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_444_19900"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(65.5137 74.5) rotate(89.5993) scale(18.7283 28.1812)"
                >
                  <stop stop-color="#C7D7FF" />
                  <stop offset="1" stop-color="#788199" />
                </radialGradient>
                <linearGradient
                  id="paint1_linear_444_19900"
                  x1="121.832"
                  y1="74.5"
                  x2="9.83154"
                  y2="74.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7687B5" />
                  <stop offset="1" stop-color="#333B4F" />
                </linearGradient>
                <clipPath id="clip0_444_19900">
                  <rect
                    x="9.83154"
                    y="21"
                    width="112"
                    height="107"
                    rx="16"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
            <p>Meta</p>
          </div>
          <div className="icon4">
            <svg
              width="131"
              height="149"
              viewBox="0 0 131 149"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_444_19913)">
                <rect
                  x="9.83154"
                  y="21"
                  width="112"
                  height="107"
                  rx="16"
                  fill="#788199"
                  fill-opacity="0.21"
                />
                <g opacity="0.2" filter="url(#filter0_f_444_19913)">
                  <circle cx="65.8315" cy="74" r="21" fill="#7687B5" />
                </g>
                <path
                  d="M83.5 52.5C84.8261 52.5 86.0979 53.0268 87.0355 53.9645C87.9732 54.9021 88.5 56.1739 88.5 57.5V92.5C88.5 93.8261 87.9732 95.0979 87.0355 96.0355C86.0979 96.9732 84.8261 97.5 83.5 97.5H48.5C47.1739 97.5 45.9021 96.9732 44.9645 96.0355C44.0268 95.0979 43.5 93.8261 43.5 92.5V57.5C43.5 56.1739 44.0268 54.9021 44.9645 53.9645C45.9021 53.0268 47.1739 52.5 48.5 52.5H83.5ZM82.25 91.25V78C82.25 75.8385 81.3913 73.7655 79.8629 72.2371C78.3345 70.7087 76.2615 69.85 74.1 69.85C71.975 69.85 69.5 71.15 68.3 73.1V70.325H61.325V91.25H68.3V78.925C68.3 77 69.85 75.425 71.775 75.425C72.7033 75.425 73.5935 75.7937 74.2499 76.4501C74.9063 77.1065 75.275 77.9967 75.275 78.925V91.25H82.25ZM53.2 66.4C54.3139 66.4 55.3822 65.9575 56.1698 65.1698C56.9575 64.3822 57.4 63.3139 57.4 62.2C57.4 59.875 55.525 57.975 53.2 57.975C52.0795 57.975 51.0048 58.4201 50.2125 59.2125C49.4201 60.0048 48.975 61.0795 48.975 62.2C48.975 64.525 50.875 66.4 53.2 66.4ZM56.675 91.25V70.325H49.75V91.25H56.675Z"
                  fill="black"
                />
                <path
                  d="M83.5 52.5C84.8261 52.5 86.0979 53.0268 87.0355 53.9645C87.9732 54.9021 88.5 56.1739 88.5 57.5V92.5C88.5 93.8261 87.9732 95.0979 87.0355 96.0355C86.0979 96.9732 84.8261 97.5 83.5 97.5H48.5C47.1739 97.5 45.9021 96.9732 44.9645 96.0355C44.0268 95.0979 43.5 93.8261 43.5 92.5V57.5C43.5 56.1739 44.0268 54.9021 44.9645 53.9645C45.9021 53.0268 47.1739 52.5 48.5 52.5H83.5ZM82.25 91.25V78C82.25 75.8385 81.3913 73.7655 79.8629 72.2371C78.3345 70.7087 76.2615 69.85 74.1 69.85C71.975 69.85 69.5 71.15 68.3 73.1V70.325H61.325V91.25H68.3V78.925C68.3 77 69.85 75.425 71.775 75.425C72.7033 75.425 73.5935 75.7937 74.2499 76.4501C74.9063 77.1065 75.275 77.9967 75.275 78.925V91.25H82.25ZM53.2 66.4C54.3139 66.4 55.3822 65.9575 56.1698 65.1698C56.9575 64.3822 57.4 63.3139 57.4 62.2C57.4 59.875 55.525 57.975 53.2 57.975C52.0795 57.975 51.0048 58.4201 50.2125 59.2125C49.4201 60.0048 48.975 61.0795 48.975 62.2C48.975 64.525 50.875 66.4 53.2 66.4ZM56.675 91.25V70.325H49.75V91.25H56.675Z"
                  fill="url(#paint0_radial_444_19913)"
                />
              </g>
              <rect
                x="10.3315"
                y="21.5"
                width="111"
                height="106"
                rx="15.5"
                stroke="black"
              />
              <rect
                x="10.3315"
                y="21.5"
                width="111"
                height="106"
                rx="15.5"
                stroke="url(#paint1_linear_444_19913)"
              />
              <defs>
                <filter
                  id="filter0_f_444_19913"
                  x="2.73154"
                  y="10.9"
                  width="126.2"
                  height="126.2"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="21.05"
                    result="effect1_foregroundBlur_444_19913"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_444_19913"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(66 75) rotate(89.7337) scale(24.5167 24.5164)"
                >
                  <stop stop-color="#C7D7FF" />
                  <stop offset="1" stop-color="#788199" />
                </radialGradient>
                <linearGradient
                  id="paint1_linear_444_19913"
                  x1="121.832"
                  y1="74.5"
                  x2="9.83154"
                  y2="74.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7687B5" />
                  <stop offset="1" stop-color="#333B4F" />
                </linearGradient>
                <clipPath id="clip0_444_19913">
                  <rect
                    x="9.83154"
                    y="21"
                    width="112"
                    height="107"
                    rx="16"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
            <p>Linkedin Ads</p>
          </div>
          <div className="icon5">
            <svg
              width="130"
              height="149"
              viewBox="0 0 130 149"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_444_19928)">
                <rect
                  x="9"
                  y="21"
                  width="112"
                  height="107"
                  rx="16"
                  fill="#788199"
                  fill-opacity="0.21"
                />
                <g opacity="0.2" filter="url(#filter0_f_444_19928)">
                  <circle cx="65" cy="74" r="21" fill="#7687B5" />
                </g>
                <path
                  d="M73.4117 85.66C73.8533 85.8934 74.4242 85.8681 74.8179 85.5194L74.832 85.5334C76.3378 84.1982 77.8595 82.8809 79.3967 81.5819C79.8833 81.1797 79.7989 80.5356 79.4136 79.9984L79.062 79.5203C78.0917 78.2125 77.1692 76.9722 77.1692 74.4831V65.2019L77.172 64.2597C77.1945 60.7019 77.2114 57.4506 74.5479 54.9644C72.2614 52.7706 68.4814 52 65.5845 52C59.9229 52 53.6033 54.1094 52.2701 61.1125C52.1379 61.855 52.6723 62.2488 53.1589 62.3584L58.9358 62.9772C59.4701 62.9519 59.8639 62.4259 59.9651 61.8888C60.4601 59.4784 62.4851 58.3141 64.7548 58.3141C65.9783 58.3141 67.3676 58.7641 68.0961 59.8609C68.8386 60.9578 68.8273 62.4203 68.8189 63.7309V64.9459C68.2564 65.0078 67.6742 65.0688 67.0723 65.1288C63.942 65.4494 60.3308 65.8206 57.6223 67.0131C53.8929 68.6219 51.2689 71.9125 51.2689 76.7444C51.2689 82.9319 55.1698 86.02 60.1789 86.02C64.4145 86.02 66.7264 85.0244 69.9917 81.6887L70.4614 82.3806C71.232 83.5197 71.7439 84.2791 73.4061 85.66H73.4117ZM59.9595 75.7122C59.9595 70.6384 64.5073 69.7188 68.8104 69.7188V71.3219C68.8133 73.5044 68.8161 75.355 67.6967 77.3209C66.7517 78.9944 65.2498 80.0237 63.5764 80.0237C61.2926 80.0237 59.9595 78.2828 59.9595 75.7122ZM44.2236 86.2394C51.6176 90.7478 63.0617 97.7256 81.3008 89.0434C82.0883 88.7172 82.6367 89.2628 81.8604 90.2556C81.0758 91.2625 74.8151 97 64.2908 97C53.7776 97 45.7226 89.8169 43.2645 86.8356C42.5895 86.0622 43.3658 85.7106 43.8242 85.9947L44.2236 86.2394Z"
                  fill="black"
                />
                <path
                  d="M73.4117 85.66C73.8533 85.8934 74.4242 85.8681 74.8179 85.5194L74.832 85.5334C76.3378 84.1982 77.8595 82.8809 79.3967 81.5819C79.8833 81.1797 79.7989 80.5356 79.4136 79.9984L79.062 79.5203C78.0917 78.2125 77.1692 76.9722 77.1692 74.4831V65.2019L77.172 64.2597C77.1945 60.7019 77.2114 57.4506 74.5479 54.9644C72.2614 52.7706 68.4814 52 65.5845 52C59.9229 52 53.6033 54.1094 52.2701 61.1125C52.1379 61.855 52.6723 62.2488 53.1589 62.3584L58.9358 62.9772C59.4701 62.9519 59.8639 62.4259 59.9651 61.8888C60.4601 59.4784 62.4851 58.3141 64.7548 58.3141C65.9783 58.3141 67.3676 58.7641 68.0961 59.8609C68.8386 60.9578 68.8273 62.4203 68.8189 63.7309V64.9459C68.2564 65.0078 67.6742 65.0688 67.0723 65.1288C63.942 65.4494 60.3308 65.8206 57.6223 67.0131C53.8929 68.6219 51.2689 71.9125 51.2689 76.7444C51.2689 82.9319 55.1698 86.02 60.1789 86.02C64.4145 86.02 66.7264 85.0244 69.9917 81.6887L70.4614 82.3806C71.232 83.5197 71.7439 84.2791 73.4061 85.66H73.4117ZM59.9595 75.7122C59.9595 70.6384 64.5073 69.7188 68.8104 69.7188V71.3219C68.8133 73.5044 68.8161 75.355 67.6967 77.3209C66.7517 78.9944 65.2498 80.0237 63.5764 80.0237C61.2926 80.0237 59.9595 78.2828 59.9595 75.7122ZM44.2236 86.2394C51.6176 90.7478 63.0617 97.7256 81.3008 89.0434C82.0883 88.7172 82.6367 89.2628 81.8604 90.2556C81.0758 91.2625 74.8151 97 64.2908 97C53.7776 97 45.7226 89.8169 43.2645 86.8356C42.5895 86.0622 43.3658 85.7106 43.8242 85.9947L44.2236 86.2394Z"
                  fill="url(#paint0_radial_444_19928)"
                />
                <path
                  d="M81.8915 85.5897C83.4861 85.3928 86.0202 85.5137 86.518 86.1634C86.8977 86.6584 86.5068 88.8803 85.8627 90.475C85.2158 92.0584 84.254 93.1778 83.7196 93.6109C83.1852 94.044 82.783 93.8753 83.0727 93.2256C83.368 92.5787 84.9965 88.5484 84.3524 87.7047C83.7533 86.9228 81.0421 87.2069 79.7821 87.339L79.529 87.3644C79.2627 87.3887 79.0443 87.4112 78.8736 87.4319C78.3308 87.4909 78.1846 87.5078 78.103 87.3419C77.8949 86.754 80.294 85.7781 81.8915 85.5897Z"
                  fill="black"
                />
                <path
                  d="M81.8915 85.5897C83.4861 85.3928 86.0202 85.5137 86.518 86.1634C86.8977 86.6584 86.5068 88.8803 85.8627 90.475C85.2158 92.0584 84.254 93.1778 83.7196 93.6109C83.1852 94.044 82.783 93.8753 83.0727 93.2256C83.368 92.5787 84.9965 88.5484 84.3524 87.7047C83.7533 86.9228 81.0421 87.2069 79.7821 87.339L79.529 87.3644C79.2627 87.3887 79.0443 87.4112 78.8736 87.4319C78.3308 87.4909 78.1846 87.5078 78.103 87.3419C77.8949 86.754 80.294 85.7781 81.8915 85.5897Z"
                  fill="url(#paint1_radial_444_19928)"
                />
              </g>
              <rect
                x="9.5"
                y="21.5"
                width="111"
                height="106"
                rx="15.5"
                stroke="black"
              />
              <rect
                x="9.5"
                y="21.5"
                width="111"
                height="106"
                rx="15.5"
                stroke="url(#paint2_linear_444_19928)"
              />
              <defs>
                <filter
                  id="filter0_f_444_19928"
                  x="1.9"
                  y="10.9"
                  width="126.2"
                  height="126.2"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="21.05"
                    result="effect1_foregroundBlur_444_19928"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_444_19928"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(62.6177 74.5) rotate(89.7678) scale(24.5166 21.3759)"
                >
                  <stop stop-color="#C7D7FF" />
                  <stop offset="1" stop-color="#788199" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_444_19928"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(82.3788 89.6772) rotate(89.7264) scale(4.54757 4.67276)"
                >
                  <stop stop-color="#C7D7FF" />
                  <stop offset="1" stop-color="#788199" />
                </radialGradient>
                <linearGradient
                  id="paint2_linear_444_19928"
                  x1="121"
                  y1="74.5"
                  x2="9"
                  y2="74.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7687B5" />
                  <stop offset="1" stop-color="#333B4F" />
                </linearGradient>
                <clipPath id="clip0_444_19928">
                  <rect
                    x="9"
                    y="21"
                    width="112"
                    height="107"
                    rx="16"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
            <p>Amazon Ads</p>
          </div>
          <div className="icon6">
            <svg
              width="130"
              height="149"
              viewBox="0 0 130 149"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_444_19943)">
                <rect
                  x="9"
                  y="21"
                  width="112"
                  height="107"
                  rx="16"
                  fill="#788199"
                  fill-opacity="0.21"
                />
                <g opacity="0.2" filter="url(#filter0_f_444_19943)">
                  <circle cx="65" cy="74" r="21" fill="#7687B5" />
                </g>
                <path
                  d="M78.4375 54.1094H85.3394L70.2644 71.3838L88 94.8906H74.1147L63.2388 80.6313L50.7934 94.8906H43.8888L60.0128 76.4125L43 54.1094H57.2397L67.0694 67.1397L78.4375 54.1094ZM76.0187 90.7506H79.8438L55.1584 58.0328H51.0578L76.0187 90.7506Z"
                  fill="black"
                />
                <path
                  d="M78.4375 54.1094H85.3394L70.2644 71.3838L88 94.8906H74.1147L63.2388 80.6313L50.7934 94.8906H43.8888L60.0128 76.4125L43 54.1094H57.2397L67.0694 67.1397L78.4375 54.1094ZM76.0187 90.7506H79.8438L55.1584 58.0328H51.0578L76.0187 90.7506Z"
                  fill="url(#paint0_radial_444_19943)"
                />
              </g>
              <rect
                x="9.5"
                y="21.5"
                width="111"
                height="106"
                rx="15.5"
                stroke="black"
              />
              <rect
                x="9.5"
                y="21.5"
                width="111"
                height="106"
                rx="15.5"
                stroke="url(#paint1_linear_444_19943)"
              />
              <defs>
                <filter
                  id="filter0_f_444_19943"
                  x="1.9"
                  y="10.9"
                  width="126.2"
                  height="126.2"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="21.05"
                    result="effect1_foregroundBlur_444_19943"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_444_19943"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(65.5 74.5) rotate(89.7062) scale(22.2183 24.5163)"
                >
                  <stop stop-color="#C7D7FF" />
                  <stop offset="1" stop-color="#788199" />
                </radialGradient>
                <linearGradient
                  id="paint1_linear_444_19943"
                  x1="121"
                  y1="74.5"
                  x2="9"
                  y2="74.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7687B5" />
                  <stop offset="1" stop-color="#333B4F" />
                </linearGradient>
                <clipPath id="clip0_444_19943">
                  <rect
                    x="9"
                    y="21"
                    width="112"
                    height="107"
                    rx="16"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
            <p>X / Twitter</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
