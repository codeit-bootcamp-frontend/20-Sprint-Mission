import * as S from "./BlueButton.styles";

const BlueButton = ({
  children,
  disabled,
  type,
  onClick,
  fontSize = "md",
  size = "md",
  radius = "sm",
}) => {
  return (
    <S.BlueButton
      size={size}
      radius={radius}
      fontSize={fontSize}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </S.BlueButton>
  );
};

export default BlueButton;
