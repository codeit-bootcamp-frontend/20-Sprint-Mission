import { useEffect, useState } from "react";

const useBreakpoint = () => {
  const [bp, setBp] = useState("desktop");
  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setBp(w <= 768 ? "mobile" : w <= 1200 ? "tablet" : "desktop");
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return bp;
};

export default useBreakpoint;
