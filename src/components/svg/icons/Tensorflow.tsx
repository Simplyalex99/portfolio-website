import React from 'react';

export const TensorflowSVG: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M61.5505 128L39.7105 115.32V40.55L6.81055 59.56L6.89055 31.24L61.5505 0V128ZM66.4605 0V128L88.3006 115.32V79.31L104.791 88.84L104.691 64.21L88.3006 54.85V40.55L121.191 59.56L121.111 31.24L66.4605 0Z"
        fill="#FF6F00"
      />
    </svg>
  );
};
export default TensorflowSVG;
