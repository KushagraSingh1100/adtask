import React from "react";
import "../styles/Contact.css";
function Contact() {
  return (
    <div className="contact-page">
      <div className="tag">CONTACT US</div>
      <div className="contact-form">
        <div className="left">
          <div className="blur">
            <svg
              width="297"
              height="287"
              viewBox="0 0 637 627"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                style={{ mixBlendMode: "plus-lighter" }}
                filter="url(#filter0_f_444_19378)"
              >
                <path
                  d="M305.5 48H352L589 579H48L305.5 48Z"
                  fill="rgba(38, 48, 72, 1)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_444_19378"
                  x="0.799999"
                  y="0.799999"
                  width="635.4"
                  height="625.4"
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
                    stdDeviation="23.6"
                    result="effect1_foregroundBlur_444_19378"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="left-heading">
            <h1>Ask whatever you have</h1>
            <h2>in your mind now</h2>
          </div>
          <div className="left-txt">
            <p>
              Whether you have questions or are ready to discuss your business,
              we’re here to help. Reach out today.
            </p>
          </div>
          <div className="contact-links">
            <div className="email">
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 2.5C20 1.4 19.1 0.5 18 0.5H2C0.9 0.5 0 1.4 0 2.5V14.5C0 15.6 0.9 16.5 2 16.5H18C19.1 16.5 20 15.6 20 14.5V2.5ZM18 2.5L10 7.5L2 2.5H18ZM18 14.5H2V4.5L10 9.5L18 4.5V14.5Z"
                  fill="#5C73AE"
                />
              </svg>
              <a href="mailto:contact@adtask.ai">
                <h3>contact@adtask.ai</h3>
              </a>
            </div>
            <div className="phone">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 13C15.8 13 14.5 12.8 13.4 12.4H13.1C12.8 12.4 12.6 12.5 12.4 12.7L10.2 14.9C7.4 13.4 5 11.1 3.6 8.3L5.8 6.1C6.1 5.8 6.2 5.4 6 5.1C5.7 4 5.5 2.7 5.5 1.5C5.5 1 5 0.5 4.5 0.5H1C0.5 0.5 0 1 0 1.5C0 10.9 7.6 18.5 17 18.5C17.5 18.5 18 18 18 17.5V14C18 13.5 17.5 13 17 13ZM2 2.5H3.5C3.6 3.4 3.8 4.3 4 5.1L2.8 6.3C2.4 5.1 2.1 3.8 2 2.5ZM16 16.5C14.7 16.4 13.4 16.1 12.2 15.7L13.4 14.5C14.2 14.7 15.1 14.9 16 14.9V16.5Z"
                  fill="#5C73AE"
                />
              </svg>
              <h3>(969) 819-8061</h3>
            </div>
            <div className="location">
              <svg
                width="14"
                height="21"
                viewBox="0 0 14 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 5C7.66304 5 8.29893 5.26339 8.76777 5.73223C9.23661 6.20107 9.5 6.83696 9.5 7.5C9.5 7.8283 9.43534 8.15339 9.3097 8.45671C9.18406 8.76002 8.99991 9.03562 8.76777 9.26777C8.53562 9.49991 8.26002 9.68406 7.95671 9.8097C7.65339 9.93534 7.3283 10 7 10C6.33696 10 5.70107 9.73661 5.23223 9.26777C4.76339 8.79893 4.5 8.16304 4.5 7.5C4.5 6.83696 4.76339 6.20107 5.23223 5.73223C5.70107 5.26339 6.33696 5 7 5ZM7 0.5C8.85652 0.5 10.637 1.2375 11.9497 2.55025C13.2625 3.86301 14 5.64348 14 7.5C14 12.75 7 20.5 7 20.5C7 20.5 0 12.75 0 7.5C0 5.64348 0.737498 3.86301 2.05025 2.55025C3.36301 1.2375 5.14348 0.5 7 0.5ZM7 2.5C5.67392 2.5 4.40215 3.02678 3.46447 3.96447C2.52678 4.90215 2 6.17392 2 7.5C2 8.5 2 10.5 7 17.21C12 10.5 12 8.5 12 7.5C12 6.17392 11.4732 4.90215 10.5355 3.96447C9.59785 3.02678 8.32608 2.5 7 2.5Z"
                  fill="#5C73AE"
                />
              </svg>
              <h3>San Francisco Bay Area</h3>
            </div>
          </div>
        </div>
        <div className="right">
          <form action="">
            <div className="field">
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
            <div className="field">
              <label htmlFor="">Email</label>
              <input type="email" />
            </div>
            <div className="msg-field">
              <label htmlFor="">Message</label>
              <input type="text" />
            </div>
          </form>
        </div>
      </div>
      <div className="submit-btn">
        <button>Submit</button>
      </div>
      <div className="adTask">
        <svg
          width="468"
          height="96"
          viewBox="0 0 468 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.2">
            <path
              d="M455.637 94.1949V35.3233H466.234V94.1949H455.637ZM460.936 24.7265C458.973 24.7265 457.305 24.0396 455.932 22.6659C454.558 21.2923 453.871 19.6243 453.871 17.6619C453.871 15.6341 454.558 13.9661 455.932 12.6578C457.305 11.2841 458.973 10.5973 460.936 10.5973C462.963 10.5973 464.631 11.2841 465.94 12.6578C467.313 13.9661 468 15.6341 468 17.6619C468 19.6243 467.313 21.2923 465.94 22.6659C464.631 24.0396 462.963 24.7265 460.936 24.7265Z"
              fill="white"
            />
            <path
              d="M455.637 94.1949V35.3233H466.234V94.1949H455.637ZM460.936 24.7265C458.973 24.7265 457.305 24.0396 455.932 22.6659C454.558 21.2923 453.871 19.6243 453.871 17.6619C453.871 15.6341 454.558 13.9661 455.932 12.6578C457.305 11.2841 458.973 10.5973 460.936 10.5973C462.963 10.5973 464.631 11.2841 465.94 12.6578C467.313 13.9661 468 15.6341 468 17.6619C468 19.6243 467.313 21.2923 465.94 22.6659C464.631 24.0396 462.963 24.7265 460.936 24.7265Z"
              fill="url(#paint0_linear_123_56294)"
            />
            <path
              d="M406.343 94.9796C400.98 94.9796 396.074 93.6386 391.626 90.9567C387.178 88.2094 383.613 84.5462 380.931 79.9673C378.314 75.3884 377.006 70.3189 377.006 64.7589C377.006 59.1988 378.314 54.1293 380.931 49.5504C383.613 44.9715 387.178 41.3411 391.626 38.6591C396.074 35.9118 400.98 34.5381 406.343 34.5381C410.399 34.5381 414.193 35.2904 417.725 36.7949C421.323 38.2994 424.43 40.3926 427.047 43.0745V35.3231H436.859V94.1946H427.047V86.4432C424.43 89.0597 421.323 91.1529 417.725 92.7228C414.193 94.2273 410.399 94.9796 406.343 94.9796ZM407.717 85.3639C411.446 85.3639 414.814 84.4481 417.823 82.6166C420.898 80.7196 423.318 78.2339 425.084 75.1595C426.916 72.0197 427.832 68.5528 427.832 64.7589C427.832 60.9649 426.916 57.5307 425.084 54.4563C423.318 51.3165 420.898 48.8308 417.823 46.9993C414.814 45.1023 411.446 44.1538 407.717 44.1538C403.989 44.1538 400.587 45.1023 397.513 46.9993C394.504 48.8308 392.084 51.3165 390.252 54.4563C388.486 57.5307 387.603 60.9649 387.603 64.7589C387.603 68.5528 388.486 72.0197 390.252 75.1595C392.084 78.2339 394.504 80.7196 397.513 82.6166C400.587 84.4481 403.989 85.3639 407.717 85.3639Z"
              fill="white"
            />
            <path
              d="M406.343 94.9796C400.98 94.9796 396.074 93.6386 391.626 90.9567C387.178 88.2094 383.613 84.5462 380.931 79.9673C378.314 75.3884 377.006 70.3189 377.006 64.7589C377.006 59.1988 378.314 54.1293 380.931 49.5504C383.613 44.9715 387.178 41.3411 391.626 38.6591C396.074 35.9118 400.98 34.5381 406.343 34.5381C410.399 34.5381 414.193 35.2904 417.725 36.7949C421.323 38.2994 424.43 40.3926 427.047 43.0745V35.3231H436.859V94.1946H427.047V86.4432C424.43 89.0597 421.323 91.1529 417.725 92.7228C414.193 94.2273 410.399 94.9796 406.343 94.9796ZM407.717 85.3639C411.446 85.3639 414.814 84.4481 417.823 82.6166C420.898 80.7196 423.318 78.2339 425.084 75.1595C426.916 72.0197 427.832 68.5528 427.832 64.7589C427.832 60.9649 426.916 57.5307 425.084 54.4563C423.318 51.3165 420.898 48.8308 417.823 46.9993C414.814 45.1023 411.446 44.1538 407.717 44.1538C403.989 44.1538 400.587 45.1023 397.513 46.9993C394.504 48.8308 392.084 51.3165 390.252 54.4563C388.486 57.5307 387.603 60.9649 387.603 64.7589C387.603 68.5528 388.486 72.0197 390.252 75.1595C392.084 78.2339 394.504 80.7196 397.513 82.6166C400.587 84.4481 403.989 85.3639 407.717 85.3639Z"
              fill="url(#paint1_linear_123_56294)"
            />
            <path
              d="M368.458 95.372C366.299 95.372 364.468 94.6525 362.963 93.2134C361.524 91.7089 360.805 89.8773 360.805 87.7187C360.805 85.5601 361.524 83.7613 362.963 82.3222C364.468 80.8177 366.299 80.0654 368.458 80.0654C370.682 80.0654 372.514 80.8177 373.953 82.3222C375.392 83.7613 376.111 85.5601 376.111 87.7187C376.111 89.8773 375.392 91.7089 373.953 93.2134C372.514 94.6525 370.682 95.372 368.458 95.372Z"
              fill="white"
            />
            <path
              d="M368.458 95.372C366.299 95.372 364.468 94.6525 362.963 93.2134C361.524 91.7089 360.805 89.8773 360.805 87.7187C360.805 85.5601 361.524 83.7613 362.963 82.3222C364.468 80.8177 366.299 80.0654 368.458 80.0654C370.682 80.0654 372.514 80.8177 373.953 82.3222C375.392 83.7613 376.111 85.5601 376.111 87.7187C376.111 89.8773 375.392 91.7089 373.953 93.2134C372.514 94.6525 370.682 95.372 368.458 95.372Z"
              fill="url(#paint2_linear_123_56294)"
            />
            <path
              d="M338.02 94.1944L313.686 61.8151L333.702 35.3229H350.481L330.857 60.5396L356.368 94.1944H338.02ZM299.066 94.1944V0H314.471V94.1944H299.066Z"
              fill="white"
            />
            <path
              d="M338.02 94.1944L313.686 61.8151L333.702 35.3229H350.481L330.857 60.5396L356.368 94.1944H338.02ZM299.066 94.1944V0H314.471V94.1944H299.066Z"
              fill="url(#paint3_linear_123_56294)"
            />
            <path
              d="M277.153 95.9614C273.425 95.9614 269.598 95.3399 265.673 94.0971C261.749 92.7888 258.609 90.9573 256.254 88.6024L260.179 73.6883C262.076 76.4356 264.627 78.7905 267.832 80.7529C271.103 82.6499 274.471 83.5983 277.938 83.5983C280.555 83.5983 282.452 83.075 283.629 82.0284C284.872 80.9164 285.493 79.5755 285.493 78.0055C285.493 76.2394 284.872 74.9639 283.629 74.1789C282.386 73.3285 281.143 72.6744 279.901 72.2165L271.757 69.1748C270.056 68.4553 268.061 67.5068 265.771 66.3294C263.482 65.0865 261.487 63.3531 259.786 61.129C258.151 58.8396 257.333 55.8633 257.333 52.2002C257.333 48.8642 258.151 45.7898 259.786 42.977C261.422 40.1642 263.776 37.9075 266.851 36.2068C269.991 34.4406 273.752 33.5576 278.134 33.5576C282.059 33.5576 285.788 34.2444 289.32 35.6181C292.918 36.9263 295.632 38.5616 297.464 40.524L293.834 55.0457C291.74 52.1675 289.222 49.9435 286.278 48.3736C283.335 46.7382 280.489 45.9206 277.742 45.9206C275.453 45.9206 273.752 46.4439 272.64 47.4905C271.528 48.4717 270.972 49.6491 270.972 51.0228C270.972 52.0694 271.364 53.0506 272.149 53.9663C272.934 54.8821 274.21 55.6671 275.976 56.3212L283.629 59.2648C285.657 59.9843 287.881 60.9982 290.301 62.3065C292.722 63.5493 294.782 65.3155 296.483 67.6049C298.249 69.8944 299.132 73.0342 299.132 77.0244C299.132 82.6499 297.072 87.2288 292.95 90.761C288.895 94.2279 283.629 95.9614 277.153 95.9614Z"
              fill="white"
            />
            <path
              d="M277.153 95.9614C273.425 95.9614 269.598 95.3399 265.673 94.0971C261.749 92.7888 258.609 90.9573 256.254 88.6024L260.179 73.6883C262.076 76.4356 264.627 78.7905 267.832 80.7529C271.103 82.6499 274.471 83.5983 277.938 83.5983C280.555 83.5983 282.452 83.075 283.629 82.0284C284.872 80.9164 285.493 79.5755 285.493 78.0055C285.493 76.2394 284.872 74.9639 283.629 74.1789C282.386 73.3285 281.143 72.6744 279.901 72.2165L271.757 69.1748C270.056 68.4553 268.061 67.5068 265.771 66.3294C263.482 65.0865 261.487 63.3531 259.786 61.129C258.151 58.8396 257.333 55.8633 257.333 52.2002C257.333 48.8642 258.151 45.7898 259.786 42.977C261.422 40.1642 263.776 37.9075 266.851 36.2068C269.991 34.4406 273.752 33.5576 278.134 33.5576C282.059 33.5576 285.788 34.2444 289.32 35.6181C292.918 36.9263 295.632 38.5616 297.464 40.524L293.834 55.0457C291.74 52.1675 289.222 49.9435 286.278 48.3736C283.335 46.7382 280.489 45.9206 277.742 45.9206C275.453 45.9206 273.752 46.4439 272.64 47.4905C271.528 48.4717 270.972 49.6491 270.972 51.0228C270.972 52.0694 271.364 53.0506 272.149 53.9663C272.934 54.8821 274.21 55.6671 275.976 56.3212L283.629 59.2648C285.657 59.9843 287.881 60.9982 290.301 62.3065C292.722 63.5493 294.782 65.3155 296.483 67.6049C298.249 69.8944 299.132 73.0342 299.132 77.0244C299.132 82.6499 297.072 87.2288 292.95 90.761C288.895 94.2279 283.629 95.9614 277.153 95.9614Z"
              fill="url(#paint4_linear_123_56294)"
            />
            <path
              d="M223.176 95.5681C217.812 95.5681 212.906 94.1944 208.458 91.4471C204.01 88.6343 200.445 84.9058 197.763 80.2615C195.146 75.5518 193.838 70.3841 193.838 64.7586C193.838 59.1331 195.146 53.9982 197.763 49.3539C200.445 44.6442 204.01 40.9157 208.458 38.1683C212.906 35.3556 217.812 33.9492 223.176 33.9492C227.035 33.9492 230.6 34.6361 233.871 36.0097C237.141 37.3834 239.921 39.3131 242.211 41.7988V35.3229H255.653V94.1944H242.211V87.7185C239.921 90.1388 237.141 92.0685 233.871 93.5076C230.6 94.8812 227.035 95.5681 223.176 95.5681ZM225.04 81.9295C228.18 81.9295 230.992 81.1446 233.478 79.5746C236.029 78.0047 238.057 75.9442 239.561 73.3931C241.066 70.7766 241.818 67.8985 241.818 64.7586C241.818 61.6188 241.066 58.7734 239.561 56.2223C238.057 53.6058 236.029 51.5126 233.478 49.9426C230.992 48.3727 228.212 47.5878 225.138 47.5878C221.998 47.5878 219.153 48.3727 216.602 49.9426C214.116 51.5126 212.121 53.6058 210.616 56.2223C209.112 58.7734 208.36 61.6188 208.36 64.7586C208.36 67.8985 209.112 70.7766 210.616 73.3931C212.121 75.9442 214.116 78.0047 216.602 79.5746C219.153 81.1446 221.965 81.9295 225.04 81.9295Z"
              fill="white"
            />
            <path
              d="M223.176 95.5681C217.812 95.5681 212.906 94.1944 208.458 91.4471C204.01 88.6343 200.445 84.9058 197.763 80.2615C195.146 75.5518 193.838 70.3841 193.838 64.7586C193.838 59.1331 195.146 53.9982 197.763 49.3539C200.445 44.6442 204.01 40.9157 208.458 38.1683C212.906 35.3556 217.812 33.9492 223.176 33.9492C227.035 33.9492 230.6 34.6361 233.871 36.0097C237.141 37.3834 239.921 39.3131 242.211 41.7988V35.3229H255.653V94.1944H242.211V87.7185C239.921 90.1388 237.141 92.0685 233.871 93.5076C230.6 94.8812 227.035 95.5681 223.176 95.5681ZM225.04 81.9295C228.18 81.9295 230.992 81.1446 233.478 79.5746C236.029 78.0047 238.057 75.9442 239.561 73.3931C241.066 70.7766 241.818 67.8985 241.818 64.7586C241.818 61.6188 241.066 58.7734 239.561 56.2223C238.057 53.6058 236.029 51.5126 233.478 49.9426C230.992 48.3727 228.212 47.5878 225.138 47.5878C221.998 47.5878 219.153 48.3727 216.602 49.9426C214.116 51.5126 212.121 53.6058 210.616 56.2223C209.112 58.7734 208.36 61.6188 208.36 64.7586C208.36 67.8985 209.112 70.7766 210.616 73.3931C212.121 75.9442 214.116 78.0047 216.602 79.5746C219.153 81.1446 221.965 81.9295 225.04 81.9295Z"
              fill="url(#paint5_linear_123_56294)"
            />
            <path
              d="M148.038 20.3111V5.88757H208.578V20.3111H186.501V94.1949H170.115V20.3111H148.038Z"
              fill="white"
            />
            <path
              d="M148.038 20.3111V5.88757H208.578V20.3111H186.501V94.1949H170.115V20.3111H148.038Z"
              fill="url(#paint6_linear_123_56294)"
            />
            <path
              d="M103.846 94.9794C98.4826 94.9794 93.5766 93.6384 89.1286 90.9565C84.6805 88.2092 81.1155 84.5461 78.4336 79.9672C75.817 75.3883 74.5088 70.3188 74.5088 64.7587C74.5088 59.1986 75.817 54.1291 78.4336 49.5502C81.1155 44.9713 84.6805 41.3409 89.1286 38.659C93.5766 35.9116 98.4826 34.538 103.846 34.538C107.706 34.538 111.336 35.2248 114.738 36.5985C118.139 37.9721 121.148 39.8691 123.765 42.2894V0H134.362V94.1944H124.55V86.443C121.933 89.0595 118.826 91.1527 115.228 92.7226C111.696 94.2271 107.902 94.9794 103.846 94.9794ZM105.22 85.3637C108.949 85.3637 112.317 84.4479 115.326 82.6164C118.401 80.7194 120.821 78.2337 122.587 75.1593C124.419 72.0195 125.335 68.5526 125.335 64.7587C125.335 60.9647 124.419 57.5306 122.587 54.4562C120.821 51.3163 118.401 48.8307 115.326 46.9991C112.317 45.1021 108.949 44.1536 105.22 44.1536C101.492 44.1536 98.0901 45.1021 95.0157 46.9991C92.0067 48.8307 89.5864 51.3163 87.7549 54.4562C85.9887 57.5306 85.1057 60.9647 85.1057 64.7587C85.1057 68.5526 85.9887 72.0195 87.7549 75.1593C89.5864 78.2337 92.0067 80.7194 95.0157 82.6164C98.0901 84.4479 101.492 85.3637 105.22 85.3637Z"
              fill="white"
            />
            <path
              d="M103.846 94.9794C98.4826 94.9794 93.5766 93.6384 89.1286 90.9565C84.6805 88.2092 81.1155 84.5461 78.4336 79.9672C75.817 75.3883 74.5088 70.3188 74.5088 64.7587C74.5088 59.1986 75.817 54.1291 78.4336 49.5502C81.1155 44.9713 84.6805 41.3409 89.1286 38.659C93.5766 35.9116 98.4826 34.538 103.846 34.538C107.706 34.538 111.336 35.2248 114.738 36.5985C118.139 37.9721 121.148 39.8691 123.765 42.2894V0H134.362V94.1944H124.55V86.443C121.933 89.0595 118.826 91.1527 115.228 92.7226C111.696 94.2271 107.902 94.9794 103.846 94.9794ZM105.22 85.3637C108.949 85.3637 112.317 84.4479 115.326 82.6164C118.401 80.7194 120.821 78.2337 122.587 75.1593C124.419 72.0195 125.335 68.5526 125.335 64.7587C125.335 60.9647 124.419 57.5306 122.587 54.4562C120.821 51.3163 118.401 48.8307 115.326 46.9991C112.317 45.1021 108.949 44.1536 105.22 44.1536C101.492 44.1536 98.0901 45.1021 95.0157 46.9991C92.0067 48.8307 89.5864 51.3163 87.7549 54.4562C85.9887 57.5306 85.1057 60.9647 85.1057 64.7587C85.1057 68.5526 85.9887 72.0195 87.7549 75.1593C89.5864 78.2337 92.0067 80.7194 95.0157 82.6164C98.0901 84.4479 101.492 85.3637 105.22 85.3637Z"
              fill="url(#paint7_linear_123_56294)"
            />
            <path
              d="M29.3376 94.9796C23.9738 94.9796 19.0678 93.6386 14.6198 90.9567C10.1717 88.2094 6.60669 84.5462 3.92477 79.9673C1.30826 75.3884 0 70.3189 0 64.7589C0 59.1988 1.30826 54.1293 3.92477 49.5504C6.60669 44.9715 10.1717 41.3411 14.6198 38.6591C19.0678 35.9118 23.9738 34.5381 29.3376 34.5381C33.3932 34.5381 37.1872 35.2904 40.7195 36.7949C44.3172 38.2994 47.4243 40.3926 50.0408 43.0745V35.3231H59.8527V94.1946H50.0408V86.4432C47.4243 89.0597 44.3172 91.1529 40.7195 92.7228C37.1872 94.2273 33.3932 94.9796 29.3376 94.9796ZM30.7113 85.3639C34.4398 85.3639 37.8086 84.4481 40.8176 82.6166C43.892 80.7196 46.3123 78.2339 48.0784 75.1595C49.91 72.0197 50.8257 68.5528 50.8257 64.7589C50.8257 60.9649 49.91 57.5307 48.0784 54.4563C46.3123 51.3165 43.892 48.8308 40.8176 46.9993C37.8086 45.1023 34.4398 44.1538 30.7113 44.1538C26.9828 44.1538 23.5813 45.1023 20.5069 46.9993C17.4979 48.8308 15.0777 51.3165 13.2461 54.4563C11.4799 57.5307 10.5969 60.9649 10.5969 64.7589C10.5969 68.5528 11.4799 72.0197 13.2461 75.1595C15.0777 78.2339 17.4979 80.7196 20.5069 82.6166C23.5813 84.4481 26.9828 85.3639 30.7113 85.3639Z"
              fill="white"
            />
            <path
              d="M29.3376 94.9796C23.9738 94.9796 19.0678 93.6386 14.6198 90.9567C10.1717 88.2094 6.60669 84.5462 3.92477 79.9673C1.30826 75.3884 0 70.3189 0 64.7589C0 59.1988 1.30826 54.1293 3.92477 49.5504C6.60669 44.9715 10.1717 41.3411 14.6198 38.6591C19.0678 35.9118 23.9738 34.5381 29.3376 34.5381C33.3932 34.5381 37.1872 35.2904 40.7195 36.7949C44.3172 38.2994 47.4243 40.3926 50.0408 43.0745V35.3231H59.8527V94.1946H50.0408V86.4432C47.4243 89.0597 44.3172 91.1529 40.7195 92.7228C37.1872 94.2273 33.3932 94.9796 29.3376 94.9796ZM30.7113 85.3639C34.4398 85.3639 37.8086 84.4481 40.8176 82.6166C43.892 80.7196 46.3123 78.2339 48.0784 75.1595C49.91 72.0197 50.8257 68.5528 50.8257 64.7589C50.8257 60.9649 49.91 57.5307 48.0784 54.4563C46.3123 51.3165 43.892 48.8308 40.8176 46.9993C37.8086 45.1023 34.4398 44.1538 30.7113 44.1538C26.9828 44.1538 23.5813 45.1023 20.5069 46.9993C17.4979 48.8308 15.0777 51.3165 13.2461 54.4563C11.4799 57.5307 10.5969 60.9649 10.5969 64.7589C10.5969 68.5528 11.4799 72.0197 13.2461 75.1595C15.0777 78.2339 17.4979 80.7196 20.5069 82.6166C23.5813 84.4481 26.9828 85.3639 30.7113 85.3639Z"
              fill="url(#paint8_linear_123_56294)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_123_56294"
              x1="460.936"
              y1="10.5973"
              x2="460.936"
              y2="94.1949"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E8F8" />
              <stop offset="1" stop-color="#858992" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_123_56294"
              x1="406.932"
              y1="34.5381"
              x2="406.932"
              y2="94.9796"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E8F8" />
              <stop offset="1" stop-color="#858992" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_123_56294"
              x1="368.458"
              y1="80.0654"
              x2="368.458"
              y2="95.372"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E8F8" />
              <stop offset="1" stop-color="#858992" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_123_56294"
              x1="327.717"
              y1="0"
              x2="327.717"
              y2="94.1944"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E8F8" />
              <stop offset="1" stop-color="#858992" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_123_56294"
              x1="277.693"
              y1="33.5576"
              x2="277.693"
              y2="95.9614"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E8F8" />
              <stop offset="1" stop-color="#858992" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_123_56294"
              x1="224.745"
              y1="33.9492"
              x2="224.745"
              y2="95.5681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E8F8" />
              <stop offset="1" stop-color="#858992" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_123_56294"
              x1="178.308"
              y1="5.88757"
              x2="178.308"
              y2="94.1949"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E8F8" />
              <stop offset="1" stop-color="#858992" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_123_56294"
              x1="104.435"
              y1="0"
              x2="104.435"
              y2="94.9794"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E8F8" />
              <stop offset="1" stop-color="#858992" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_123_56294"
              x1="29.9264"
              y1="34.5381"
              x2="29.9264"
              y2="94.9796"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E2E8F8" />
              <stop offset="1" stop-color="#858992" />
            </linearGradient>
          </defs>
        </svg>
        <div className="blur">
          <svg
            width="637"
            height="427"
            viewBox="0 0 637 627"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              style={{ mixBlendMode: "plus-lighter" }}
              filter="url(#filter0_f_444_19378)"
            >
              <path
                d="M305.5 48H352L589 579H48L305.5 48Z"
                fill="rgba(38, 48, 72, 1)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_444_19378"
                x="0.799999"
                y="0.799999"
                width="635.4"
                height="625.4"
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
                  stdDeviation="23.6"
                  result="effect1_foregroundBlur_444_19378"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="center-heading">
        <div className="container"></div>
        <h1>Are you ready to boost</h1>
        <h2>your Digital Presence?</h2>
      </div>
      <div className="contact-btns">
        <div className="try-btn">
          <button>Start Free Trial</button>
        </div>
        <div className="schedule-btn">
          <button>Schedule a Call</button>
        </div>
      </div>
      <div className="footer">
        <div className="footer-left">
          <div className="heading">
            <h1>
              ad<span>Task</span>.ai
            </h1>
          </div>
          <div className="contact-links">
            <div className="email">
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 2.5C20 1.4 19.1 0.5 18 0.5H2C0.9 0.5 0 1.4 0 2.5V14.5C0 15.6 0.9 16.5 2 16.5H18C19.1 16.5 20 15.6 20 14.5V2.5ZM18 2.5L10 7.5L2 2.5H18ZM18 14.5H2V4.5L10 9.5L18 4.5V14.5Z"
                  fill="#5C73AE"
                />
              </svg>
              <a href="mailto:contact@adtask.ai">
                <h3>contact@adtask.ai</h3>
              </a>
            </div>
            <div className="location">
              <svg
                width="14"
                height="21"
                viewBox="0 0 14 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 5C7.66304 5 8.29893 5.26339 8.76777 5.73223C9.23661 6.20107 9.5 6.83696 9.5 7.5C9.5 7.8283 9.43534 8.15339 9.3097 8.45671C9.18406 8.76002 8.99991 9.03562 8.76777 9.26777C8.53562 9.49991 8.26002 9.68406 7.95671 9.8097C7.65339 9.93534 7.3283 10 7 10C6.33696 10 5.70107 9.73661 5.23223 9.26777C4.76339 8.79893 4.5 8.16304 4.5 7.5C4.5 6.83696 4.76339 6.20107 5.23223 5.73223C5.70107 5.26339 6.33696 5 7 5ZM7 0.5C8.85652 0.5 10.637 1.2375 11.9497 2.55025C13.2625 3.86301 14 5.64348 14 7.5C14 12.75 7 20.5 7 20.5C7 20.5 0 12.75 0 7.5C0 5.64348 0.737498 3.86301 2.05025 2.55025C3.36301 1.2375 5.14348 0.5 7 0.5ZM7 2.5C5.67392 2.5 4.40215 3.02678 3.46447 3.96447C2.52678 4.90215 2 6.17392 2 7.5C2 8.5 2 10.5 7 17.21C12 10.5 12 8.5 12 7.5C12 6.17392 11.4732 4.90215 10.5355 3.96447C9.59785 3.02678 8.32608 2.5 7 2.5Z"
                  fill="#5C73AE"
                />
              </svg>
              <h3>San Francisco Bay Area</h3>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-right-l">
            <div className="footer-heading">
              <h1>Utilities</h1>
            </div>
            <div className="footer-list">
              <div className="li1">Home</div>
              <div className="li2">Products</div>
              <div className="li3">Tools</div>
              <div className="li4">Contact Us</div>
            </div>
          </div>
          <div className="footer-right-r">
            <div className="footer-heading">
              <h1>Socials</h1>
            </div>
            <div className="footer-list">
              <div className="li1">X</div>
              <div className="li2">LinkedIn</div>
              <div className="li3">Instagram</div>
              <div className="li4">Facebook</div>
            </div>
          </div>
        </div>
        <div className="rights">
          <p>All rights reserved © 2025 adTask</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
