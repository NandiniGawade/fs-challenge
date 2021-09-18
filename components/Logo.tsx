import { FC, SVGProps } from 'react';

const Logo: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      role="img"
      aria-label="logo"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.10001 8.1C-1.35999 13.56 -1.35999 22.4 4.06001 27.86C7.00001 21.06 12.24 15.38 18.78 12C13.24 16.68 9.36001 23.22 8.00001 30.64C13.2 33.1 19.6 32.2 23.9 27.9C30.86 20.94 32 0 32 0C32 0 11.06 1.14 4.10001 8.1Z"
        fill="white"
      />
    </svg>
  );
};

export { Logo };
