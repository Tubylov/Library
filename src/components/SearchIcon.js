import React from 'react';

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M9.22.333a8.667 8.667 0 100 17.334 8.667 8.667 0 000-17.334zm0 1.367A7.3 7.3 0 111.927 9 7.333 7.333 0 019.22 1.7zm7.533 13.88l4.914 4.947a.667.667 0 01-.947.94l-4.913-4.947.946-.94z"
        clipRule="evenodd"
      ></path>
      <mask
        id="mask0_21_352"
        style={{ maskType: "alpha" }}
        width="22"
        height="22"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M9.22.333a8.667 8.667 0 100 17.334 8.667 8.667 0 000-17.334zm0 1.367A7.3 7.3 0 111.927 9 7.333 7.333 0 019.22 1.7zm7.533 13.88l4.914 4.947a.667.667 0 01-.947.94l-4.913-4.947.946-.94z"
          clipRule="evenodd"
        ></path>
      </mask>
      <g mask="url(#mask0_21_352)">
        <path fill="#0079B8" d="M-1 -1H23V23H-1z"></path>
      </g>
    </svg>
  );
}

export default SearchIcon;