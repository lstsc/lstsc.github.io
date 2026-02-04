import type { ReactNode } from "react";

interface Props {
  fontSize?: string;
  color?: string;
  children: ReactNode;
}

const Text = ({ fontSize, color, children }: Props) => {
  const defaultColor = color ? color : "white";
  const defaultFontSize = fontSize ? fontSize : "1rem"

  return (
    <p
      style={{
        color: defaultColor,
        fontSize: defaultFontSize,
        padding: "5px 0px"
      }}
    >
      {children}
    </p>
  )
}

export default Text;