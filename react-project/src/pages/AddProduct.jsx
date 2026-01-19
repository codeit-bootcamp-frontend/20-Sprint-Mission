import { useState } from "react";
import { Header } from "../components/Header";
import { SelectImage } from "../components/addItem/SelectImage";
import { Section } from "../components/common/Section";
import { Input } from "../components/common/Input";
import { TextArea } from "../components/common/TextArea";
import { HashTag } from "../components/addItem/HashTag";
import { useEffect } from "react";

export function AddProduct() {
  const [image, setImage] = useState(null);
  const [canRegister, setCanRegister] = useState(false);
  const [tags, setTags] = useState([]);
  const [productName, setProductName] = useState("");
  const [productIntro, setProductIntro] = useState("");
  const [productPrice, setProductPrice] = useState("");

  // tag 삭제 버튼 처리
  function onDeleteTag(tag) {
    setTags(tags.filter((it) => it !== tag));
  }

  // tag input enter key 처리
  function onTagKeydown(e) {
    if (e.key != "Enter") return;
    const newTag = e.target.value;
    if (tags.find((it) => it == newTag)) {
      alert("이미 추가된 태그입니다.");
      return;
    }
    setTags([...tags, newTag]);
    e.target.value = "";
  }

  // 등록 버튼 enable check
  function checkCanRegister() {
    const hasImage = image !== null;
    const hasProductName = productName.length > 0;
    const hasProductIntro = productIntro.length > 0;
    const hasProductPrice = productPrice.length > 0;
    const hasTags = tags.length > 0;
    setCanRegister(
      hasImage &&
        hasProductName &&
        hasProductIntro &&
        hasProductPrice &&
        hasTags
    );
  }

  useEffect(() => {
    checkCanRegister();
  }, [image, tags, productName, productIntro, productPrice]);

  return (
    <div className="lg:w-[1200px] lg:mx-auto pb-[30px]">
      <Header />
      <div className="flex flex-col w-full px-[15px] py-[24px] md:px-[24px] md:py-[16px] lg:py-[24px] flex justify-center">
        {/* 등록 버튼 */}
        <div className="flex items-center font-bold text-[20px] text-[#1F2937] mb-[24px] justify-between">
          <div>상품 등록하기</div>
          <button
            disabled={!canRegister}
            className="px-[23px] leading-[42px] bg-[#3692FF] cursor-pointer disabled:pointer-events-none disabled:bg-[#9CA3AF] rounded-[8px] text-[16px] font-semibold text-[#FFFFFF]"
          >
            등록
          </button>
        </div>

        {/* 이미지 선택 */}
        <div className="w-full lg:w-[1200px]">
          <SelectImage image={image} onImage={setImage} />
        </div>

        {/* 상품명 */}
        <Section title={"상품명"} className="mt-[24px]">
          <Input
            placeholder="상품명을 입력해주세요"
            onChange={(e) => setProductName(e.target.value)}
          />
        </Section>

        {/* 상품 소개 */}
        <Section title={"상품 소개"} className="mt-[24px]">
          <TextArea
            className="h-[282px]"
            placeholder="상품 소개를 입력해주세요"
            onChange={(e) => setProductIntro(e.target.value)}
          />
        </Section>

        {/* 판매가격 */}
        <Section title={"판매가격"} className="mt-[24px]">
          <Input
            placeholder="판매가격을 입력해주세요"
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </Section>

        {/* 태그 */}
        <Section title={"태그"} className="mt-[24px]">
          <Input placeholder="태그를 입력해주세요" onKeyDown={onTagKeydown} />
        </Section>

        {/* 태그 목록 */}
        <div className="flex flex-wrap mt-[14px] gap-[12px]">
          {tags.map((it) => (
            <HashTag key={it} tag={it} onDelete={onDeleteTag} />
          ))}
        </div>
      </div>
    </div>
  );
}
