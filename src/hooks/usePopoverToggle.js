import { useCallback, useEffect, useRef, useState } from "react";

const usePopoverToggle = ({ closeOnEsc = true } = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const contentRef = useRef(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  const onMouseDown = useCallback(
    (e) => {
      if (!isOpen) return;

      const target = e.target;
      const inContent = contentRef.current?.contains(target);
      const inButton = buttonRef.current?.contains(target);

      if (!inContent && !inButton) close();
    },
    [isOpen, close]
  );

  const onKeydown = useCallback(
    (e) => {
      if (!isOpen || !closeOnEsc || e.key !== "Escape") return;
      close();
    },
    [isOpen, closeOnEsc, close]
  );

  useEffect(() => {
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeydown);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeydown);
    };
  }, [onMouseDown, onKeydown]);

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
