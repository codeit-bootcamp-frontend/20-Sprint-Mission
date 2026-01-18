import { Section } from "../common/Section";
import { useRef } from "react";
import plus from "../../assets/images/plus.svg";
import x from "../../assets/images/x.svg";
import { useState } from "react";
import { useEffect } from "react";

export function SelectImage({ image, onImage }) {
  const fileRef = useRef();
  const [showWarning, setShowWarning] = useState(false);
  const [file, setFile] = useState();

  function onChange(e) {
    if (!e.target.files || e.target.files.length == 0) setFile(null);
    else setFile(e.target.files[0]);
  }

  function onAddClick() {
    if (image) setShowWarning(true);
    else fileRef.current.click();
  }

  useEffect(() => {
    if (!file) onImage(null);
    else {
      const imageUrl = URL.createObjectURL(file);
      onImage(imageUrl);
      return () => {
        URL.revokeObjectURL(imageUrl);
      };
    }
  }, [file]);

  return (
    <Section title={"상품 이미지"}>
      <div className="flex gap-[10px] lg:gap-[24px]">
        {/* 등록 버튼 */}
        <button
          type="button"
          onClick={onAddClick}
          className="flex-1 md:flex-none flex flex-col cursor-pointer justify-center items-center md:w-[168px] aspect-square md:w-[282px] md:h-[282px] bg-[#F3F4F6] rounded-[12px]"
        >
          <img className="w-[48px] h-[48px]" src={plus} />
          <div className="font-normal text-[16px] leading-[26px] text-[#9CA3AF]">
            이미지 등록
          </div>
          <input
            ref={fileRef}
            type="file"
            className="hidden"
            accept="image/*"
            onChange={onChange}
          />
        </button>

        {/* 이미지 */}
        <div
          className={`relative flex-1 md:flex-none md:w-[168px] aspect-square md:w-[282px] md:h-[282px] bg-[#F3F4F6] rounded-[12px] overflow-hidden ${
            image ? "" : "opacity-0 pointer-events-none"
          }`}
        >
          <img src={image} className="w-full h-full object-cover" />
          <button
            type="button"
            className="absolute top-3 right-3 cursor-pointer"
            onClick={() => {
              fileRef.current.value = "";
              onImage(null);
              setShowWarning(false);
            }}
          >
            <img src={x} />
          </button>
        </div>
      </div>
      {showWarning && (
        <div className="text-[#F74747] text-[16px] leading-[26px] font-normal">
          *이미지 등록은 최대 1개까지 가능합니다.
        </div>
      )}
    </Section>
  );
}
