import React from 'react';

export const JavaScriptSVG: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_42_683)">
        <path d="M0.414062 0.5H50.4141V50.5H0.414062V0.5Z" fill="#F7DF1E" />
        <path
          d="M13.561 42.2836L17.3872 39.968C18.1254 41.2768 18.7969 42.3842 20.4077 42.3842C21.9516 42.3842 22.9252 41.7803 22.9252 39.4311V23.4549H27.6239V39.4975C27.6239 44.3641 24.7711 46.5793 20.609 46.5793C16.8502 46.5793 14.6684 44.6326 13.5608 42.2832M30.176 41.7801L34.0018 39.5651C35.009 41.2098 36.318 42.418 38.6336 42.418C40.5807 42.418 41.8221 41.4446 41.8221 40.102C41.8221 38.491 40.5467 37.9203 38.3987 36.9809L37.2243 36.477C33.8342 35.0342 31.5856 33.2217 31.5856 29.3955C31.5856 25.8713 34.2706 23.1862 38.4661 23.1862C41.4532 23.1862 43.6012 24.2268 45.145 26.9453L41.4864 29.2949C40.6807 27.8518 39.8084 27.2813 38.4659 27.2813C37.0897 27.2813 36.217 28.1539 36.217 29.2949C36.217 30.7045 37.0897 31.2754 39.1034 32.1481L40.278 32.6514C44.2721 34.3633 46.5208 36.1084 46.5208 40.035C46.5208 44.2643 43.1981 46.5799 38.7342 46.5799C34.3711 46.5799 31.5518 44.499 30.1758 41.7803"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_42_683">
          <rect
            width="50"
            height="50"
            fill="white"
            transform="translate(0.414062 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default JavaScriptSVG;
