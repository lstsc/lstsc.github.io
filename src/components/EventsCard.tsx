import type { ReactNode } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  children: ReactNode;
}

const EventsCard = ({ to, children }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: isHovered ? "#dfa24c" : "#e9eded",
        color: isHovered ? "#fff" : "#dfa24c",
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
          color: isHovered ? "#fff" : "#dfa24c",
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

export default EventsCard;