import * as S from "./HeroSection.styles";

const HeroSection = ({ children, image, imageAlt, variant }) => {
  return (
    <S.Section $variant={variant}>
      {children}
      <div className="imgWraper">
        <img src={image} alt={imageAlt} />
      </div>
    </S.Section>
  );
};

export default HeroSection;
