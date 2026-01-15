import { useEffect } from "react";
import { useState } from "react";

export function useDeviceType() {
  const [device, setDevice] = useState(getDeviceType());

  useEffect(() => {
    const onResize = () => {
      setDevice(getDeviceType());
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return device;
}

export function getDeviceType() {
  const width = window.innerWidth;

  if (width < 768) return "phone";
  if (width < 1024) return "tablet";
  return "desktop";
}
