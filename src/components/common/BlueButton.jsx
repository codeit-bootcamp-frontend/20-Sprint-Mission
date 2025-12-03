import * as S from "./BlueButton.styles";

const BlueButton = ({
  children,
  disabled,
  type,
  onClick,
  fontSize = "md",
  size = "md",
  radius = "sm",
  className,
}) => {
  return (
    <S.BlueButton
      size={size}
      radius={radius}
      fontSize={fontSize}
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </S.BlueButton>
  );
};

export default BlueButton;
