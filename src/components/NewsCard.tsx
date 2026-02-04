import type { ReactNode } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  children: ReactNode;
}

const NewsCard = ({ to, children }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: isHovered ? "#3ea670" : "#e9eded",
        color: isHovered ? "#fff" : "#3ea670",
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
          justifyContent: "flex-start",
          gap: "12px",
          width: "100%",
          fontSize: "1rem",
          fontWeight: 700,
          color: isHovered ? "#fff" : "#348b51",
          fontFamily: "RobotoCondensed Regular",
          textDecoration: "none"
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%'
        }}>
          <div style={{display: 'flex', alignItems: 'center' }}>
            {children}
          </div>
        </div>
      </Link>
    </button>
  )
}

export default NewsCard;