type ButtonProps = {
  backgroundColor: string;
  padding?: [number, number, number?, number?];
};

function Button({ backgroundColor, padding }: ButtonProps) {
  const paddingValue = padding?.map((value) => `${value}px`).join(" ");

  return (
    <button
      style={{
        background: backgroundColor,
        padding: paddingValue,
      }}
    ></button>
  );
}

export default Button;
