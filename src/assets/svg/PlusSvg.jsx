const PlusSvg = ({ size = 48, color = "#9CA3AF" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M10 24H38"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M24 38V10"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PlusSvg;
