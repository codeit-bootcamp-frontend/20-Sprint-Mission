import profile from "../assets/images/profile.svg";
import panda from "../assets/images/panda.svg";
import logo from "../assets/images/logo.svg";
import { NavLink, useLocation } from "react-router-dom";

export function Header() {
  const { pathname } = useLocation();

  return (
    <div className="w-full border-b border-b-[#DFDFDF]">
      <div className="flex w-full lg:max-w-[1520px] items-center lg:mx-auto my-[10px] px-[16px] md:px-[24px]">
        <img src={panda} className="mr-[4.75px] max-sm:hidden" />
        <img src={logo} className="w-[81px] md:w-[103px]" />
        <div className="flex flex-1 ml-1 md:ml-[20px] lg:ml-[32px] font-bold md:text-lg text-base leading-[26px] text-[#4B5563]">
          <NavLink to="/board">
            {({ isActive }) => (
              <span
                className={`px-[15px] max-sm:px-[4px] ${
                  isActive ? "text-[#3692FF]" : ""
                }`}
              >
                자유게시판
              </span>
            )}
          </NavLink>

          <NavLink to="/items">
            {({ isActive }) => (
              <span
                className={`px-[15px] max-sm:px-[4px] ${
                  isActive || pathname == "/additem" ? "text-[#3692FF]" : ""
                }`}
              >
                중고마켓
              </span>
            )}
          </NavLink>
        </div>
        <img src={profile} />
      </div>
    </div>
  );
}
