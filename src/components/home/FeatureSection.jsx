import * as S from "./FeatureSection.styles";

const FeatureSection = ({
  highlight,
  title,
  description,
  image,
  imageAlt,
  textFirst,
}) => {
  return (
    <S.Section $textFirst={textFirst}>
      <div className="imgWraper">
        <img src={image} alt={imageAlt} />
      </div>
      <S.TextWraper>
        <S.FeatureHighlight>{highlight}</S.FeatureHighlight>
        <S.FeatureSubTitle>{title}</S.FeatureSubTitle>
        <S.FeatureDescription>{description}</S.FeatureDescription>
      </S.TextWraper>
    </S.Section>
  );
};

export default FeatureSection;
