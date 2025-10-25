import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";

const Navbar = () => {
  const location = useLocation();
  const isItemsPage = location.pathname === "/items";
  const [isMobile, setIsMobile] = useState(false);

  // 화면 크기 감지 (matchMedia 사용)
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 480px)");

    const handleMediaChange = () => {
      if (mobile.matches) {
        setIsMobile(true); // 모바일
      } else {
        setIsMobile(false); // 데스크톱
      }
    };

    // 초기 실행
    handleMediaChange();

    // 미디어 쿼리 리스너 등록
    mobile.addEventListener("change", handleMediaChange);

    // 클린업
    return () => {
      mobile.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <>
      <div className={styles["navbar-container"]}>
        <div className={styles["navbar-left"]}>
          <div className={styles["logo-container"]}>
            {!isMobile && <img src={logo} alt="logo" />}
            <p>판다마켓</p>
          </div>
          <div className={styles["nav-container"]}>
            <ul>
              <li>
                <Link to="#">자유게시판</Link>
              </li>
              <li>
                <Link
                  to="/items"
                  style={{ color: isItemsPage ? "#3692FF" : "" }}
                >
                  중고마켓
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["profile-container"]}>
          <img src={profile} alt="profile" />
        </div>
      </div>
      <div className="main-container"></div>
    </>
  );
};
export default Navbar;
