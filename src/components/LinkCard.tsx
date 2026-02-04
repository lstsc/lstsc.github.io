import type { ReactNode } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  
  children: ReactNode;
}

const LinkCard = ({ to, children }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: isHovered ? "#3ea2a6" : "#e9eded",
        color: isHovered ? "#fff" : "#3ea2a6",
        margin: "5px 0px",
        border: "none",
        borderRadius: "15px",
        padding: "10px",
        textDecoration: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={to}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          width: "100%",
          fontSize: "1rem",
          fontWeight: "800",
          color: isHovered ? "#e9eded" : "#3ea2a6",
          fontFamily: "RobotoCondensed Regular",
          textDecoration: "none"
        }}
      >
        {children}
      </Link>
    </button>
  )
}

export default LinkCard;