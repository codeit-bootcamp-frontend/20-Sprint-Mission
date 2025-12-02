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

  const handleFileSelect = (file) => {
    if (previewUrl !== null) {
      setLocalError("*이미지 등록은 최대 1개까지 가능합니다.");
      return;
    }

    if (!file) {
      setPreviewUrl(null);
      return;
    }

    if (!file.type.startsWith("image/")) {
      setLocalError("이미지 파일만 등록할 수 있습니다.");
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
    setLocalError("");

    if (onChangeFile) {
      onChangeFile(file);
    }
  };

  const handleChange = (event) => {
    const file = event.target.files?.[0];
    handleFileSelect(file);
  };

  const handleDeleteImg = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setLocalError("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files?.[0];
    if (!file) return;

    if (inputRef.current) {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      inputRef.current.files = dataTransfer.files;
    }

    handleFileSelect(file);
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
        <S.ImgInputLabel
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          htmlFor={id}
        >
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
