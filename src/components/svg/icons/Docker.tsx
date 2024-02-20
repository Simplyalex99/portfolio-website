import React from 'react';

export const DockerSVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_42_686)">
        <path
          d="M38.6953 0.5H12.1328C5.66073 0.5 0.414062 5.74666 0.414062 12.2188V38.7812C0.414062 45.2533 5.66073 50.5 12.1328 50.5H38.6953C45.1674 50.5 50.4141 45.2533 50.4141 38.7812V12.2188C50.4141 5.74666 45.1674 0.5 38.6953 0.5Z"
          fill="#2396ED"
        />
        <path
          d="M27.9896 24.3521H32.0359V20.6912H27.9896V24.3521ZM23.1728 24.3521H27.2189V20.6912H23.1728V24.3521ZM18.4521 24.3521H22.4984V20.6912H18.4521V24.3521ZM13.7314 24.3521H17.6816V20.6912H13.7316L13.7314 24.3521ZM8.91465 24.3521H12.9609V20.6912H8.91465V24.3521ZM13.7316 19.9205H17.6814V16.2598H13.7316V19.9205ZM18.4523 19.9205H22.4984V16.2598H18.4521L18.4523 19.9205ZM23.1728 19.9205H27.2189V16.2598H23.1728V19.9205ZM23.1728 15.4889H27.2189V11.8281H23.1728V15.4891V15.4889ZM44.9453 22.7146C44.9453 22.7146 43.2111 21.0768 39.6467 21.6549C39.2613 18.8609 36.2748 17.2232 36.2748 17.2232C36.2748 17.2232 33.4811 20.5951 35.5041 24.3523C34.9262 24.6414 33.9627 25.0268 32.5176 25.0268H6.02461C5.54277 26.8572 5.54277 38.9957 18.8375 38.9957C28.375 38.9957 35.5041 34.5643 38.876 26.4717C43.8855 26.857 44.9453 22.7146 44.9453 22.7146Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_42_686">
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
export default DockerSVG;
