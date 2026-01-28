import { Header } from '@src/components/header';
import ProductCard from '../components/productCard';
import SearchBar from '../components/searchBar/SearchBar';
import Button from '@src/components/button/Button';
import { Dropdown } from '@src/components/dropdown';
import dropdownMobileIcon from '@src/components/dropdown/assets/dropdown_mobile.svg';
import PageNumberButton from '@src/components/button/pageNumberButton/PageNumberButton';
import { useNavigate } from 'react-router-dom';
import { useItemsPageController } from '../hooks/useItemsPageController';
import { itemsOrderOptions } from '../utils/itemsOptions';

export default function ItemsPage() {
  const bestPriorityLimit = 4;
  const allPriorityLimit = 6;
  const {
    selectedOrder,
    searchInput,
    currentPage,
    likedIds,
    setCurrentPage,
    handleLikeToggle,
    handleSelectOrder,
    filteredItems,
    totalPages,
    pageNumbers,
    bestItemsQuery,
    itemsQuery,
    handleSearchInputChange,
    handleSearchInputKeyDown,
    handlePrevPage,
    handleNextPage,
  } = useItemsPageController();

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-[1220px] px-[24px]">
        <h2 className="font-['Pretendard'] text-[20px] font-bold leading-[32px] tracking-[0] align-middle text-secondary-900 mt-[24px]">
          베스트 상품
        </h2>
        <ul className="grid grid-cols-1 gap-[24px] mt-[16px] md:grid-cols-2 md:justify-items-center lg:grid-cols-4 lg:justify-items-stretch list-none p-0 m-0">
          {bestItemsQuery.isLoading && (
            <li className="list-none">
              <p className="text-gray-500" role="status" aria-live="polite">
                로딩 중...
              </p>
            </li>
          )}
          {bestItemsQuery.isError && (
            <li className="list-none">
              <p className="text-gray-500" role="alert">
                베스트 상품을 불러오지 못했습니다.
              </p>
            </li>
          )}
          {bestItemsQuery.data?.list.map((item, index) => (
            <li key={item.id} className="list-none">
              <ProductCard
                imageUrl={item.images?.[0] ?? ''}
                title={item.name}
                price={`${item.price.toLocaleString('ko-KR')}원`}
                likeCount={item.favoriteCount}
                isLiked={likedIds.has(item.id)}
                onLikeToggle={handleLikeToggle(item.id)}
                imagePriority={index < bestPriorityLimit}
                className="md:w-[343px] md:h-[434px] lg:w-[282px] lg:h-[378px]"
              />
            </li>
          ))}
        </ul>

        <section className="mt-[24px] flex flex-col gap-[12px] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-[12px]">
            <h2 className="font-['Pretendard'] text-[20px] font-bold leading-[32px] align-middle text-secondary-900">
              전체 상품
            </h2>
            <Button
              label="상품 등록하기"
              className="h-[42px] md:hidden"
              onClick={() => navigate('/additems')}
            />
          </div>
          <section
            className="flex w-full items-center gap-[12px] md:w-auto"
            role="search"
            aria-label="상품 검색"
          >
            <SearchBar
              containerClassName="w-full md:w-[325px]"
              value={searchInput}
              onChange={handleSearchInputChange}
              onKeyDown={handleSearchInputKeyDown}
            />
            <Button
              label="상품 등록하기"
              className="h-[42px] hidden md:inline-flex"
              onClick={() => navigate('/additems')}
            />
            <div className="hidden md:block">
              <Dropdown
                options={itemsOrderOptions}
                value={selectedOrder}
                placeholder="최신순"
                onSelect={handleSelectOrder}
              />
            </div>
            <div className="md:hidden">
              <Dropdown
                options={itemsOrderOptions}
                value={selectedOrder}
                placeholder="최신순"
                onSelect={handleSelectOrder}
                triggerVariant="icon"
                triggerIconSrc={dropdownMobileIcon}
                triggerAriaLabel="정렬 옵션"
                menuClassName="right-0"
              />
            </div>
          </section>
        </section>
        <ul className="grid grid-cols-2 gap-x-[24px] gap-y-[40px] mt-[24px] md:grid-cols-3 md:justify-items-center lg:grid-cols-5 lg:justify-items-stretch list-none p-0 m-0">
          {itemsQuery.isLoading && (
            <li className="list-none">
              <p className="text-gray-500" role="status" aria-live="polite">
                로딩 중...
              </p>
            </li>
          )}
          {itemsQuery.isError && (
            <li className="list-none">
              <p className="text-gray-500" role="alert">
                상품을 불러오지 못했습니다.
              </p>
            </li>
          )}
          {filteredItems.map((item, index) => (
            <li key={item.id} className="list-none">
              <ProductCard
                size="sm"
                imageUrl={item.images?.[0] ?? ''}
                title={item.name}
                price={`${item.price.toLocaleString('ko-KR')}원`}
                likeCount={item.favoriteCount}
                isLiked={likedIds.has(item.id)}
                onLikeToggle={handleLikeToggle(item.id)}
                imagePriority={index < allPriorityLimit}
                className="md:w-[221px] md:h-[317px] lg:w-full lg:h-auto"
              />
            </li>
          ))}
        </ul>
        <nav
          className="flex justify-center gap-[8px] mt-[40px] mb-[35px] md:mt-[40px] md:mb-[72px]"
          aria-label="페이지네이션"
        >
          <ul className="flex items-center gap-[8px] list-none p-0 m-0">
            <li>
              <PageNumberButton kind="prev" disabled={currentPage === 1} onClick={handlePrevPage} />
            </li>
            {pageNumbers.map((page) => (
              <li key={page}>
                <PageNumberButton
                  kind="page"
                  page={page}
                  isActive={page === currentPage}
                  onClick={() => setCurrentPage(page)}
                />
              </li>
            ))}
            <li>
              <PageNumberButton
                kind="next"
                disabled={currentPage === totalPages}
                onClick={handleNextPage}
              />
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
