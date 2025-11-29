import PlusSvg from "@/assets/svg/PlusSvg";
import XSvg from "@/assets/svg/XSvg";
import { useEffect, useRef, useState } from "react";
import * as S from "./ImagePreviewInput.styles";

const ImagePreviewInput = ({
  id,
  label,
  defaultPreviewUrl = null,
  onChangeFile,
}) => {
  const [previewUrl, setPreviewUrl] = useState(defaultPreviewUrl);
  const [localError, setLocalError] = useState("");
  const inputRef = useRef(null);

  const handleChange = (event) => {
    const file = event.target.files?.[0];

    if (previewUrl !== null) {
      setLocalError("*이미지 등록은 최대 1개까지 가능합니다.");
      return;
    }

    if (!file) {
      setPreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
    setLocalError("");

    if (onChangeFile) {
      onChangeFile(file);
    }
  };

  const handleDeleteImg = () => {
    URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setLocalError("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <S.ImgPreviewContainer>
      {label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.ImgContainer>
        <S.ImgInputLabel htmlFor={id}>
          <PlusSvg />
          이미지 등록
        </S.ImgInputLabel>
        <S.ImgInput
          ref={inputRef}
          id={id}
          type="file"
          accept="image/*"
          onChange={handleChange}
          aria-invalid={localError ? true : false}
        />
        {previewUrl && (
          <S.ItemImgContainer>
            <S.ItemImg src={previewUrl} alt="이미지 미리보기" />
            <S.SvgWrapper onClick={handleDeleteImg}>
              <XSvg />
            </S.SvgWrapper>
          </S.ItemImgContainer>
        )}
      </S.ImgContainer>
      {localError && <S.ErrorText>{localError}</S.ErrorText>}
    </S.ImgPreviewContainer>
  );
};

export default ImagePreviewInput;
