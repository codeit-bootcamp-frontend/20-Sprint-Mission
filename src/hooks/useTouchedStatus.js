import { useState } from "react";

const useTouchedStatus = () => {
  const [isTouched, setIsTouched] = useState(false); // 사용자가 필드를 조작했는지 여부
  const handleBlur = () => {
    setIsTouched(true);
  };

  return { handleBlur, isTouched };
};

export default useTouchedStatus;
