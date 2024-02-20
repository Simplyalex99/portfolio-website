import React from 'react';

export const HtmlSVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_42_669)">
        <path
          d="M38.2812 0H11.7188C5.24666 0 0 5.24666 0 11.7188V38.2812C0 44.7533 5.24666 50 11.7188 50H38.2812C44.7533 50 50 44.7533 50 38.2812V11.7188C50 5.24666 44.7533 0 38.2812 0Z"
          fill="#E14E1D"
        />
        <path
          d="M9.375 7.42188L11.0566 26.2877H32.6797L31.9541 34.3795L24.992 36.2619L18.043 34.3822L17.5783 29.1865H11.3164L12.2119 39.2023L24.9906 42.7516L37.7855 39.2023L39.501 20.0498H16.7625L16.1916 13.6611H40.0662L40.625 7.42188H9.375Z"
          fill="white"
        />
        <path
          d="M25 7.42188H9.375L11.0566 26.2877H25V20.0498H16.7625L16.1916 13.6611H25V7.42188ZM25 36.2592L24.992 36.2619L18.043 34.3822L17.5783 29.1865H11.3164L12.2119 39.2023L24.9906 42.7516L25.0002 42.7488V36.2592H25Z"
          fill="#EBEBEB"
        />
      </g>
      <defs>
        <clipPath id="clip0_42_669">
          <rect width="50" height="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default HtmlSVG;
