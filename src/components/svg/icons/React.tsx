import React from 'react';

export const ReactSVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.8672 26.7891C27.3266 26.7891 29.3203 24.7953 29.3203 22.3359C29.3203 19.8765 27.3266 17.8828 24.8672 17.8828C22.4078 17.8828 20.4141 19.8765 20.4141 22.3359C20.4141 24.7953 22.4078 26.7891 24.8672 26.7891Z"
        fill="#61DAFB"
      />
      <path
        d="M41.7812 14.9922C40.9219 14.6797 40.0234 14.3672 39.0859 14.0938C39.3203 13.1563 39.5156 12.2188 39.6719 11.3203C40.4922 6.16406 39.5938 2.53125 37.0938 1.125C36.3516 0.695312 35.5312 0.5 34.5938 0.5C31.8594 0.5 28.3828 2.53125 24.8672 5.92969C21.3516 2.53125 17.875 0.5 15.1406 0.5C14.2031 0.5 13.3828 0.695312 12.6406 1.125C10.1406 2.57031 9.24219 6.20312 10.0625 11.3203C10.2188 12.2188 10.4141 13.1563 10.6484 14.0938C9.71094 14.3672 8.8125 14.6406 7.95313 14.9922C3.07031 16.8672 0.414062 19.4453 0.414062 22.3359C0.414062 25.2266 3.10938 27.8047 7.95313 29.6797C8.8125 29.9922 9.71094 30.3047 10.6484 30.5781C10.4141 31.5156 10.2188 32.4531 10.0625 33.3516C9.24219 38.5078 10.1406 42.1406 12.6406 43.5469C13.3828 43.9766 14.2031 44.1719 15.1406 44.1719C17.9141 44.1719 21.3906 42.1406 24.8672 38.7422C28.3828 42.1406 31.8594 44.1719 34.5938 44.1719C35.5312 44.1719 36.3516 43.9766 37.0938 43.5469C39.5938 42.1016 40.4922 38.4688 39.6719 33.3516C39.5156 32.4531 39.3203 31.5156 39.0859 30.5781C40.0234 30.3047 40.9219 30.0313 41.7812 29.6797C46.6641 27.8047 49.3203 25.2266 49.3203 22.3359C49.3203 19.4453 46.6641 16.8672 41.7812 14.9922ZM36 3.07812C37.6016 4.01562 38.1484 6.90625 37.4844 11.0078C37.3672 11.8281 37.1719 12.6875 36.9375 13.5859C34.9062 13.1172 32.7578 12.8047 30.4922 12.6094C29.1641 10.7344 27.7969 9.05469 26.4297 7.53125C29.3203 4.67969 32.25 2.72656 34.6328 2.72656C35.1406 2.72656 35.6094 2.84375 36 3.07812ZM31.625 26.2422C30.9219 27.4922 30.1016 28.7422 29.2422 29.9922C27.7969 30.1094 26.3516 30.1484 24.8672 30.1484C23.3438 30.1484 21.8984 30.1094 20.4922 29.9922C19.6328 28.7422 18.8516 27.4922 18.1484 26.2422C17.4062 24.9531 16.7031 23.625 16.0781 22.3359C16.7031 21.0469 17.4062 19.7188 18.1484 18.4297C18.8516 17.1797 19.6719 15.9297 20.5312 14.6797C21.9766 14.5625 23.4219 14.5234 24.9062 14.5234C26.4297 14.5234 27.875 14.5625 29.2812 14.6797C30.1406 15.9297 30.9219 17.1797 31.625 18.4297C32.3672 19.7188 33.0703 21.0469 33.6953 22.3359C33.0312 23.625 32.3672 24.9141 31.625 26.2422ZM34.8672 24.9531C35.4531 26.3203 35.9219 27.6484 36.3516 28.9766C35.0234 29.2891 33.6172 29.5234 32.1328 29.7188C32.6016 28.9766 33.1094 28.1953 33.5391 27.375C34.0078 26.5547 34.4375 25.7344 34.8672 24.9531ZM24.8672 35.5391C23.9297 34.5234 23.0312 33.4297 22.1719 32.2969C23.0703 32.3359 23.9688 32.375 24.8672 32.375C25.7656 32.375 26.6641 32.3359 27.5625 32.2969C26.7031 33.4297 25.8047 34.5234 24.8672 35.5391ZM17.6016 29.6797C16.1172 29.4844 14.7109 29.25 13.3828 28.9375C13.8125 27.6484 14.2812 26.2812 14.8672 24.9141C15.2969 25.6953 15.7266 26.5156 16.1953 27.2969C16.6641 28.1562 17.1328 28.8984 17.6016 29.6797ZM14.8672 19.7187C14.2812 18.3516 13.8125 17.0234 13.3828 15.6953C14.7109 15.3828 16.1172 15.1484 17.6016 14.9531C17.1328 15.6953 16.625 16.4766 16.1953 17.2969C15.7266 18.1172 15.2969 18.9375 14.8672 19.7187ZM24.8672 9.13281C25.8047 10.1484 26.7031 11.2422 27.5625 12.375C26.6641 12.3359 25.7656 12.2969 24.8672 12.2969C23.9688 12.2969 23.0703 12.3359 22.1719 12.375C23.0312 11.2422 23.9297 10.1484 24.8672 9.13281ZM33.5391 17.3359L32.1328 14.9922C33.6172 15.1875 35.0234 15.4219 36.3516 15.7344C35.9219 17.0234 35.4531 18.3906 34.8672 19.7578C34.4375 18.9375 34.0078 18.1172 33.5391 17.3359ZM12.25 11.0078C11.5859 6.90625 12.1328 4.01562 13.7344 3.07812C14.125 2.84375 14.5937 2.72656 15.1016 2.72656C17.4453 2.72656 20.375 4.64062 23.3047 7.53125C21.9375 9.01562 20.5703 10.7344 19.2422 12.6094C16.9766 12.8047 14.8281 13.1562 12.7969 13.5859C12.5625 12.6875 12.4062 11.8281 12.25 11.0078ZM2.60156 22.3359C2.60156 20.5 4.82813 18.5469 8.73438 17.1016C9.51562 16.7891 10.375 16.5156 11.2344 16.2813C11.8594 18.2344 12.6406 20.3047 13.5781 22.375C12.6406 24.4453 11.8203 26.4766 11.2344 28.4297C5.84375 26.8672 2.60156 24.5234 2.60156 22.3359ZM13.7344 41.5938C12.1328 40.6562 11.5859 37.7656 12.25 33.6641C12.3672 32.8438 12.5625 31.9844 12.7969 31.0859C14.8281 31.5547 16.9766 31.8672 19.2422 32.0625C20.5703 33.9375 21.9375 35.6172 23.3047 37.1406C20.4141 39.9922 17.4844 41.9453 15.1016 41.9453C14.5937 41.9453 14.125 41.8281 13.7344 41.5938ZM37.4844 33.6641C38.1484 37.7656 37.6016 40.6562 36 41.5938C35.6094 41.8281 35.1406 41.9453 34.6328 41.9453C32.2891 41.9453 29.3594 40.0312 26.4297 37.1406C27.7969 35.6562 29.1641 33.9375 30.4922 32.0625C32.7578 31.8672 34.9062 31.5156 36.9375 31.0859C37.1719 31.9844 37.3281 32.8438 37.4844 33.6641ZM41 27.5703C40.2188 27.8828 39.3594 28.1562 38.5 28.3906C37.875 26.4375 37.0938 24.3672 36.1562 22.2969C37.0938 20.2266 37.9141 18.1953 38.5 16.2422C43.8906 17.8047 47.1328 20.1484 47.1328 22.3359C47.1328 24.1719 44.8672 26.125 41 27.5703Z"
        fill="#61DAFB"
      />
    </svg>
  );
};
export default ReactSVG;