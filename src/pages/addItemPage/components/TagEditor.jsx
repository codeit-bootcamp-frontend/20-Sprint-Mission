import XSvg from "@/assets/svg/XSvg";
import Input from "@/components/common/Input";
import { useState } from "react";
import * as S from "./TagEditor.styles";

const TagEditor = ({ tags = [], onAddTag, onRemoveTag }) => {
  const [tagInput, setTagInput] = useState("");

  const handleChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const trimmed = tagInput.trim();
      if (!trimmed) return;

      if (onAddTag) {
        onAddTag(trimmed);
      }

      setTagInput("");
    }
  };

  return (
    <div>
      <Input
        value={tagInput}
        label="태그"
        id="tag"
        placeholder="태그을 입력해주세요"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <S.TagWrapper>
        {tags.map((t) => (
          <S.Tag key={t}>
            #{t}
            <XSvg onClick={() => onRemoveTag(t)} />
          </S.Tag>
        ))}
      </S.TagWrapper>
    </div>
  );
};

export default TagEditor;
