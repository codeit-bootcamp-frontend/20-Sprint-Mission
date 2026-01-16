import heart from "../assets/images/heart.svg";

export function Product({ item, className }) {
  const { name, images, price, favoriteCount } = item;
  return (
    <div className={`flex flex-col gap-[6px] ${className}`}>
      <img
        src={images[0]}
        className="w-full aspect-square object-cover rounded-[16px]"
      />
      <div className="mt-1 lg:mt-[10px] font-medium text-sm leading-[24px]">
        {name}
      </div>
      <div className="font-bold text-4 leading-[26px]">
        {price.toLocaleString()}원
      </div>
      <div className="flex gap-1">
        <img src={heart} />
        <div className="font-medium text-[12px] leading-[18px] text-[#4B5563]">
          {favoriteCount}
        </div>
      </div>
    </div>
  );
}
