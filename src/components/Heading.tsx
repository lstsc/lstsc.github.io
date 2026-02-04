import type { ReactNode } from "react";

interface Props {
  fontSize?: string;
  children: ReactNode;
}

const Heading = ({ fontSize, children }: Props) => {
  const defaultFontSize = fontSize ? fontSize : "1.5rem"

  return (
    <p
      style={{
        fontSize: defaultFontSize,
        fontWeight: "700",
        margin: "10px 0px",
        padding: "5px 0px"
      }}
    >
      {children}
    </p>
  )
}

export default Heading;