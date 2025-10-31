import { useCallback, useEffect, useRef, useState } from "react";

/**
 * 드롭다운/팝오버 열림 상태를 관리하고
 * - 바깥 클릭 시 닫기
 * - ESC 키로 닫기
 */
const usePopoverToggle = ({ closeOnEsc = true } = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const contentRef = useRef(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  // 바깥 클릭 닫기
  useEffect(() => {
    if (!isOpen) return;
    const onMouseDown = (e) => {
      const target = e.target;
      const inContent = contentRef.current?.contains(target);
      const inButton = buttonRef.current?.contains(target);
      if (!inContent && !inButton) close();
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [isOpen, close]);

  // ESC로 닫기
  useEffect(() => {
    if (!isOpen || !closeOnEsc) return;
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeOnEsc, close]);

  return {
    isOpen,
    open,
    close,
    toggle,
    buttonRef,
    contentRef,
  };
};

export default usePopoverToggle;
