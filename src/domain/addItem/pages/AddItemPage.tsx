import Input from '@src/components/input/Input';
import { Header } from '@src/components/header';
import Button from '@src/components/button/Button';
import ItemTag from '../components/itemTags/ItemTag';
import UploadButton from '../components/uploadButton/UploadButton';
import UploadPreview from '../components/uploadButton/UploadPreview';
import { useAddItemPageController } from '../hooks/useAddItemPageController';

export default function AddItemPage() {
  const {
    name,
    price,
    description,
    tagInput,
    tags,
    previewSrc,
    showImageLimitWarning,
    fileInputRef,
    setName,
    setPrice,
    setDescription,
    setTagInput,
    handleTagSubmit,
    handleRemoveTag,
    handleUploadClick,
    handleFileChange,
    handleRemovePreview,
  } = useAddItemPageController();

  return (
    <>
      <Header />
      <main className="mx-auto flex w-full max-w-[1220px] flex-col gap-[16px] px-[24px] py-[24px]">
        <section className="flex items-center justify-between gap-[12px]">
          <h1 className="font-['Pretendard'] text-[20px] font-bold leading-[32px] text-gray-900">
            상품 등록하기
          </h1>
          <Button
            label="등록"
            onClick={() => {
              alert('다음 미션에서 구현됩니다.');
            }}
            className="h-[42px] w-[74px] px-0"
          />
        </section>
        <section className="flex flex-col gap-[12px]">
          <p className="font-['Pretendard'] text-[16px] font-semibold leading-[26px] text-gray-900">
            상품 이미지
          </p>
          <div className="flex gap-[12px]">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <UploadButton
              className="h-[168px] w-[168px] md:h-[282px] md:w-[282px]"
              onClick={handleUploadClick}
            />
            <UploadPreview
              src={previewSrc}
              onRemove={handleRemovePreview}
              className={!previewSrc ? 'hidden' : 'h-[168px] w-[168px] md:h-[282px] md:w-[282px]'}
            />
          </div>
          {showImageLimitWarning && (
            <p className="font-['Pretendard'] text-[16px] font-normal leading-[26px] text-[#F74747]">
              *이미지 등록은 최대 1개까지 가능합니다.
            </p>
          )}
        </section>
        <section className="flex flex-col gap-[8px]">
          <p className="font-['Pretendard'] text-[16px] font-semibold leading-[26px] text-gray-900">
            상품명
          </p>
          <Input
            placeholder="상품명을 입력해 주세요"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </section>

        <section className="flex flex-col gap-[8px]">
          <p className="font-['Pretendard'] text-[16px] font-semibold leading-[26px] text-gray-900">
            판매가격
          </p>
          <Input
            placeholder="판매 가격을 입력해 주세요"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </section>

        <section className="flex flex-col gap-[8px]">
          <p className="font-['Pretendard'] text-[16px] font-semibold leading-[26px] text-gray-900">
            상품 소개
          </p>
          <Input
            multiline
            size="lg"
            placeholder="상품 소개를 입력해 주세요"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </section>

        <section className="flex flex-col gap-[8px]">
          <p className="font-['Pretendard'] text-[16px] font-semibold leading-[26px] text-gray-900">
            태그
          </p>
          <Input
            taggable
            placeholder="태그를 입력해 주세요"
            value={tagInput}
            onChange={(event) => setTagInput(event.target.value)}
            onTagSubmit={handleTagSubmit}
          />
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-[8px]">
              {tags.map((tag) => (
                <ItemTag key={tag} label={tag} onRemove={() => handleRemoveTag(tag)} />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
