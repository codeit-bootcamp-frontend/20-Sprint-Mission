export function BlueButton({ className = "", children, ...rest }) {
  return (
    <button
      type="button"
      className={`h-[42px] px-[23px] py-[8px] leading-[26px] text-[16px] font-semibold bg-[#3692FF] text-[#F3F4F6] rounded-[8px] flex items-center justify-center ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
